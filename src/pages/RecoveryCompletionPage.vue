<script setup>
import {useTitle} from '@vueuse/core'
import {ref} from 'vue'

import RecoveryCompletionForm from '../views/RecoveryCompletionForm.vue'
import RecoveryCompletionSuccess from '../views/RecoveryCompletionSuccess.vue'

useTitle('Complete Account Recovery')

const props = defineProps(['token'])
const recoverySuccessful = ref(false)

function success() {
    recoverySuccessful.value = true
}
</script>

<template>
    <RecoveryCompletionForm v-if="!recoverySuccessful" :token="props.token" @success="success"/>
    <RecoveryCompletionSuccess v-if="recoverySuccessful"/>
</template>