import { App } from "vue";
import "./assets/css/base.scss";
export * from "./types";

// import type { App } from 'vue'
import EasyTable from "./EasyTable.vue";
export { createSimpleTable } from "./utils";

// 使用install方法，在app.use挂载
EasyTable.install = function (Vue: App) {
	Vue.component(EasyTable.name || "", EasyTable);
};

export { EasyTable };
