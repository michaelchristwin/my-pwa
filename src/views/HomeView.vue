<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import { usePWAInstall } from "@/composables/usePWAInstall";

const { canInstall, install } = usePWAInstall();
</script>

<template>
  <main>
    <button class="install" v-if="canInstall" @click="install">Install App</button>
    <TheWelcome />
  </main>
</template>
<style scoped>
.install {
  background: red;
}
</style>
