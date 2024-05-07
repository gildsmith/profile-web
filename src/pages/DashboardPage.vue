<script setup>
import {useTitle} from '@vueuse/core'
import {useRoute, useRouter} from 'vue-router'
import {useLogoutUser} from '../composables/logoutUser.ts'
import {useUserStore} from '../stores/user.js'

/*
 | ---------------------------------------------------------------------------
 | Dashboard Page
 | ---------------------------------------------------------------------------
 | Dashboard is a where users can manage their information.
 |
 | It is extensible via Vue Router, specifically by creating child routes
 | under this page. They're then programmatically displayed in the navigation.
 |
 | Learn more here: https://github.com/gildsmith/profile-client/wiki/Dashboard
 */

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
    <div class="dashboard">
        <nav class="navigation">
            <h1>Your Profile</h1>
            <RouterLink v-for="(child, key) in children" :key="key" :to="{name: child.name}" class="navigationUrl">
                {{ child.meta.name }}
            </RouterLink>
            <div class="logout" @click="logout">Log Out</div>
        </nav>
        <div class="contentContainer">
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>
.dashboard {
    @apply min-h-full max-w-3xl mx-auto grid grid-cols-3 gap-4;
}

.navigation {
    @apply p-4;
}

.navigationUrl, .logout {
    @apply cursor-pointer flex py-2;
}

.contentContainer {
    @apply col-span-2 p-4;
}
</style>