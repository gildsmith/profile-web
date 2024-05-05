<script setup>
import {useTitle} from '@vueuse/core'
import {useRoute, useRouter} from 'vue-router'
import {useLogoutUser} from '../composables/logoutUser.ts'
import {useUserStore} from '../stores/user.js'

useTitle('Your Profile')

const router = useRouter()
const children = useRoute().matched[0]?.children || []

function logout() {
    useLogoutUser().submitForm()
    useUserStore().invalidate()
    router.push({name: 'profile.authentication'})
}
</script>

<template>
    <div class="container">
        <div class="navigationContainer">
            <nav class="navigation">
                <RouterLink v-for="child in children" :key="child.name" :to="{name: child.name}" class="navigationUrl">
                    {{ child.meta.name }}
                </RouterLink>
                <div class="logout" @click="logout">Log Out</div>
            </nav>
        </div>
        <div class="contentContainer">
            <div class="content">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply grid min-h-full min-w-full;
    @apply lg:grid-cols-7;
}

.navigationContainer {
    @apply bg-slate-100 p-6 justify-end flex;
    @apply lg:col-span-3;
}

.navigation {
    @apply max-w-64 w-full flex flex-col gap-4;
}

.contentContainer {
    @apply lg:col-span-4 p-6 flex;
}

.content {
    @apply max-w-lg w-full;
}

.logout {
    @apply text-red-500 cursor-pointer;
}
</style>