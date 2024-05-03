<script setup>
import {IconArrowNarrowRight, IconLoader, IconCheck, IconAlertTriangle} from '@tabler/icons-vue'

const props = defineProps({
    state: {type: String, default: 'idle'},
})
</script>

<template>
    <IconArrowNarrowRight v-if="props.state === 'idle'" size="16" stroke="2"/>
    <IconLoader v-if="props.state === 'submitting'" size="16" stroke="2" class="animate-spin"/>
    <IconCheck v-if="props.state === 'success'" size="16" stroke="2"/>
    <IconAlertTriangle v-if="props.state === 'error'" size="16" stroke="2"/>
</template>