<template>
	<div class="easy-table">
		<div class="title">
			{{ schema.title }}
		</div>
		<a-table :columns="baseSchema" :data-source="data">
			<template #headerCell="{ title, column }">
				<template v-for="header in headers">
					<template v-if="column.key === header.key">
						<component
							:is="
								cachedHeaderInfo(header?.render, {
									title,
									column,
								}).component
							"
							v-bind="
								cachedHeaderInfo(header?.render, {
									title,
									column,
								}).props
							"
							v-on="
								cachedHeaderInfo(header?.render, {
									title,
									column,
								}).event
							"
							>{{ header?.title }}</component
						>
					</template>
				</template>
			</template>

			<template #bodyCell="{ text, record, index, column }">
				<template v-for="render in renders">
					<template v-if="column.key === render.key">
						<template v-if="render.render">
							<component
								:is="
									cachedComponentsInfo(render.render, {
										text,
										record,
										index,
									}).component
								"
								v-bind="
									cachedComponentsInfo(render.render, {
										text,
										record,
										index,
									}).props
								"
								v-on="
									cachedComponentsInfo(render.render, {
										text,
										record,
										index,
									}).event
								"
							>
								{{ text }}
							</component>
						</template>
					</template>
				</template>
			</template>
		</a-table>
	</div>
</template>
<script lang="ts" setup>
import { type Component, markRaw } from "vue";
import {
	ColumnsRenderFn,
	HeaderRenderFn,
	RenderColumnProps,
	RenderHeaderProps,
	TableSchema,
} from "./types";

type PropType = {
	schema: TableSchema;
	data: Record<string, any>[];
};

const cachedComponentsInfo = computed(
	() => (render: ColumnsRenderFn | undefined, props: RenderColumnProps) => {
		if (!render) {
			return {
				component: "span",
				props: {},
				event: {},
			};
		}
		const rendered = render(props);
		return {
			component: makeRawCpn.value(rendered.component),
			props: rendered.props,
			event: rendered.event,
		};
	}
);

const cachedHeaderInfo = computed(
	() => (render: HeaderRenderFn | undefined, props: RenderHeaderProps) => {
		if (!render) {
			return {
				component: "span",
				props: {},
				event: {},
			};
		}
		const rendered = render(props);
		return {
			component: makeRawCpn.value(rendered.component),
			props: rendered.props,
			event: rendered.event,
		};
	}
);

const props = defineProps<PropType>();

const makeRawCpn = computed(() => (cpn: Component | string) => {
	if (typeof cpn === "string") {
		return cpn;
	}
	return markRaw(cpn);
});

const baseSchema = computed(() => {
	return props.schema.columns
		.map((item) => item.body)
		.map((render) => {
			return {
				dataIndex: render.index,
				key: render.index,
				...render.columnProps,
			};
		});
});

const renders = computed(() => {
    return props.schema.columns.map((item) => {
        return {
            ...item.body,
            key: item.body.index,
        }
    });
});

const headers = computed(() => {
    return props.schema.columns.map((item) => {
        return {
            ...item.header,
            key: item.body.index,
        }
    });
});
</script>
