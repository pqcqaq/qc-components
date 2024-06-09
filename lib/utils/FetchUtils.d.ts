import { FetchConfig, InitFetchConfig, RequestInterceptor, ResponseInterceptor } from '../types';

export declare class Fetch {
    /**
     * 默认请求配置
     */
    private defaultConfig;
    /**
     * 请求拦截器
     */
    private requestInterceptor;
    /**
     * 响应拦截器
     */
    private responseInterceptor;
    /**
     *  构造函数
     * @param defaultConfig 默认请求配置
     */
    private constructor();
    /**
     *  创建一个请求工具
     * @param defaultConfig  默认请求配置
     * @returns  返回请求工具
     */
    static createService(defaultConfig: InitFetchConfig): Fetch;
    private request;
    addRequestInterceptor(interceptor: RequestInterceptor, order?: number): void;
    addResponseInterceptor(interceptor: ResponseInterceptor, order?: number): void;
    get<T = any>(url: string, config?: FetchConfig): Promise<T>;
    post<T = any>(url: string, data: any, config?: FetchConfig): Promise<T>;
    put<T = any>(url: string, data: any, config?: FetchConfig): Promise<T>;
    delete<T = any>(url: string, config?: FetchConfig): Promise<T>;
    patch<T = any>(url: string, data: any, config?: FetchConfig): Promise<T>;
    head<T = any>(url: string, config?: FetchConfig): Promise<T>;
    options<T = any>(url: string, config?: FetchConfig): Promise<T>;
    connect<T = any>(url: string, config?: FetchConfig): Promise<T>;
    trace<T = any>(url: string, config?: FetchConfig): Promise<T>;
    req<T = any>(config: FetchConfig): Promise<T>;
}
