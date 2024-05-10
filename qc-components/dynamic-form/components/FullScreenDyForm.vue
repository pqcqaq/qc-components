<template>
	<div
		class="fullscreen"
		v-fade-in-out="{
			fadeTime: props.fadeTime || 150,
			enable: props.fadeInOut || true,
		}"
	>
		<div
			class="full-form"
			v-move
			v-scale-in="{
				fadeTime: props.fadeTime || 150,
				enable: props.fadeInOut || true,
			}"
			:style="{
				...props.style,
			}"
		>
			<DynamicForm
				:schema="schema"
				v-model="formModel"
				:show-btns="props.showBtns"
				class="form"
				:on-before-submit="handleOnBeforeSubmit"
				:on-submit="props.onSubmit"
				:on-after-submit="handleOnAfterSubmit"
			/>
			<div class="btns">
				<a-button
					shape="circle"
					type="primary"
					danger
					@click="handleClose"
					:disabled="isLoading"
				>
					<CloseOutlined
				/></a-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { CSSProperties, Directive, Ref, onMounted, ref, watch } from "vue";
import { DyForm } from "../../types";
import DynamicForm from "../DynamicForm.vue";
import AButton from "ant-design-vue/es/button";
import { Modal } from "ant-design-vue";
import { CloseOutlined } from "@ant-design/icons-vue";
import "./style.scss";

type MousePosition = { x: number; y: number } | null;

type propType = {
	schema: DyForm;
	showBtns: {
		clearAll: 0 | 1;
		reset: 0 | 1;
		submit: 0 | 1;
	};
	init: Record<string, any>;
	onCancel: () => void;
	allowDirectClose: boolean;
	onSubmit?: (formData: Record<string, any>) => void;
	style: CSSProperties;
	draggable?: boolean;
	title?: string;
	fadeInOut?: boolean;
	fadeTime?: number;
	mousePosition: MousePosition;
	goClose: Ref<boolean>;
};

const props = defineProps<propType>();
const formModel = ref<Record<string, any>>({});
const isLoading = ref(false);
const schema = ref<DyForm>(props.schema) as Ref<DyForm>;

onMounted(() => {
	if (Object.keys(props.init).length > 0) {
		formModel.value = { ...props.init };
	}
	if (props.title) {
		schema.value.title = props.title;
	}
});

const handleClose = () => {
	if (props.allowDirectClose) {
		props.onCancel();
	} else {
		// 确认框
		Modal.confirm({
			title: "确认关闭",
			content: "关闭后将不会保存当前数据，是否继续？",
			onOk: () => {
				props.onCancel();
			},
			okText: "确认关闭",
			okType: "primary",
			okButtonProps: { danger: true },
			cancelText: "返回",
			zIndex: 10000,
			centered: true,
		});
	}
};

const handleOnBeforeSubmit = () => {
	isLoading.value = true;
};

const handleOnAfterSubmit = () => {
	isLoading.value = false;
};

const vMove: Directive = {
	mounted(el: HTMLElement) {
		if (!props.draggable) {
			return;
		}
		let moveEl = el as HTMLElement;
		const mouseDown = (e: MouseEvent) => {
			const elNowPos = {
				x: moveEl.getBoundingClientRect().x,
				y: moveEl.getBoundingClientRect().y,
			};
			const mouseBefore: { x: number; y: number } = {
				x: e.clientX,
				y: e.clientY,
			};
			const elShape = {
				width: moveEl.getBoundingClientRect().width,
				height: moveEl.getBoundingClientRect().height,
			};
			const move = (e: MouseEvent) => {
				// 设置鼠标样式
				moveEl.style.cursor = "move";
				const mouseMove: { x: number; y: number } = {
					x: e.clientX - mouseBefore.x,
					y: e.clientY - mouseBefore.y,
				};
				const offset = {
					x: elNowPos.x + mouseMove.x,
					y: elNowPos.y + mouseMove.y,
				};
				// 判断是否超出边界
				if (offset.x < 15 || offset.y < 15) {
					return;
				}
				// 判断右下边界
				if (
					offset.x + elShape.width > window.innerWidth - 30 ||
					offset.y + elShape.height > window.innerHeight - 15
				) {
					return;
				}
				// 更新拖拽元素的位置
				moveEl.style.left = offset.x + "px";
				moveEl.style.top = offset.y + "px";
			};
			document.addEventListener("mousemove", move);
			document.addEventListener("mouseup", () => {
				// 取消鼠标样式
				moveEl.style.cursor = "default";
				document.removeEventListener("mousemove", move);
			});
		};

		moveEl.style.position = "absolute"; // 确保拖拽元素的定位方式为绝对定位
		moveEl.addEventListener("mousedown", mouseDown);
	},
	// 取消挂载时注销事件
	unmounted(el: HTMLElement) {
		if (!props.draggable) {
			return;
		}
		let moveEl = el as HTMLElement;
		moveEl.removeEventListener("mousedown", () => {});
	},
};

type FadeType = {
	fadeTime: number;
	enable: boolean;
};

let fadeElement: HTMLElement | null = null;

const vFadeInOut: Directive = {
	mounted(el: HTMLElement, binding) {
		// 保存元素
		fadeElement = el;
		const config = binding.value as FadeType;
		if (!config.enable) {
			return;
		}
		el.style.opacity = "0"; // 初始状态设置为透明
		// 设置所有动画都在下一个事件循环中执行
		setTimeout(() => {
			el.style.transition = "opacity " + config.fadeTime + "ms ease";
			el.style.opacity = "1"; // 淡入
		}, 10);
	},
};

let scaleElement: HTMLElement | null = null;
const vScaleIn: Directive = {
	mounted(el: HTMLElement, binding) {
		// 保存元素
		scaleElement = el;
		const config = binding.value as FadeType;
		if (!config.enable) {
			return;
		}
		// 设置初始缩放比例
		el.style.scale = "0.2";
		if (!props.mousePosition) {
			// 设置缩放中心在自己中心
			el.style.transformOrigin = "center";
			return;
		}
		// 获取元素的位置信息
		const rect = el.getBoundingClientRect();
		// 计算鼠标点击位置相对于元素位置的偏移量
		const offsetX = props.mousePosition.x - rect.left;
		const offsetY = props.mousePosition.y - rect.top;
		// 设置缩放中心为鼠标点击位置
		el.style.transformOrigin = `${offsetX}px ${offsetY}px`;
		// 设置所有动画都在下一个事件循环中执行
		setTimeout(() => {
			el.style.transition = "scale " + config.fadeTime + "ms ease";
			el.style.scale = "1";
		}, 10);
	},
};

watch(
	() => props.goClose.value,
	(val) => {
		if (val) {
			// 设置元素淡出和缩放
			if (fadeElement) {
				fadeElement.style.opacity = "0";
			}
			if (scaleElement) {
				scaleElement.style.scale = "0.2";
			}
		}
	}
);
</script>
