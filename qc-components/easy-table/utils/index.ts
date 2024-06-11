import { Column, CreateSchemaProps, TableSchema } from "../types";

/**
 *  创建一个简单的表格Schema
 * @param dataTypeMap key:名称
 */
export const createSimpleTable = (props: CreateSchemaProps): TableSchema => {
	const result: Column[] = Object.entries(props.config).map(
		([key, value]) => {
			return {
				header: value,
				body: key,
			};
		}
	);
	return {
		title: props.title || "",
		columns: result,
		props: props.props,
	};
};

/**
 *  创建一个任意数组的深拷贝
 * @param arr  	数组
 * @returns  深拷贝后的数组
 */
export function deepCloneArray<T>(arr: T[]): T[] {
	if (!Array.isArray(arr)) {
		throw new TypeError("Input must be an array");
	}

	function deepClone<T>(item: T): T {
		if (item === null || typeof item !== "object") {
			return item;
		}
		if (Array.isArray(item)) {
			const copy: any[] = [];
			for (let i = 0; i < item.length; i++) {
				copy[i] = deepClone(item[i]);
			}
			return copy as T;
		} else if (item instanceof Date) {
			return new Date(item.getTime()) as any;
		} else if (item instanceof RegExp) {
			return new RegExp(item.source, item.flags) as any;
		} else {
			const copy: { [key: string]: any } = {};
			for (const key in item as { [key: string]: any }) {
				if ((item as { [key: string]: any }).hasOwnProperty(key)) {
					copy[key] = deepClone(
						(item as { [key: string]: any })[key]
					);
				}
			}
			return copy as T;
		}
	}

	return deepClone(arr);
}
