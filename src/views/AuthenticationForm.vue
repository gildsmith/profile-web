<script setup>
import {watch} from 'vue'
import {useI18n} from 'vue-i18n'

import BaseButton from '../components/BaseButton.vue'
import BaseInput from '../components/BaseInput.vue'
import {useAuthenticateUser} from '../composables/authenticateUser.ts'

const {t} = useI18n()
const {formModel, formState, submitForm} = useAuthenticateUser()
const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>{{ t('Welcome back') }}</h1>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formModel.email" :errors="formState.errors.email" label="Email address" name="email"/>
            <BaseInput v-model="formModel.password" :errors="formState.errors.password" label="Password" name="password" type="password"/>
            <BaseInput v-model="formModel.remember" class="inputWrapper--checkbox" label="Remember me" name="remember" type="checkbox"/>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Log in">
                <router-link :to="{name: 'profile.registration'}" class="button button-secondary">
                    {{ t('Create new account') }}
                </router-link>
            </BaseButton>
        </form>
        <router-link :to="{name: 'profile.recovery'}" class="redirectButton">
            {{ t('Forgotten password?') }}
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