import { CSSProperties } from "vue";
import {
	Column,
	DyForm,
	DyFormItem,
	FuncCustomBtn,
	ModalClickFn,
} from "../../types";
import { TablePaginationConfig } from "ant-design-vue";
import { FormConfig } from "../../types";

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
	close: () => void;
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

export type TableBuilder = {
	columns: Column[];
	style?: CSSProperties;
	paginationProps?: TablePaginationConfig;
};

export type EditorSchema = {
	schema: DyForm;
	showBtns?:
		| {
				clearAll: 0 | 1;
				reset: 0 | 1;
				submit: 0 | 1;
		  }
		| boolean;
	allowDirectClose?: boolean;
	style?: CSSProperties;
	draggable?: boolean;
	title?: string;
	defaultValues?: Record<string, any>;
	fadeInOut?: boolean;
	fadeTime?: number;
	customBtns?: FuncCustomBtn[];
	showCloseBtn?: boolean;
	onModalClick?: ModalClickFn;
};

export type ManagePageSchema = {
	title?: string;
	fetchData: FetchDataFn;
    deleteData?: DeleteDataFn;
    addData?: EditDataFn;
	editData?: EditDataFn;
	seacher: SearcherSchema;
	table: TableBuilder;
	editor: EditorSchema;
	creator: EditorSchema;
};
