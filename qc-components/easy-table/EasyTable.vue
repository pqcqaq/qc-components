<template>
	<div
		class="easy-table"
		:style="{
			...schema.outterStyle,
		}"
	>
		<template v-if="schema.title">
			<div class="title">
				<template v-if="typeof schema.title === 'string'">
					<h2 style="margin-bottom: 10px">{{ schema.title }}</h2>
				</template>
				<template v-else>
					<div :style="schema.title.style">
						{{ schema.title.text }}
					</div>
				</template>
			</div>
		</template>
		<a-table
			:columns="baseSchema"
			:data-source="getOrDeepCloneArray(data)"
			v-bind="schema.props"
		>
			<template #headerCell="{ title, column }">
				<template v-for="header in headers">
					<template v-if="column.key === header.key">
						<component
							:is="
								cachedHeaderInfo(header, {
									title,
									column,
								}).component
							"
							v-bind="
								cachedHeaderInfo(header, {
									title,
									column,
								}).props
							"
							v-on="{
								...cachedHeaderInfo(header, {
									title,
									column,
								}).event,
								onNull: () => {},
							}"
							>{{ header?.title }}</component
						>
					</template>
				</template>
			</template>

			<template #bodyCell="{ text, record, index, column }">
				<template v-for="render in renders">
					<template v-if="column.key === render.key">
						<component
							:is="
								cachedComponentsInfo(render, {
									text,
									record,
									index,
								}).component
							"
							v-bind="
								cachedComponentsInfo(render, {
									text,
									record,
									index,
								}).props
							"
							v-on="{
								...cachedComponentsInfo(render, {
									text,
									record,
									index,
								}).event,
								onNull: () => {},
							}"
						>
							{{ text }}
						</component>
					</template>
				</template>
			</template>
		</a-table>
	</div>
</template>

<script lang="ts">
export default {
	name: "easy-table",
};
</script>

<script lang="ts" setup>
import { type Component, markRaw, computed } from "vue";
import {
	ColumnProps,
	ColumnsRenderFn,
	ComponentRender,
	HeaderRenderFn,
	RenderColumnProps,
	RenderHeaderProps,
	TableSchema,
} from "./types";
// import ATable from "ant-design-vue/es/table";
import { deepCloneArray } from "./utils";

const getOrDeepCloneArray = (data: Record<string, any>[]) => {
	if (props.enableDeepClone) {
		console.warn("已启用数组深度克隆，可能会影响性能！");
		return deepCloneArray(data);
	}
	return data;
};

type PropType = {
	schema: TableSchema;
	data: Record<string, any>[];
	enableDeepClone?: boolean;
};

type CachedComponentsInfoProp =
	| { render: undefined; key: string }
	| { render: ColumnsRenderFn; key: string };

// const ComponentsCacheMap = new Map<string, ComponentRender>();

const cachedComponentsInfo = (
	render: CachedComponentsInfoProp,
	props: RenderColumnProps
) => {
	// if (ComponentsCacheMap.has(render.key)) {
	// 	return ComponentsCacheMap.get(render.key)!;
	// }
	if (!render.render) {
		return {
			component: "span",
			props: {},
			event: {},
		};
	}
	const rendered = render.render(props);
	const cache = {
		component: makeRawCpn.value(rendered.component),
		props: rendered.props,
		event: rendered.event,
	};
	// ComponentsCacheMap.set(render.key, cache);
	return cache;
};

type CachedHeaderInfoProp =
	| { render: undefined; key: string }
	| { render: HeaderRenderFn; key: string };

const headerInfoCacheMap = new Map<string, ComponentRender>();
const cachedHeaderInfo = (
	render: CachedHeaderInfoProp,
	props: RenderHeaderProps
) => {
	if (headerInfoCacheMap.has(render.key)) {
		return headerInfoCacheMap.get(render.key)!;
	}
	if (!render.render) {
		return {
			component: "span",
			props: {},
			event: {},
		};
	}
	const rendered = render.render(props);
	const cache = {
		component: makeRawCpn.value(rendered.component),
		props: rendered.props,
		event: rendered.event,
	};
	headerInfoCacheMap.set(render.key, cache);
	return cache;
};

const props = defineProps<PropType>();

const makeRawCpn = computed(() => (cpn: Component | string) => {
	if (typeof cpn === "string") {
		return cpn;
	}
	return markRaw(cpn);
});

const baseSchema = computed(() => {
	const widthCache: (number | string | undefined)[] = [];
	const PropsCache: (ColumnProps | undefined)[] = [];
	return props.schema.columns
		.map((item, index) => {
			widthCache[index] = item.width;
			PropsCache[index] = item.props;
			return item.body;
		})
		.map((render, index) => {
			if (typeof render === "string") {
				return {
					dataIndex: render,
					key: render,
					width: widthCache[index],
				};
			}
			return {
				dataIndex: render.index,
				key: render.index,
				...PropsCache[index],
				width: widthCache[index],
			};
		});
});

const renders = computed(() => {
	return props.schema.columns.map((item) => {
		if (typeof item.body === "string") {
			return {
				render: undefined,
				key: item.body,
			};
		}
		return {
			...item.body,
			key: item.body.index,
		};
	});
});

const headers = computed(() => {
	return props.schema.columns.map((item) => {
		if (typeof item.header === "string") {
			return {
				title: item.header,
				key: typeof item.body == "string" ? item.body : item.body.index,
			};
		}
		return {
			...item.header,
			key: typeof item.body == "string" ? item.body : item.body.index,
		};
	});
});
</script>
