<script setup>
import {onMounted, watch} from 'vue'
import {useI18n} from 'vue-i18n'
import {useRoute} from 'vue-router'

import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import {useRecoveryCompletion} from '../composables/recoveryCompletion.ts'
import PasswordMatch from '../widgets/PasswordMatch.vue'
import PasswordStrength from '../widgets/PasswordStrength.vue'

const {t} = useI18n()
const {formModel, formState, submitForm} = useRecoveryCompletion()
const emit = defineEmits(['idle', 'submitting', 'success', 'error'])
const props = defineProps(['token'])

onMounted(() => {
    formModel.token = props.token
    formModel.email = useRoute().query.email
})

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>{{ t('Complete account recovery') }}</h1>
        <span>{{ t('Please enter your new password below to complete the recovery of your account.') }}</span>
        <form class="form" @submit.prevent="submitForm">
            <input id="token" v-model="formModel.token" type="hidden">
            <BaseInput v-model="formModel.password" :errors="formState.errors.password" label="New password" name="password" type="password">
                <PasswordStrength :password="formModel.password"/>
            </BaseInput>
            <BaseInput v-model="formModel.password_confirmation" label="Confirm new password" name="password_confirmation" type="password">
                <PasswordMatch :confirmation="formModel.password_confirmation" :password="formModel.password"/>
            </BaseInput>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Change password"/>
        </form>
    </div>
</template>

<style scoped>
.formWrapper {
    @apply flex flex-col gap-4 p-4 m-auto max-w-sm;
}

.form {
    @apply grid gap-4;
}
</style>