import {
	Input,
	Textarea,
	InputNumber,
	Select,
	DatePicker,
	Rate,
	Slider,
	TreeSelect,
	TimePicker,
	Mentions,
} from "ant-design-vue";
import { Component, reactive, markRaw } from "vue";
import AutoCompleteInput from "./components/AutoCompleteInput.vue";
import CustomSwitch from "./components/CustomSwitch.vue";
import TagShow from "./components/TagShow.vue";
import AsyncRadio from "./components/AsyncRadio.vue";
import AsyncCheckBox from "./components/AsyncCheckBox.vue";
import CustomDivider from "./components/CustomDivider.vue";
import CustomAvatarGroup from "./components/CustomAvatarGroup.vue";
import CustomUpload from "./components/CustomUpload.vue";
import CronInput from "./components/CronInput.vue";
import AsyncSelect from './components/AsyncSelect.vue'

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
		component: markRaw(Input),
	},
	Password: {
		component: markRaw(Input),
		defaultProps: {
			type: "password",
		},
	},
	Textarea: {
		component: markRaw(Textarea),
	},
	Number: {
		component: markRaw(InputNumber),
	},
	Select: {
		component: markRaw(AsyncSelect),
	},
	Radio: {
		component: markRaw(AsyncRadio),
	},
	Checkbox: {
		component: markRaw(AsyncCheckBox),
	},
	DatePicker: {
		component: markRaw(DatePicker),
	},
	Rate: {
		component: markRaw(Rate),
	},
	Slider: {
		component: markRaw(Slider),
	},
	Switch: {
		component: markRaw(CustomSwitch),
	},
	Upload: {
		component: markRaw(CustomUpload),
	},
	TreeSelect: {
		component: markRaw(TreeSelect),
	},
	TimePicker: {
		component: markRaw(TimePicker),
	},
	AutoComplete: {
		component: markRaw(AutoCompleteInput),
	},
	Tag: {
		component: markRaw(TagShow),
	},
	Mentions: {
		component: markRaw(Mentions),
	},
	Divider: {
		component: markRaw(CustomDivider),
	},
	AvatarGroup: {
		component: markRaw(CustomAvatarGroup),
	},
	Corn: {
		component: markRaw(CronInput),
	},
});
