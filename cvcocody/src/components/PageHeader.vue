<template>
  <header class="surface-dark relative overflow-hidden text-white">
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-leaf-400/30"
      aria-hidden="true"
    ></div>
    <div class="container-page relative pb-14 pt-8 sm:pb-20 sm:pt-10">
      <nav aria-label="Fil d’Ariane" class="animate-rise text-sm text-white/60">
        <router-link :to="{ name: 'testPage' }" class="transition hover:text-white">
          Accueil
        </router-link>
        <span class="mx-2" aria-hidden="true">/</span>
        <span class="text-leaf-300" aria-current="page">{{ eyebrow }}</span>
      </nav>
      <h1
        class="mt-8 max-w-3xl animate-rise text-3xl font-bold leading-[1.08] tracking-tight sm:mt-12 sm:text-5xl"
        style="animation-delay: 80ms"
      >
        {{ title }}
      </h1>
      <p
        v-if="lead"
        class="mt-4 max-w-2xl animate-rise text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg"
        style="animation-delay: 160ms"
      >
        {{ lead }}
      </p>
    </div>
    <!-- bord arrondi vers le contenu -->
    <div class="h-6 rounded-t-[2rem] bg-paper sm:h-8" aria-hidden="true"></div>
  </header>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>
