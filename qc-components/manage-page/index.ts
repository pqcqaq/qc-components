import { App } from "vue";
import "./assets/css/base.scss";
export * from "./types";

// import type { App } from 'vue'
import ManagePage from "./ManagePage.vue";
// export { createSimpleTable } from "./utils";

// 使用install方法，在app.use挂载
ManagePage.install = function (Vue: App) {
	Vue.component(ManagePage.name || "", ManagePage);
};

export { ManagePage };
