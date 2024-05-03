<script setup>
import {useAuthenticationForm} from '../composables/authenticationForm.ts'
import FormStateIcon from '../widgets/FormStateIcon.vue'
import {watch} from 'vue'

const {formData, formState, submitForm} = useAuthenticationForm()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Welcome Back</h1>
        <form class="form" @submit.prevent="submitForm">
            <div class="inputWrapper">
                <label for="email">Email Address</label>
                <input id="email" v-model="formData.email" class="input" required type="email">
                <div v-if="formState.errors?.email" class="error" v-text="formState.errors.email[0]"/>
            </div>
            <div class="inputWrapper">
                <label for="password">Password</label>
                <input id="password" v-model="formData.password" class="input" required type="password">
                <div v-if="formState.errors?.password" class="error" v-text="formState.errors.password[0]"/>
            </div>
            <div class="inputWrapper inputWrapper--checkbox">
                <label for="remember">Remember</label>
                <input id="remember" v-model="formData.remember" class="input" type="checkbox">
            </div>
            <div class="inputWrapper inputWrapper--button">
                <button class="button" type="submit">
                    <span>Log In</span>
                    <FormStateIcon :state="formState.state"/>
                </button>
                <router-link :to="{name: 'profile.registration'}" class="button button-secondary">
                    Create New Account
                </router-link>
            </div>
            <div v-if="formState.errors?.common" class="error" v-text="formState.errors.common[0]"/>
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

.inputWrapper {
    @apply grid gap-1;
}

.inputWrapper--checkbox {
    @apply flex flex-row-reverse items-center justify-end;
}

.inputWrapper--button {
    @apply justify-start flex items-center;
}

.error {
    @apply text-sm text-red-500;
}

.redirectButton {
    @apply text-sm underline;
}
</style>