<script setup>
import {IconUserCircle} from '@tabler/icons-vue'
import {ref} from 'vue'

const url = ref('#')

axios.get('_gildsmith/apps/profile').then(response => {
    url.value = '/' + response.data.route + '/login'
})
</script>

<template>
    <a :href="url" class="profileButton">
        <IconUserCircle size="24" stroke="1.5"/>
        <span class="profileButton__text">Log In</span>
    </a>
</template>

<style scoped>
.profileButton {
    @apply flex flex-col items-center justify-center;
}

.profileButton__text {
    @apply text-sm font-semibold;
}
</style>