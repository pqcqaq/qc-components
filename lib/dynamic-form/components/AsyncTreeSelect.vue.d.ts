import { TreeDataGetter } from '../../types';
import { DefaultOptionType } from 'ant-design-vue/es/vc-tree-select/TreeSelect';

type propType = {
    modelValue: string | string[];
    treeData?: DefaultOptionType[] | TreeDataGetter;
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
