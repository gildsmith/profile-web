<script setup>
import BaseInput from '../../components/BaseInput.vue'
</script>

<template>
    <div class="changePassword">
        <h1>Change Password (WIP)</h1>

        <BaseInput label="Old Password" name="password" type="password"/>

        <label for="password">Old Password</label>
        <input id="password" class="input" name="password" type="password">

        <label for="new_password">New Password</label>
        <input id="new_password" class="input" name="new_password" type="password">
    </div>
</template>

<style scoped>
.changePassword {
    @apply flex flex-col gap-4
}
</style>