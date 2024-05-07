<script setup>
import BaseInput from '../../components/BaseInput.vue'
import BaseButton from '../../components/BaseButton.vue'
import PasswordStrength from '../../widgets/PasswordStrength.vue'
import PasswordMatch from '../../widgets/PasswordMatch.vue'
import {useChangePassword} from '../../composables/changePassword.ts'

const {formModel, formState, submitForm} = useChangePassword()
</script>

<template>
    <form class="changePassword" @submit.prevent="submitForm">
        <h1>Change Password</h1>
        <BaseInput v-model="formModel.password" :errors="formState.errors.password"
                   :required="true" label="Old Password" name="password" type="password"/>
        <BaseInput v-model="formModel.new_password" :errors="formState.errors.new_password"
                   :required="true" label="New Password" name="new_password" type="password">
            <PasswordStrength :password="formModel.new_password"/>
        </BaseInput>
        <BaseInput v-model="formModel.new_password_confirmation" :errors="formState.errors.new_password_confirmation"
                   :required="true" label="Confirm New Password" name="new_password_confirmation" type="password">
            <PasswordMatch :confirmation="formModel.new_password_confirmation" :password="formModel.new_password"/>
        </BaseInput>
        <BaseButton :errors="formState.errors.common" :state="formState.state" label="Change Password"/>
    </form>
</template>

<style scoped>
.changePassword {
    @apply flex flex-col gap-4
}
</style>