<template>
	<div
		style="
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
		"
	>
		<component :is="componentId"></component>
		{{ info }}
	</div>
</template>

<script setup lang="ts">
import { type Component } from "vue";

type PropType = {
	componentId: Component;
	info: string;
};

const props = defineProps<PropType>();
</script>
