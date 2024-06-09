/**
 *  创建一个简单的表格Schema
 * @param dataTypeMap key:名称
 */
export const createSimpleTable = (dataTypeMap, title) => {
    if (typeof dataTypeMap !== "object") {
        throw new Error("dataType must be an object");
    }
    const result = Object.entries(dataTypeMap).map(([key, value]) => {
        if (typeof value !== "string") {
            throw new Error("value of dataType must be string");
        }
        return {
            header: value,
            body: key,
        };
    });
    return {
        title: title || "",
        columns: result,
    };
};
//# sourceMappingURL=index.js.map