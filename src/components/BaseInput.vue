<script setup>

const props = defineProps({
    label: String,
    name: String,
    type: {
        type: String,
        default: 'text',
    },
    errors: {
        type: Array,
        default: () => [],
    },
})

const model = defineModel()
</script>

<template>
    <div class="inputWrapper">
        <label v-if="props.label" :for="props.name" v-text="props.label"/>
        <input :id="props.name" v-model="model" :name="props.name" :type="props.type" class="input"/>
        <slot/>
        <div v-for="(error, key) in props.errors" :key="key" class="error" v-text="error"/>
    </div>
</template>

<style scoped>
.inputWrapper {
    @apply grid gap-1;
}

/*noinspection CssUnusedSymbol*/
.inputWrapper--checkbox {
    @apply flex flex-row-reverse items-center justify-end;
}

.error {
    @apply text-sm text-red-500;
}
</style>