<template>
	<a-date-picker v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key">
			<slot :name="key"></slot>
		</template>
	</a-date-picker>
</template>

<script setup lang="ts">
import ADatePicker from "ant-design-vue/es/date-picker";
</script>
