import { Component, reactive, defineAsyncComponent, markRaw } from "vue";

// 表单域组件类型
export const componentsMap: Record<
	string,
	{
		component: Component;
		defaultProps?: Record<string, any>;
	}
> = reactive<
	Record<
		string,
		{
			component: Component;
			defaultProps?: Record<string, any>;
		}
	>
>({
	Text: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Text.vue"))
		),
	},
	Password: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Text.vue"))
		),
		defaultProps: {
			type: "password",
		},
	},
	Textarea: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Textarea.vue"))
		),
	},
	Number: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Number.vue"))
		),
	},
	Select: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/AsyncSelect.vue"))
		),
	},
	Radio: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/AsyncRadio.vue"))
		),
	},
	Checkbox: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/AsyncCheckBox.vue"))
		),
	},
	DatePicker: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/DatePicker.vue"))
		),
	},
	Rate: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Rate.vue"))
		),
	},
	Slider: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Slider.vue"))
		),
	},
	Switch: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/CustomSwitch.vue"))
		),
	},
	Upload: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/CustomUpload.vue"))
		),
	},
	TreeSelect: {
		component: markRaw(
			defineAsyncComponent(
				() => import("./components/AsyncTreeSelect.vue")
			)
		),
	},
	TimePicker: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/TimePicker.vue"))
		),
	},
	AutoComplete: {
		component: markRaw(
			defineAsyncComponent(
				() => import("./components/AutoCompleteInput.vue")
			)
		),
	},
	Tag: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/TagShow.vue"))
		),
	},
	Mentions: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/Mentions.vue"))
		),
	},
	Divider: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/CustomDivider.vue"))
		),
	},
	AvatarGroup: {
		component: markRaw(
			defineAsyncComponent(
				() => import("./components/CustomAvatarGroup.vue")
			)
		),
	},
	Corn: {
		component: markRaw(
			defineAsyncComponent(() => import("./components/CronInput.vue"))
		),
	},
});
