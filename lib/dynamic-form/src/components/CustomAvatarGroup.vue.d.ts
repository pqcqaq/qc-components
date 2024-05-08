import { AvatarGroupItem } from '../index';

type PropType = {
    avatarGroupValue: AvatarGroupItem[] | undefined;
    groupProps: Record<string, any> | undefined;
    avatarProps: Record<string, any> | undefined;
};
declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<PropType>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<PropType>>>, {}, {}>;
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
