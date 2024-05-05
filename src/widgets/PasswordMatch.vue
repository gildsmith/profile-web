<script setup>
import {IconCircleCheck, IconExclamationCircle} from '@tabler/icons-vue'

const props = defineProps(['password', 'confirmation'])
</script>

<template>
    <div v-if="props.password !== props.confirmation" class="matchWrapper">
        <div>
            <IconExclamationCircle size="16" stroke="2"/>
        </div>
        <span>Passwords must match</span>
    </div>
    <div v-else class="matchWrapper matchWrapper--match">
        <div>
            <IconCircleCheck size="16" stroke="2"/>
        </div>
        <span>Passwords match</span>
    </div>
</template>

<style scoped>
.matchWrapper {
    @apply flex items-center gap-1 text-sm;
}

.matchWrapper--match {
    @apply text-emerald-500;
}

.matchWrapper > span {
    /*
     * Adjusts the vertical position of the text to align
     * perfectly with the icon by shifting it slightly downward.
     */
    transform: translateY(1px);
}
</style>