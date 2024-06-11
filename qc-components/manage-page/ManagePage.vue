<template>
	<div>
		<template v-if="props.schema.title !== undefined">
			<template v-if="typeof props.schema.title === 'string'">
				<div class="title">
					{{ props.schema.title || "" }}
				</div>
			</template>
			<template v-else>
				<div
					class="title"
					:style="{
						...props.schema.title.style,
					}"
				>
					{{ props.schema.title.text || "" }}
				</div>
			</template>
		</template>
		<div
			class="seacher"
			:style="{
				...props.schema.seacher.style,
			}"
		>
			<DynamicForm
				:schema="formSchema"
				v-model="searchModel"
				:disabled="disabled"
			/>
		</div>
		<template v-if="props.schema.handleAdd !== undefined">
			<div
				:style="{
					display: 'flex',
					...props.schema.handleAdd.outerStyle,
				}"
				class="btns"
			>
				<a-button
					:style="{
						'margin-left': 'auto',
						'margin-top': '10px',
						'margin-right': '10px',
						'margin-bottom': '10px',
						...props.schema.handleAdd.btnStyle,
					}"
					v-bind="props.schema.handleAdd.btnProps"
					type="primary"
					@click="handleAdd"
				>
					新增
				</a-button>
			</div>
		</template>
		<div
			class="list"
			:style="{
				...props.schema.table.style,
			}"
		>
			<EasyTable
				:data="data"
				:schema="tableSchema"
				:enable-deep-clone="enableDeepClone"
			/>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "manage-page",
};
</script>

<script setup lang="ts">
import { DyForm } from "../dynamic-form/types";
import { defineAsyncComponent, ref, reactive } from "vue";
import { TableSchema } from "../types";
import { ManagePageSchema } from "./types";
import { message } from "ant-design-vue";
import { useFullScreenDyForm } from "../dynamic-form";
import en from "../dynamic-form/components/language/en";
const DynamicForm = defineAsyncComponent(
	() => import("../dynamic-form/DynamicForm.vue")
);
const EasyTable = defineAsyncComponent(
	() => import("../easy-table/EasyTable.vue")
);
const TableButtons = defineAsyncComponent(
	() => import("../easy-table/components/TableButtons.vue")
);

type PropType = {
	schema: ManagePageSchema;
	enableDeepClone?: boolean;
};

const props = defineProps<PropType>();

const disabled = ref<boolean>(false);
const formSchema: DyForm = reactive<DyForm>({
	formProps: {
		// 布局：水平布局
		layout: "inline",
	},
	customBtns: [
		{
			text: "搜索",
			props: {
				type: "primary",
			},
			onClick: async ({ doCheck, model, event }) => {
				const result = (await doCheck?.()) || false;
				if (!result) {
					return;
				}
				await doSearch();
			},
		},
		{
			text: "重置",
			onClick: async () => {
				await doReset();
			},
		},
	],
	// schema
	items: props.schema.seacher.items || [],
});
const searchModel = ref<Record<string, any>>({});
const doReset = async () => {
	searchModel.value = {};
	await fetchData();
};
const doSearch = async () => {
	await fetchData();
};

const tableSchema: TableSchema = reactive({
	props: {
		pagination: {
			...props.schema.table.paginationProps,
			pageSize: 10,
			total: 0,
			current: 1,
		},
		loading: false,
		onChange: (pagination, filters, sorter, extra) => {
			tableSchema.props!.pagination = pagination;
			fetchData();
		},
	},
	// schema
	columns: [
		...props.schema.table.columns,
		{
			header: "管理",
			body: {
				index: "action",
				render: ({ text, record, index }) => {
					return {
						component: TableButtons,
						props: {
							btns: [
								{
									text:
										props.schema.handleEdit.text || "编辑",
									onClick: () => {
										handleEdit(record);
									},
									props: {
										type: "primary",
										size: "small",
										...props.schema.handleEdit.btnProps,
									},
								},
								{
									text:
										props.schema.handleDelete.text ||
										"删除",
									onClick: async () => {
										await props.schema.handleDelete.deleteData?.(
											{
												record: {
													...record,
												},
												doRefresh: fetchData,
												doSearch,
												doReset,
											}
										);
									},
									props: {
										type: "primary",
										size: "small",
										danger: true,
										...props.schema.handleDelete.btnProps,
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

const data = ref<any[]>([]);

const handleEdit = async (record: any) => {
	useFullScreenDyForm({
		showBtns: {
			submit: 1,
			reset: 1,
			clearAll: 1,
		},
		...props.schema.handleEdit.editor,
		defaultValues: {
			...record,
		},
		submit: async (values, close) => {
			await props.schema.handleEdit.editData?.({
				record: {
					...record,
					...values,
				},
				doRefresh: fetchData,
				doSearch,
				doReset,
				close: close as () => void,
			});
		},
	});
};

const fetchData = async () => {
	tableSchema.props!.loading = true;
	disabled.value = true;
	try {
		const result = await props.schema.fetchData({
			paginator: {
				pageSize: tableSchema.props!.pagination
					? tableSchema.props!.pagination.pageSize
					: 10,
				current: tableSchema.props!.pagination
					? tableSchema.props!.pagination.current
					: 1,
			},
			model: {
				...searchModel.value,
			},
		});
		data.value = result.data;
		tableSchema.props!.pagination = {
			...tableSchema.props!.pagination,
			total: result.total,
			current: result.current,
		};
	} catch (error) {
		message.error("获取数据失败");
	} finally {
		tableSchema.props!.loading = false;
		disabled.value = false;
	}
};

fetchData();

const handleAdd = async () => {
	useFullScreenDyForm({
		showBtns: {
			submit: 1,
			reset: 1,
			clearAll: 1,
		},
		...props.schema.handleAdd.creator,
		init: {},
		submit: async (values, close) => {
			await props.schema.handleAdd.addData?.({
				record: {
					...values,
				},
				doRefresh: fetchData,
				doSearch,
				doReset,
				close: close as () => void,
			});
		},
	});
};
</script>

<style scoped lang="scss">
:deep(.dynamic-form) {
	gap: 10px;
}
</style>
