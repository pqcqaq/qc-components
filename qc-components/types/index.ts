import {
	ButtonProps,
	MentionsProps,
	SelectProps,
	TimePickerProps,
	TreeSelectProps,
	UploadChangeParam,
	UploadProps,
} from "ant-design-vue";
import { Rule } from "ant-design-vue/es/form";
import dayjs, { Dayjs } from "dayjs";
import { CSSProperties, Component, Slot, StyleValue, VNode } from "vue";

export type Options = Array<{
	label: string;
	value: string | number;
	disabled?: boolean;
	class?: string;
	style?: Partial<CSSStyleDeclaration>;
	payload?: Record<string, any>;
}>;

export type DefaultOptions = SelectProps["options"];

export type OptionsGetter = Options | (() => Options | Promise<Options>);

export type TreeDataGetter =
	| TreeSelectProps["treeData"]
	| (() =>
			| TreeSelectProps["treeData"]
			| Promise<TreeSelectProps["treeData"]>);

export type AutoInputList = {
	label?: string;
	value: string;
};

export type AvatarGroupItem = {
	key: string | number;
	src: string;
	label?: string;
};

export type UploadType = "Button" | "Dragger" | "Image";

export type UploadEvents = {
	change?: (file: UploadChangeParam) => void;
	remove?: (file: File) => void;
	download?: (file: File) => void;
	drop?: (e: DragEvent) => void;
	preview?: (file: File) => void;
	reject?: (file: File) => void;
};

export type InnerComponent =
	| "Text"
	| "Password"
	| "Textarea"
	| "Number"
	| "Select"
	| "Radio"
	| "Checkbox"
	| "DatePicker"
	| "Rate"
	| "Slider"
	| "Switch"
	| "Upload"
	| "TreeSelect"
	| "TimePicker"
	| "AutoComplete"
	| "Tag"
	| "Mentions"
	| "Divider"
	| "AvatarGroup"
	| "Corn";

export type CustomBtn = {
	text: string;
	props?: ButtonProps;
	outterStyle?: CSSProperties;
	style?: CSSProperties;
};

export type FormBtnProps = {
	doCheck?: () => Promise<boolean>;
	model?: Record<string, any>;
	event?: MouseEvent;
};

export type FormCustomBtn = CustomBtn & {
	onClick: (props: FormBtnProps) => void;
};

export type FuncBtnProps = {
	doCheck: () => Promise<boolean>;
	model: Record<string, any>;
	close: () => void;
	event?: MouseEvent;
};

export type FuncCustomBtn = CustomBtn & {
	onClick: (props: FuncBtnProps) => void;
};

export type ModalClickFnProps = {
	model: Record<string, any>;
	close: () => void;
	event: MouseEvent;
};

export type ModalClickFn = (props: ModalClickFnProps) => void;

