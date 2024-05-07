<script setup>
import {useRecoveryRequest} from '../composables/recoveryRequest.ts'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
const {formModel, formState, submitForm} = useRecoveryRequest()
const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>{{ t('Recover account') }}</h1>
        <span>{{ t('If there is an account associated with your email address, we will send you an email containing a link to reset your password.') }}</span>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formModel.email" :errors="formState.errors.email" label="Email address" type="email"/>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Send form">
                <router-link :to="{name: 'profile.authentication'}" class="button button-secondary">
                    {{ t('Back to login') }}
                </router-link>
            </BaseButton>
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