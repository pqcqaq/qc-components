import { Fetch } from "../utils/FetchUtils";
// tests
const service = Fetch.createService({
    baseURL: "/api/",
    headers: {
        "Content-Type": "application/json",
    },
});
service.get("user").then((res) => {
    console.log(res);
});
service.post("user", { name: "test" }).then((res) => {
    console.log(res);
});
service.addRequestInterceptor(async (config) => {
    console.log("request interceptor");
    return config;
});
service.addResponseInterceptor(async (data) => {
    console.log("response interceptor");
    return data;
});
service.get("user").then((res) => {
    console.log(res);
});
service.post("user", { name: "test" }).then((res) => {
    console.log(res);
});
// param
service
    .req({
    url: "user",
    params: {
        id: 1,
    },
    method: "get",
})
    .then((res) => {
    console.log(res);
});
export const request = service.req;
//# sourceMappingURL=fetchTests.js.map