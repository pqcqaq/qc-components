<template>
	<EasyTable :schema="schema" :data="data" />
	<EasyTable :schema="simpleSchema" :data="data" />
</template>
<script lang="ts" setup>
import { SmileOutlined } from "@ant-design/icons-vue";
import { TableSchema } from "../../../";
import { EasyTable } from "../../../";
import Tags from "./components/Tags.vue";
import Icon from "./components/Icon.vue";
import { createSimpleTable } from "../../../";
import { data } from "./data";

const schema: TableSchema = {
	title: {
		text: "表格",
		style: {
			color: "red",
			fontSize: "30px",
			marginTop: "10px",
			marginBottom: "10px",
		},
	},
	outterStyle: {
		border: "1px solid grey",
		borderRadius: "10px",
	},
	columns: [
		{
			header: {
				render: ({ title, column }) => {
					return {
						component: Icon,
						props: {
							componentId: SmileOutlined,
							info: "姓名",
						},
					};
				},
			},
			body: {
				index: "name",
				render: ({ text, record, index }) => {
					return {
						component: "a",
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

const simpleSchema = createSimpleTable({
	config: {
		key: {
			render: ({ title }) => {
				return {
					component: Icon,
					props: {
						componentId: SmileOutlined,
						info: "主键",
					},
				};
			},
		},
		name: "姓名",
		age: "年龄",
		address: "地址",
		tags: "标签",
	},
	title: "简单表格",
});
</script>
