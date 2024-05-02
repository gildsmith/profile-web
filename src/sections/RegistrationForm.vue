<script setup>
import {useRegistrationForm} from '../composables/registrationForm.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import FormStatusIcon from '../widgets/FormStatus.vue'
import {watch} from 'vue'

const {formData, formState, submitForm} = useRegistrationForm()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
        emit(formState.state)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Create New Account</h1>
        <form class="form" @submit.prevent="submitForm">
            <div class="inputWrapper">
                <label for="email">Email Address</label>
                <input id="email" v-model="formData.email" class="input" required type="email">
                <div v-if="formState.errors?.email" class="error" v-text="formState.errors.email[0]"/>
            </div>
            <div class="inputWrapper">
                <label for="password">Password</label>
                <input id="password" v-model="formData.password" class="input" required type="password">
                <PasswordStrength :password="formData.password"/>
                <div v-if="formState.errors?.password" class="error" v-text="formState.errors.password[0]"/>
            </div>
            <div class="inputWrapper inputWrapper--button">
                <button class="button" type="submit">
                    <span>Register</span>
                    <FormStatusIcon :status="formState.state"/>
                </button>
                <div v-if="formState.errors?.common" class="error" v-text="formState.errors.common[0]"/>
            </div>
        </form>
        <router-link :to="{name: 'profile.authentication'}" class="redirectButton">
            Already have an account? Click here to log in.
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

.inputWrapper {
    @apply grid gap-1;
}

.inputWrapper--button {
    @apply justify-start;
}

.error {
    @apply text-sm text-red-500;
}

.redirectButton {
    @apply text-sm underline;
}
</style>