<template>
    <div>
        <a-tag v-for="tag in props.tags" :key="tag">
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