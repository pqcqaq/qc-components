<template>
	<div>
		<span
			@click="reflash"
			style="cursor: pointer; color: hsla(237deg 74% 33% / 61%)"
			>{{ Realoptions.length > 0 ? "" : msg }}</span
		>
		<a-radio-group v-model:value="checked" v-bind="$attrs">
			<a-radio
				v-for="option in Realoptions"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</a-radio>
		</a-radio-group>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ARadio from "ant-design-vue/es/radio";
import ARadioGroup from "ant-design-vue/es/radio/Group";
import { Options, OptionsGetter } from "../../types";

type propsType = {
	value: string | number | undefined;
	options: OptionsGetter;
};

const props = defineProps<propsType>();
const emit = defineEmits(["update:value"]);
const checked = computed({
	get() {
		return props.value;
	},
	set(value) {
		emit("update:value", value);
	},
});

const msg = ref("加载中....");

const Realoptions = ref<Options>([]);

const getData = async () => {
	msg.value = "加载中....";
	try {
		if (props.options instanceof Function) {
			const optionsPromise = await props.options();
			Realoptions.value = optionsPromise;
		} else {
			if (props.options && !Array.isArray(props.options)) {
				console.error(
					"options must be an array or a function that returns an array"
				);
				return;
			}
			Realoptions.value = props.options;
		}
		if (Realoptions.value.length === 0) {
			msg.value = "暂无数据";
		} else {
			msg.value = "";
		}
	} catch (error) {
		msg.value = "数据加载失败";
	}
	checked.value = props.value;
};

getData();

const reflash = async () => {
	await getData();
};

</script>
