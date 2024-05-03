<script setup>
import {useRecoveryRequestForm} from '../composables/recoveryRequestForm.ts'
import FormStateIcon from '../widgets/FormStateIcon.vue'
import {watch} from 'vue'

const {formData, formState, submitForm} = useRecoveryRequestForm()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Recover Account</h1>
        <span>
            If there is an account associated with your email address,
            we will send you an email containing a link to reset your password.
        </span>
        <form class="form" @submit.prevent="submitForm">
            <div class="inputWrapper">
                <label for="email">Email Address</label>
                <input id="email" v-model="formData.email" class="input" required type="email">
            </div>
            <div class="inputWrapper inputWrapper--button">
                <button class="button" type="submit">
                    <span>Send Form</span>
                    <FormStateIcon :state="formState.state"/>
                </button>
            </div>
        </form>
        <div v-if="formState.errors?.common" class="error" v-text="formState.errors.common[0]"/>
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