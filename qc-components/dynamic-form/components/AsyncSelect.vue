<template>
	<a-select
		v-model:value="selected"
		:loading="loading"
		:options="realOptions"
		v-bind="{ ...$attrs }"
	/>
</template>

<script setup lang="ts">
import ASelect, { DefaultOptionType } from "ant-design-vue/es/select";
import { computed, onMounted, ref } from "vue";

type propType = {
	modelValue: string;
	options?:
		| {
				value: number | string;
				label: string;
				disabled?: boolean;
				key?: string;
				title?: string;
		  }[]
		| (() => Promise<
				{
					value: number | string;
					label: string;
					disabled?: boolean;
					key?: string;
					title?: string;
				}[]
		  >)
		| (() => {
				value: number | string;
				label: string;
		  }[]);
};

const props = defineProps<propType>();
const emit = defineEmits();

const realOptions = ref<DefaultOptionType[]>([]);
const selected = computed({
	get: () => props.modelValue,
	set: (value) => emit("update:modelValue", value),
});
const loading = ref(false);

const getData = async () => {
	loading.value = true;
	try {
		if (props.options instanceof Function) {
			const optionsPromise = await props.options();
			realOptions.value = optionsPromise;
		} else {
			if (props.options && !Array.isArray(props.options)) {
				console.error(
					"options must be an array or a function that returns an array"
				);
				return;
			}
			realOptions.value = props.options || [];
		}
	} catch (error) {
		console.error(error);
	}
	loading.value = false;
};

onMounted(() => {
	getData();
});
</script>

<style scoped></style>
