import { ButtonProps, MentionsProps, SelectProps, TimePickerProps, TreeSelectProps, UploadChangeParam, UploadProps } from 'ant-design-vue';
import { Rule } from 'ant-design-vue/es/form';
import { default as dayjs, Dayjs } from 'dayjs';
import { CSSProperties, Component, Slot, VNode } from 'vue';

export type Options = Array<{
    label: string;
    value: string | number;
    disabled?: boolean;
    class?: string;
    style?: Partial<CSSStyleDeclaration>;
    payload?: Record<string, any>;
}>;
export type DefaultOptions = SelectProps["options"];
export type OptionsGetter = Options | (() => Options | Promise<Options>);
export type TreeDataGetter = TreeSelectProps["treeData"] | (() => TreeSelectProps["treeData"] | Promise<TreeSelectProps["treeData"]>);
export type AutoInputList = {
    label?: string;
    value: string;
};
export type AvatarGroupItem = {
    key: string | number;
    src: string;
    label?: string;
};
export type UploadType = "Button" | "Dragger" | "Image";
export type UploadEvents = {
    change?: (file: UploadChangeParam) => void;
    remove?: (file: File) => void;
    download?: (file: File) => void;
    drop?: (e: DragEvent) => void;
    preview?: (file: File) => void;
    reject?: (file: File) => void;
};
export type InnerComponent = "Text" | "Password" | "Textarea" | "Number" | "Select" | "Radio" | "Checkbox" | "DatePicker" | "Rate" | "Slider" | "Switch" | "Upload" | "TreeSelect" | "TimePicker" | "AutoComplete" | "Tag" | "Mentions" | "Divider" | "AvatarGroup" | "Corn";
export type CustomBtn = {
    text: string;
    props?: ButtonProps;
    outterStyle?: CSSProperties;
    style?: CSSProperties;
};
export type FormBtnProps = {
    doCheck?: () => Promise<boolean>;
    model?: Record<string, any>;
    event?: MouseEvent;
};
export type FormCustomBtn = CustomBtn & {
    onClick: (props: FormBtnProps) => void;
};
export type FuncBtnProps = {
    doCheck: () => Promise<boolean>;
    model: Record<string, any>;
    close: () => void;
    event?: MouseEvent;
};
export type FuncCustomBtn = CustomBtn & {
    onClick: (props: FuncBtnProps) => void;
};
export type ModalClickFnProps = {
    model: Record<string, any>;
    close: () => void;
    event: MouseEvent;
};
export type ModalClickFn = (props: ModalClickFnProps) => void;
export type DyFormItem = {
    label: string;
    field: string;
    component: InnerComponent | Component;
    componentProps?: {
        style?: Partial<CSSStyleDeclaration>;
        className?: string;
        type?: string;
        allowClear?: boolean;
        showCount?: boolean;
        maxlength?: number;
        autoSize?: boolean | {
            minRows: number;
            maxRows: number;
        };
        options?: OptionsGetter;
        allowHalf?: boolean;
        autofocus?: boolean;
        character?: string;
        count?: number;
        disabled?: boolean;
        tooltips?: string[];
        dots?: boolean;
        included?: boolean;
        max?: number;
        min?: number;
        marks?: Record<number, string>;
        range?: boolean;
        reverse?: boolean;
        step?: number;
        vertical?: boolean;
        tipFormatter?: (value: number) => string;
        tooltipPlacement?: "top" | "left" | "right" | "bottom";
        tooltipOpen?: boolean;
        getTooltipPopupContainer?: () => HTMLElement;
        checked?: boolean;
        checkedChildren?: string;
        checkedValue?: string | number | boolean;
        loading?: boolean;
        size?: "default" | "small" | "large" | "middle";
        unCheckedChildren?: string;
        unCheckedValue?: string | number | boolean;
        maxCount?: number;
        method?: string;
        multiple?: boolean;
        treeData?: TreeDataGetter;
        defaultValue?: string | number | string[] | number[] | null;
        popupClassName?: string;
        dropdownMatchSelectWidth?: boolean;
        dropdownStyle?: Partial<CSSStyleDeclaration>;
        fieldNames?: TreeSelectProps["fieldNames"];
        filterTreeNode?: TreeSelectProps["filterTreeNode"];
        getPopupContainer?: TreeSelectProps["getPopupContainer"];
        loadData?: TreeSelectProps["loadData"];
        maxTagCount?: number;
        maxTagPlaceholder?: (omittedValues: string[]) => string | VNode;
        notFoundContent?: string;
        placement?: TreeSelectProps["placement"];
        treeLine?: boolean | TreeSelectProps["treeLine"];
        bordered?: boolean;
        clearText?: string;
        disabledTime?: TimePickerProps["disabledTime"];
        format?: string;
        minuteStep?: number;
        placeholder?: string;
        valueFormat?: string;
        fetchList?: (() => Promise<AutoInputList[]> | AutoInputList[]) | AutoInputList[];
        debounce?: number;
        enableSplit?: boolean;
        splitWord?: string;
        title?: string;
        closable?: boolean;
        closeIcon?: VNode | Slot;
        color?: string;
        icon?: VNode | Slot;
        filterOption?: boolean | ((inputValue: string, option: Options) => boolean);
        status?: "success" | "error" | "default" | "processing" | "warning";
        split?: string;
        validateSearch?(text: string, props: MentionsProps): boolean;
        prefix?: string | string[];
        orientation?: "left" | "right" | "center";
        orientationMargin?: number | string;
        plain?: boolean;
        dashed?: boolean;
        danger?: boolean;
        dividerText?: string;
        groupProps?: {
            maxCount?: number;
            maxPopoverPlacement?: "top" | "bottom";
            maxPopoverTrigger?: "hover" | "click" | "focus";
            maxStyle?: Partial<CSSStyleDeclaration>;
            size?: "small" | "default" | "large" | number | {
                xs: number;
                sm: number;
            };
            shape?: "circle" | "square";
        };
        avatarProps?: {
            alt?: string;
            crossOrigin?: "anonymous" | "use-credentials" | "";
            draggable?: boolean;
            gap?: number;
            icon?: VNode | Slot;
            loadError?: () => void;
            shape?: "circle" | "square";
            size?: "small" | "default" | "large" | number | {
                xs: number;
                sm: number;
            };
            srcset?: string;
        };
        avatarGroupValue?: AvatarGroupItem[];
        uploadProps?: UploadProps;
        uploadEvent?: UploadEvents;
        uploadType?: UploadType;
        disabledDate?: (currentDate: Dayjs) => boolean;
        mode?: "time" | "date" | "month" | "year" | "decade";
        picker?: "date" | "week" | "month" | "quarter" | "year";
        popupStyle?: Partial<CSSStyleDeclaration>;
        presets?: {
            label: Slot;
            value: Dayjs;
        }[];
        customProps?: {
            [T: string]: any;
        };
        showTime?: boolean | TimePickerProps["showTime"];
    };
    componentEvent?: {
        [T: string]: Function;
    };
    formItemProps?: {
        className?: string;
        label?: string;
        rules?: Rule[];
        style?: Partial<CSSStyleDeclaration>;
        required?: boolean | ((values: Record<string, any>) => boolean);
        hidden?: boolean | ((values: Record<string, any>) => boolean);
        autoLink?: boolean;
        colon?: boolean;
        extra?: string;
        hasFeedback?: boolean;
        help?: string;
        htmlFor?: string;
        labelAlign?: "left" | "right";
        labelCol?: {
            span: number;
            offset?: number;
        };
        tooltip?: string;
        validateFirst?: boolean;
        validateStatus?: "success" | "warning" | "error" | "validating" | "";
        wrapperCol?: {
            span: number;
            offset?: number;
        };
    };
    value?: string | number | boolean | string[] | number[] | File | File[] | Record<string, any> | dayjs.Dayjs | null;
    next?: (modelValue: Record<string, any> | string | number | boolean | File | string[] | number[] | File[]) => DyForm | undefined | null;
    nextFormStyle?: Partial<CSSStyleDeclaration>;
    onShow?: (modelValue: Record<string, any>) => boolean;
};
export type DyForm = {
    title?: string;
    items: DyFormItem[];
    onSubmit?: (values: Record<string, any>) => void;
    onReset?: () => void;
    formProps?: {
        colon?: boolean;
        disabled?: boolean;
        hideRequiredMark?: boolean;
        labelAlign?: "left" | "right";
        labelCol?: {
            span: number;
            offset?: number;
        };
        labelWrap?: boolean;
        layout?: "horizontal" | "vertical" | "inline";
        name?: string;
        noStyle?: boolean;
        rules?: Rule[];
        scrollToFirstError?: boolean;
        validateOnRuleChange?: boolean;
        validateTrigger?: string | string[];
        wrapperCol?: {
            span: number;
            offset?: number;
        };
    };
    formEvent?: {
        finish?: () => void;
        finishFailed?: () => void;
        submit?: () => void;
        validate?: () => void;
    };
    className?: string;
    customBtns?: FormCustomBtn[];
    customBtnsStyle?: CSSProperties;
};
export type FormConfig = {
    schema: DyForm;
    showBtns?: {
        clearAll: 0 | 1;
        reset: 0 | 1;
        submit: 0 | 1;
    } | boolean;
    init?: Record<string, any>;
    allowDirectClose?: boolean;
    submit?: (values: Record<string, any>, close: Function) => void;
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
