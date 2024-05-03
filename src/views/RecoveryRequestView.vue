<script setup>
import {useTitle} from '@vueuse/core'
import RecoveryForm from '../sections/RecoveryRequestForm.vue'
import RecoveryCompletionSuccess from '../sections/RecoveryCompletionSuccess.vue'
import {ref} from 'vue'

useTitle('Recover Account')

const recoverySuccessful = ref(false)

function success() {
    recoverySuccessful.value = true
}
</script>

<template>
    <RecoveryForm @success="success" v-if="!recoverySuccessful"/>
    <RecoveryCompletionSuccess v-if="recoverySuccessful"/>
</template>