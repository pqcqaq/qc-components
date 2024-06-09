import { App, createApp } from "vue";
import "./assets/css/base.scss";

// import type { App } from 'vue'
import EasyTable from './EasyTable.vue'

// 使用install方法，在app.use挂载
EasyTable.install = function (Vue: App) {
	Vue.component(EasyTable.name || "", EasyTable);
};

export default EasyTable;
