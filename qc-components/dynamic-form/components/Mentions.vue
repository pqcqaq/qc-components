<template>
	<a-mentions v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key">
			<slot :name="key"></slot>
		</template>
	</a-mentions>
</template>

<script setup lang="ts">
import AMentions from "ant-design-vue/es/mentions";
</script>
