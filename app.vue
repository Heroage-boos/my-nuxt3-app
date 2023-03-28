<template>
  <!-- <NuxtLink to="/index" /> -->
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
let layout: string = "layout"

</script>
