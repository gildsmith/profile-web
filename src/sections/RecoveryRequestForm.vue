<script setup>
import {useRecoveryRequestForm} from '../composables/recoveryRequestForm.ts'
import {IconArrowNarrowRight} from '@tabler/icons-vue'

const {formData, submitForm} = useRecoveryRequestForm()

</script>

<template>
    <form class="form" @submit.prevent="submitForm">
        <div class="inputWrapper">
            <label for="email">Email Address</label>
            <input id="email" v-model="formData.email" class="input" required type="email">
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