import { CreateSchemaProps, TableSchema } from '../types';

/**
 *  创建一个简单的表格Schema
 * @param dataTypeMap key:名称
 */
export declare const createSimpleTable: (props: CreateSchemaProps) => TableSchema;
/**
 *  创建一个任意数组的深拷贝
 * @param arr  	数组
 * @returns  深拷贝后的数组
 */
export declare function deepCloneArray<T>(arr: T[]): T[];
