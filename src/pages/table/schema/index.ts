import { TablePaginationConfig } from "ant-design-vue";
import { TableSchema, createSimpleTable } from "../../../../qc-components/easy-table";
import Tags from "../components/Tags.vue";
import Icon from "../components/Icon.vue";
import { SmileOutlined } from "@ant-design/icons-vue";

const paginConfig = reactive<TablePaginationConfig>({
	current: 1,
	pageSize: 5,
	total: 100,
	position: ["topCenter", "bottomCenter"],
	pageSizeOptions: ["5", "10", "20", "50"],
});

export const schema: TableSchema = {
	props: {
		locale: {
			emptyText: "暂无数据",
		},
		onChange: (pagination, filters, sorter, extra) => {
			console.log("onChange", pagination, filters, sorter, extra);
			paginConfig.current = pagination.current || 1;
			paginConfig.pageSize = pagination.pageSize || 5;
			paginConfig.total = pagination.total || 100;
		},
		pagination: paginConfig,
		customRow: (record, index, column) => {
			const color = (index || 0) % 2 === 0 ? "#f0f0f0" : "";
			return {
				onClick: () => {
					console.log("click", record);
				},
				style: {
					backgroundColor: color,
				},
			};
		},
	},
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
        padding: "10px",
        marginTop: "10px",
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
			props: {
				align: "center",
				filters: [
					{
						text: "Joe",
						value: "Joe",
					},
					{
						text: "Jim",
						value: "Jim",
					},
				],
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


export const simpleSchema = createSimpleTable({
	config: {
		key: {
			render: () => {
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
	props: {
		locale: {
			emptyText: "暂无数据",
		},
		onChange: (pagination, filters, sorter, extra) => {
			console.log("onChange", pagination, filters, sorter, extra);
		},
		pagination: {
			pageSize: 5,
			total: 100,
		},
		customRow: (record, index, column) => {
			const color = (index || 0) % 2 === 0 ? "#f0f0f0" : "";
			return {
				onClick: () => {
					console.log("click", record);
				},
				style: {
					backgroundColor: color,
				},
			};
		},
	},
});