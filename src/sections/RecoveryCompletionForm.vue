<script setup>
import {useRecoveryCompletionForm} from '../composables/recoveryCompletionForm.ts'
import {IconArrowNarrowRight} from '@tabler/icons-vue'
import PasswordStrength from '../widgets/PasswordStrength.vue'
import PasswordMatch from '../widgets/PasswordMatch.vue'
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'

const {formData, submitForm} = useRecoveryCompletionForm()

const props = defineProps(['token'])

onMounted(() => {
    formData.token = props.token
    formData.email = useRoute().query.email
})
</script>

<template>
    <form class="form" @submit.prevent="submitForm">
        <input id="token" type="hidden" v-model="formData.token">
        <div class="inputWrapper">
            <label for="password">New Password</label>
            <input id="password" v-model="formData.password" class="input" required type="password">
            <PasswordStrength :password="formData.password"/>
        </div>
        <div class="inputWrapper">
            <label for="password_confirmation">Confirm Password</label>
            <input id="password_confirmation" v-model="formData.password_confirmation" class="input" required type="password">
            <PasswordMatch :password="formData.password" :confirmation="formData.password_confirmation"/>
        </div>
        <div class="inputWrapper inputWrapper--button">
            <button class="button" type="submit">
                <span>Send Form</span>
                <IconArrowNarrowRight size="16" stroke="2"/>
            </button>
        </div>
    </form>
</template>

<style scoped>
.form {
    @apply grid gap-4;
}

.inputWrapper {
    @apply grid gap-1;
}

.inputWrapper--button {
    @apply justify-start;
}
</style>