<template>
	<a-tree-select
		:value="selected"
		@change="selected = $event as string | string[]" 
		:loading="loading"
		:treeData="realTreeData"
		v-bind="$attrs"
	/>
</template>

<script setup lang="ts">
import ATreeSelect from "ant-design-vue/es/tree-select";
import { computed, ref } from "vue";
import { TreeDataGetter } from "../types";
import { TreeSelectProps } from "ant-design-vue";
import { DefaultOptionType } from "ant-design-vue/es/vc-tree-select/TreeSelect";

type propType = {
	value: string | string[] | undefined;
	treeData?: DefaultOptionType[] | TreeDataGetter;
};

const props = defineProps<propType>();
const emit = defineEmits();

const realTreeData = ref<TreeSelectProps["treeData"]>([]);
const selected = computed({
	get() {
		return props.value;
	},
	set(value) {
		emit("update:value", value);
	},
});
const loading = ref(false);

const getData = async () => {
	loading.value = true;
	try {
		if (!props.treeData) {
			console.error("options must not be empty");
			return;
		}
		if (props.treeData instanceof Function) {
			const optionsPromise = await props.treeData();
			realTreeData.value = optionsPromise || [];
		} else {
			if (props.treeData && !Array.isArray(props.treeData)) {
				console.error(
					"options must be an array or a function that returns an array"
				);
				return;
			}
			realTreeData.value = props.treeData || [];
		}
	} catch (error) {
		console.error(error);
	}
	loading.value = false;
	selected.value = props.value;
};

getData();

</script>
