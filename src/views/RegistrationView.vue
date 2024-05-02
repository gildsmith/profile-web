<script setup>
import RegistrationForm from '../sections/RegistrationForm.vue'
import {useTitle} from '@vueuse/core'
import {ref} from 'vue'
import RegistrationSuccess from '../sections/RegistrationSuccess.vue'

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

<style scoped>

</style>