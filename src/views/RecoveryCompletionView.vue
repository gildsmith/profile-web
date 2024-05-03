<script setup>
import {useTitle} from '@vueuse/core'
import RecoveryCompletionForm from '../sections/RecoveryCompletionForm.vue'
import {ref} from 'vue'

useTitle('Complete Account Recovery')

const props = defineProps(['token'])

const recoverySuccessful = ref(false)

function success() {
    recoverySuccessful.value = true
}
</script>

<template>
    <RecoveryCompletionForm :token="props.token" @success="success"/>
</template>