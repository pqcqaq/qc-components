/**
 *  创建一个简单的表格Schema
 * @param dataTypeMap key:名称
 */
export const createSimpleTable = (props) => {
    const result = Object.entries(props.config).map(([key, value]) => {
        return {
            header: value,
            body: key,
        };
    });
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
export function deepCloneArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }
    function deepClone(item) {
        if (item === null || typeof item !== "object") {
            return item;
        }
        if (Array.isArray(item)) {
            const copy = [];
            for (let i = 0; i < item.length; i++) {
                copy[i] = deepClone(item[i]);
            }
            return copy;
        }
        else if (item instanceof Date) {
            return new Date(item.getTime());
        }
        else if (item instanceof RegExp) {
            return new RegExp(item.source, item.flags);
        }
        else {
            const copy = {};
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    copy[key] = deepClone(item[key]);
                }
            }
            return copy;
        }
    }
    return deepClone(arr);
}
//# sourceMappingURL=index.js.map