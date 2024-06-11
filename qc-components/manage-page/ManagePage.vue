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
import { DyForm } from "../dynamic-form/types";
import { defineAsyncComponent, ref, reactive } from "vue";
import { TableSchema } from "../types";
const DynamicForm = defineAsyncComponent(
	() => import("../dynamic-form/DynamicForm.vue")
);
const EasyTable = defineAsyncComponent(
	() => import("../easy-table/EasyTable.vue")
);
const TableButtons = defineAsyncComponent(
	() => import("../easy-table/components/TableButtons.vue")
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
				if (!result) {
					console.log("submit", "校验不通过");
				}
				console.log("submit", model);
				data.value = [...data.value, { ...model }];
			},
		},
	],
	// schema
	items: [
		{
			component: "Text",
			label: "Name",
			field: "name",
			formItemProps: {
				required: true,
			},
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
		{
			header: "Action",
			body: {
				index: "action",
				render: ({ text, record, index }) => {
					return {
						component: TableButtons,
						props: {
							btns: [
								{
									text: "Edit",
									onClick: () => {
										console.log("edit", record);
									},
									props: {
										type: "primary",
									},
								},
								{
									text: "Delete",
									onClick: () => {
										console.log("delete", record);
										data.value = data.value.filter(
											(item) => item !== record
										);
									},
									props: {
										type: "primary",
										danger: true,
									},
								},
							],
						},
					};
				},
			},
		},
	],
});
</script>

<style scoped></style>
