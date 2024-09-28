<script setup>
import {useI18n} from 'vue-i18n'

import BaseButton from '../../components/BaseButton.vue'
import BaseInput from '../../components/BaseInput.vue'
import {useChangePassword} from '../../composables/changePassword.ts'
import PasswordMatch from '../../widgets/PasswordMatch.vue'
import PasswordStrength from '../../widgets/PasswordStrength.vue'

const {t} = useI18n()
const {formModel, formState, submitForm} = useChangePassword()
</script>

<template>
    <form class="changePassword" @submit.prevent="submitForm">
        <h1>{{ t('Change password') }}</h1>
        <BaseInput v-model="formModel.password" :errors="formState.errors.password"
                   :required="true" label="Old password" name="password" type="password"/>
        <BaseInput v-model="formModel.new_password" :errors="formState.errors.new_password"
                   :required="true" label="New password" name="new_password" type="password">
            <PasswordStrength :password="formModel.new_password"/>
        </BaseInput>
        <BaseInput v-model="formModel.new_password_confirmation" :errors="formState.errors.new_password_confirmation"
                   :required="true" label="Confirm new password" name="new_password_confirmation" type="password">
            <PasswordMatch :confirmation="formModel.new_password_confirmation" :password="formModel.new_password"/>
        </BaseInput>
        <BaseButton :errors="formState.errors.common" :state="formState.state" label="Change password"/>
    </form>
</template>

<style scoped>
.changePassword {
    @apply flex flex-col gap-4;
}
</style>