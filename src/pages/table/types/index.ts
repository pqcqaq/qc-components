export type Breakpoint = "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs";

export type ColumnProps = {
	/**
	 * 设置列内容的对齐方式
	 */
	align?: "left" | "right" | "center";
	/**
	 * 设置列是否固定，可选 true(等效于 left) 'left' 'right'
	 */
	colSpan?: number;
	/**
	 * 列的自定义筛选菜单项
	 */
	customFilterDropdown?: boolean;
	/**
	 * 列的自定义筛选菜单
	 */
	defaultFilteredValue?: string[];
	/**
	 * 列的默认排序顺序
	 */
	filterResetToDefaultFilteredValue?: boolean;
	/**
	 * 列的默认排序顺序
	 */
	defaultSortOrder?: "ascend" | "descend" | null;
	/**
	 * 列的描述
	 */
	ellipsis?: boolean | { showTitle?: boolean };
	/**
	 * Whether filterDropdown is open
	 */
	filterDropdownOpen?: boolean;
	/**
	 * 	Whether the dataSource is filtered
	 */
	filtered?: boolean;
	/**
	 * 		Controlled filtered value, filter icon will highlight
	 */
	filteredValue?: string[];
	/**
	 * 		To specify the filter interface
	 */
	filterMode?: "menu" | "tree";
	/**
	 * 		Whether multiple filters can be selected
	 */
	filterMultiple?: boolean;
	/**
	 * 	Filter menu config
	 */
	filters?: {
		text: string;
		value: string;
		children?: { text: string; value: string }[];
	}[];
	/**
	 * 	Whether to be searchable for filter menu
	 */
	filterSearch?: boolean;
	/**
	 * 		Set column to be fixed: true(same as left) 'left' 'right'
	 */
	fixed?: boolean | "left" | "right";
	/**
	 * 	Drag the maximum width of the column, it will be affected by the automatic adjustment and distribution of the table width
	 */
	maxWidth?: number;
	/**
	 * 	Drag the minimum width of the column, it will be affected by the automatic adjustment and distribution of the table width
	 */
	minWidth?: number;
	/**
	 * 	Whether the width can be adjusted by dragging, at this time width must be number type
	 */
	resizable?: boolean;
	/**
	 * 	The list of breakpoints at which to display this column. Always visible if not set.
	 */
	responsive?: Breakpoint[];
	/**
	 * 	Set scope attribute for all cells in this column
	 */
	rowScope?: "row" | "col";
	/**
	 * 	supported sort way, could be 'ascend', 'descend'
	 */
	sortDirections?: ("ascend" | "descend")[];
	/**
	 * 	Sort function for local sort, see Array.sort's compareFunction. If you need sort buttons only, set to true
	 */
	sorter?: (a: any, b: any) => number | boolean;
	/**
	 * 	Order of sorted values: 'ascend' 'descend' null
	 */
	sortOrder?: "ascend" | "descend" | null;
	/**
	 * 	Width of this column
	 */
	width?: number | string;
	/**
	 * 	Callback executed when the confirm filter button is clicked, Use as a filter event when using template or jsx
	 */
	onFilter?: (value: string, record: any) => boolean;
	/**
	 * Callback executed when filterDropdownOpen is changed, Use as a filterDropdownOpen event when using template or jsx
	 */
	onFilterDropdownOpenChange?: (visible: boolean) => void;
};

export type RenderComponentProps = {
	text: string;
	record?: Record<string, any>;
	index?: number;
};

export type ComponentRender = {
	component: Component | string;
	props?: Record<string, any>;
	event?: Record<string, any>;
};

export type ColumnsRenderFn = (props: RenderComponentProps) => ComponentRender;

export type ColumnsRender = {
	title: string;
	index: string;
	render: ColumnsRenderFn;
	columnProps?: ColumnProps;
};