<template>
	<div class="switch">
		<div class="btns" v-for="(component, key) in componentsList" :key="key">
			<a-button @click="viewComponent = component.cpn" type="primary" class="btn">{{
				component.name
			}}</a-button>
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
import { ref } from "vue";

const viewComponent = ref<Component>();

const componentsList = [
	{
		name: "动态表单",
		cpn: Form,
	},
	{
		name: "表格",
		cpn: Table,
	},
];
</script>

<style scoped lang="scss">
.btns {
	display: inline-block;
	.btn {
		margin-right: 10px;
	}
}
</style>
