# QC-Components

## 一款基于AntdV的 高效开发组件库

- 引入：[@pqcqcqc/qc-components - npm](https://www.npmjs.com/package/@pqcqcqc/qc-components)
- 使用
    - 组件：DynamicForm
    - 函数式调用：useFullScreenDyForm(config*:* FormConfig)
    - 示例站点：[Study Demos (prod) (zust.online)](https://study-demos.zust.online/#/dynamic-form)



更多文档待完善..........



## 组件结构

- ### 重要，这是下面配置的基础

- ![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405271054464.png)

- ### 红色部分：

    - 表单`Form`组件

- ### 绿色部分：

    - 表单标题
    - 按钮或自定义按钮

- ### 黄色部分：

    - 表单项`Form.Item`组件

- ### 蓝色部分：

    - 真实输入框或者内容展示`Component`组件

## Schema

> 一个表单的所有配置，称为Schema。
>
> Schema的不同对应了不同的表单内容。



- 类型信息
    - title（可选）表单的标题，显示在表单组件的最上方。
    
    - items：**（必须）** 表单内的组件，比如输入框等，下面有详细说明。
    
    - onSubmit：（可选）表单提交事件。
        - 入参：表单的输入结果对象**（响应式）**
        - 返回值：void
        
    - onReset：（可选）表单点击重置事件。
    
        - 入参：无
        - 返回值：void
    
    - formProps：表单整体属性
    
        - 常用属性：
    
            - labelCol
            - wrapperCol
        - 其他属性：
    
            - ### Form [#](https://www.antdv.com/components/form#form)
    
                | Property             | Description                                                  | Type                                                         | Default Value | Version |
                | :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------------ | :------ |
                | colon                | change default props colon value of Form.Item (only effective when prop layout is horizontal) | boolean                                                      | true          |         |
                | disabled             | Set form component disable, only available for antdv components | boolean                                                      | false         | 4.0     |
                | hideRequiredMark     | Hide required mark of all form items                         | Boolean                                                      | false         |         |
                | labelAlign           | text align of label of all items                             | 'left' \| 'right'                                            | 'right'       |         |
                | labelCol             | The layout of label. You can set `span` `offset` to something like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` same as with `<Col>` | [object](https://www.antdv.com/components/grid/#col)         |               |         |
                | labelWrap            | whether label can be wrap                                    | boolean                                                      | false         | 3.0     |
                | layout               | Define form layout                                           | 'horizontal'\|'vertical'\|'inline'                           | 'horizontal'  |         |
                | model                | data of form component                                       | object                                                       |               |         |
                | name                 | Form name. Will be the prefix of Field `id`                  | string                                                       | -             | 2.0.0   |
                | noStyle              | No style for `true`, used as a pure field control            | boolean                                                      | false         | 3.0     |
                | rules                | validation rules of form                                     | object                                                       |               |         |
                | scrollToFirstError   | Auto scroll to first failed field when submit                | boolean \| [options](https://github.com/stipsan/scroll-into-view-if-needed/#options) | false         | 2.0.0   |
                | validateOnRuleChange | whether to trigger validation when the `rules` prop is changed | boolean                                                      | true          |         |
                | validateTrigger      | Config field validate trigger                                | string \| string[]                                           | `change`      | 2.0.0   |
                | wrapperCol           | The layout for input controls, same as `labelCol`            | [object](https://www.antdv.com/components/grid/#col)         |               |         |
    
    - formEvent：表单事件
    
        - ### Methods [#](https://www.antdv.com/components/form#methods)
    
            | Method         | Description                                                  | Parameters                                                   | Version |
            | :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ |
            | clearValidate  | clear validation message for certain fields. The parameter is name or an array of names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared | (nameList?: [NamePath](https://www.antdv.com/components/form#namepath)[]) => void |         |
            | resetFields    | reset all the fields and remove validation result            | (nameList?: [NamePath](https://www.antdv.com/components/form#namepath)[]) => void |         |
            | scrollToField  | Scroll to field position                                     | (name: [NamePath](https://www.antdv.com/components/form#namepath), options: [[ScrollOptions](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)]) => void |         |
            | validate       | Validate fields, it is same as validateFields                | (nameList?: [NamePath](https://www.antdv.com/components/form#namepath)[]) => Promise |         |
            | validateFields | Validate fields                                              | (nameList?: [NamePath](https://www.antdv.com/components/form#namepath)[]) => Promise |         |
    
    - className：`Form`组件的类名
    
    - ### customBtns：自定义按钮
    
        - ![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405271102808.png)
    
        - #### 红色部分
    
            - ##### 自定义按钮最外层div
    
        - #### 黄色部分：
    
            - ##### 按钮外围div
    
        - #### 绿色部分：
    
            - ##### 按钮主体
    
        - ### 自定义按钮的类型信息：
    
            - text：按钮文本（同时作为黄色部分div的key，尽量不要重复）
            - onClick：点击事件
    
                - 入参：
                    - model：表单的数据
                    - event？可选：点击事件
                - 返回值：
                    - void
            - props：按钮参数
    
                - Different button styles can be generated by setting Button properties. The recommended order is: `type` -> `shape` -> `size` -> `loading` -> `disabled`.
    
                    | Property | Description                                                  | Type                                                         | Default   | Version |
                    | :------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------- | :------ |
                    | block    | option to fit button width to its parent width               | boolean                                                      | `false`   |         |
                    | danger   | set the danger status of button                              | boolean                                                      | `false`   | 2.2.0   |
                    | disabled | disabled state of button                                     | boolean                                                      | `false`   |         |
                    | ghost    | make background transparent and invert text and border colors | boolean                                                      | `false`   |         |
                    | href     | redirect url of link button                                  | string                                                       | -         |         |
                    | htmlType | set the original html `type` of `button`, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                       | `button`  |         |
                    | icon     | set the icon of button, see: Icon component                  | v-slot                                                       | -         |         |
                    | loading  | set the loading status of button                             | boolean \| { delay: number }                                 | `false`   |         |
                    | shape    | Can be set button shape                                      | `default` | `circle` | `round`                               | `default` |         |
                    | size     | set the size of button                                       | `large` | `middle` | `small`                                 | `middle`  |         |
                    | target   | same as target attribute of a, works when href is specified  | string                                                       | -         |         |
                    | type     | can be set button type                                       | `primary` | `ghost` | `dashed` | `link` | `text` | `default` | `default` |         |
            - outterStyle：黄色部分Style参数
            - style：按钮本体上Style参数
    
    - customBtnsStyle：自定义按钮最外层div样式（红色部分）



- ### 表单项参数

- ![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405271113476.png)

    - label：表单项显示名称

    - field：表单项字段，在表单数据对象中的字段名

    - component：表单项内组件，支持已经有的内置组件或者自定义组件

    - componentProps：表单项内（蓝色部分）组件的参数，根据不同的component，可以传入不同的参数

    - componentEvent：表单项内（蓝色部分）组件的事件参数，如click：() =>{}

    - formItemProps：表单项（黄色部分）参数

        - ### Form.Item [#](https://www.antdv.com/components/form#form-item)

            | Property        | Description                                                  | Type                                                       | Default Value | Version |
            | :-------------- | :----------------------------------------------------------- | :--------------------------------------------------------- | :------------ | :------ |
            | autoLink        | Whether to automatically associate form fields. In most cases, you can use automatic association. If the conditions for automatic association are not met, you can manually associate them. See the notes below. | boolean                                                    | true          |         |
            | colon           | Used with `label`, whether to display `:` after label text.  | boolean                                                    | true          |         |
            | extra           | The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time. | string\|slot                                               |               |         |
            | hasFeedback     | Used with `validateStatus`, this option specifies the validation status icon. Recommended to be used only with `Input`. | boolean                                                    | false         |         |
            | help            | The prompt message. If not provided, the prompt message will be generated by the validation rule. | string\|slot                                               |               |         |
            | htmlFor         | Set sub label `htmlFor`.                                     | string                                                     |               |         |
            | label           | Label text                                                   | string\|slot                                               |               |         |
            | labelAlign      | text align of label                                          | 'left' \| 'right'                                          | 'right'       |         |
            | labelCol        | The layout of label. You can set `span` `offset` to something like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` same as with `<Col>` | [object](https://www.antdv.com/components/grid/#col)       |               |         |
            | name            | a key of `model`. In the use of validate and resetFields method, the attribute is required | [NamePath](https://www.antdv.com/components/form#namepath) |               | 2.0.0   |
            | required        | Whether provided or not, it will be generated by the validation rule. | boolean                                                    | false         |         |
            | rules           | validation rules of form                                     | object \| array                                            |               |         |
            | tooltip         | Config tooltip info                                          | string \| slot                                             |               | 4.0.4   |
            | validateFirst   | Whether stop validate on first rule of error for this field. | boolean                                                    | false         |         |
            | validateStatus  | The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating' | string                                                     |               |         |
            | validateTrigger | When to validate the value of children node                  | string \| string[]                                         | `change`      |         |
            | wrapperCol      | The layout for input controls, same as `labelCol`            | [object](https://www.antdv.com/components/grid/#col)       |               |         |

    - value：表单初始化参数，重置时默认将表单组件设置为这个值

    - next：下一级表单

        - 入参：
            - model ：当前表单项的输入内容
        - 返回值：DyForm动态表单 | undefined | null

    - nextFormStyle：下一级表单的外围div样式

    - onShow：是否显示这个表单项

        - 入参：
            - modelValue：当前表单的完整输入参数
        - 返回值：
            - boolean：为true时显示该表单项，false时不显示该项





## 当前支持的组件

```ts
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
```



### Text组件

<<<<<<< HEAD

=======
![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281537221.png)

##### 示例

- ```ts
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
                // 动态下一级表单
        			next: (model: any): DyForm | undefined => {
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
    ```

- 
>>>>>>> 204bb0431fa9333f31e8136e4e5f80ade0f3f556

​	Input [#](https://www.antdv.com/components/input#input)

| Property       | Description                                                  | Type                 | Default                 | Version |
| :------------- | :----------------------------------------------------------- | :------------------- | :---------------------- | :------ |
| addonAfter     | The label text displayed after (on the right side of) the input field. | string\|slot         |                         |         |
| addonBefore    | The label text displayed before (on the left side of) the input field. | string\|slot         |                         |         |
| allowClear     | allow to remove input content with clear icon                | boolean              |                         |         |
| bordered       | Whether has border style                                     | boolean              | true                    | 4.5.0   |
| clearIcon      | custom clear icon when allowClear                            | slot                 | `<CloseCircleFilled />` | 3.3.0   |
| defaultValue   | The initial input content                                    | string               |                         |         |
| disabled       | Whether the input is disabled.                               | boolean              | false                   |         |
| id             | The ID for input                                             | string               |                         |         |
| maxlength      | max length                                                   | number               |                         | 1.5.0   |
| prefix         | The prefix icon for the Input.                               | string\|slot         |                         |         |
| showCount      | Whether show text count                                      | boolean              | false                   | 3.0     |
| status         | Set validation status                                        | 'error' \| 'warning' | -                       | 3.3.0   |
| size           | The size of the input box. Note: in the context of a form, the `middle` size is used. Available: `large` `middle` `small` | string               | -                       |         |
| suffix         | The suffix icon for the Input.                               | string\|slot         |                         |         |
| type           | The type of input, see: [MDN](https://developer.mozilla.org/docs/Web/HTML/Element/input#Form__types)(use `<a-textarea />` instead of `type="textarea"`) | string               | `text`                  |         |
| value(v-model) | The input content value                                      | string               |                         |         |

### Input Events [#](https://www.antdv.com/components/input#input-events)

| Events Name | Description                                                  | Arguments   |      |
| :---------- | :----------------------------------------------------------- | :---------- | :--- |
| change      | callback when user input                                     | function(e) |      |
| pressEnter  | The callback function that is triggered when Enter key is pressed. | function(e) |      |

> When `Input` is used in a `Form.Item` context, if the `Form.Item` has the `id` and `options` props defined then `value`, `defaultValue`, and `id` props of `Input` are automatically set.



### Password组件

- 与Text组件相同，但指定了type一定为password

- ##### 示例

    - ```ts
        let qspassword = ""
        
        const commonComponentProps = {
          allowClear: true,
          showCount: true,
          maxlength: 30
        }
        
        const passwordAndConfirmPassword: DyFormItem[] = [
          {
            label: "密码",
            field: "password",
            component: "Password",
            formItemProps: {
              rules: [
                { required: true, message: "请输入密码" },
                {
                  min: 5,
                  max: 30,
                  message: "密码长度为5-30位"
                },
                {
                  validator: (_rule: any, value: any) => {
                    qspassword = value
                    return Promise.resolve()
                  }
                }
              ]
            },
            componentProps: commonComponentProps
          },
          {
            label: "确认密码",
            field: "confirmPassword",
            component: "Password",
            formItemProps: {
              rules: [
                { required: true, message: "请输入确认密码" },
                {
                  min: 5,
                  max: 30,
                  message: "密码长度为5-30位"
                },
                {
                  validator: (_rule: any, value: any) => {
                    if (value !== qspassword) {
                      return Promise.reject("两次输入密码不一致")
                    }
                    return Promise.resolve()
                  }
                }
              ]
            },
            componentProps: commonComponentProps
          }
        ]
        ```

    - 



### Textarea组件

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281538233.png)

##### 示例

- ```ts
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
    ```

- 

### TextArea [#](https://www.antdv.com/components/input#textarea)

| Property       | Description                                                  | Type            | Default | Version |      |
| :------------- | :----------------------------------------------------------- | :-------------- | :------ | :------ | :--- |
| allowClear     | allow to remove input content with clear icon                | boolean         |         | 1.5.0   |      |
| autosize       | Height autosize feature, can be set to `true | false`or an object`{ minRows: 2, maxRows: 6 }` | boolean\|object | false   |         |      |
| defaultValue   | The initial input content                                    | string          |         |         |      |
| showCount      | Whether show text count                                      | boolean         | false   |         |      |
| value(v-model) | The input content value                                      | string          |         |         |      |

### TextArea Events [#](https://www.antdv.com/components/input#textarea-events)

| Events Name | Description                                                  | Arguments   |
| :---------- | :----------------------------------------------------------- | :---------- |
| pressEnter  | The callback function that is triggered when Enter key is pressed. | function(e) |



### Number组件

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281538051.png)

##### 示例

- ```ts
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
    ```

- 

## API[#](https://www.antdv.com/components/input-number/#api)

\#

| property         | description                                                  | type                                                         | default            |           |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------- | :-------- |
| addonAfter       | The label text displayed after (on the right side of) the input field | slot                                                         | -                  | 3.0       |
| addonBefore      | The label text displayed before (on the left side of) the input field | slot                                                         | -                  | 3.0       |
| autofocus        | get focus when component mounted                             | boolean                                                      | false              |           |
| bordered         | Whether has border style                                     | boolean                                                      | true               | 3.0       |
| controls         | Whether to show `+-` controls                                | boolean                                                      | true               | 3.0       |
| decimalSeparator | decimal separator                                            | string                                                       | -                  |           |
| defaultValue     | initial value                                                | number                                                       |                    |           |
| disabled         | disable the input                                            | boolean                                                      | false              |           |
| formatter        | Specifies the format of the value presented                  | function(value: number \| string, info: { userTyping: boolean, input: string }): string | -                  | info: 3.0 |
| keyboard         | If enable keyboard behavior                                  | boolean                                                      | true               | 3.0       |
| max              | max value                                                    | number                                                       | Infinity           |           |
| min              | min value                                                    | number                                                       | -Infinity          |           |
| parser           | Specifies the value extracted from formatter                 | function( string): number                                    | -                  |           |
| precision        | precision of input value                                     | number                                                       | -                  |           |
| prefix           | The prefix icon for the Input                                | slot                                                         | -                  | 3.0       |
| size             | height of input box                                          | string                                                       | -                  |           |
| status           | Set validation status                                        | 'error' \| 'warning'                                         | -                  | 3.3.0     |
| step             | The number to which the current value is increased or decreased. It can be an integer or decimal. | number\|string                                               | 1                  |           |
| stringMode       | Set value as string to support high precision decimals. Will return string value by `change` | boolean                                                      | false              | 3.0       |
| value(v-model)   | current value                                                | number                                                       |                    |           |
| upIcon           | custom up icon                                               | slot                                                         | `<UpOutlined />`   | 3.3.0     |
| downIcon         | custom up down                                               | slot                                                         | `<DownOutlined />` | 3.3.0     |

### events [#](https://www.antdv.com/components/input-number/#events)

| Events Name | Description                                                  | Arguments                                                    | Version |       |
| :---------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ | :---- |
| change      | The callback triggered when the value is changed.            | function(value: number \| string)                            |         |       |
| pressEnter  | The callback function that is triggered when Enter key is pressed. | function(e)                                                  |         | 1.5.0 |
| step        | The callback function that is triggered when click up or down buttons | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | 3.0     |       |



### Select

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281539140.png)

- ### 注意，下面的文档来自Antd，在本项目中，options可以传入一个异步函数，返回值为选项列表，在组件加载时将会自动调用该函数获取参数

- ##### 示例

    - ```ts
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
            					return new Promise<Options>((resolve) => {
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
        ```

    - 


### Select props [#](https://www.antdv.com/components/select#select-props)

| Property                 | Description                                                  | Type                                                   | Default                                                | Version |
| :----------------------- | :----------------------------------------------------------- | :----------------------------------------------------- | :----------------------------------------------------- | :------ |
| allowClear               | Show clear button.                                           | boolean                                                | false                                                  |         |
| autoClearSearchValue     | Whether the current search will be cleared on selecting an item. Only applies when `mode` is set to `multiple` or `tags`. | boolean                                                | true                                                   |         |
| autofocus                | Get focus by default                                         | boolean                                                | false                                                  |         |
| bordered                 | Whether has border style                                     | boolean                                                | true                                                   |         |
| clearIcon                | The custom clear icon                                        | VNode \| slot                                          | -                                                      |         |
| defaultActiveFirstOption | Whether active first option by default                       | boolean                                                | true                                                   |         |
| defaultOpen              | Initial open state of dropdown                               | boolean                                                | -                                                      |         |
| disabled                 | Whether disabled select                                      | boolean                                                | false                                                  |         |
| popupClassName           | className of dropdown menu                                   | string                                                 | -                                                      | 4.0     |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number                                      | true                                                   |         |
| dropdownMenuStyle        | additional style applied to dropdown menu                    | object                                                 | -                                                      |         |
| dropdownRender           | Customize dropdown content                                   | ({menuNode: VNode, props}) => VNode \| v-slot          | -                                                      |         |
| dropdownStyle            | style of dropdown menu                                       | object                                                 | -                                                      |         |
| fieldNames               | Customize node label, value, options field name              | object                                                 | { label: `label`, value: `value`, options: `options` } | 3.0     |
| filterOption             | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | `boolean` | `function(inputValue, option)`             | true                                                   |         |
| filterSort               | Sort function for search options sorting, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction | (optionA: Option, optionB: Option) => number           | -                                                      | 3.0     |
| firstActiveValue         | Value of action option by default                            | string \| string[]                                     | -                                                      |         |
| getPopupContainer        | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. | function(triggerNode)                                  | () => document.body                                    |         |
| labelInValue             | whether to embed label in value, turn the format of value from `string` to `{key: string, label: vNodes, originLabel: any}`, originLabel (3.1) maintains the original type. If the node is constructed through a-select-option children, the value is a function (the default slot of a-select-option) | boolean                                                | false                                                  |         |
| listHeight               | Config popup height                                          | number                                                 | 256                                                    |         |
| loading                  | indicate loading state                                       | boolean                                                | false                                                  |         |
| maxTagCount              | Max tag count to show                                        | number                                                 | -                                                      |         |
| maxTagPlaceholder        | Placeholder for not showing tags                             | slot \| function(omittedValues)                        | -                                                      |         |
| maxTagTextLength         | Max text length to show                                      | number                                                 | -                                                      |         |
| menuItemSelectedIcon     | The custom menuItemSelected icon                             | VNode \| slot                                          | -                                                      |         |
| mode                     | Set mode of Select                                           | 'multiple' \| 'tags'                                   | -                                                      |         |
| notFoundContent          | Specify content to show when no result matches..             | string\|slot                                           | `Not Found`                                            |         |
| open                     | Controlled open state of dropdown                            | boolean                                                | -                                                      |         |
| option                   | custom render option by slot                                 | v-slot:option="{value, label, [disabled, key, title]}" | -                                                      | 2.2.5   |
| optionFilterProp         | Which prop value of option will be used for filter if filterOption is true | string                                                 | value                                                  |         |
| optionLabelProp          | Which prop value of option will render as content of select. | string                                                 | `children` | `label`(when use options)                 |         |
| options                  | Data of the selectOption, manual construction work is no longer needed if this property has been set | Array<{value, label, [disabled, key, title]}>          | []                                                     |         |
| placeholder              | Placeholder of select                                        | string\|slot                                           | -                                                      |         |
| placement                | The position where the selection box pops up                 | `bottomLeft` `bottomRight` `topLeft` `topRight`        | bottomLeft                                             | 3.3.0   |
| removeIcon               | The custom remove icon                                       | VNode \| slot                                          | -                                                      |         |
| searchValue              | The current input "search" text                              | string                                                 | -                                                      |         |
| showArrow                | Whether to show the drop-down arrow                          | boolean                                                | single:true, multiple:false                            |         |
| showSearch               | Whether select is searchable                                 | boolean                                                | single:false, multiple:true                            |         |
| size                     | Size of Select input. `default` `large` `small`              | string                                                 | default                                                |         |
| status                   | Set validation status                                        | 'error' \| 'warning'                                   | -                                                      | 3.3.0   |
| suffixIcon               | The custom suffix icon                                       | VNode \| slot                                          | -                                                      |         |
| tagRender                | Customize tag render, only applies when `mode` is set to `multiple` or `tags` | slot \| (props) => any                                 | -                                                      |         |
| tokenSeparators          | Separator used to tokenize, only applies when `mode="tags"`  | string[]                                               | -                                                      |         |
| value(v-model)           | Current selected option.                                     | string\|number\|string[]\|number[]                     | -                                                      |         |
| virtual                  | Disable virtual scroll when set to false                     | boolean                                                | true                                                   | 3.0     |

> Note, if you find that the drop-down menu scrolls with the page, or you need to trigger Select in other popup layers, please try to use `getPopupContainer={triggerNode => triggerNode.parentElement}` to fix the drop-down popup rendering node in the parent element of the trigger .

### events [#](https://www.antdv.com/components/select#events)

| Events Name           | Description                                                  | Arguments                                       |
| :-------------------- | :----------------------------------------------------------- | :---------------------------------------------- |
| blur                  | Called when blur                                             | function                                        |
| change                | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, option:Option \| Array<Option>) |
| deselect              | Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only. | function(value, option:Option)                  |
| dropdownVisibleChange | Call when dropdown open                                      | function(open)                                  |
| focus                 | Called when focus                                            | function                                        |
| inputKeyDown          | Called when key pressed                                      | function                                        |
| mouseenter            | Called when mouse enter                                      | function                                        |
| mouseleave            | Called when mouse leave                                      | function                                        |
| popupScroll           | Called when dropdown scrolls                                 | function                                        |
| search                | Callback function that is fired when input changed.          | function(value: string)                         |
| select                | Called when a option is selected, the params are option's value (or key) and option instance. | function(value, option:Option)                  |



### Radio

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281540543.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281540523.png)

- 当使用异步加载，出现错误时可以点击重试。



- 与Select相似，参考antd文档，同样支持options传入异步函数获取列表

- 示例

    - ```ts
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
            		},
            		// async radio
            		{
            			label: "异步选择",
            			field: "async-test",
            			component: "Radio",
            			componentProps: {
            				options: async () => await getOptionApi(),
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
        ```

    - 



### CheckBox

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281541409.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281541732.png)



- 同上，类似Radio

##### 示例

- ```ts
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
        				options: async () => await getOptionApi(),
        			},
        		},
    ```

- 

### DatePicker

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281542734.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281542866.png)



