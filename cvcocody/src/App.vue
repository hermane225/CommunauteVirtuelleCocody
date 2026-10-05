<script setup>
import navBar from './components/navBar.vue'
import footerPage from './components/footerPage.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <navBar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <footerPage />
  </div>
</template>
