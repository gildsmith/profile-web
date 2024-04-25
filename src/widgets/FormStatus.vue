<script setup>
import {IconArrowNarrowRight, IconLoader, IconCheck, IconAlertTriangle} from '@tabler/icons-vue'

const props = defineProps({
    status: {type: String, default: 'idle'},
})
</script>

<template>
    <IconArrowNarrowRight v-if="props.status === 'idle'" size="16" stroke="2"/>
    <IconLoader v-if="props.status === 'submitting'" size="16" stroke="2" class="animate-spin"/>
    <IconCheck v-if="props.status === 'success'" size="16" stroke="2"/>
    <IconAlertTriangle v-if="props.status === 'error'" size="16" stroke="2"/>
</template>