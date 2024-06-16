import "./assets/css/base.scss";
export * from './types';
// import type { App } from 'vue'
import DynamicForm from "./DynamicForm.vue";
export { useFullScreenDyForm } from "./hooks/useFullScreenDyForm";
// 使用install方法，在app.use挂载
DynamicForm.install = function (Vue) {
    Vue.component(DynamicForm.name || "", DynamicForm);
};
export default DynamicForm;
//# sourceMappingURL=index.js.map