##### 示例

- ```ts
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
    ```

- ```ts
     let timeSelectStart: Dayjs = dayjs()
     ......
     	// 开始时间（在当前时间之后）
         {
           label: "开始时间",
           field: "startTime",
           component: "DatePicker",
           //格式：2024-05-14 08:30:22
           formItemProps: {
             rules: [
               { required: true, message: "请选择开始时间" },
               // 建立一个规则用来缓存已经选择的时间
               {
                 validator: (_rule: any, value: any) => {
                   timeSelectStart = value
                   return Promise.resolve()
                 }
               }
             ]
           },
           componentProps: {
             disabledDate: (current: Dayjs) => {
               return current && current < dayjs()
             },
             disabledTime: (current: Dayjs) => {
               if (current.isSame(dayjs(), "day")) {
                 return {
                   disabledHours: () => {
                     return [...Array(24).keys()].filter((hour) => hour < dayjs().hour())
                   }
                 }
               }
               return {}
             },
             ...componentStyle,
             format: "YYYY-MM-DD HH:mm:ss",
             valueFormat: "YYYY-MM-DD HH:mm:ss",
             showTime: true,
             placeholder: "请选择开始时间"
           }
         },
         // 结束时间，在开始时间之后
         {
           label: "结束时间",
           field: "endTime",
           component: "DatePicker",
           formItemProps: {
             rules: [
               { required: true, message: "请选择结束时间" },
               {
                 validator: (_rule: any, value: any) => {
                   if (value < timeSelectStart) {
                     return Promise.reject("结束时间不能早于开始时间")
                   }
                   return Promise.resolve()
                 }
               }
             ]
           },
           componentProps: {
             disabledDate: (current: Dayjs) => {
               return current && current < timeSelectStart
             },
             disabledTime: (current: Dayjs) => {
               if (current.isSame(timeSelectStart, "day")) {
                 return {
                   disabledHours: () => {
                     return [...Array(24).keys()].filter((hour) => hour < timeSelectStart.hour())
                   }
                 }
               }
               return {}
             },
             ...componentStyle,
             format: "YYYY-MM-DD HH:mm:ss",
             valueFormat: "YYYY-MM-DD HH:mm:ss",
             showTime: true,
             placeholder: "请选择结束时间"
           }
         },
     ```

