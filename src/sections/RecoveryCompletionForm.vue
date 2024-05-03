<script setup>
import {useRecoveryCompletionForm} from '../composables/recoveryCompletionForm.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import PasswordMatch from '../widgets/PasswordMatch.vue'
import {onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
import FormStateIcon from '../widgets/FormStateIcon.vue'

const {formData, formState, submitForm} = useRecoveryCompletionForm()

const props = defineProps(['token'])

onMounted(() => {
    formData.token = props.token
    formData.email = useRoute().query.email
})

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Complete Account Recovery</h1>
        <span>Please enter your new password below to complete the recovery of your account.</span>
        <form class="form" @submit.prevent="submitForm">
            <input id="token" v-model="formData.token" type="hidden">
            <div class="inputWrapper">
                <label for="password">New Password</label>
                <input id="password" v-model="formData.password" class="input" required type="password">
                <PasswordStrength :password="formData.password"/>
                <div v-if="formState.errors?.password" class="error" v-text="formState.errors.password[0]"/>
            </div>
            <div class="inputWrapper">
                <label for="password_confirmation">Confirm Password</label>
                <input id="password_confirmation" v-model="formData.password_confirmation" class="input" required
                       type="password">
                <PasswordMatch :confirmation="formData.password_confirmation" :password="formData.password"/>
            </div>
            <div class="inputWrapper inputWrapper--button">
                <button class="button" type="submit">
                    <span>Send Form</span>
                    <FormStateIcon :state="formState.state"/>
                </button>
            </div>
            <div v-if="formState.errors?.common" class="error" v-text="formState.errors.common[0]"/>
        </form>
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
</style>