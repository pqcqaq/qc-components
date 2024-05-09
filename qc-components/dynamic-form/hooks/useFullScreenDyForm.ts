import { App, createApp } from "vue";
import FullScreenDyForm from "../components/FullScreenDyForm.vue";
import { FormConfig } from "../../types";
export function useFullScreenDyForm(config: FormConfig) {
	const handleClose = () => {
		app.unmount();
		document.body.removeChild(div);
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
		showBtns: config.showBtns || { clearAll: 1, reset: 1, submit: 1 },
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
	});
	app.mount(div);
}
