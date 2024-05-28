type AutoInputList = {
    label?: string;
    value: string;
};
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    value: string | undefined;
    fetchList: (() => Promise<AutoInputList[]> | AutoInputList[]) | AutoInputList[] | undefined;
    style?: Partial<CSSStyleDeclaration> | undefined;
    enableSplit?: boolean | undefined;
    splitWord?: string | undefined;
    placeholder?: string | undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:value": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    value: string | undefined;
    fetchList: (() => Promise<AutoInputList[]> | AutoInputList[]) | AutoInputList[] | undefined;
    style?: Partial<CSSStyleDeclaration> | undefined;
    enableSplit?: boolean | undefined;
    splitWord?: string | undefined;
    placeholder?: string | undefined;
}>>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
