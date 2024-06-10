import { Component, reactive, defineAsyncComponent } from "vue";

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
		component: defineAsyncComponent(() => import("./components/Text.vue")),
	},
	Password: {
		component: defineAsyncComponent(() => import("./components/Text.vue")),
		defaultProps: {
			type: "password",
		},
	},
	Textarea: {
		component: defineAsyncComponent(
			() => import("./components/Textarea.vue")
		),
	},
	Number: {
		component: defineAsyncComponent(
			() => import("./components/Number.vue")
		),
	},
	Select: {
		component: defineAsyncComponent(
			() => import("./components/AsyncSelect.vue")
		),
	},
	Radio: {
		component: defineAsyncComponent(
			() => import("./components/AsyncRadio.vue")
		),
	},
	Checkbox: {
		component: defineAsyncComponent(
			() => import("./components/AsyncCheckBox.vue")
		),
	},
	DatePicker: {
		component: defineAsyncComponent(
			() => import("./components/DatePicker.vue")
		),
	},
	Rate: {
		component: defineAsyncComponent(() => import("./components/Rate.vue")),
	},
	Slider: {
		component: defineAsyncComponent(
			() => import("./components/Slider.vue")
		),
	},
	Switch: {
		component: defineAsyncComponent(
			() => import("./components/CustomSwitch.vue")
		),
	},
	Upload: {
		component: defineAsyncComponent(
			() => import("./components/CustomUpload.vue")
		),
	},
	TreeSelect: {
		component: defineAsyncComponent(
			() => import("./components/AsyncTreeSelect.vue")
		),
	},
	TimePicker: {
		component: defineAsyncComponent(
			() => import("./components/TimePicker.vue")
		),
	},
	AutoComplete: {
		component: defineAsyncComponent(
			() => import("./components/AutoCompleteInput.vue")
		),
	},
	Tag: {
		component: defineAsyncComponent(
			() => import("./components/TagShow.vue")
		),
	},
	Mentions: {
		component: defineAsyncComponent(
			() => import("./components/Mentions.vue")
		),
	},
	Divider: {
		component: defineAsyncComponent(
			() => import("./components/CustomDivider.vue")
		),
	},
	AvatarGroup: {
		component: defineAsyncComponent(
			() => import("./components/CustomAvatarGroup.vue")
		),
	},
	Corn: {
		component: defineAsyncComponent(
			() => import("./components/CronInput.vue")
		),
	},
});
