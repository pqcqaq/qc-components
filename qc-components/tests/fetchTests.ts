import { Fetch } from "../utils/useFetch";

// tests
const service = Fetch.createService({
	baseURL: "/api/",
	headers: {
		"Content-Type": "application/json",
	},
});

export type Result<T> = {
	code: number;
	data: T;
	message: string;
};

service.get<Result<any>>("user").then((res) => {
	console.log(res);
});

service.post<Result<any>>("user", { name: "test" }).then((res) => {
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

service.get<Result<any>>("user").then((res) => {
	console.log(res);
});

service.post<Result<any>>("user", { name: "test" }).then((res) => {
	console.log(res);
});

// param
service
	.req<Result<any>>({
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
