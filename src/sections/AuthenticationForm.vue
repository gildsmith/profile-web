<script setup>
import {useAuthenticationForm} from '../composables/authenticationForm.ts'
import FormStatusIcon from '../widgets/FormStatus.vue'
import {watch} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from '../stores/user.js'

const {formData, formState, submitForm} = useAuthenticationForm()
const router = useRouter()

watch(formState, (state) => {
    if (state.status === 'success') {
        useUserStore().user = state.response
        router.push({name: 'profile.dashboard'})
    }
})
</script>

<template>
    <form @submit.prevent="submitForm" class="form">
        <div class="wrapper">
            <label for="email">Email Address</label>
            <input v-model="formData.email" class="input" type="email" id="email" required>
            <div v-if="formState.errors?.email" v-text="formState.errors.email[0]" class="error"/>
        </div>
        <div class="wrapper">
            <label for="password">Password</label>
            <input v-model="formData.password" class="input" type="password" id="password" required>
            <div v-if="formState.errors?.password" v-text="formState.errors.password[0]" class="error"/>
        </div>
        <div class="wrapper wrapper--checkbox">
            <label for="remember">Remember</label>
            <input v-model="formData.remember" class="input" type="checkbox" id="remember">
        </div>
        <div class="wrapper wrapper--button">
            <button class="button" type="submit">
                <span>Log In</span>
                <FormStatusIcon :status="formState.status"/>
            </button>
            <div v-if="formState.errors?.common" v-text="formState.errors.common[0]" class="error"/>
        </div>
    </form>
</template>

<style scoped>
.form {
    @apply grid gap-4;
}

.wrapper {
    @apply grid gap-1;
}

.wrapper--checkbox {
    @apply flex flex-row-reverse items-center justify-end;
}

.wrapper--button {
    @apply justify-start;
}

.error {
    @apply text-sm text-red-500;
}
</style>