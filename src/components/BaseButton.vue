<script setup>

import FormStateIcon from './FormStateIcon.vue'

const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'submit',
    },
    errors: {
        type: Array,
        default: () => [],
    },
    state: String,
})
</script>

<template>
    <div class="buttonContainer">
        <div class="buttonWrapper">
            <button :type="props.type" class="button">
                <span>{{ label }}</span>
                <FormStateIcon :state="state"/>
            </button>
            <slot/>
        </div>
        <div v-for="(error, key) in props.errors" :key="key" class="error" v-text="error"/>
    </div>
</template>

<style scoped>
.buttonContainer {
    @apply grid gap-1;
}

.buttonWrapper {
    @apply flex items-center gap-1;
}

.error {
    @apply text-sm text-red-500;
}
</style>