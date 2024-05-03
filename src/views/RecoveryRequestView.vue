<script setup>
import {ref} from 'vue'
import {useTitle} from '@vueuse/core'
import RecoveryRequestForm from '../sections/RecoveryRequestForm.vue'
import RecoveryRequestSuccess from '../sections/RecoveryRequestSuccess.vue'

useTitle('Recover Account')

const recoverySuccessful = ref(false)

function success() {
    recoverySuccessful.value = true
}
</script>

<template>
    <RecoveryRequestForm @success="success" v-if="!recoverySuccessful"/>
    <RecoveryRequestSuccess v-if="recoverySuccessful"/>
</template>