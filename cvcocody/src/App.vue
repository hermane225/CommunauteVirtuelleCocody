<script setup>
import navBar from './components/navBar.vue';
import footerPage from './components/footerPage.vue';
</script>

<template>
  <div>
    <navBar/>
  </div>
  <RouterView />

  <div>
 <footerPage/>

  </div>
</template>

<style scoped>


</style>
