<template>
	<EasyTable :schema="schema" :data="data" />
	<EasyTable :schema="simpleSchema" :data="data" />
	<EasyTable :schema="simpleSchema" :data="empty" />
</template>
<script lang="ts" setup>
import EasyTable from "../../../qc-components/easy-table";
import { data, empty } from "./data";
import { schema, simpleSchema } from "./schema";
</script>
