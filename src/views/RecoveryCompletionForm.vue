<script setup>
import {useRecoveryCompletion} from '../composables/recoveryCompletion.ts'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import PasswordMatch from '../widgets/PasswordMatch.vue'
import {onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formModel, formState, submitForm} = useRecoveryCompletion()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])
const props = defineProps(['token'])

onMounted(() => {
    formModel.token = props.token
    formModel.email = useRoute().query.email
})

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Complete Account Recovery</h1>
        <span>Please enter your new password below to complete the recovery of your account.</span>
        <form class="form" @submit.prevent="submitForm">
            <input id="token" v-model="formModel.token" type="hidden">
            <BaseInput v-model="formModel.password" :errors="formState.errors.password" label="New Password" name="password" type="password">
                <PasswordStrength :password="formModel.password"/>
            </BaseInput>
            <BaseInput v-model="formModel.password_confirmation" label="Confirm Password" name="password_confirmation" type="password">
                <PasswordMatch :confirmation="formModel.password_confirmation" :password="formModel.password"/>
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
</style>