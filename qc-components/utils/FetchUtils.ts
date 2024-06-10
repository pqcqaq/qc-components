import {
	FetchConfig,
	InitFetchConfig,
	RequestInterceptor,
	ResponseInterceptor,
} from "../types";

export class Fetch {
	/**
	 * 默认请求配置
	 */
	private defaultConfig: InitFetchConfig;
	/**
	 * 请求拦截器
	 */
	private requestInterceptor: RequestInterceptor[] = [];
	/**
	 * 响应拦截器
	 */
	private responseInterceptor: ResponseInterceptor[] = [];

	/**
	 *  构造函数
	 * @param defaultConfig 默认请求配置
	 */
	private constructor(defaultConfig: InitFetchConfig) {
		this.defaultConfig = defaultConfig;
	}

	/**
	 *  创建一个请求工具
	 * @param defaultConfig  默认请求配置
	 * @returns  返回请求工具
	 */
	static createService(defaultConfig: InitFetchConfig) {
		return new Fetch(defaultConfig);
	}

	private async request<T = any>(config: FetchConfig): Promise<T> {
		config = { ...this.defaultConfig, ...config };
		// 请求拦截器
		for (const interceptor of this.requestInterceptor) {
			config = await interceptor(config);
		}
		const baseurl = config.baseURL?.endsWith("/")
			? config.baseURL
			: config.baseURL + "/";
		let requestUrl = baseurl ? baseurl + config.url : config.url;
		// 尝试用config中的转换器把params转换成字符串
		let paramsStr = "";
		if (config.params) {
			const params = config.params;
			if (config.paramsSerializer) {
				paramsStr = config.paramsSerializer(params);
			} else {
				paramsStr = Object.keys(params)
					.map((key) => `${key}=${params[key]}`)
					.join("&");
			}
			requestUrl += "?" + paramsStr;
		}

		if (config.transformRequest) {
			const { data, headers } = config.transformRequest(
				config.data,
				config.headers
			);
			config.headers = headers;
			config.data = data;
		}

		const requset = new Request(requestUrl, {
			method: config.method,
			headers: config.headers,
			body: config.data,
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			redirect: "follow",
			referrerPolicy: "no-referrer-when-downgrade",
		});

		// 发送请求
		const response = await fetch(requset);

		if (config.transformResponse) {
			return config.transformResponse(response);
		}

		// 响应拦截器
		// 	responseType?:
		// | "arraybuffer"
		// | "document"
		// | "json"
		// | "text"
		// | "stream"
		// | "blob";
		// responseType存在且为json时，返回json数据，要经过拦截器处理，否则直接返回response
		switch (config.responseType) {
			case "json":
				return this.responseInterceptor.reduce(
					async (data, interceptor) => {
						return interceptor(await data);
					},
					response.json()
				);
			case "text":
				return response.text() as any;
			case "blob":
				return response.blob() as any;
			case "arraybuffer":
				return response.arrayBuffer() as any;
			case "stream":
				return response.body as any;
			case "document":
				return response.text() as any;
			default:
				return response as any;
		}
	}

	public addRequestInterceptor(
		interceptor: RequestInterceptor,
		order?: number
	) {
		if (order) {
			this.requestInterceptor.splice(order, 0, interceptor);
		} else {
			this.requestInterceptor.push(interceptor);
		}
	}

	public addResponseInterceptor(
		interceptor: ResponseInterceptor,
		order?: number
	) {
		if (order) {
			this.responseInterceptor.splice(order, 0, interceptor);
		} else {
			this.responseInterceptor.push(interceptor);
		}
	}

	get<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "get",
		});
	}

	post<T = any>(url: string, data: any, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "post",
			data,
		});
	}

	put<T = any>(url: string, data: any, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "put",
			data,
		});
	}

	delete<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "delete",
		});
	}

	patch<T = any>(url: string, data: any, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "patch",
			data,
		});
	}

	head<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "head",
		});
	}

	options<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "options",
		});
	}

	connect<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "connect",
		});
	}

	trace<T = any>(url: string, config?: FetchConfig): Promise<T> {
		return this.request<T>({
			...config,
			url,
			method: "trace",
		});
	}

	req<T = any>(config: FetchConfig): Promise<T> {
		return this.request<T>(config);
	}
}
