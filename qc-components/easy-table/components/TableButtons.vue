<template>
	<div
		v-if="props.btns && props.btns.length > 0"
		class="custombtns"
		:style="{
			...{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '20px',
			},
			...props.customBtnsStyle,
		}"
	>
		<div
			v-for="btn in props.btns"
			:key="btn.text"
			:style="{
				...{
					display: 'inline',
					justifyContent: 'center',
				},
				...btn.outterStyle,
			}"
		>
			<a-button
                @click="btn.onClick"
				v-bind="btn.props"
				:style="{
					...btn.style,
				}"
			>
				{{ btn.text }}
			</a-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import AButton from "ant-design-vue/es/button";
import type { TableCustomBtn } from "../types";
import { CSSProperties } from "vue";
type propType = {
	btns: TableCustomBtn[];
	customBtnsStyle: CSSProperties;
};
const props = defineProps<propType>();
</script>
