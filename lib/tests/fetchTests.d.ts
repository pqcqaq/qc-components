export type Result<T> = {
    code: number;
    data: T;
    message: string;
};
export declare const request: <T = any>(config: import('../types').FetchConfig) => Promise<T>;
