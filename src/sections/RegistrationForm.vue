<script setup>
import {useRegistrationForm} from '../composables/registrationForm.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import FormStatusIcon from '../widgets/FormStatus.vue'
import {watch} from 'vue'
import {useRouter} from 'vue-router'

const {formData, formState, submitForm} = useRegistrationForm()
const router = useRouter()

watch(formState, (state) => {
    if (state.status === 'success') {
        router.push({name: 'profile.success'})
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
            <PasswordStrength :password="formData.password"/>
            <div v-if="formState.errors?.password" v-text="formState.errors.password[0]" class="error"/>
        </div>
        <div class="wrapper wrapper--button">
            <button class="button" type="submit">
                <span>Register</span>
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

.wrapper--button {
    @apply justify-start;
}

.error {
    @apply text-sm text-red-500;
}
</style>