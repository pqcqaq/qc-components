export * from "./types";
export * from "./dynamic-form";
export * from "./easy-table";
export * from "./manage-page";
export const version = "1.1.1";
export function install(app) {
    app.component("ManagePage", () => import("./manage-page/ManagePage.vue"));
    app.component("EasyTable", () => import("./easy-table/EasyTable.vue"));
    app.component("DynamicForm", () => import("./dynamic-form/DynamicForm.vue"));
}
export default {
    install,
    version,
};
//# sourceMappingURL=index.js.map