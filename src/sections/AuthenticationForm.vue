<script setup>
import {useAuthenticationForm} from '../composables/authenticationForm.ts'
import FormStatusIcon from '../widgets/FormStatus.vue'
import {useUserStore} from '../stores/user.js'
import {useRouter} from 'vue-router'
import {watch} from 'vue'

const {formData, formState, submitForm} = useAuthenticationForm()
const router = useRouter()

watch(formState, (state) => {
    if (state.status === 'success') {
        useUserStore().user = state.response
        router.push({name: 'profile.dashboard'})
    }
})
</script>

<template>
    <form class="form" @submit.prevent="submitForm">
        <div class="wrapper">
            <label for="email">Email Address</label>
            <input id="email" v-model="formData.email" class="input" required type="email">
            <div v-if="formState.errors?.email" class="error" v-text="formState.errors.email[0]"/>
        </div>
        <div class="wrapper">
            <label for="password">Password</label>
            <input id="password" v-model="formData.password" class="input" required type="password">
            <div v-if="formState.errors?.password" class="error" v-text="formState.errors.password[0]"/>
        </div>
        <div class="wrapper wrapper--checkbox">
            <label for="remember">Remember</label>
            <input id="remember" v-model="formData.remember" class="input" type="checkbox">
        </div>
        <div class="wrapper wrapper--button">
            <button class="button" type="submit">
                <span>Log In</span>
                <FormStatusIcon :status="formState.status"/>
            </button>
            <div v-if="formState.errors?.common" class="error" v-text="formState.errors.common[0]"/>
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

.wrapper--checkbox {
    @apply flex flex-row-reverse items-center justify-end;
}

.wrapper--button {
    @apply justify-start;
}

.error {
    @apply text-sm text-red-500;
}
</style>