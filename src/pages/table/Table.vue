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
				render: ({ title }) => {
					console.log("title", title);

					return {
						component: SmileOutlined,
					};
				},
			},
			body: {
				index: "name",
				render: ({ text, record, index }) => {
					console.log("text", text, record, index);
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
				title: "年龄",
			},
			body: {
				index: "age",
			},
			width: "60px",
		},
		{
			header: "地址",
			body: "address",
			width: 300,
		},
		{
			header: {
				title: "标签",
			},
			body: {
				index: "tags",
				render: ({ text }) => {
					console.log("tags", text);
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
