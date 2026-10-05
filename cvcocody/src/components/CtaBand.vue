<template>
  <section class="section">
    <div class="container-page">
      <div
        v-reveal
        class="surface-dark relative overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white sm:px-12 sm:py-20"
      >
        <div
          class="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border border-white/10"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-leaf-400/25"
          aria-hidden="true"
        ></div>
        <h2 class="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          {{ title }}
        </h2>
        <p class="relative mx-auto mt-5 max-w-xl text-lg text-white/75">{{ text }}</p>
        <div class="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <router-link :to="{ name: 'formePage' }" class="btn btn-leaf">
            Rejoindre la communauté
            <ArrowRightIcon class="h-4 w-4" />
          </router-link>
          <router-link :to="{ name: 'contacPage' }" class="btn btn-ghost">
            Nous contacter
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>
