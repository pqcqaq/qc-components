type propType = {
    modelValue: string;
    options?: {
        value: number | string;
        label: string;
        disabled?: boolean;
        key?: string;
        title?: string;
    }[] | (() => Promise<{
        value: number | string;
        label: string;
        disabled?: boolean;
        key?: string;
        title?: string;
    }[]>) | (() => {
        value: number | string;
        label: string;
    }[]);
};
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<propType>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: (...args: unknown[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<propType>>>, {}, {}>;
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
