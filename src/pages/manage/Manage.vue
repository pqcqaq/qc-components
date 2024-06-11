<template>
	<div class="page">
		<ManagePage :schema="pageSchema" />
	</div>
</template>

<script setup lang="ts">
import { ManagePage } from "../../../qc-components";
import { ManagePageSchema } from "../../../qc-components/manage-page";

let datas = [
	{
		id: 1,
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
	},
	{
		id: 2,
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
	},
	{
		id: 3,
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
	},
];

const pageSchema: ManagePageSchema = {
	title: "Manage Page",
	fetchData: async ({ paginator, model }) => {
		console.log("fetchData", paginator, model);
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					data: datas,
					total: 200,
					current: paginator.current || 1,
				});
			}, 200);
		});
	},
	deleteData: async ({ record, doRefresh }) => {
		console.log("deleteData", record);
		datas = datas.filter((item) => item.id !== record.id);
		doRefresh();
	},
	seacher: {
		style: {
			padding: "10px",
			backgroundColor: "#f3f3f3",
			borderRadius: "10px",
		},
		items: [
			{
				component: "Text",
				label: "姓名",
				field: "name",
				formItemProps: {
					required: true,
				},
			},
			{
				component: "Text",
				label: "年龄",
				field: "age",
				formItemProps: {
					required: true,
				},
			},
			{
				component: "Text",
				label: "地址",
				field: "address",
				formItemProps: {
					required: true,
				},
			},
		],
	},
	table: {
		columns: [
			{
				header: "姓名",
				body: "name",
			},
			{
				header: "年龄",
				body: "age",
			},
			{
				header: "地址",
				body: "address",
			},
		],
		style: {
			padding: "10px",
			backgroundColor: "#f0f0f0",
			borderRadius: "10px",
		}
	},
};
</script>

<style scoped lang="scss">
.page {
	height: 100vh;
	border: 1px solid #000;
	border-radius: 10px;
	padding: 10px;
	width: 600px;
}
</style>
