import { App } from "vue";
// import FullScreenDyForm from "./components/FullScreenDyForm.vue";
// import { FormConfig } from "./types";
// import "./assets/css/base.scss";

// import type { App } from 'vue'
import DynamicForm from "./DynamicForm.vue";
export { useFullScreenDyForm } from "./hooks/useFullScreenDyForm";

// 使用install方法，在app.use挂载
DynamicForm.install = function (Vue: App) {
	Vue.component(DynamicForm.name || "", DynamicForm);
};

export default DynamicForm;
export * from "./types";