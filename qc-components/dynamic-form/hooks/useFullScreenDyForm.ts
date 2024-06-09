import { createApp, defineAsyncComponent, ref } from "vue";
import { FormConfig } from "../../types";

const FullScreenDyForm = defineAsyncComponent(() => import("../components/FullScreenDyForm.vue"));

type MousePosition = { x: number; y: number } | null;
let mousePosition: MousePosition = null;
// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e: MouseEvent) => {
	mousePosition = {
		x: e.pageX,
		y: e.pageY,
	};
	// 100ms 内发生过点击事件，则从点击位置动画展示
	// 否则直接 zoom 展示
	// 这样可以兼容非点击方式展开
	setTimeout(() => (mousePosition = null), 100);
};

// 只有点击事件支持从鼠标位置动画展开
if (
	typeof window !== "undefined" &&
	window.document &&
	window.document.documentElement
) {
	document.documentElement.addEventListener("click", getClickPosition, true);
}

export function useFullScreenDyForm(config: FormConfig) {
	let goClose = ref(false);
	const handleClose = () => {
		goClose.value = true;
		setTimeout(() => {
			app.unmount();
			document.body.removeChild(div);
		}, config.fadeTime || 300);
	};
	const div = document.createElement("div");
	document.body.appendChild(div);
	const schemaWithDefaultValues = {
		...config.schema,
		items: config.schema.items.map((item) => ({
			...item,
			value: config.defaultValues?.[item.field] || item.value,
		})),
	};
	const app = createApp(FullScreenDyForm, {
		schema: schemaWithDefaultValues,
		showBtns: config.showBtns,
		init: config.init || {},
		onCancel: handleClose,
		allowDirectClose: config.allowDirectClose || false,
		onSubmit: async (model: Record<string, any>) => {
			try {
				await config.submit?.(model, handleClose);
			} catch (e) {
				console.error(e);
			}
		},
		style: config.style || {},
		draggable: config.draggable || false,
		title: config.title,
		fadeInOut: config.fadeInOut,
		fadeTime: config.fadeTime,
		mousePosition,
		goClose,
		customBtns: config.customBtns,
		showCloseBtn:
			config.showCloseBtn === undefined ? true : config.showCloseBtn,
		onModalClick: config.onModalClick,
	});
	app.mount(div);
}
