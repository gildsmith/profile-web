<script setup>
import {useAuthenticationForm} from '../composables/authenticationForm.ts'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formData, formState, submitForm} = useAuthenticationForm()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formData)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Welcome Back</h1>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formData.email" :errors="formState.errors.email" label="Email Address" name="email"/>
            <BaseInput v-model="formData.password" :errors="formState.errors.password" label="Password" name="password" type="password"/>
            <BaseInput v-model="formData.remember" class="inputWrapper--checkbox" label="Remember" name="remember" type="checkbox"/>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Log In">
                <router-link :to="{name: 'profile.registration'}" class="button button-secondary">
                    Create New Account
                </router-link>
            </BaseButton>
        </form>
        <router-link :to="{name: 'profile.recovery'}" class="redirectButton">
            Forgotten password?
        </router-link>
    </div>
</template>

<style scoped>
.formWrapper {
    @apply flex flex-col justify-center gap-4 p-4 m-auto min-h-full max-w-sm;
}

.form {
    @apply grid gap-4;
}

.redirectButton {
    @apply text-sm underline;
}
</style>