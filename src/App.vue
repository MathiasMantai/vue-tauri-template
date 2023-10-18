<template>
  <div class="h-[100dvh] bg-[var(--mainBg)] z-0 flex flex-col grow text-gray-700">
      <Titlebar title="Template"  />
      <div class="flex grow h-[calc(100dvh - 32px)] overflow-hidden">
          <RouterView class=""></RouterView>
      </div>
  </div>
</template>

<script setup lang="ts">
  import Titlebar from './components/window/Titlebar.vue'
  import { RouterView } from 'vue-router';
</script>