export type DyFormItem = {
	label: string;
	field: string;
	component: InnerComponent | Component;
	componentProps?: {
		style?: Partial<CSSStyleDeclaration>;
		className?: string;
		type?: string;
		allowClear?: boolean;
		showCount?: boolean;
		maxlength?: number;
		autoSize?: boolean | { minRows: number; maxRows: number };
		options?: OptionsGetter;
		allowHalf?: boolean;
		autofocus?: boolean;
		character?: string;
		count?: number;
		disabled?: boolean;
		tooltips?: string[];
		dots?: boolean;
		included?: boolean;
		max?: number;
		min?: number;
		marks?: Record<number, string>;
		range?: boolean;
		reverse?: boolean;
		step?: number;
		vertical?: boolean;
		tipFormatter?: (value: number) => string;
		tooltipPlacement?: "top" | "left" | "right" | "bottom";
		tooltipOpen?: boolean;
		getTooltipPopupContainer?: () => HTMLElement;
		checked?: boolean;
		checkedChildren?: string;
		checkedValue?: string | number | boolean;
		loading?: boolean;
		size?: "default" | "small" | "large" | "middle";
		unCheckedChildren?: string;
		unCheckedValue?: string | number | boolean;
		maxCount?: number;
		method?: string;
		multiple?: boolean;
		treeData?: TreeDataGetter;
		defaultValue?: string | number | string[] | number[] | null;
		popupClassName?: string;
		dropdownMatchSelectWidth?: boolean;
		dropdownStyle?: Partial<CSSStyleDeclaration>;
		fieldNames?: TreeSelectProps["fieldNames"];
		filterTreeNode?: TreeSelectProps["filterTreeNode"];
		getPopupContainer?: TreeSelectProps["getPopupContainer"];
		loadData?: TreeSelectProps["loadData"];
		maxTagCount?: number;
		maxTagPlaceholder?: (omittedValues: string[]) => string | VNode;
		notFoundContent?: string;
		placement?: TreeSelectProps["placement"];
		treeLine?: boolean | TreeSelectProps["treeLine"];
		bordered?: boolean;
		clearText?: string;
		disabledTime?: TimePickerProps["disabledTime"];
		format?: string;
		minuteStep?: number;
		placeholder?: string;
		valueFormat?: string;
		fetchList?:
			| (() => Promise<AutoInputList[]> | AutoInputList[])
			| AutoInputList[];
		debounce?: number;
		enableSplit?: boolean;
		splitWord?: string;
		title?: string;
		closable?: boolean;
		closeIcon?: VNode | Slot;
		color?: string;
		icon?: VNode | Slot;
		filterOption?:
			| boolean
			| ((inputValue: string, option: Options) => boolean);
		status?: "success" | "error" | "default" | "processing" | "warning";
		split?: string;
		validateSearch?(text: string, props: MentionsProps): boolean;
		prefix?: string | string[];
		orientation?: "left" | "right" | "center";
		orientationMargin?: number | string;
		plain?: boolean;
		dashed?: boolean;
		danger?: boolean;
		dividerText?: string;
		groupProps?: {
			maxCount?: number;
			maxPopoverPlacement?: "top" | "bottom";
			maxPopoverTrigger?: "hover" | "click" | "focus";
			maxStyle?: Partial<CSSStyleDeclaration>;
			size?:
				| "small"
				| "default"
				| "large"
				| number
				| { xs: number; sm: number };
			shape?: "circle" | "square";
		};
		avatarProps?: {
			alt?: string;
			crossOrigin?: "anonymous" | "use-credentials" | "";
			draggable?: boolean;
			gap?: number;
			icon?: VNode | Slot;
			loadError?: () => void;
			shape?: "circle" | "square";
			size?:
				| "small"
				| "default"
				| "large"
				| number
				| { xs: number; sm: number };
			srcset?: string;
		};
		avatarGroupValue?: AvatarGroupItem[];
		uploadProps?: UploadProps;
		uploadEvent?: UploadEvents;
		uploadType?: UploadType;
		disabledDate?: (currentDate: Dayjs) => boolean;
		mode?: "time" | "date" | "month" | "year" | "decade";
		picker?: "date" | "week" | "month" | "quarter" | "year";
		popupStyle?: Partial<CSSStyleDeclaration>;
		presets?: { label: Slot; value: Dayjs }[];
		customProps?: {
			[T: string]: any;
		};
		showTime?: boolean | TimePickerProps["showTime"];
	};
	componentEvent?: {
		[T: string]: Function;
	};
	formItemProps?: {
		className?: string;
		label?: string;
		rules?: Rule[];
		style?: Partial<CSSStyleDeclaration>;
		required?: boolean | ((values: Record<string, any>) => boolean);
		hidden?: boolean | ((values: Record<string, any>) => boolean);
		autoLink?: boolean;
		colon?: boolean;
		extra?: string;
		hasFeedback?: boolean;
		help?: string;
		htmlFor?: string;
		labelAlign?: "left" | "right";
		labelCol?: { span: number; offset?: number };
		tooltip?: string;
		validateFirst?: boolean;
		validateStatus?: "success" | "warning" | "error" | "validating" | "";
		wrapperCol?: { span: number; offset?: number };
	};
	value?:
		| string
		| number
		| boolean
		| string[]
		| number[]
		| File
		| File[]
		| Record<string, any>
		| dayjs.Dayjs
		| null;
	next?: (
		modelValue:
			| Record<string, any>
			| string
			| number
			| boolean
			| File
			| string[]
			| number[]
			| File[]
	) => DyForm | undefined | null;
	nextFormStyle?: Partial<CSSStyleDeclaration>;
	onShow?: (modelValue: Record<string, any>) => boolean;
};

export type DyForm = {
	title?: string;
	items: DyFormItem[];
	onSubmit?: (values: Record<string, any>) => void;
	onReset?: () => void;
	formProps?: {
		colon?: boolean;
		disabled?: boolean;
		hideRequiredMark?: boolean;
		labelAlign?: "left" | "right";
		labelCol?: { span: number; offset?: number };
		labelWrap?: boolean;
		layout?: "horizontal" | "vertical" | "inline";
		name?: string;
		noStyle?: boolean;
		rules?: Rule[];
		scrollToFirstError?: boolean;
		validateOnRuleChange?: boolean;
		validateTrigger?: string | string[];
		wrapperCol?: { span: number; offset?: number };
	};
	formEvent?: {
		finish?: () => void;
		finishFailed?: () => void;
		submit?: () => void;
		validate?: () => void;
	};
	className?: string;
	customBtns?: FormCustomBtn[];
	customBtnsStyle?: CSSProperties;
};

export type FormConfig = {
	schema: DyForm;
	showBtns?:
		| {
				clearAll: 0 | 1;
				reset: 0 | 1;
				submit: 0 | 1;
		  }
		| boolean;
	init?: Record<string, any>;
	allowDirectClose?: boolean;
	submit?: (values: Record<string, any>, close: Function) => void;
	style?: CSSProperties;
	draggable?: boolean;
	title?: string;
	defaultValues?: Record<string, any>;
	fadeInOut?: boolean;
	fadeTime?: number;
	customBtns?: FuncCustomBtn[];
	showCloseBtn?: boolean;
	onModalClick?: ModalClickFn;
};

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
