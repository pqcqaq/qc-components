<template>
	<a-select
		:value="selected"
		@change="selected = $event as string"
		
		:loading="loading"
		:options="realOptions"
		v-bind="$attrs"
	/>
</template>

<script setup lang="ts">
import ASelect from "ant-design-vue/es/select";
import { computed, ref } from "vue";
import { Options, OptionsGetter } from "../types";

type propType = {
	value: string | number | undefined;
	options?:  Options | OptionsGetter;
};

const props = defineProps<propType>();
const emit = defineEmits();

const realOptions = ref<Options>([]);
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
	selected.value = props.value;
};

getData();

</script>
