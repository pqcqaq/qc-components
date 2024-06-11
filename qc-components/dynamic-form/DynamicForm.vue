<template>
	<div>
		<template v-if="schema.title">
			<div class="title">
				<template v-if="typeof schema.title === 'string'">
					<h2
						style="
							display: flex;
							justify-content: center;
							margin-bottom: 15px;
							align-items: center;
						"
					>
						{{ schema.title }}
					</h2>
				</template>
				<template v-else>
					<div :style="schema.title.style">
						{{ schema.title.text }}
					</div>
				</template>
			</div>
		</template>
		<a-form
			ref="formRef"
			:model="formModel"
			v-bind="{ ...$attrs, ...props.schema.formProps }"
			:disabled="loading || props.disabled"
			:class="props.schema.className || 'dynamic-form'"
			v-on="{ ...props.schema.formEvent, onNull: () => {} }"
		>
			<div
				class="items"
				:key="item.field"
				v-for="item in props.schema.items"
				v-show="item.onShow ? item.onShow(formModel) : true"
			>
				<a-form-item
					:name="item.field"
					:label="item.label"
					v-bind="item.formItemProps"
					:class="
						item.formItemProps?.className || 'dynamic-form-item'
					"
				>
					<component
						:is="
							typeof item.component === 'string'
								? rawComponents(
										componentsMap[item.component]?.component
								  )
								: rawComponents(item.component)
						"
						v-bind="{
							...item.componentProps,
							...(typeof item.component === 'string'
								? componentsMap[item.component]?.defaultProps
								: item.componentProps?.customProps),
						}"
						v-model:value="formModel[item.field]"
						:class="
							item.componentProps?.className ||
							'dynamic-form-component'
						"
						v-on="{ ...item.componentEvent, onNull: () => {} }"
						:disabled="props.disabled || loading"
					/>
				</a-form-item>
				<template
					v-if="hasNext && showNext(formModel[item.field], item)"
				>
					<div
						class="subForms"
						:style="(item.nextFormStyle || {}) as StyleValue"
					>
						<DynamicForm
							:schema="
								nextFormSchema(formModel[item.field], item)
							"
							v-model="nextModel"
							:registe-to-parent="register"
							:un-registe-from-parent="unRegister"
							:disabled="props.disabled || loading"
							:show-btns="{
								clearAll: 0,
								reset: 0,
								submit: 0,
							}"
						/>
					</div>
				</template>
			</div>
			<template v-if="!!btnShow">
				<div style="display: flex; justify-content: center; gap: 50px">
					<template v-if="btnShow?.clearAll">
						<a-button @click="handleClear">清空</a-button>
					</template>
					<template v-if="btnShow?.reset">
						<a-button @click="handleReset">重置</a-button>
					</template>
					<template v-if="btnShow?.submit">
						<a-button
							type="primary"
							@click="handleSubmit"
							:loading="props.disabled || loading"
							>提交</a-button
						>
					</template>
				</div>
			</template>
			<template
				v-if="
					props.schema.customBtns &&
					props.schema.customBtns.length > 0
				"
			>
				<div
					class="custombtns"
					:style="{
						...{
							display: 'flex',
							justifyContent: 'center',
							gap: '20px',
						},
						...props.schema.customBtnsStyle,
					}"
				>
					<div
						v-for="btn in props.schema.customBtns"
						:key="btn.text"
						:style="{
							...{
								display: 'inline',
								justifyContent: 'center',
							},
							...btn.outterStyle,
						}"
					>
						<a-button
							@click="
							($event: MouseEvent) => {
								btn.onClick?.({
									doCheck: async () => {
										return (
											!!(await validateThenGetModel()) ||
											false
										);
									},
									model: formModel,
									event: $event,
								});
							}
						"
							v-bind="btn.props"
							:style="{
								...btn.style,
							}"
						>
							{{ btn.text }}
						</a-button>
					</div>
				</div>
			</template>
		</a-form>
	</div>
</template>

<script lang="ts">
export default {
	name: "dynamic-form",
};
</script>

<script lang="ts" setup>
import {
	ref,
	onMounted,
	defineAsyncComponent,
	computed,
	onBeforeMount,
	watch,
	onUnmounted,
	getCurrentInstance,
	ComponentInternalInstance,
	markRaw,
	type Component,
} from "vue";
import type { DyForm, DyFormItem } from "../types";
import { componentsMap } from "./cpnsMap";
import { FormInstance } from "ant-design-vue/es/form/Form";
import { StyleValue } from "vue";
import { message } from "ant-design-vue";

const rawComponents = computed(() => (cpns: Component) => {
	return markRaw(cpns);
});

type BtnsShow = {
	clearAll: 0 | 1;
	reset: 0 | 1;
	submit: 0 | 1;
};

type dynamicType = {
	schema: DyForm;
	modelValue: Record<string, any>;
	showBtns?: boolean | BtnsShow;
	registeToParent?: (selfIns: ComponentInternalInstance) => void;
	unRegisteFromParent?: (selfIns: ComponentInternalInstance) => void;
	disabled?: boolean;
	onBeforeSubmit?: (formData: Record<string, any>) => void;
	onSubmit?: (formData: Record<string, any>) => void;
	onAfterSubmit?: (formData: Record<string, any>) => void;
};

