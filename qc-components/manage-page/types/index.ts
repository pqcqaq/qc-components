import { CSSProperties } from "vue";
import { Column, DyFormItem } from "../../types";

export type PageRecords = {
	data: Record<string, any>[]; // 表格数据
	total: number; // 总数
	current: number; // 当前页
};

export type SeacherFn = (model: Record<string, any>) => void;

export type Paginator = {
	current?: number;
	pageSize?: number;
};

export type FetchDataFnProps = {
	paginator: Paginator;
	model: Record<string, any>;
};

export type FetchDataFn = (
	props: FetchDataFnProps
) => PageRecords | Promise<PageRecords>;

export type DeleteFnProps = {
	record: Record<string, any>;
} & PageEventsProps;

export type DeleteDataFn = (props: DeleteFnProps) => void;

export type EditDataFnProps = {
	record: Record<string, any>;
} & PageEventsProps;

export type EditDataFn = (props: EditDataFnProps) => void;

export type SearcherSchema = {
	style?: CSSProperties;
	items: DyFormItem[];
};

export type PageEventsProps = {
	doRefresh: () => void;
	doSearch: SeacherFn;
	doReset: () => void;
};

export type ManagePageSchema = {
	title?: string;
	fetchData: FetchDataFn;
	deleteData?: DeleteDataFn;
	editData?: EditDataFn;
	seacher: SearcherSchema;
	tableColumns: Column[];
};
