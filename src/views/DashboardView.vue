<script setup>
import {useTitle} from '@vueuse/core'
import {useRouter} from 'vue-router'

useTitle('Your Profile')

const children = useRouter()?.resolve({name: 'profile.dashboard'})?.matched[0]?.children || []
</script>

<template>
    <div class="container">
        <div class="navigationContainer">
            <nav class="navigation">
                <h1>Your Profile</h1>
                <RouterLink v-for="child in children" :to="{name: child.name}" class="navigationUrl" :key="child.name">
                    {{ child.meta.name }}
                </RouterLink>
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
</style>