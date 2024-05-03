<script setup>
import {ref} from 'vue'
import {useTitle} from '@vueuse/core'
import RecoveryCompletionForm from '../sections/RecoveryCompletionForm.vue'
import RecoveryRequestSuccess from '../sections/RecoveryRequestSuccess.vue'

useTitle('Complete Account Recovery')

const props = defineProps(['token'])
const recoverySuccessful = ref(false)

function success() {
    recoverySuccessful.value = true
}
</script>

<template>
    <RecoveryCompletionForm :token="props.token" @success="success" v-if="!recoverySuccessful"/>
    <RecoveryRequestSuccess v-if="recoverySuccessful"/>
</template>