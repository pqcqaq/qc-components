import { Column, CreateSchemaProps, TableSchema, TitleConfig } from "../../types";

/**
 *  创建一个简单的表格Schema
 * @param dataTypeMap key:名称
 */
export const createSimpleTable = (
	props: CreateSchemaProps
): TableSchema => {
	const result: Column[] = Object.entries(props.config).map(([key, value]) => {
		return {
			header: value,
			body: key,
		};
	});
	return {
		title: props.title || "",
		columns: result,
	};
};
