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
import { Component } from "vue";
import AutoCompleteInput from "./components/AutoCompleteInput.vue";
import CustomSwitch from "./components/CustomSwitch.vue";
import TagShow from "./components/TagShow.vue";
import AsyncRadio from "./components/AsyncRadio.vue";
import AsyncCheckBox from "./components/AsyncCheckBox.vue";
import CustomDivider from "./components/CustomDivider.vue";
import CustomAvatarGroup from "./components/CustomAvatarGroup.vue";
import CustomUpload from "./components/CustomUpload.vue";
import CronInput from "./components/CronInput.vue";

// 表单域组件类型
export const componentsMap: Record<
	string,
	{
		component: Component;
		defaultProps?: Record<string, any>;
	}
> = {
	Text: {
		component: Input,
	},
	Password: {
		component: Input,
		defaultProps: {
			type: "password",
		},
	},
	Textarea: {
		component: Textarea,
	},
	Number: {
		component: InputNumber,
	},
	Select: {
		component: Select,
	},
	Radio: {
		component: AsyncRadio,
	},
	Checkbox: {
		component: AsyncCheckBox,
	},
	DatePicker: {
		component: DatePicker,
	},
	Rate: {
		component: Rate,
	},
	Slider: {
		component: Slider,
	},
	Switch: {
		component: CustomSwitch,
	},
	Upload: {
		component: CustomUpload,
	},
	TreeSelect: {
		component: TreeSelect,
	},
	TimePicker: {
		component: TimePicker,
	},
	AutoComplete: {
		component: AutoCompleteInput,
	},
	Tag: {
		component: TagShow,
	},
	Mentions: {
		component: Mentions,
	},
	Divider: {
		component: CustomDivider,
	},
	AvatarGroup: {
		component: CustomAvatarGroup,
	},
	Corn: {
		component: CronInput,
	},
};
