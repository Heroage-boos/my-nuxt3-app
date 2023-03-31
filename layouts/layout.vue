<template>
    <LayoutHeader />
    <div class="app-content">
        <LayoutContentLeft />
        <slot />
    </div>
    <LayoutFooter />
</template>

<script setup lang="ts">
const route = useRoute();
</script>