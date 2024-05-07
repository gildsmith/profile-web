<script setup>
import {ref} from 'vue'
import {IconUserCircle} from '@tabler/icons-vue'

const authenticated = ref(false)
const url = ref('')

axios.get('/api/authentication/user').then(response => {
    authenticated.value = !!response.data.id
}).catch(() => {
})

axios.get('/_gildsmith/apps/profile').then(response => {
    url.value = '/' + response.data.route
})
</script>

<template>
    <a v-if="!authenticated" :href="url" class="profileButton">
        <IconUserCircle size="24" stroke="1.5"/>
        <span>Log In</span>
    </a>
    <a v-if="authenticated" :href="url + '/login'" class="profileButton">
        <IconUserCircle size="24" stroke="1.5"/>
        <span>Profile</span>
    </a>
</template>

<style scoped>
.profileButton {
    @apply flex flex-col items-center justify-center text-sm font-semibold;
}
</style>