<template>
	<a-slider v-bind="$attrs">
		<template v-for="(value, key) in $slots" :key="key">
			<slot :name="key"></slot>
		</template>
	</a-slider>
</template>

<script setup lang="ts">
import ASlider from "ant-design-vue/es/slider";
</script>