const props = defineProps<dynamicType>();
const btnShow = computed(() => {
	// 若传入的是布尔值，则根据布尔值显示
	if (typeof props.showBtns === "boolean") {
		if (props.showBtns) {
			return {
				clearAll: 0,
				reset: 1,
				submit: 1,
			};
		} else {
			return null;
		}
	}
	// 若传入的是对象，并且值不存在，则默认显示
	if (!props.showBtns) {
		return {
			clearAll: 0,
			reset: 1,
			submit: 1,
		};
	}
	// 若传入的是对象，则根据对象显示
	return props.showBtns;
});
const formRef = ref<FormInstance | null>(null);
const selfInstance = getCurrentInstance();
const nextModel = ref<Record<string, any>>({});
const nextFormRefs = ref<ComponentInternalInstance[]>([]);

onMounted(() => {
	if (props.registeToParent && selfInstance) {
		props.registeToParent(selfInstance);
	}
});

onUnmounted(() => {
	if (props.unRegisteFromParent && selfInstance) {
		props.unRegisteFromParent(selfInstance);
	}
});

const register = (form: ComponentInternalInstance) => {
	nextFormRefs.value.push(form as any);
};

const unRegister = (form: ComponentInternalInstance) => {
	const index = nextFormRefs.value.findIndex((item) => item.uid == form.uid);
	if (index > -1) {
		nextFormRefs.value.splice(index, 1);
	}
};

const emit = defineEmits(["update:modelValue"]);
const formModel = computed({
	get: () => {
		return props.modelValue;
	},
	set: (value) => {
		emit("update:modelValue", value);
	},
});

// 表单初始化
const initForm = () => {
	// model初始数据
	const rawModel = props.schema.items.reduce(
		(pre: Record<string, any>, cur: DyFormItem) => {
			if (!pre[cur.field]) {
				// 表单初始数据(默认值)
				pre[cur.field] = cur.value;
				return pre;
			}
			return {};
		},
		{} as Record<string, any>
	);
	formModel.value = { ...formModel.value, ...rawModel };
};

onBeforeMount(() => {});

onMounted(() => {
	initForm();
	hasNext.value = props.schema.items.some((item) => item.next);
});

// 表单验证
const validateFields = () => {
	return new Promise<{
		[key: string]: any;
	}>((resolve, reject) => {
		formRef.value
			?.validateFields()
			.then((formData) => {
				resolve(formData);
			})
			.catch((err) => reject(err));
	});
};

// 表单重置
const resetFields = (isInit = true) => {
	// 是否清空默认值
	// model初始数据
	const rawModel = props.schema.items.reduce(
		(pre: Record<string, any>, cur: DyFormItem) => {
			if (!pre[cur.field]) {
				// 表单初始数据(默认值)
				pre[cur.field] = isInit ? undefined : cur.value;
				return pre;
			}
			return {};
		},
		{} as Record<string, any>
	);
	formModel.value = { ...formModel.value, ...rawModel };
};

const DynamicForm = defineAsyncComponent(() => import("./DynamicForm.vue"));
const hasNext = ref(false); // 是否有下一级表单
const showNext = computed(
	() => (model: Record<string, any>, item: DyFormItem) => {
		return nextFormSchema.value(model, item).items.length > 0;
	}
);
const nextFormSchema = computed(
	() => (model: Record<string, any>, item: DyFormItem) => {
		return item.next?.(model) || { title: "", items: [] };
	}
);

const loading = ref(false);

const handleSubmit = async () => {
	loading.value = true;
	props.onBeforeSubmit?.(formModel.value);
	try {
		const formData = await validateThenGetModel();
		await props.schema.onSubmit?.(formData);
		await props.onSubmit?.(formModel.value);
	} catch (error) {
		console.error("在数据提交时发生错误：", error);
		message.error("操作失败");
	} finally {
		loading.value = false;
		props.onAfterSubmit?.(formModel.value);
	}
};

const handleReset = () => {
	resetFields(false);
};

const handleClear = () => {
	resetFields();
};

const validateThenGetModel = async () => {
	const formData = await validateFields();
	for (let element of nextFormRefs.value) {
		await element.exposed?.validateThenGetModel();
	}
	formData["next"] = nextModel.value;
	return formData;
};

watch(
	() => nextModel.value,
	(newVal) => {
		formModel.value["next"] = newVal;
	},
	{
		deep: true,
		immediate: true,
	}
);

watch(
	() => formModel.value["next"],
	(newVal) => {
		if (newVal) {
			nextModel.value = newVal;
		}
	}
);

// 暴露方法
defineExpose({
	validateFields,
	resetFields,
	validateThenGetModel,
});
</script>
<style lang="scss" scoped>
.title {
	font-size: 20px;
	font-weight: bold;
}
.subForms {
	margin-left: 24px;
	width: 100%;
}
</style>
