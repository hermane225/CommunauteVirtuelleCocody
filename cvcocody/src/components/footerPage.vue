<template>
  <footer class="flex flex-col space-y-10 justify-center m-10">
    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
      <router-link class="hover:text-gray-900" :to="{ name: 'testPage' }">Accueil</router-link>
      <router-link class="hover:text-gray-900" :to="{ name: 'pageaccuiel' }">À propos</router-link>
      <router-link class="hover:text-gray-900" :to="{ name: 'bureauPage' }">Bureau</router-link>
      <router-link class="hover:text-gray-900" :to="{ name: 'testPage' }">Galerie</router-link>
      <router-link class="hover:text-gray-900" :to="{ name: 'contacPage' }">Contact</router-link>
    </nav>

    <div class="flex justify-center space-x-5">
      <a href="https://www.facebook.com/share/19aTFFvGnW" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
      </a>
      <a
        href="https://chat.whatsapp.com/KVhM80OcIQSCnkKWp8mUwB?mode=wwc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluent/30/000000/whatsapp.png" />
      </a>
    </div>
    <p class="text-center text-gray-700 font-medium">
      &copy; 2025 Communauté Virtuelle de cocody. Tous droit reservés.
    </p>
  </footer>
</template>

<script setup></script>
