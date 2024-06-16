import { App } from 'vue';

export * from './types';
export * from './dynamic-form';
export * from './easy-table';
export * from './manage-page';
export declare const version = "1.1.1";
export declare function install(app: App): void;
declare const _default: {
    install: typeof install;
    version: string;
};
export default _default;
