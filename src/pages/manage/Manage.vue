<template>
	<div class="page">
		<ManagePage :schema="pageSchema" :enable-deep-clone="true" />
	</div>
</template>

<script setup lang="ts">
import { ManagePage } from "../../../qc-components";
import { EditorSchema, ManagePageSchema } from "../../../qc-components";
import Tags from "../table/components/Tags.vue";

let datas = [
	{
		id: 1,
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		id: 2,
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		id: 3,
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];

const getDataApi = async (props: { paginator: any; model: any }) => {
	return await new Promise<any>((resolve) => {
		setTimeout(() => {
			resolve({
				data: datas,
				total: datas.length,
				current: props.paginator.current || 1,
			});
		}, 200);
	});
};

const editSchema: EditorSchema = {
	schema: {
        title: {
            text: "编辑",
            style: {
                fontSize: "20px",
                fontWeight: "bold",
            },
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
			{
				component: "Select",
				label: "标签",
				field: "tags",
				componentProps: {
					mode: "multiple",
					options: [
						{
							label: "nice",
							value: "nice",
						},
						{
							label: "cool",
							value: "cool",
						},
						{
							label: "loser",
							value: "loser",
						},
						{
							label: "teacher",
							value: "teacher",
						},
						{
							label: "developer",
							value: "developer",
						},
					],
				},
				formItemProps: {
					required: true,
				},
			},
		],
	},
};

const pageSchema: ManagePageSchema = {
	title: "Manage Page",
	fetchData: async ({ paginator, model }) => {
		return await getDataApi({ paginator, model });
	},
	handleDelete: {
		deleteData: async ({ record, doRefresh }) => {
			datas = datas.filter((item) => item.id !== record.id);
			doRefresh();
		},
	},
	handleEdit: {
        editData: ({ record, doRefresh, close }) => {
            const index = datas.findIndex((item) => item.id === record.id);
			datas[index] = record as any;
			doRefresh();
			close();
		},
        editor: editSchema,
	},
	handleAdd: {
		addData: async ({ record, doRefresh, close }) => {
			datas.push({
				id: datas.length + 1,
				name: record.name,
				age: record.age,
				address: record.address,
				tags: record.tags,
			});
			doRefresh();
			close();
		},
		creator: editSchema,
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
			},
			{
				component: "Text",
				label: "年龄",
				field: "age",
			},
			{
				component: "Text",
				label: "地址",
				field: "address",
			},
			{
				component: "Select",
				label: "标签",
				field: "tags",
				componentProps: {
					options: [
						{
							label: "nice",
							value: "nice",
						},
						{
							label: "cool",
							value: "cool",
						},
						{
							label: "loser",
							value: "loser",
						},
						{
							label: "teacher",
							value: "teacher",
						},
						{
							label: "developer",
							value: "developer",
						},
					],
					style: {
						width: "120px",
					},
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
			{
				header: "标签",
				body: {
					index: "tags",
					render: ({ text }) => {
						return {
							component: Tags,
							props: {
								tags: (text as string[]).map((item) =>
									item.toUpperCase()
								),
								type: "success",
							},
						};
					},
				},
			},
		],
		style: {
			padding: "10px",
			backgroundColor: "#f0f0f0",
			borderRadius: "10px",
		},
	},
};
</script>

<style scoped lang="scss">
.page {
	height: 100vh;
	border: 1px solid #000;
	border-radius: 10px;
	padding: 10px;
	width: 800px;
}
</style>
