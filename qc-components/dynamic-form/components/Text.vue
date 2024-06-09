<template>
	<a-input v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key" #[key]="scope">
			<slot :name="key" v-bind="scope || {}"></slot>
		</template>
	</a-input>
</template>

<script setup lang="ts">
import AInput from "ant-design-vue/es/input";
</script>
