<template>
	<a-time-picker v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key">
			<slot :name="key"></slot>
		</template>
	</a-time-picker>
</template>

<script setup lang="ts">
import ATimePicker from "ant-design-vue/es/time-picker";
</script>
