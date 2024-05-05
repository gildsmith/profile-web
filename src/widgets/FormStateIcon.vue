<script setup>
import {IconAlertTriangle, IconArrowNarrowRight, IconCheck, IconLoader} from '@tabler/icons-vue'

const props = defineProps({
    state: {type: String, default: 'idle'},
})
</script>

<template>
    <IconArrowNarrowRight v-if="props.state === 'idle'" size="16" stroke="2"/>
    <IconLoader v-if="props.state === 'submitting'" class="animate-spin" size="16" stroke="2"/>
    <IconCheck v-if="props.state === 'success'" size="16" stroke="2"/>
    <IconAlertTriangle v-if="props.state === 'error'" size="16" stroke="2"/>
</template>