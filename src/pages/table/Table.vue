<template>
	<EasyTable :schema="schema" :data="data" />
</template>
<script lang="ts" setup>
import { SmileOutlined } from "@ant-design/icons-vue";
import { TableSchema } from "qc-components";
import { EasyTable } from "../../../";
import Tags from "./components/Tags.vue";

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"],
	},
];

const schema: TableSchema = {
	title: "Table Title",
	columns: [
		{
			header: {
				title: "Name",
			},
			body: {
				index: "name",
				render: ({ text, record, index }) => {
					return {
						component: "a",
						props: {
							icon: markRaw(SmileOutlined),
						},
						event: {
							click: (e: MouseEvent) => {
								console.log("click", e);
							},
						},
					};
				},
			},
		},
		{
			header: {
				title: "Age",
			},
			body: {
				index: "age",
			},
		},
		{
			header: {
				title: "Address",
			},
			body: {
				index: "address",
			},
		},
		{
			header: {
				title: "Tags",
			},
			body: {
				index: "tags",
				render: ({ text }) => {
					return {
						component: Tags,
						props: {
							tags: text,
						},
					};
				},
			},
		},
	],
};
</script>
