<script setup>
import {useRegisterUser} from '../composables/registerUser.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formModel, formState, submitForm} = useRegisterUser()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Create New Account</h1>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formModel.email" :errors="formState.errors.email" label="Email Address" name="email"/>
            <BaseInput v-model="formModel.password" :errors="formState.errors.password" label="Password" name="password" type="password">
                <PasswordStrength :password="formModel.password"/>
            </BaseInput>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Register">
                <router-link :to="{name: 'profile.authentication'}" class="button button-secondary">
                    Already Have an Account
                </router-link>
            </BaseButton>
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

.redirectButton {
    @apply text-sm underline;
}
</style>