<script setup>
import {useRegisterUser} from '../composables/registerUser.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
const {formModel, formState, submitForm} = useRegisterUser()
const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>{{ t('Create new account') }}</h1>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formModel.email" :errors="formState.errors.email" label="Email Address" name="email"/>
            <BaseInput v-model="formModel.password" :errors="formState.errors.password" label="Password" name="password" type="password">
                <PasswordStrength :password="formModel.password"/>
            </BaseInput>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Register">
                <router-link :to="{name: 'profile.authentication'}" class="button button-secondary">
                    {{ t('Back to login') }}
                </router-link>
            </BaseButton>
        </form>
        <router-link :to="{name: 'profile.authentication'}" class="redirectButton">
            {{ t('Already have an account? Click here to log in.') }}
        </router-link>
    </div>
</template>

<style scoped>
.formWrapper {
    @apply flex flex-col gap-4 p-4 m-auto max-w-sm;
}

.form {
    @apply grid gap-4;
}

.redirectButton {
    @apply text-sm underline;
}
</style>