<script setup>
import {useTitle} from '@vueuse/core'
import {ref} from 'vue'

import RecoveryRequestForm from '../views/RecoveryRequestForm.vue'
import RecoveryRequestSuccess from '../views/RecoveryRequestSuccess.vue'

useTitle('Recover Account')

const recoverySuccessful = ref(false)
const inboxAddress = ref('')

function success(state, data) {
    recoverySuccessful.value = true
    inboxAddress.value = data.email
}
</script>

<template>
    <RecoveryRequestForm v-if="!recoverySuccessful" @success="success"/>
    <RecoveryRequestSuccess v-if="recoverySuccessful" :inbox-address="inboxAddress"/>
</template>