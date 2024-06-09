//utils--------------
export type InitFetchConfig = {
	/**
	 * 请求的URL
	 */
	url?: string;
	/**
	 * 请求方法
	 */
	method?:
		| "get"
		| "post"
		| "put"
		| "delete"
		| "patch"
		| "head"
		| "options"
		| "connect"
		| "trace";
	/**
	 * 用于请求的服务器 URL
	 */
	baseURL?: string;
	/**
	 *  允许在向服务器发送前，修改请求数据
	 * @param data  请求数据
	 * @param headers   请求头
	 * @returns  返回修改后的请求数据
	 */
	transformRequest?: (
		data: any,
		headers: Record<string, string> | undefined
	) => { data: any; headers: Record<string, string> | undefined };
	/**
	 *  允许在传递给 then/catch 前，修改响应数据
	 * @param data 响应数据
	 * @returns  返回修改后的响应数据
	 */
	transformResponse?: (data: any) => any;
	/**
	 * 自定义请求头
	 */
	headers?: Record<string, string>;
	/**
	 * 与请求一起发送的 URL 参数
	 */
	params?: any;
	/**
	 *  用于序列化`params`
	 * @param params  请求参数
	 * @returns  返回序列化后的参数
	 */
	paramsSerializer?: (params: Record<string, string>) => string;
	/**
	 * 作为请求体被发送的数据
	 */
	data?: any;
	/**
	 * 请求超时的毫秒数
	 */
	timeout?: number;
	/**
	 * 跨域请求时是否需要使用凭证
	 */
	withCredentials?: boolean;
	/**
	 *  允许自定义处理请求
	 * @param config  请求配置
	 * @returns  返回一个 promise 并提供一个有效的响应
	 */
	adapter?: (config: FetchConfig) => any;
	/**
	 * HTTP Basic Auth
	 */
	auth?: {
		username: string;
		password: string;
	};
	/**
	 * 表示浏览器将要响应的数据类型
	 */
	responseType?:
		| "arraybuffer"
		| "document"
		| "json"
		| "text"
		| "stream"
		| "blob";
	/**
	 * 表示用于解码响应的编码
	 */
	responseEncoding?: string;
	// /**
	//  * xsrf token 的值，被用作 cookie 的名称
	//  */
	// xsrfCookieName?: string;
	// /**
	//  * 带有 xsrf token 值的http 请求头名称
	//  */
	// xsrfHeaderName?: string;
	/**
	 *  允许为上传处理进度事件
	 * @param progressEvent     进度事件
	 * @returns  处理原生进度事件
	 */
	onUploadProgress?: (progressEvent: any) => void;
	/**
	 *  允许为下载处理进度事件
	 * @param progressEvent   进度事件
	 * @returns  处理原生进度事件
	 */
	onDownloadProgress?: (progressEvent: any) => void;
	/**
	 *  定义了node.js中允许的HTTP响应内容的最大字节数
	 */
	maxContentLength?: number;
	/**
	 * 定义允许的http请求内容的最大字节数
	 */
	maxBodyLength?: number;
	/**
	 *  对于给定的 HTTP状态码是 resolve 还是 reject promise
	 * @param status HTTP状态码
	 * @returns  对于给定的 HTTP状态码是 resolve 还是 reject promise
	 */
	validateStatus?: (status: number) => boolean;
	/**
	 * 定义了在node.js中要遵循的最大重定向数
	 */
	maxRedirects?: number;
	/**
	 * 定义了在node.js中使用的UNIX套接字
	 */
	socketPath?: string;
	/**
	 * 允许自定义处理请求
	 */
	httpAgent?: any;
	/**
	 * 允许自定义处理请求
	 */
	httpsAgent?: any;
	/**
	 * 定义了代理服务器的主机名，端口和协议
	 */
	proxy?: {
		protocol: string;
		host: string;
		port: number;
		auth?: {
			username: string;
			password: string;
		};
	};
	/**
	 * 取消请求
	 */
	cancelToken?: any;
	/**
	 * 是否自动解压响应体
	 */
	decompress?: boolean;
};

export type FetchConfig = InitFetchConfig & {
	url: string;
};

export type FetchParam = Request;

export type ResponseType = {
	arraybuffer: ArrayBuffer;
	blob: Blob;
	body: ReadableStream<Uint8Array>;
	bodyUsed: boolean;
	clone: () => Response;
	formData: FormData;
	headers: Headers;
	json: () => Promise<any>;
	ok: boolean;
	redirected: boolean;
	status: number;
	statusText: string;
	text: () => Promise<string>;
	type: ResponseType;
	url: string;
};

export type RequestInterceptor = (config: FetchConfig) => Promise<FetchConfig>;
export type ResponseInterceptor<T = any> = (data: T) => Promise<T>;

export type FetchInstance = {
	defaultConfig: InitFetchConfig;
	requestInterceptor: RequestInterceptor[];
	responseInterceptor: ResponseInterceptor[];
	request: <T = any>(config: FetchConfig) => Promise<T>;
	addRequestInterceptor: (
		interceptor: RequestInterceptor,
		order?: number
	) => void;
	addResponseInterceptor: (
		interceptor: ResponseInterceptor,
		order?: number
	) => void;
	get: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	post: <T = any>(url: string, data: any, config?: FetchConfig) => Promise<T>;
	put: <T = any>(url: string, data: any, config?: FetchConfig) => Promise<T>;
	delete: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	patch: <T = any>(
		url: string,
		data: any,
		config?: FetchConfig
	) => Promise<T>;
	head: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	options: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	connect: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	trace: <T = any>(url: string, config?: FetchConfig) => Promise<T>;
	req: <T = any>(config: FetchConfig) => Promise<T>;
};
