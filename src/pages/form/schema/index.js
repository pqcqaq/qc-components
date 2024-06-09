import { message } from "ant-design-vue";
// import { Slot, VNode } from "vue";
const getOption = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 模拟50%的概率失败
            const random = Math.random();
            if (random < 0.8) {
                resolve([
                    {
                        value: "111111",
                        label: "111111",
                    },
                    {
                        value: "222222",
                        label: "222222",
                    },
                    {
                        value: "333333",
                        label: "333333",
                    },
                    {
                        value: "444444",
                        label: "444444",
                    },
                ]);
            }
            else {
                reject("Failed to get options.");
            }
        }, 200);
    });
};
export const schema = {
    title: "dynamicForm",
    formProps: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
        hideRequiredMark: false,
    },
    items: [
        // input
        {
            label: "姓名",
            field: "name",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入姓名",
            },
            value: "百里守约",
            next: (model) => {
                if (model == "百里守约") {
                    return {
                        items: [
                            {
                                label: "武器",
                                field: "weapon",
                                component: "Text",
                                componentProps: {
                                    allowClear: true,
                                    showCount: true,
                                    maxlength: 80,
                                    style: {
                                        width: "350px",
                                    },
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "武器只能是ABCDE中的一个",
                                            trigger: "blur",
                                            type: "enum",
                                            enum: ["A", "B", "C", "D", "E"],
                                        },
                                    ],
                                    style: {
                                        marginTop: "10px",
                                    },
                                    labelCol: { span: 3 },
                                },
                            },
                        ],
                    };
                }
            },
        },
        // radio
        {
            label: "性别",
            field: "sex",
            component: "Radio",
            componentProps: {
                options: [
                    { value: 1, label: "男" },
                    { value: 2, label: "女" },
                    { value: 3, label: "保密" },
                ],
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择性别",
                        trigger: "blur",
                    },
                ],
                hidden: false,
            },
            value: 1,
            next: (model) => {
                if (model == 1) {
                    return {
                        items: [
                            {
                                label: "男生邮箱",
                                field: "email",
                                component: "Text",
                                componentProps: {
                                    allowClear: true,
                                    showCount: true,
                                    maxlength: 80,
                                    style: {
                                        width: "350px",
                                    },
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "格式不正确",
                                            trigger: "blur",
                                            type: "email",
                                        },
                                    ],
                                    style: {
                                        marginTop: "10px",
                                    },
                                },
                            },
                        ],
                    };
                }
                else if (model == 2) {
                    return {
                        items: [
                            {
                                label: "女生邮箱",
                                field: "email",
                                component: "Text",
                                componentProps: {
                                    allowClear: true,
                                    showCount: true,
                                    maxlength: 80,
                                    style: {
                                        width: "350px",
                                    },
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "格式不正确",
                                            trigger: "blur",
                                            type: "email",
                                        },
                                    ],
                                    style: {
                                        marginTop: "10px",
                                    },
                                },
                            },
                        ],
                    };
                }
                else if (model == 3) {
                    return {
                        items: [
                            {
                                label: "保密邮箱",
                                field: "email",
                                component: "Text",
                                componentProps: {
                                    allowClear: true,
                                    showCount: true,
                                    maxlength: 80,
                                    style: {
                                        width: "350px",
                                    },
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "格式不正确",
                                            trigger: "blur",
                                            type: "email",
                                        },
                                    ],
                                    style: {
                                        marginTop: "10px",
                                    },
                                },
                            },
                        ],
                    };
                }
            },
        },
        // async radio
        {
            label: "异步选择",
            field: "async-test",
            component: "Radio",
            componentProps: {
                options: () => getOption(),
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择性别",
                        trigger: "blur",
                    },
                ],
            },
            value: 1,
        },
        // number
        {
            label: "年龄",
            field: "age",
            component: "Number",
            componentProps: {
                allowClear: true,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入年龄",
                        trigger: "blur",
                    },
                ],
            },
        },
        // datepicker
        {
            label: "生日",
            field: "birthday",
            component: "DatePicker",
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "生日日期不能为空",
                        trigger: "blur",
                    },
                ],
            },
            componentProps: {
                format: "YYYY-MM-DD",
                valueFormat: "YYYY-MM-DD",
            },
        },
        // timepicker
        {
            label: "时间",
            field: "time",
            component: "TimePicker",
            componentProps: {
                format: "HH:mm:ss",
                valueFormat: "HH:mm:ss",
                tooltips: ["选择时间"],
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择时间",
                        trigger: "blur",
                    },
                ],
            },
        },
        // checkbox
        {
            label: "兴趣",
            field: "hobby",
            component: "Checkbox",
            componentProps: {
                options: [
                    { value: 1, label: "足球" },
                    { value: 2, label: "篮球" },
                    { value: 3, label: "排球" },
                ],
            },
        },
        // async checkbox
        {
            label: "异步多选",
            field: "async-checkbox",
            component: "Checkbox",
            componentProps: {
                options: () => getOption(),
            },
        },
        // select
        {
            label: "固定国家选择",
            field: "country",
            component: "Select",
            componentProps: {
                allowClear: true,
                options: [
                    { value: "中国", label: "中国" },
                    { value: "美国", label: "美国" },
                    { value: "日本", label: "日本" },
                    { value: "韩国", label: "韩国" },
                ],
            },
        },
        // async select
        {
            label: "异步国家选择",
            field: "async-country",
            component: "Select",
            componentProps: {
                allowClear: true,
                options: () => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve([
                                { value: "中国", label: "中国" },
                                { value: "美国", label: "美国" },
                                { value: "日本", label: "日本" },
                                { value: "韩国", label: "韩国" },
                            ]);
                        }, 1000);
                    });
                },
            },
        },
        // textarea
        {
            label: "简介",
            field: "desc",
            component: "Textarea",
            componentProps: {
                allowClear: true,
                autoSize: {
                    minRows: 4,
                    maxRows: 4,
                },
                maxlength: 200,
                showCount: true,
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入简介",
                        trigger: "blur",
                    },
                ],
            },
        },
        // switch
        {
            label: "是否开启",
            field: "switch",
            component: "Switch",
            componentProps: {
                checkedChildren: "开",
                unCheckedChildren: "关",
            },
            value: true,
            next: (model) => {
                if (model) {
                    return {
                        className: "custom-form one-form",
                        items: [
                            {
                                label: "开启时间",
                                field: "openTime",
                                component: "TimePicker",
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择开启时间",
                                            trigger: "blur",
                                        },
                                    ],
                                    style: {
                                        display: "inline-block",
                                    },
                                    className: "one-form-items",
                                },
                                componentProps: {
                                    format: "HH:mm:ss",
                                    valueFormat: "HH:mm:ss",
                                    tooltips: ["选择时间"],
                                },
                                next: (model) => {
                                    if (model > "06:00:00") {
                                        return {
                                            className: "custom-form",
                                            items: [
                                                {
                                                    label: "关闭时间",
                                                    field: "closeTime",
                                                    component: "TimePicker",
                                                    formItemProps: {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "请选择关闭时间",
                                                                trigger: "blur",
                                                            },
                                                        ],
                                                        style: {
                                                            display: "inline-block",
                                                        },
                                                    },
                                                    componentProps: {
                                                        format: "HH:mm:ss",
                                                        valueFormat: "HH:mm:ss",
                                                        tooltips: ["选择时间"],
                                                    },
                                                    next: (model) => {
                                                        if (model > "18:00:00") {
                                                            return {
                                                                className: "custom-form",
                                                                items: [
                                                                    {
                                                                        label: "关闭原因",
                                                                        field: "closeReason",
                                                                        component: "Text",
                                                                        componentProps: {
                                                                            allowClear: true,
                                                                            showCount: true,
                                                                            maxlength: 80,
                                                                            style: {
                                                                                width: "350px",
                                                                            },
                                                                        },
                                                                        formItemProps: {
                                                                            rules: [
                                                                                {
                                                                                    required: true,
                                                                                    message: "请输入关闭原因",
                                                                                    trigger: "blur",
                                                                                    type: "string",
                                                                                },
                                                                            ],
                                                                            style: {
                                                                                display: "inline-block",
                                                                            },
                                                                        },
                                                                    },
                                                                ],
                                                            };
                                                        }
                                                    },
                                                },
                                            ],
                                        };
                                    }
                                },
                            },
                        ],
                    };
                }
            },
        },
        // slider
        {
            label: "滑块",
            field: "slider",
            component: "Slider",
            componentProps: {
                min: 0,
                max: 100,
                marks: {
                    0: "0%",
                    50: "50%",
                    100: "100%",
                },
            },
            next: (model) => {
                if ((model || 0) > 50) {
                    return {
                        items: [
                            {
                                label: "提示信息",
                                field: "tip",
                                component: "Tag",
                                componentProps: {
                                    bordered: true,
                                    color: "red",
                                    size: "large",
                                },
                                value: "你选中的值已经超过50",
                            },
                        ],
                    };
                }
            },
        },
        // avatar
        {
            label: "头像",
            field: "avatar",
            component: "Upload",
            componentProps: {
                uploadProps: {
                    accept: "image/*",
                    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                    maxCount: 1,
                    multiple: false,
                    listType: "picture-card",
                    customRequest: (info) => {
                        setTimeout(() => {
                            info.onSuccess("ok", info.file);
                        }, 1000);
                    },
                },
                uploadType: "Image",
            },
            value: [],
        },
        // images
        {
            label: "图片",
            field: "images",
            component: "Upload",
            componentProps: {
                uploadProps: {
                    accept: "image/*",
                    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                    maxCount: 5,
                    multiple: true,
                    listType: "picture",
                },
                uploadType: "Dragger",
            },
        },
        // rate
        {
            label: "评分",
            field: "rate",
            component: "Rate",
            componentProps: {
                count: 10,
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请评分",
                        trigger: "blur",
                    },
                ],
            },
        },
        // treedata
        {
            label: "树形选择",
            field: "tree",
            component: "TreeSelect",
            componentProps: {
                treeData: [
                    {
                        title: "Node1",
                        value: "0-0",
                        children: [
                            {
                                title: "Child Node1",
                                value: "0-0-0",
                            },
                        ],
                    },
                    {
                        title: "Node2",
                        value: "0-1",
                        children: [
                            {
                                title: "Child Node3",
                                value: "0-1-0",
                            },
                        ],
                    },
                ],
                multiple: true,
            },
        },
        // async treeSelect
        {
            label: "异步树形选择",
            field: "async-tree",
            component: "TreeSelect",
            componentProps: {
                treeData: () => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve([
                                {
                                    title: "Node1",
                                    value: "0-0",
                                    children: [
                                        {
                                            title: "Child Node1",
                                            value: "0-0-0",
                                        },
                                    ],
                                },
                                {
                                    title: "Node2",
                                    value: "0-1",
                                    children: [
                                        {
                                            title: "Child Node3",
                                            value: "0-1-0",
                                        },
                                    ],
                                },
                            ]);
                        }, 1000);
                    });
                },
                multiple: true,
            },
        },
        //AutoComplete
        {
            label: "自动补全",
            field: "autoComplete",
            component: "AutoComplete",
            componentProps: {
                fetchList: () => {
                    return [
                        {
                            value: "百里守约",
                        },
                        {
                            value: "安琪拉",
                        },
                        {
                            value: "李白",
                        },
                        {
                            value: "韩信",
                        },
                    ];
                },
                enableSplit: false,
                splitWord: "，",
                title: "角色",
                style: {
                    width: "400px",
                },
                allowClear: true,
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择",
                        trigger: "blur",
                    },
                ],
            },
        },
        //AutoComplete color
        {
            label: "自动补全",
            field: "autoCompleteColor",
            component: "AutoComplete",
            componentProps: {
                fetchList: [
                    {
                        value: "红色",
                    },
                    {
                        value: "绿色",
                    },
                    {
                        value: "蓝色",
                    },
                    {
                        value: "黄色",
                    },
                ],
                enableSplit: true,
                splitWord: "，",
                title: "颜色",
                style: {
                    width: "400px",
                },
                allowClear: true,
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请选择",
                        trigger: "blur",
                    },
                ],
            },
            next: (model) => {
                if ((model || "").includes("蓝色")) {
                    return {
                        items: [
                            {
                                label: "选择类型",
                                field: "type",
                                component: "AutoComplete",
                                componentProps: {
                                    fetchList: [
                                        {
                                            value: "类型1",
                                        },
                                        {
                                            value: "类型2",
                                        },
                                        {
                                            value: "类型3",
                                        },
                                        {
                                            value: "类型4",
                                        },
                                    ],
                                    enableSplit: true,
                                    splitWord: "，",
                                    title: "类型",
                                    allowClear: true,
                                    style: {
                                        width: "350px",
                                    },
                                },
                                formItemProps: {
                                    rules: [
                                        {
                                            required: true,
                                            message: "请选择",
                                            trigger: "blur",
                                        },
                                    ],
                                    style: {
                                        width: "400px",
                                    },
                                },
                            },
                        ],
                    };
                }
            },
        },
    ],
    onSubmit: async (model) => {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                console.log("model", model);
                resolve(model);
            }, 1000);
        });
        const string = JSON.stringify(data);
        console.log(string);
        message.success("提交成功" + string);
    },
};
export const test = {
    title: "dynamicForm",
    items: [
        // 姓名班级学号
        {
            label: "头像",
            field: "avatar",
            component: "Upload",
            componentProps: {
                uploadProps: {
                    accept: "image/*",
                    maxCount: 1,
                    multiple: false,
                    listType: "picture-card",
                    customRequest: async (info) => {
                        new Promise((resolve) => {
                            const fr = new FileReader();
                            fr.onload = (e) => {
                                resolve(e.target?.result);
                            };
                            fr.readAsDataURL(info.file);
                        })
                            .then((data) => {
                            console.log("base64: ", data);
                            if (testAvatarGroup.items[0]?.componentProps
                                ?.avatarGroupValue?.[0]) {
                                testAvatarGroup.items[0].componentProps.avatarGroupValue[0].src =
                                    data;
                            }
                            info.onSuccess?.(data);
                        })
                            .catch((e) => {
                            info.onError?.(e);
                        });
                    },
                },
                uploadType: "Image",
                // 将元素居中放置
                style: {
                    display: "flex",
                    justifyContent: "center",
                },
            },
            value: [],
        },
        {
            label: "姓名",
            field: "name",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入姓名",
            },
        },
        // 班级
        {
            label: "班级",
            field: "class",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入班级",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入班级",
            },
        },
        // 学号
        {
            label: "学号",
            field: "studentId",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入学号",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入学号",
            },
        },
        // devider
        {
            label: "",
            field: "divider",
            component: "Divider",
            componentProps: {
                orientation: "center",
                orientationMargin: "10px",
                dividerText: "下面是@用户组件",
            },
        },
        //Mentions
        {
            label: "Mentions",
            field: "mentions",
            component: "Mentions",
            componentProps: {
                allowClear: true,
                placeholder: "输入 @ 触发",
                prefix: ["@"],
                autofocus: true,
                options: [
                    {
                        value: "百里守约",
                        label: "百里守约",
                    },
                    {
                        value: "安琪拉",
                        label: "安琪拉",
                    },
                    {
                        value: "李白",
                        label: "李白",
                    },
                    {
                        value: "韩信",
                        label: "韩信",
                    },
                ],
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入内容",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入内容",
            },
        },
    ],
};
export const cornSchema = {
    title: "dynamicForm",
    items: [
        {
            label: "Corn",
            field: "corn",
            component: "Corn",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入Corn",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入Corn",
            },
        },
    ],
};
// export const testSlot: Slot = (): VNode[] => {
// 	return [
// 		{
// 			type: "div",
// 			props: {
// 				class: "slot",
// 			},
// 			children: {
// 				type: "p",
// 				props: {
// 					class: "slot-title",
// 				},
// 				children: "这是一个插槽",
// 			},
// 			key: "slot",
// 			ref: null,
// 			scopeId: null,
// 			component: null,
// 			dirs: [],
// 			transition: null,
// 			el: null,
// 			anchor: null,
// 			target: null,
// 			targetAnchor: null,
// 			suspense: null,
// 			shapeFlag: 4,
// 			patchFlag: 16,
// 			appContext: null,
// 		},
// 	];
// };
export const testAvatarGroup = {
    items: [
        {
            label: "AvatarGroup",
            field: "avatarGroup",
            component: "AvatarGroup",
            componentProps: {
                groupProps: {
                    maxCount: 2,
                    maxPopoverPlacement: "bottom",
                },
                avatarProps: {
                    size: 64,
                    shape: "square",
                    crossOrigin: "anonymous",
                },
                avatarGroupValue: [
                    {
                        key: "W",
                        src: "",
                        label: "Lily",
                    },
                    {
                        key: "A",
                        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                        label: "Lily",
                    },
                    {
                        key: "B",
                        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                        label: "Lily",
                    },
                ],
            },
        },
    ],
};
export const testInline = {
    title: "testInline",
    formProps: {
        hideRequiredMark: false,
        layout: "inline",
    },
    items: [
        {
            label: "姓名",
            field: "name",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入姓名",
            },
        },
        {
            label: "班级",
            field: "class",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入班级",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入班级",
            },
        },
        {
            label: "学号",
            field: "studentId",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "400px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入学号",
                        trigger: "blur",
                    },
                ],
                colon: false,
                tooltip: "在这里输入学号",
            },
        },
    ],
    customBtns: [
        {
            text: "自定义按钮",
            onClick: (model, event) => {
                console.log(model);
                console.log(event);
            },
            style: {
                marginTop: "10px",
            },
        },
        {
            text: "自定义按钮2",
            onClick: (model, event) => {
                console.log(model);
                console.log(event);
            },
            props: {
                type: "primary",
            },
            style: {
                marginTop: "10px",
            },
        },
        {
            text: "自定义按钮3",
            onClick: (model, event) => {
                console.log(model);
                console.log(event);
            },
            props: {
                type: "primary",
                danger: true,
            },
            style: {
                marginTop: "10px",
            },
        },
    ],
};
export const testCustomBtnsSchema = {
    title: "test",
    items: [
        {
            label: "姓名",
            field: "name",
            component: "Text",
        },
        {
            label: "选项",
            field: "select",
            component: "Select",
            value: 1,
            componentProps: {
                options: [
                    {
                        value: 1,
                        label: "选项1",
                    },
                    {
                        value: 2,
                        label: "选项2",
                    },
                ],
            }
        },
    ],
};
//# sourceMappingURL=index.js.map