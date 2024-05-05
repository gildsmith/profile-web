<script setup>
import {computed} from 'vue'
import zxcvbn from 'zxcvbn'

const props = defineProps({
    password: {type: String, default: ''},
})

const strength = computed(() => {
    // Calculates the password strength score, considering a minimum
    // length of 8 characters (matches default Laravel requirement).
    if (props.password.length < 8)
        return 0

    const score = zxcvbn(props.password).score

    // Ensures a score of at least 1 for progress bar visibility.
    return score || 1
})

const strengthStyle = computed(() => {
    return `width: ${strength.value * 25}%`
})
</script>

<template>
    <div class="h-1 rounded bg-slate-100">
        <div :style="strengthStyle" class='h-full rounded bg-green-500 transition-all'/>
    </div>
</template>