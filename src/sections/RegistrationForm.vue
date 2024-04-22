<script setup>
import {useRegistrationForm} from '../composables/registrationForm.ts'
import PasswordStrength from '../components/PasswordStrength.vue'
import FormStatusIcon from '../components/FormStatusIcon.vue'
import {watch} from 'vue'
import {useRouter} from 'vue-router'

const {formData, formState, submitForm} = useRegistrationForm()

watch(formState, (state) => {
    if (state.status === 'success') {
        useRouter().push({name: 'auth.success'})
    }
})
</script>

<template>
    <form @submit.prevent="submitForm" class="grid gap-4">
        <div class="grid gap-1">
            <label for="email">Email Address</label>
            <input class="input" type="email" id="email" required v-model="formData.email">
            <div v-if="formState.errors?.email" class="text-sm text-red-500">
                {{ formState.errors.email[0] }}
            </div>
        </div>
        <div class="grid gap-1">
            <label for="password">Password</label>
            <input class="input" type="password" id="password" required v-model="formData.password">
            <div v-if="formState.errors?.password" class="text-sm text-red-500">
                {{ formState.errors.password[0] }}
            </div>
            <PasswordStrength :password="formData.password"/>
        </div>
        <div>
            <button class="button" type="submit">
                <span>Create New Account</span>
                <FormStatusIcon :status="formState.status"/>
            </button>
        </div>
    </form>
</template>