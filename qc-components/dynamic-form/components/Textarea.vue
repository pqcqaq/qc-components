<template>
	<a-textarea v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key" #[key]="scope">
			<slot :name="key" v-bind="scope || {}"></slot>
		</template>
	</a-textarea>
</template>

<script setup lang="ts">
import ATextarea from  "ant-design-vue/es/input/TextArea";
</script>
