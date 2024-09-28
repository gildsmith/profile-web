<script setup>
import {useTitle} from '@vueuse/core'
import {ref} from 'vue'

import RegistrationForm from '../views/RegistrationForm.vue'
import RegistrationSuccess from '../views/RegistrationSuccess.vue'

useTitle('Create New Account')

const registrationSuccessful = ref(false)

function success() {
    registrationSuccessful.value = true
}
</script>

<template>
    <RegistrationForm v-if="!registrationSuccessful" @success="success"/>
    <RegistrationSuccess v-if="registrationSuccessful"/>
</template>