<template>
	<a-rate v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key" #[key]="scope">
			<slot :name="key" v-bind="scope || {}"></slot>
		</template>
	</a-rate>
</template>

<script setup lang="ts">
import ARate from "ant-design-vue/es/rate";
</script>
