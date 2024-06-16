var l = Object.defineProperty;
var m = (n, e, t) => e in n ? l(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var h = (n, e, t) => (m(n, typeof e != "symbol" ? e + "" : e, t), t);
class p {
  /**
   *  构造函数
   * @param defaultConfig 默认请求配置
   */
  constructor(e) {
    /**
     * 默认请求配置
     */
    h(this, "defaultConfig");
    /**
     * 请求拦截器
     */
    h(this, "requestInterceptor", []);
    /**
     * 响应拦截器
     */
    h(this, "responseInterceptor", []);
    this.defaultConfig = e;
  }
  /**
   *  创建一个请求工具
   * @param defaultConfig  默认请求配置
   * @returns  返回请求工具
   */
  static createService(e) {
    return new p(e);
  }
  async request(e) {
    var d;
    e = { ...this.defaultConfig, ...e };
    for (const r of this.requestInterceptor)
      e = await r(e);
    const t = (d = e.baseURL) != null && d.endsWith("/") ? e.baseURL : e.baseURL + "/";
    let s = t ? t + e.url : e.url, o = "";
    if (e.params) {
      const r = e.params;
      e.paramsSerializer ? o = e.paramsSerializer(r) : o = Object.keys(r).map((u) => `${u}=${r[u]}`).join("&"), s += "?" + o;
    }
    if (e.transformRequest) {
      const { data: r, headers: u } = e.transformRequest(e.data, e.headers);
      e.headers = u, e.data = r;
    }
    const c = new Request(s, {
      method: e.method,
      headers: e.headers,
      body: e.data,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer-when-downgrade"
    }), a = await fetch(c);
    if (e.transformResponse)
      return e.transformResponse(a);
    switch (e.responseType) {
      case "json":
        return this.responseInterceptor.reduce(async (r, u) => u(await r), a.json());
      case "text":
        return a.text();
      case "blob":
        return a.blob();
      case "arraybuffer":
        return a.arrayBuffer();
      case "stream":
        return a.body;
      case "document":
        return a.text();
      default:
        return a;
    }
  }
  addRequestInterceptor(e, t) {
    t ? this.requestInterceptor.splice(t, 0, e) : this.requestInterceptor.push(e);
  }
  addResponseInterceptor(e, t) {
    t ? this.responseInterceptor.splice(t, 0, e) : this.responseInterceptor.push(e);
  }
  get(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "get"
    });
  }
  post(e, t, s) {
    return this.request({
      ...s,
      url: e,
      method: "post",
      data: t
    });
  }
  put(e, t, s) {
    return this.request({
      ...s,
      url: e,
      method: "put",
      data: t
    });
  }
  delete(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "delete"
    });
  }
  patch(e, t, s) {
    return this.request({
      ...s,
      url: e,
      method: "patch",
      data: t
    });
  }
  head(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "head"
    });
  }
  options(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "options"
    });
  }
  connect(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "connect"
    });
  }
  trace(e, t) {
    return this.request({
      ...t,
      url: e,
      method: "trace"
    });
  }
  req(e) {
    return this.request(e);
  }
}
export {
  p as Fetch
};
