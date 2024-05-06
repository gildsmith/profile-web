<script setup>
/*
 | ---------------------------------------------------------------------------
 | Form Input Component
 | ---------------------------------------------------------------------------
 | This component represents a form input with support for different input
 | types and error messages. It uses the v-model directive to bind the input
 | value to a parent component's data model.
 |
 | Props:
 | - label: The label text to display for the input field.
 | - name: The `name` attribute value for the input field.
 | - type: The type of the input field. Defaults to 'text'.
 | - errors: An array of error messages to display below the input field.
 */

const props = defineProps({
    label: String,
    name: String,
    type: {type: String, default: 'text'},
    errors: {type: Array, default: () => []},
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