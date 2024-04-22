<script setup>
import {useTitle} from '@vueuse/core'

useTitle('Your Profile')
</script>

<template>
    <div class="container">
        <div class="navigationContainer">
            <nav class="navigation">
                <h1>Hello ✨</h1>
                # repeatable links here #
            </nav>
        </div>
        <div class="contentContainer">
            <div class="content">
                Page Content Here
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
    @apply bg-red-500 max-w-64 w-full;
}

.contentContainer {
    @apply lg:col-span-4 p-6 flex;
}

.content {
    @apply bg-red-500 max-w-lg w-full;
}
</style>