<template>
  <!-- bandeau Akwaba -->
  <div class="overflow-hidden bg-brand-800 py-2 text-sm font-medium text-white">
    <div class="flex w-max animate-ticker whitespace-nowrap">
      <p v-for="n in 2" :key="n" class="flex shrink-0 items-center" :aria-hidden="n === 2">
        <span v-for="i in 2" :key="i" class="flex items-center">
          <span class="px-6">
            Akwaba sur le site officiel de la Communauté Virtuelle de Cocody (CVC)
          </span>
          <span class="text-leaf-300" aria-hidden="true">✦</span>
          <span class="px-6">
            Une communauté étudiante de l’Université Virtuelle de Côte d’Ivoire à Cocody
          </span>
          <span class="text-leaf-300" aria-hidden="true">✦</span>
        </span>
      </p>
    </div>
  </div>

  <nav
    class="sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-shadow duration-300"
    :class="scrolled ? 'border-ink/10 shadow-soft' : 'border-transparent'"
    aria-label="Navigation principale"
  >
    <div class="container-page flex items-center justify-between py-3">
      <router-link :to="{ name: 'testPage' }" class="group flex items-center gap-3">
        <img
          :src="logo"
          alt="Logo de la Communauté Virtuelle de Cocody"
          class="h-12 w-12 rounded-full object-cover ring-1 ring-ink/10 transition duration-300 group-hover:rotate-[-6deg]"
        />
        <span class="leading-tight">
          <span class="block font-display text-lg font-bold tracking-tight text-brand-800"
            >CVC</span
          >
          <span class="hidden text-xs text-ink/60 sm:block">Communauté Virtuelle de Cocody</span>
        </span>
      </router-link>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.label">
          <router-link
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-medium transition"
            :class="
              isActive(link)
                ? 'bg-brand-50 text-brand-800'
                : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
            "
            :aria-current="isActive(link) ? 'page' : undefined"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <router-link :to="{ name: 'formePage' }" class="btn btn-brand hidden sm:inline-flex">
          Rejoindre la communauté
          <ArrowRightIcon class="h-4 w-4" />
        </router-link>
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-ink/5 lg:hidden"
          aria-controls="menu-mobile"
          :aria-expanded="isMenuOpen"
          @click="toggle"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
          <XMarkIcon v-if="isMenuOpen" class="h-6 w-6" />
          <Bars3Icon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="isMenuOpen" id="menu-mobile" class="border-t border-ink/10 bg-white lg:hidden">
        <ul class="container-page flex flex-col gap-1 py-4">
          <li v-for="link in links" :key="link.label">
            <router-link
              :to="link.to"
              class="block rounded-xl px-4 py-3 text-base font-medium transition"
              :class="isActive(link) ? 'bg-brand-50 text-brand-800' : 'text-ink/80 hover:bg-ink/5'"
            >
              {{ link.label }}
            </router-link>
          </li>
          <li class="pt-2 sm:hidden">
            <router-link :to="{ name: 'formePage' }" class="btn btn-brand w-full">
              Rejoindre la communauté
              <ArrowRightIcon class="h-4 w-4" />
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import logo from '@/assets/c.jpg'

const route = useRoute()
const isMenuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'Accueil', to: { name: 'testPage' } },
  { label: 'À propos', to: { name: 'pageaccuiel' } },
  { label: 'Bureau', to: { name: 'bureauPage' } },
  { label: 'Événements', to: { name: 'testPage', hash: '#evenements' } },
  { label: 'Galerie', to: { name: 'testPage', hash: '#galerie' } },
  { label: 'Contact', to: { name: 'contacPage' } },
]

function isActive(link) {
  return route.name === link.to.name && (route.hash || '') === (link.to.hash || '')
}

function toggle() {
  isMenuOpen.value = !isMenuOpen.value
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
