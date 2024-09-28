<script setup>
import {useI18n} from 'vue-i18n'

import FormStateIcon from './FormStateIcon.vue'

/*
 | ---------------------------------------------------------------------------
 | Form Button Component
 | ---------------------------------------------------------------------------
 | This component represents a button with an optional loading or state icon.
 | It also displays a list of validation errors when applicable.
 |
 | Props:
 | - label: The text to display on the button.
 | - type: The HTML button type. Uses 'submit' by default.
 | - errors: An array of error messages to display below the button.
 | - state: The state of the button, which determines the icon shown next to
 |   the label. Accepts values: 'idle', 'submitting', 'success' and 'error'.
 */

const {t} = useI18n()
const props = defineProps({
    label: {type: String, default: ''},
    type: {type: String, default: 'submit'},
    errors: {type: Array, default: () => []},
    state: {type: String, default: 'idle'},
})
</script>

<template>
    <div class="buttonContainer">
        <div class="buttonWrapper">
            <button :type="props.type" class="button">
                <span>{{ t(label) }}</span>
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