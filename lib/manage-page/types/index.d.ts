import { CSSProperties } from 'vue';
import { Column, DyForm, DyFormItem, FuncCustomBtn, ModalClickFn } from '../../types';
import { ButtonProps, TableProps } from 'ant-design-vue';

export type PageRecords = {
    data: Record<string, any>[];
    total: number;
    current: number;
};
export type MPTitleConfig = {
    text: string;
    style?: CSSProperties;
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
export type FetchDataFn = (props: FetchDataFnProps) => PageRecords | Promise<PageRecords>;
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
    props?: TableProps;
};
export type EditorSchema = {
    schema: DyForm;
    showBtns?: {
        clearAll: 0 | 1;
        reset: 0 | 1;
        submit: 0 | 1;
    } | boolean;
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
export type AddHandler = {
    creator: EditorSchema;
    addData: EditDataFn;
    outerStyle?: CSSProperties;
    btnStyle?: CSSProperties;
    btnProps?: ButtonProps;
};
export type DeleteHandler = {
    text?: string;
    deleteData: DeleteDataFn;
    btnProps?: ButtonProps;
};
export type EditHandler = {
    editor: EditorSchema;
    text?: string;
    editData: EditDataFn;
    btnProps?: ButtonProps;
};
export type ManagePageSchema = {
    title?: string | MPTitleConfig;
    fetchData: FetchDataFn;
    seacher: SearcherSchema;
    table: TableBuilder;
    handleAdd?: AddHandler;
    handleDelete?: DeleteHandler;
    handleEdit?: EditHandler;
};
