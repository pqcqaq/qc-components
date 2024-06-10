<template>
	<div>
		<div class="seacher">
			<DynamicForm :schema="formSchema" v-model="searchModel" />
		</div>
		<div class="list">
			<EasyTable :data="data" :schema="tableSchema" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { DyForm } from "../../../qc-components";
import { defineAsyncComponent, ref, reactive } from "vue";
import { TableSchema } from "../types";
const DynamicForm = defineAsyncComponent(
	() => import("../dynamic-form/DynamicForm.vue")
);
const EasyTable = defineAsyncComponent(
	() => import("../easy-table/EasyTable.vue")
);
const formSchema: DyForm = reactive<DyForm>({
	formProps: {
		// 布局：水平布局
		layout: "vertical",
	},
	customBtns: [
		{
			text: "Submit",
			props: {
				type: "primary",
			},
			onClick: async ({ doCheck, model, event }) => {
				const result = (await doCheck?.()) || false;
				if (result) {
					console.log("submit", model);
					data.value = [...data.value, model];
				} else {
					console.log("submit", "校验不通过");
				}
			},
		},
	],
	// schema
	items: [
		{
			component: "Text",
			label: "Name",
			field: "name",
		},
	],
});
const searchModel = ref<Record<string, any>>({});
const data = ref<any[]>([]);
const tableSchema: TableSchema = reactive({
	// schema
	columns: [
		{
			header: "Name",
			body: "name",
		},
	],
});
</script>

<style scoped></style>
