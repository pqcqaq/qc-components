<template>
	<div class="switch">
		<div class="btns" v-for="(component, key) in componentsList" :key="key">
			<a-button
				@click="location.href = `?component=${component.path}`"
				type="primary"
				class="btn"
				>{{ component.name }}</a-button
			>
		</div>
	</div>
	<div>
		<component :is="viewComponent"></component>
	</div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import Form from "./pages/form/Form.vue";
import Table from "./pages/table/Table.vue";
import Manage from "./pages/manage/Manage.vue";
import { ref, markRaw } from "vue";

const componentsList = [
	{
		name: "动态表单",
		path: "form",
		cpn: markRaw(Form),
	},
	{
		name: "表格",
		path: "table",
		cpn: markRaw(Table),
	},
	{
		name: "管理页面",
		path: "manage",
		cpn: markRaw(Manage),
	},
];

const viewComponent = ref<Component>();

// 获取当前页面的查询参数，然后根据查询参数来获取对应的组件
const getComponent = () => {
	const search = new URLSearchParams(location.search);
	const componentName = search.get("component");
	const component = componentsList.find(
		(item) => item.path === componentName
	);
	if (component) {
		viewComponent.value = component.cpn;
	}
};
const location = window.location;
getComponent();
</script>

<style scoped lang="scss">
.btns {
	display: inline-block;
	.btn {
		margin-right: 10px;
	}
}
</style>
