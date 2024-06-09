<template>
	<a-input-number v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key">
			<slot :name="key"></slot>
		</template>
	</a-input-number>
</template>

<script setup lang="ts">
import AInputNumber from "ant-design-vue/es/input-number";
</script>