- 

### Common API [#](https://www.antdv.com/components/date-picker#common-api)

The following APIs are shared by DatePicker, RangePicker.

| Property          | Description                                                  | Type                                                         | Default                                                      | Version   |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------- |
| allowClear        | Whether to show clear button                                 | boolean                                                      | true                                                         |           |
| autofocus         | If get focus when component mounted                          | boolean                                                      | false                                                        |           |
| bordered          | Whether has border style                                     | boolean                                                      | true                                                         |           |
| dateRender        | Custom rendering function for date cells                     | v-slot:dateRender="{current, today}"                         | -                                                            |           |
| disabled          | Determine whether the DatePicker is disabled                 | boolean                                                      | false                                                        |           |
| disabledDate      | Specify the date that cannot be selected                     | (currentDate: dayjs) => boolean                              | -                                                            |           |
| format            | To set the date format, refer to [dayjs](https://day.js.org/). When an array is provided, all values are used for parsing and first value is used for formatting, support [Custom Format](https://www.antdv.com/components/date-picker#components-date-picker-demo-format) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-MM-DD`                                                 |           |
| dropdownClassName | To customize the className of the popup calendar             | string                                                       | -                                                            |           |
| getPopupContainer | To set the container of the floating layer, while the default is to create a `div` element in `body` | function(trigger)                                            | -                                                            |           |
| inputReadOnly     | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean                                                      | false                                                        |           |
| locale            | Localization configuration                                   | object                                                       | [default](https://github.com/vueComponent/ant-design-vue/blob/main/components/date-picker/locale/example.json) |           |
| mode              | The picker panel mode                                        | `time` | `date` | `month` | `year` | `decade`                | -                                                            |           |
| nextIcon          | The custom next icon                                         | slot                                                         | -                                                            | 3.0       |
| open              | The open state of picker                                     | boolean                                                      | -                                                            |           |
| picker            | Set picker type                                              | `date` | `week` | `month` | `quarter` | `year`               | `date`                                                       | `quarter` |
| placeholder       | The placeholder of date input                                | string \| [string,string]                                    | -                                                            |           |
| placement         | The position where the selection box pops up                 | `bottomLeft` `bottomRight` `topLeft` `topRight`              | bottomLeft                                                   | 3.3.0     |
| popupStyle        | To customize the style of the popup calendar                 | CSSProperties                                                | {}                                                           |           |
| presets           | The preset ranges for quick selection                        | { label: slot, value: [dayjs](https://day.js.org/) }[]       | -                                                            | 4.0       |
| prevIcon          | The custom prev icon                                         | slot                                                         | -                                                            | 3.0       |
| size              | To determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | `large` | `middle` | `small`                                 | -                                                            |           |
| status            | Set validation status                                        | 'error' \| 'warning'                                         | -                                                            | 3.3.0     |
| suffixIcon        | The custom suffix icon                                       | v-slot:suffixIcon                                            | -                                                            |           |
| superNextIcon     | The custom super next icon                                   | slot                                                         | -                                                            | 3.0       |
| superPrevIcon     | The custom super prev icon                                   | slot                                                         | -                                                            | 3.0       |
| valueFormat       | optional, format of binding value. If not specified, the binding value will be a Date object | string, [date formats](https://day.js.org/docs/en/display/format) | -                                                            |           |

### Common Events [#](https://www.antdv.com/components/date-picker#common-events)

| Events Name | Description                                                  | Arguments             | Version |
| :---------- | :----------------------------------------------------------- | :-------------------- | :------ |
| openChange  | a callback function, can be executed whether the popup calendar is popped up or closed | function(status)      |         |
| panelChange | callback when picker panel mode is changed                   | function(value, mode) |         |

### Common Methods [#](https://www.antdv.com/components/date-picker#common-methods)

| Name    | Description  | Version |
| :------ | :----------- | :------ |
| blur()  | remove focus |         |
| focus() | get focus    |         |

### DatePicker [#](https://www.antdv.com/components/date-picker#datepicker)

| Property              | Description                                                  | Type                                                         | Default                                                      | Version |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ |
| defaultPickerValue    | To set default picker date                                   | [dayjs](https://day.js.org/)                                 | -                                                            |         |
| disabledTime          | To specify the time that cannot be selected                  | function(date)                                               | -                                                            |         |
| format                | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-MM-DD`                                                 |         |
| renderExtraFooter     | Render extra footer in panel                                 | v-slot:renderExtraFooter="mode"                              | -                                                            |         |
| showNow               | Whether to show 'Now' button on panel when `showTime` is set | boolean                                                      | -                                                            |         |
| showTime              | To provide an additional time selection                      | object \| boolean                                            | [TimePicker Options](https://www.antdv.com/components/time-picker/#api) |         |
| showTime.defaultValue | To set default time of selected date, [demo](https://www.antdv.com/components/date-picker#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/)                                 | dayjs()                                                      |         |
| showToday             | Whether to show `Today` button                               | boolean                                                      | true                                                         |         |
| value(v-model)        | To set date                                                  | [dayjs](https://day.js.org/)                                 | -                                                            |         |

### DatePicker Events [#](https://www.antdv.com/components/date-picker#datepicker-events)

| Events Name | Description                                                  | Arguments                                           | Version |
| :---------- | :----------------------------------------------------------- | :-------------------------------------------------- | :------ |
| change      | a callback function, can be executed when the selected time is changing | function(date: dayjs \| string, dateString: string) |         |
| ok          | callback when click ok button                                | function(date: dayjs \| string)                     |         |

### DatePicker[picker=year] [#](https://www.antdv.com/components/date-picker#datepicker-picker-year)

| Property | Description                                                  | Type                                                         | Default | Version |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ | :------ |
| format   | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY`  |         |

### DatePicker[picker=quarter] [#](https://www.antdv.com/components/date-picker#datepicker-picker-quarter)

| Property | Description                                                  | Type                                                         | Default    | Version |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- | :------ |
| format   | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-\QQ` |         |

### DatePicker[picker=month] [#](https://www.antdv.com/components/date-picker#datepicker-picker-month)

| Property        | Description                                                  | Type                                                         | Default   | Version |
| :-------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------- | :------ |
| format          | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-MM` |         |
| monthCellRender | Custom month cell content render method                      | v-slot:monthCellRender="{current, locale}"                   | -         |         |

### DatePicker[picker=week] [#](https://www.antdv.com/components/date-picker#datepicker-picker-week)

| Property | Description                                                  | Type                                                         | Default   | Version |
| :------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------- | :------ |
| format   | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-wo` |         |

### RangePicker [#](https://www.antdv.com/components/date-picker#rangepicker)

| Property              | Description                                                  | Type                                                         | Default                                                      | Version |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ |
| allowEmpty            | Allow start or end input leave empty                         | [boolean, boolean]                                           | [false, false]                                               |         |
| dateRender            | Customize date cell.                                         | v-slot:dateRender="{current: dayjs, today: dayjs, info: { range: `start` | `end` }}" | -                                                            |         |
| defaultPickerValue    | To set default picker date                                   | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | -                                                            |         |
| disabled              | If disable start or end                                      | [boolean, boolean]                                           | -                                                            |         |
| disabledTime          | To specify the time that cannot be selected                  | function(date: dayjs, partial: `start` | `end`)              | -                                                            |         |
| format                | To set the date format, refer to [dayjs](https://day.js.org/) | [formatType](https://www.antdv.com/components/date-picker#formattype) | `YYYY-MM-DD HH:mm:ss`                                        |         |
| presets               | The preset ranges for quick selection                        | { label: slot, value: [dayjs](https://day.js.org/)[] }[]     | -                                                            | 4.0     |
| ranges                | The preseted ranges for quick selection                      | { [range: string]: [dayjs](https://day.js.org/)[] } \| { [range: string]: () => [dayjs](https://day.js.org/)[] } | -                                                            |         |
| renderExtraFooter     | Render extra footer in panel                                 | v-slot:renderExtraFooter="mode"                              | -                                                            |         |
| separator             | Set separator between inputs                                 | string \| v-slot:separator                                   | `<SwapRightOutlined />`                                      |         |
| showTime              | To provide an additional time selection                      | object \| boolean                                            | [TimePicker Options](https://www.antdv.com/components/time-picker/#api) |         |
| showTime.defaultValue | To set default time of selected date, [demo](https://www.antdv.com/components/date-picker#components-date-picker-demo-disabled-date) | [dayjs](https://day.js.org/)[]                               | [dayjs(), dayjs()]                                           |         |
| value(v-model)        | To set date                                                  | [[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | -                                                            |         |

### RangePicker Events [#](https://www.antdv.com/components/date-picker#rangepicker-events)

| Events Name    | Description                                                  | Arguments                                                    | Version |      |
| :------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :------ | :--- |
| calendarChange | Callback function, can be executed when the start time or the end time of the range is changing. | function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:`start`|`end` }) | -       |      |
| change         | a callback function, can be executed when the selected time is changing | function(dates: [dayjs, dayjs] \| [string, string], dateStrings: [string, string]) |         |      |
| ok             | callback when click ok button                                | function(dates: [dayjs, dayjs] \| [string, string])          |         |      |



### TimePicker

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281543976.png)



##### 示例

- ```ts
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
    ```

- 

## API[#](https://www.antdv.com/components/time-picker#api)

\#

| Property            | Description                                                  | Type                                                         | Default         | Version |
| :------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------- | :------ |
| allowClear          | Whether allow clearing text                                  | boolean                                                      | true            |         |
| autofocus           | If get focus when component mounted                          | boolean                                                      | false           |         |
| bordered            | Whether has border style                                     | boolean                                                      | true            |         |
| clearIcon           | The custom clear icon                                        | v-slot:clearIcon                                             | -               |         |
| clearText           | The clear tooltip of icon                                    | string                                                       | clear           |         |
| disabled            | Determine whether the TimePicker is disabled                 | boolean                                                      | false           |         |
| disabledTime        | To specify the time that cannot be selected                  | [DisabledTime](https://www.antdv.com/components/time-picker#disabledtime) | -               | 3.3.0   |
| format              | To set the time format                                       | string                                                       | `HH:mm:ss`      |         |
| getPopupContainer   | To set the container of the floating layer, while the default is to create a div element in body | function(trigger)                                            | -               |         |
| hideDisabledOptions | Whether hide the options that can not be selected            | boolean                                                      | false           |         |
| hourStep            | Interval between hours in picker                             | number                                                       | 1               |         |
| inputReadOnly       | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean                                                      | false           |         |
| minuteStep          | Interval between minutes in picker                           | number                                                       | 1               |         |
| open(v-model)       | Whether to popup panel                                       | boolean                                                      | false           |         |
| placeholder         | Display when there's no value                                | string \| [string, string]                                   | `Select a time` |         |
| placement           | The position where the selection box pops up                 | `bottomLeft` `bottomRight` `topLeft` `topRight`              | bottomLeft      |         |
| popupClassName      | The className of panel                                       | string                                                       | -               |         |
| popupStyle          | The style of panel                                           | CSSProperties                                                | -               |         |
| renderExtraFooter   | Called from time picker panel to render some addon to its bottom | v-slot:renderExtraFooter                                     | -               |         |
| secondStep          | Interval between seconds in picker                           | number                                                       | 1               |         |
| showNow             | Whether to show `Now` button on panel                        | boolean                                                      | -               |         |
| suffixIcon          | The custom suffix icon                                       | v-slot:suffixIcon                                            | -               |         |
| use12Hours          | Display as 12 hours format, with default format `h:mm:ss a`  | boolean                                                      | false           |         |
| value(v-model)      | To set time                                                  | [dayjs](https://day.js.org/)                                 | -               |         |
| valueFormat         | optional, format of binding value. If not specified, the binding value will be a Date object | string, [date formats](https://day.js.org/docs/en/display/format) | -               |         |

#### DisabledTime [#](https://www.antdv.com/components/time-picker#disabledtime)

```typescript
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```

### events [#](https://www.antdv.com/components/time-picker#events)

| Events Name | Description                                                  | Arguments                                                 |
| :---------- | :----------------------------------------------------------- | :-------------------------------------------------------- |
| change      | a callback function, can be executed when the selected time is changing | function(time: dayjs \| string, timeString: string): void |
| openChange  | a callback function which will be called while panel opening/closing | (open: boolean): void                                     |



### Slider

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281544627.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281544036.png)



##### 示例

- ```ts
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
        			next: (model): DyForm | undefined => {
        				if (((model as number) || 0) > 50) {
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
    ```

- 

## API[#](https://www.antdv.com/components/slider#api)

\#

| Property                 | Description                                                  | Type             | Default                                                      | Version |
| :----------------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :------ |
| autofocus                | get focus when component mounted                             | boolean          | false                                                        |         |
| disabled                 | If true, the slider will not be intractable.                 | boolean          | false                                                        |         |
| dots                     | Whether the thumb can drag over tick only.                   | boolean          | false                                                        |         |
| handleStyle              | The style of slider handle                                   | CSSProperties    | -                                                            |         |
| included                 | Make effect when `marks` not null, `true` means containment and `false` means coordinative | boolean          | true                                                         |         |
| mark                     | Custom tick mark of Slider,                                  | v-slot:mark      | { point: number, label: any }                                | 3.0     |
| marks                    | Tick mark of Slider, type of key must be `number`, and must in closed interval [min, max], each mark can declare its own style. | object           | { number: string\|VNode } or { number: { style: object, label: string\|VNode } } or { number: () => VNode } |         |
| max                      | The maximum value the slider can slide to                    | number           | 100                                                          |         |
| min                      | The minimum value the slider can slide to.                   | number           | 0                                                            |         |
| range                    | dual thumb mode                                              | boolean          | false                                                        |         |
| reverse                  | reverse the component                                        | boolean          | false                                                        | 1.5.0   |
| step                     | The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When `marks` no null, `step` can be `null`. | number\|null     | 1                                                            |         |
| trackStyle               | The style of slider track                                    | CSSProperties    | -                                                            |         |
| value(v-model)           | The value of slider. When `range` is `false`, use `number`, otherwise, use `[number, number]` | number\|number[] |                                                              |         |
| vertical                 | If true, the slider will be vertical.                        | Boolean          | false                                                        |         |
| tipFormatter             | Slider will pass its value to `tipFormatter`, and display its value in Tooltip, and hide Tooltip when return value is null. | Function\|null   | IDENTITY                                                     |         |
| tooltipPlacement         | Set Tooltip display position. Ref [`Tooltip`](https://www.antdv.com/components/tooltip/). | string           |                                                              | 1.5.0   |
| tooltipOpen              | If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering. | Boolean          |                                                              | 4.0     |
| getTooltipPopupContainer | The DOM container of the Tooltip, the default behavior is to create a div element in body. | Function         | () => document.body                                          | 1.5.0   |

### events [#](https://www.antdv.com/components/slider#events)

| Events Name | Description                                                  | Arguments       |      |
| :---------- | :----------------------------------------------------------- | :-------------- | :--- |
| change      | Callback function that is fired when the user changes the slider's value. | Function(value) | NOOP |
| afterChange | Fire when `mouseup` is fired.                                | Function(value) | NOOP |



### Switch

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281544070.png)



##### 示例

- ```ts
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
            }
    ```

- 

## API[#](https://www.antdv.com/components/switch#api)

\#

| Property          | Description                                          | Type                           | Default | Version |
| :---------------- | :--------------------------------------------------- | :----------------------------- | :------ | :------ |
| autofocus         | get focus when component mounted                     | boolean                        | false   |         |
| checked(v-model)  | determine whether the `Switch` is checked            | checkedValue \| unCheckedValue | false   |         |
| checkedChildren   | content to be shown when the state is checked        | string\|slot                   |         |         |
| checkedValue      | value for checked state                              | boolean \| string \| number    | true    | 2.2.1   |
| disabled          | Disable switch                                       | boolean                        | false   |         |
| loading           | loading state of switch                              | boolean                        | false   |         |
| size              | the size of the `Switch`, options: `default` `small` | string                         | default |         |
| unCheckedChildren | content to be shown when the state is unchecked      | string\|slot                   |         |         |
| unCheckedValue    | value for unchecked state                            | boolean \| string \| number    | false   | 2.2.1   |

### Events [#](https://www.antdv.com/components/switch#events)

| Events Name | Description                                | Arguments                                                    |      |
| :---------- | :----------------------------------------- | :----------------------------------------------------------- | :--- |
| change      | trigger when the checked state is changing | Function(checked: boolean \| string \| number, event: Event) |      |
| click       | trigger when clicked                       | Function(checked: boolean \| string \| number, event: Event) |      |



### Upload

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281545135.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281545154.png)



##### 示例

- ```ts
    		// avatar upload
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
        					customRequest: (info: any) => {
        						setTimeout(() => {
        							info.onSuccess("ok", info.file);
        						}, 1000);
        					},
        				},
        				uploadType: "Image",
        			},
        			value: [],
        		},
    ```

- ```ts
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
    ```

- ```ts
    		// 头像
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
        						new Promise<string>((resolve) => {
        							const fr = new FileReader();
        							fr.onload = (e) => {
        								resolve(e.target?.result as string);
        							};
        							fr.readAsDataURL(info.file as File);
        						})
        							.then((data) => {
        								console.log("base64: ", data);
        								if (
        									testAvatarGroup.items[0]?.componentProps
        										?.avatarGroupValue?.[0]
        								) {
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
    ```

- 

自定义参数

```ts
export type UploadEvents = {
	change?: (file: UploadChangeParam) => void;
	remove?: (file: File) => void;
	download?: (file: File) => void;
	drop?: (e: DragEvent) => void;
	preview?: (file: File) => void;
	reject?: (file: File) => void;
};

export type UploadType = "Button" | "Dragger" | "Image";

export type UploadProps = Partial<ExtractPropTypes<ReturnType<typeof uploadProps>>>;
```

## API[#](https://www.antdv.com/components/upload#api)

\#

| Property              | Description                                                  | Type                                                         | Default                             | Version               |      |
| :-------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :---------------------------------- | :-------------------- | :--- |
| accept                | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string                                                       | -                                   |                       |      |
| action                | Uploading URL                                                | string\|(file) => `Promise`                                  | -                                   |                       |      |
| beforeUpload          | Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. | (file, fileList) => `boolean` | `Promise`                    | -                                   |                       |      |
| customRequest         | override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest | function                                                     | -                                   |                       |      |
| data                  | Uploading params or function which can return uploading params. | object\|function(file)                                       | -                                   |                       |      |
| directory             | Support upload whole directory（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean                                                      | false                               | 3.0                   |      |
| disabled              | disable upload button                                        | boolean                                                      | -                                   |                       |      |
| downloadIcon          | custom download icon                                         | v-slot:iconRender="{file: UploadFile}"                       | -                                   | 3.0                   |      |
| fileList              | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | object[]                                                     | -                                   |                       |      |
| headers               | Set request headers, valid above IE10.                       | object                                                       | -                                   |                       |      |
| iconRender            | Custom show icon                                             | v-slot:iconRender="{file: UploadFile, listType?: UploadListType}" | -                                   | 3.0                   |      |
| isImageUrl            | Customize if render <img /> in thumbnail                     | (file: UploadFile) => boolean                                | -                                   | 3.0                   |      |
| itemRender            | Custom item of uploadList                                    | v-slot:itemRender="{originNode: VNode, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }" | -                                   | 3.0                   |      |
| listType              | Built-in stylesheets, support for three types: `text`, `picture` or `picture-card` | string                                                       | `text`                              |                       |      |
| maxCount              | Limit the number of uploaded files. Will replace current one when `maxCount` is `1` | number                                                       | -                                   | 3.0                   |      |
| method                | http method of upload request                                | string                                                       | `post`                              | 1.5.0                 |      |
| multiple              | Whether to support selected multiple file. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean                                                      | false                               |                       |      |
| name                  | The name of uploading file                                   | string                                                       | `file`                              |                       |      |
| openFileDialogOnClick | Click open file dialog                                       | boolean                                                      | true                                | 3.0                   |      |
| previewFile           | Customize preview file logic                                 | (file: File \| Blob) => Promise<dataURL: string>             | -                                   | 1.5.0                 |      |
| previewIcon           | custom preview icon                                          | v-slot:iconRender="{file: UploadFile}"                       | -                                   | 3.0                   |      |
| progress              | Custom progress bar                                          | [ProgressProps](https://www.antdv.com/components/progress/#api) (support `type="line"` only) | { strokeWidth: 2, showInfo: false } | 3.0                   |      |
| removeIcon            | custom remove icon                                           | v-slot:iconRender="{file: UploadFile}"                       | -                                   | 3.0                   |      |
| showUploadList        | Whether to show default upload list, could be an object to specify `showPreviewIcon`, `showRemoveIcon` and `showDownloadIcon` individually | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } | true                                | showDownloadIcon(3.0) |      |
| supportServerRender   | Need to be turned on while the server side is rendering.     | boolean                                                      | false                               |                       |      |
| withCredentials       | ajax upload with cookie sent                                 | boolean                                                      | false                               |                       |      |

### events [#](https://www.antdv.com/components/upload#events)

| Events Name | Description                                                  | Arguments                          | Version         |       |
| :---------- | :----------------------------------------------------------- | :--------------------------------- | :-------------- | :---- |
| change      | A callback function, can be executed when uploading state is changing. See [change](https://www.antdv.com/components/upload#change) | function                           | -               |       |
| download    | Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB. | function(file): void               | Jump to new TAB | 1.5.0 |
| drop        | A callback function executed when files are dragged and dropped into upload area | (event: DragEvent) => void         | -               | 3.0   |
| preview     | A callback function, will be executed when file link or preview icon is clicked. | function(file)                     | -               |       |
| reject      | A callback function, will be executed when drop files is not accept. | function(fileList)                 | -               |       |
| remove      | A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject | function(file): boolean \| Promise | -               | 3.0   |

### UploadFile [#](https://www.antdv.com/components/upload#uploadfile)

Extends File with additional props.

| Property    | Description                                         | Type                                                   | Default | Version |
| :---------- | :-------------------------------------------------- | :----------------------------------------------------- | :------ | :------ |
| crossOrigin | CORS settings attributes                            | `'anonymous'` | `'use-credentials'` | `''`             | -       | 3.3.0   |
| name        | File name                                           | string                                                 | -       |         |
| percent     | Upload progress percent                             | number                                                 | -       |         |
| status      | Upload status. Show different style when configured | `error` | `success` | `done` | `uploading` | `removed` | -       |         |
| thumbUrl    | Thumb image url                                     | string                                                 | -       |         |
| uid         | unique id. Will auto generate when not provided     | string                                                 | -       |         |
| url         | Download url                                        | string                                                 | -       |         |

### change [#](https://www.antdv.com/components/upload#change)

> The function will be called when uploading is in progress, completed or failed

When uploading state change, it returns:

```jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` File object for the current operation.

    ```jsx
    {
       uid: 'uid',   // unique identifier, negative is recommend, to prevent interference with internal generated id
       name: 'xx.png',   // file name
       status: 'done', // options：uploading, done, error, removed
       response: '{"status": "success"}', // response from server
       linkProps: '{"download": "image"}', // additional html props of file link
       xhr: 'XMLHttpRequest{ ... }', // XMLHttpRequest Header
    }
    ```

2. `fileList` current list of files

3. `event` response from server, including uploading progress, supported by advanced browsers.



### TreeSelect

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281546860.png)



## 注意，此处对treeData参数进行了增强，可以传入异步函数，在表单加载时自动获取数据



##### 示例

- ```ts
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
    ```

- ```ts
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
    ```

- 

## API[#](https://www.antdv.com/components/tree-select#api)

### Tree props [#](https://www.antdv.com/components/tree-select#tree-props)

| Property                  | Description                                                  | Type                                                         | Default                                                | Version |                          |
| :------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------- | :------ | :----------------------- |
| allowClear                | Whether allow clear                                          | boolean                                                      | false                                                  |         |                          |
| defaultValue              | To set the initial selected treeNode(s).                     | string\|string[]                                             | -                                                      |         |                          |
| disabled                  | Disabled or not                                              | boolean                                                      | false                                                  |         |                          |
| popupClassName            | className of dropdown menu                                   | string                                                       | -                                                      |         | 4.0                      |
| dropdownMatchSelectWidth  | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number                                            | true                                                   |         |                          |
| dropdownStyle             | To set the style of the dropdown menu                        | object                                                       | -                                                      |         |                          |
| fieldNames                | Replace the label,value and children fields in treeNode with the corresponding fields in treeData | object                                                       | { children:'children', label:'title', value:'value' }  |         | 3.0.0                    |
| filterTreeNode            | Whether to filter treeNodes by input value. The value of `treeNodeFilterProp` is used for filtering by default. | boolean\|Function(inputValue: string, treeNode: TreeNode) (should return boolean) | Function                                               |         |                          |
| getPopupContainer         | To set the container of the dropdown menu. The default is to create a `div` element in `body`, you can reset it to the scrolling area and make a relative reposition. | Function(triggerNode)                                        | () => document.body                                    |         |                          |
| labelInValue              | whether to embed label in value, turn the format of value from `string` to `{value: string, label: VNode, halfChecked: string[]}` | boolean                                                      | false                                                  |         |                          |
| listHeight                | Config popup height                                          | number                                                       | 256                                                    |         |                          |
| loadData                  | Load data asynchronously.                                    | function(node)                                               | -                                                      |         |                          |
| maxTagCount               | Max tag count to show                                        | number                                                       | -                                                      |         |                          |
| maxTagPlaceholder         | Placeholder for not showing tags                             | slot/function(omittedValues)                                 | -                                                      |         |                          |
| multiple                  | Support multiple or not, will be `true` when enable `treeCheckable`. | boolean                                                      | false                                                  |         |                          |
| notFoundContent           | Specify content to show when no result matches               | slot                                                         | `Not Found`                                            |         |                          |
| placeholder               | Placeholder of the select input                              | string\|slot                                                 | -                                                      |         |                          |
| placement                 | The position where the selection box pops up                 | `bottomLeft` `bottomRight` `topLeft` `topRight`              | bottomLeft                                             | 3.3.0   |                          |
| replaceFields             | Replace the label,value, key and children fields in treeNode with the corresponding fields in treeData | object                                                       | { children:'children', label:'title', value: 'value' } |         | 1.6.1 (3.0.0 deprecated) |
| searchPlaceholder         | Placeholder of the search input                              | string\|slot                                                 | -                                                      |         |                          |
| searchValue(v-model)      | work with `search` event to make search value controlled.    | string                                                       | -                                                      |         |                          |
| showCheckedStrategy       | The way show selected item in box. **Default:** just show child nodes. **`TreeSelect.SHOW_ALL`:** show all checked treeNodes (include parent treeNode). **`TreeSelect.SHOW_PARENT`:** show checked treeNodes (just show parent treeNode). | enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD } | TreeSelect.SHOW_CHILD                                  |         |                          |
| showSearch                | Whether to display a search input in the dropdown menu(valid only in the single mode) | boolean                                                      | false                                                  |         |                          |
| size                      | To set the size of the select input, options: `large` `small` | string                                                       | 'default'                                              |         |                          |
| status                    | Set validation status                                        | 'error' \| 'warning'                                         | -                                                      | 3.3.0   |                          |
| suffixIcon                | The custom suffix icon                                       | VNode \| slot                                                | -                                                      |         |                          |
| tagRender                 | Customize tag render when `multiple`                         | (props) => slot                                              | -                                                      | 3.0     |                          |
| title                     | custom title                                                 | slot                                                         |                                                        | 3.0.0   |                          |
| treeCheckable             | Whether to show checkbox on the treeNodes                    | boolean                                                      | false                                                  |         |                          |
| treeCheckStrictly         | Whether to check nodes precisely (in the `checkable` mode), means parent and child nodes are not associated, and it will make `labelInValue` be true | boolean                                                      | false                                                  |         |                          |
| treeData                  | Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value) | array\<{ value, title, children, [disabled, disableCheckbox, selectable] }> | []                                                     |         |                          |
| treeDataSimpleMode        | Enable simple mode of treeData. Changes the `treeData` schema to: [{id:1, pId:0, value:'1', title:"test1",...},...] where pId is parent node's id). It is possible to replace the default `id` and `pId` keys by providing object to `treeDataSimpleMode` | false\|object\<{ id: string, pId: string, rootPId: null }>   | false                                                  |         |                          |
| treeDefaultExpandAll      | Whether to expand all treeNodes by default                   | boolean                                                      | false                                                  |         |                          |
| treeDefaultExpandedKeys   | Default expanded treeNodes                                   | string[] \| number[]                                         | -                                                      |         |                          |
| treeExpandedKeys(v-model) | Set expanded keys                                            | string[] \| number[]                                         | -                                                      |         |                          |
| treeIcon                  | Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to `true` | boolean                                                      | false                                                  |         |                          |
| treeLoadedKeys            | (Controlled) Set loaded tree nodes, work with `loadData` only | string[]                                                     | []                                                     | 3.3.0   |                          |
| treeLine                  | Show the line. Ref [Tree - showLine](https://www.antdv.com/components/tree/#components-tree-demo-line) | boolean \| object                                            | false                                                  | 3.0     |                          |
| treeNodeFilterProp        | Will be used for filtering if `filterTreeNode` returns true  | string                                                       | 'value'                                                |         |                          |
| treeNodeLabelProp         | Will render as content of select                             | string                                                       | 'title'                                                |         |                          |
| value(v-model)            | To set the current selected treeNode(s).                     | string\|string[]                                             | -                                                      |         |                          |
| virtual                   | Disable virtual scroll when set to false                     | boolean                                                      | true                                                   | 3.0     |                          |

### Events [#](https://www.antdv.com/components/tree-select#events)

| Events Name           | Description                                                  | Arguments                     | Version |
| :-------------------- | :----------------------------------------------------------- | :---------------------------- | :------ |
| change                | A callback function, can be executed when selected treeNodes or input value change | function(value, label, extra) |         |
| dropdownVisibleChange | Called when dropdown open                                    | function(open)                | 3.0     |
| search                | A callback function, can be executed when the search input changes. | function(value: string)       |         |
| select                | A callback function, can be executed when you select a treeNode. | function(value, node, extra)  |         |
| treeExpand            | A callback function, can be executed when treeNode expanded  | function(expandedKeys)        |         |



### AutoComplete

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281546362.png)



##### 示例

- ```ts
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
    			next: (model): DyForm | undefined => {
    				if (((model as string) || "").includes("蓝色")) {
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
    ```

- 

## 提供了自动提示的输入框，以下是该组件的参数，其它参数参考antd

- title

  - 内容标题，用于placeholder中显示

- value：v-model

  - 输入值

- fetchList

  - 提示列表获取

  - ```ts
    fetchList:
    		| (() => Promise<AutoInputList[]> | AutoInputList[])
    		| AutoInputList[]
    		| undefined;
    ```

- style

  - a-auto-complete的样式设置

- enableSplit

  - 是否启用分词，在启用分词之后，输入分词的字符可以进行再次提示，按下回车后自动补全

- splitWord

  - 分词的字符

- 默认placeholder：

  - ```ts
    "`输入${title}内容${
    			enableSplit ? '（以' + splitWord + '分割）' : ''
    		} 或选择已有${title}`"
    ```

- 

## API[#](https://www.antdv.com/components/auto-complete#api)

| Property                              | Description                                                  | Type                                                         | Default                 | Version |
| :------------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- | :---------------------- | :------ |
| allowClear                            | Show clear button, effective in multiple mode only.          | boolean                                                      | false                   |         |
| autofocus                             | get focus when component mounted                             | boolean                                                      | false                   |         |
| backfill                              | backfill selected item the input when using keyboard         | boolean                                                      | false                   |         |
| bordered                              | Whether has border style                                     | boolean                                                      | true                    | 4.0     |
| clearIcon                             | Use slot custom clear icon                                   | slot                                                         | `<CloseCircleFilled />` | 4.0     |
| default (for customize input element) | customize input element                                      | slot                                                         | `<Input />`             |         |
| defaultActiveFirstOption              | Whether active first option by default                       | boolean                                                      | true                    |         |
| defaultOpen                           | Initial open state of dropdown                               | boolean                                                      | -                       |         |
| disabled                              | Whether disabled select                                      | boolean                                                      | false                   |         |
| popupClassName                        | The className of dropdown menu                               | string                                                       | -                       | 4.0     |
| dropdownMatchSelectWidth              | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number                                            | true                    |         |
| dropdownMenuStyle                     | additional style applied to dropdown menu                    | object                                                       |                         | 1.5.0   |
| filterOption                          | If true, filter options by input, if function, filter options against it. The function will receive two arguments, `inputValue` and `option`, if the function returns `true`, the option will be included in the filtered set; Otherwise, it will be excluded. | boolean or function(inputValue, option)                      | true                    |         |
| open                                  | Controlled open state of dropdown                            | boolean                                                      | -                       |         |
| option                                | custom render option by slot                                 | v-slot:option="{value, label, [disabled, key, title]}"       | -                       | 3.0     |
| options                               | Data source for autocomplete                                 | [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)[] |                         |         |
| placeholder                           | placeholder of input                                         | string                                                       | -                       |         |
| status                                | Set validation status                                        | 'error' \| 'warning'                                         | -                       | 3.3.0   |
| v-model:value                         | selected option                                              | string\|string[]\|{ key: string, label: string\|vNodes }\|Array<{ key: string, label: string\|vNodes }> | -                       |         |

### events [#](https://www.antdv.com/components/auto-complete#events)

| Events Name           | Description                                                  | Arguments               | Version |       |
| :-------------------- | :----------------------------------------------------------- | :---------------------- | :------ | :---- |
| blur                  | Called when leaving the component.                           | function()              |         |       |
| change                | Called when select an option or input value change, or value of input is changed | function(value)         |         |       |
| dropdownVisibleChange | Call when dropdown open                                      | function(open)          |         |       |
| focus                 | Called when entering the component                           | function()              |         |       |
| search                | Called when searching items.                                 | function(value)         | -       |       |
| select                | Called when a option is selected. param is option's value and option instance. | function(value, option) |         |       |
| clear                 | Called when clear                                            | function                | -       | 3.3.0 |





### Tag

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281547933.png)



## 该组件只用于标签显示

value：显示的值

##### 示例

- ```ts
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
    ```

- 

### Mentions

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281547462.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281547946.png)



提及输入框

##### 示例

- ```ts
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
    ```

- 

## API[#](https://www.antdv.com/components/mentions#api)

\#

### Mention [#](https://www.antdv.com/components/mentions#mention)

| Property          | Description                                        | Type                                                        | Default     |
| :---------------- | :------------------------------------------------- | :---------------------------------------------------------- | :---------- |
| autofocus         | Auto get focus when component mounted              | boolean                                                     | `false`     |
| defaultValue      | Default value                                      | string                                                      |             |
| filterOption      | Customize filter option logic                      | false \| (input: string, option: OptionProps) => boolean    |             |
| getPopupContainer | Set the mount HTML node for suggestions            | () => HTMLElement                                           |             |
| notFoundContent   | Set mentions content when not match                | string \| slot                                              | 'Not Found' |
| placement         | Set popup placement                                | `top` | `bottom`                                            | `bottom`    |
| prefix            | Set trigger prefix keyword                         | string \| string[]                                          | '@'         |
| split             | Set split string before and after selected mention | string                                                      | ' '         |
| status            | Set validation status                              | 'error' \| 'warning' \| 'success' \| 'validating'           | -           |
| validateSearch    | Customize trigger search logic                     | (text: string, props: MentionsProps) => void                |             |
| value(v-model)    | Set value of mentions                              | string                                                      |             |
| options           | Option Configuration                               | [Options](https://www.antdv.com/components/mentions#option) | []          |
| option            | custom option label                                | v-slot:option="option"                                      | -           |

### Events [#](https://www.antdv.com/components/mentions#events)

| Events Name | Description                         | Arguments                                     |
| :---------- | :---------------------------------- | :-------------------------------------------- |
| blur        | remove focus                        | function                                      |
| change      | Trigger when value changed          | function(value: string)                       |
| focus       | get focus                           | function                                      |
| search      | Trigger when prefix hit             | function(value: string, prefix: string)       |
| select      | Trigger when user select the option | function(option: OptionProps, prefix: string) |



### Divider

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281548500.png)

##### 示例

- ```ts
    		// devider
        		{
        			label: "",
        			field: "divider",
        			component: "Divider",
        			componentProps: {
        				orientation: "center",
        				orientationMargin: "10px",
        				dividerText: "下面是其他信息",
        			},
        		},
    ```

- 

## 分割线

## API[#](https://www.antdv.com/components/divider#api)

\#

| Property          | Description                                                  | Type                        | Default      | Version |
| :---------------- | :----------------------------------------------------------- | :-------------------------- | :----------- | :------ |
| dashed            | whether line is dashed                                       | boolean                     | false        |         |
| orientation       | position of title inside divider                             | `left` | `right` | `center` | `center`     |         |
| orientationMargin | The margin-left/right between the title and its closest border, while the `orientation` must be `left` or `right` | string \| number            | -            | 3.0     |
| plain             | Divider text show as plain style                             | boolean                     | true         | 2.2.0   |
| type              | direction type of divider                                    | `horizontal` | `vertical`   | `horizontal` |         |



### AvatarGroup

#### 示例

- ```ts
    export const testAvatarGroup: DyForm = {
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
    ```

- 

## 头像组

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281548035.png)



这里的两种参数，在不同的参数下面

## avatarProps：

### Avatar [#](https://www.antdv.com/components/avatar#avatar)

| Property    | Description                                                  | Type                                                         | Default   | Version |
| :---------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :-------- | :------ |
| alt         | This attribute defines the alternative text describing the image | string                                                       | -         |         |
| crossOrigin | cors settings attributes                                     | `'anonymous'` | `'use-credentials'` | `''`                   | -         | 3.0     |
| draggable   | Whether the picture is allowed to be dragged                 | boolean \| `'true'` | `'false'`                              | -         | 2.2.0   |
| gap         | Letter type unit distance between left and right sides       | number                                                       | 4         | 2.2.0   |
| icon        | the `Icon` type for an icon avatar, see `Icon` Component     | VNode \| slot                                                | -         |         |
| loadError   | handler when img load error, return false to prevent default fallback behavior | () => boolean                                                | -         |         |
| shape       | the shape of avatar                                          | `circle` | `square`                                          | `circle`  |         |
| size        | The size of the avatar                                       | number \| `large` | `small` | `default` \| { xs: number, sm: number, ...} | `default` | 2.2.0   |
| src         | the address of the image for an image avatar                 | string                                                       | -         |         |
| srcset      | a list of sources to use for different screen resolutions    | string                                                       | -         |         |



## groupProps：

### Avatar.Group (2.2.0) [#](https://www.antdv.com/components/avatar#avatar-group-2-2-0)

| Property            | Description                              | Type                                                         | Default   | Version |
| :------------------ | :--------------------------------------- | :----------------------------------------------------------- | :-------- | :------ |
| maxCount            | Max avatars to show                      | number                                                       | -         |         |
| maxPopoverPlacement | The placement of excess avatar Popover   | `top` | `bottom`                                             | `top`     |         |
| maxPopoverTrigger   | Set the trigger of excess avatar Popover | `hover` | `focus` | `click`                                  | `hover`   | 3.0     |
| maxStyle            | The style of excess avatar style         | CSSProperties                                                | -         |         |
| size                | The size of the avatar                   | number \| `large` | `small` | `default` \| { xs: number, sm: number, ...} | `default` |         |
| shape               | The shape of the avatar                  | `circle` | `square`                                          | `circle`  | 4.0     |



### Corn

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281548090.png)

![](https://cdn.jsdelivr.net/gh/pqcqaq/imageSource/upload/202405281549083.png)



## corn表达式选择器

##### 示例

- ```ts
    
    export const cornSchema: DyForm = {
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
    ```

- 





----

## 使用自定义组件



1. ### 在schema的component中，使用导入的自定义组件

2. ### 编写componentProps中的customProps，这里是你自己的组件参数

3. ### 若要在表单中集成，需要存在value参数（v-model）作为表单输入绑定
