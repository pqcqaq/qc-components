export class Fetch {
    /**
     * 默认请求配置
     */
    defaultConfig;
    /**
     * 请求拦截器
     */
    requestInterceptor = [];
    /**
     * 响应拦截器
     */
    responseInterceptor = [];
    /**
     *  构造函数
     * @param defaultConfig 默认请求配置
     */
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
    }
    /**
     *  创建一个请求工具
     * @param defaultConfig  默认请求配置
     * @returns  返回请求工具
     */
    static createService(defaultConfig) {
        return new Fetch(defaultConfig);
    }
    async request(config) {
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
            }
            else {
                paramsStr = Object.keys(params)
                    .map((key) => `${key}=${params[key]}`)
                    .join("&");
            }
            requestUrl += "?" + paramsStr;
        }
        if (config.transformRequest) {
            const { data, headers } = config.transformRequest(config.data, config.headers);
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
                return this.responseInterceptor.reduce(async (data, interceptor) => {
                    return interceptor(await data);
                }, response.json());
            case "text":
                return response.text();
            case "blob":
                return response.blob();
            case "arraybuffer":
                return response.arrayBuffer();
            case "stream":
                return response.body;
            case "document":
                return response.text();
            default:
                return response;
        }
    }
    addRequestInterceptor(interceptor, order) {
        if (order) {
            this.requestInterceptor.splice(order, 0, interceptor);
        }
        else {
            this.requestInterceptor.push(interceptor);
        }
    }
    addResponseInterceptor(interceptor, order) {
        if (order) {
            this.responseInterceptor.splice(order, 0, interceptor);
        }
        else {
            this.responseInterceptor.push(interceptor);
        }
    }
    get(url, config) {
        return this.request({
            ...config,
            url,
            method: "get",
        });
    }
    post(url, data, config) {
        return this.request({
            ...config,
            url,
            method: "post",
            data,
        });
    }
    put(url, data, config) {
        return this.request({
            ...config,
            url,
            method: "put",
            data,
        });
    }
    delete(url, config) {
        return this.request({
            ...config,
            url,
            method: "delete",
        });
    }
    patch(url, data, config) {
        return this.request({
            ...config,
            url,
            method: "patch",
            data,
        });
    }
    head(url, config) {
        return this.request({
            ...config,
            url,
            method: "head",
        });
    }
    options(url, config) {
        return this.request({
            ...config,
            url,
            method: "options",
        });
    }
    connect(url, config) {
        return this.request({
            ...config,
            url,
            method: "connect",
        });
    }
    trace(url, config) {
        return this.request({
            ...config,
            url,
            method: "trace",
        });
    }
    req(config) {
        return this.request(config);
    }
}
//# sourceMappingURL=FetchUtils.js.map