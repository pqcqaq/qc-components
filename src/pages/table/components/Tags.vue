<template>
    <div>
        <a-tag v-for="tag in props.tags" :key="tag" v-bind="$attrs">
            {{ tag }}
        </a-tag>
    </div>
</template>

<script setup lang="ts">
type PropType = {
    tags: string[];
}

const props = defineProps<PropType>();
</script>