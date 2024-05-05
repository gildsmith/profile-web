<script setup>
import {useRecoveryCompletion} from '../composables/recoveryCompletion.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import PasswordMatch from '../widgets/PasswordMatch.vue'
import {onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formData, formState, submitForm} = useRecoveryCompletion()

const props = defineProps(['token'])

onMounted(() => {
    formData.token = props.token
    formData.email = useRoute().query.email
})

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formData)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Complete Account Recovery</h1>
        <span>Please enter your new password below to complete the recovery of your account.</span>
        <form class="form" @submit.prevent="submitForm">
            <input id="token" v-model="formData.token" type="hidden">
            <BaseInput v-model="formData.password" :errors="formState.errors.password" label="New Password" name="password" type="password">
                <PasswordStrength :password="formData.password"/>
            </BaseInput>
            <BaseInput v-model="formData.password_confirmation" :errors="formState.errors.password"
                       label="Confirm Password" name="password_confirmation" type="password">
                <PasswordMatch :confirmation="formData.password_confirmation" :password="formData.password"/>
            </BaseInput>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Change Password"/>
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