<template>
  <footer class="surface-dark text-white">
    <div class="container-page py-12 sm:py-14">
      <div class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-3">
            <img
              :src="logo"
              alt=""
              class="h-12 w-12 rounded-full bg-white object-cover ring-2 ring-white/20"
            />
            <p class="font-display text-xl font-bold tracking-tight">
              Communauté Virtuelle de Cocody
            </p>
          </div>
          <p class="mt-5 max-w-sm leading-relaxed text-white/70">
            La communauté des étudiants de l’Université Virtuelle de Côte d’Ivoire à Cocody. Unir,
            Former, Inspirer.
          </p>
        </div>

        <nav aria-label="Pied de page">
          <p class="eyebrow text-leaf-300">Navigation</p>
          <ul class="mt-4 space-y-2">
            <li v-for="link in links" :key="link.label">
              <router-link :to="link.to" class="text-white/75 transition hover:text-white">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div>
          <p class="eyebrow text-leaf-300">Nous suivre</p>
          <div class="mt-4 flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-0.5 hover:border-leaf-300 hover:bg-leaf-400 hover:text-ink"
            >
              <SocialIcon :name="social.name" class="h-5 w-5" />
            </a>
          </div>
          <router-link :to="{ name: 'formePage' }" class="btn btn-leaf mt-6 hidden lg:inline-flex">
            Rejoindre la communauté
          </router-link>
        </div>
      </div>

      <p class="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
        &copy; {{ year }} Communauté Virtuelle de Cocody. Tous droits réservés.
      </p>
    </div>
  </footer>
</template>

<script setup>
import SocialIcon from './icons/SocialIcon.vue'
import logo from '@/assets/c.jpg'

const year = new Date().getFullYear()

const links = [
  { label: 'Accueil', to: { name: 'testPage' } },
  { label: 'À propos', to: { name: 'pageaccuiel' } },
  { label: 'Bureau', to: { name: 'bureauPage' } },
  { label: 'Événements', to: { name: 'testPage', hash: '#evenements' } },
  { label: 'Galerie', to: { name: 'testPage', hash: '#galerie' } },
  { label: 'Contact', to: { name: 'contacPage' } },
]

const socials = [
  {
    name: 'facebook',
    label: 'Page Facebook de la CVC',
    href: 'https://www.facebook.com/share/19aTFFvGnW',
  },
  {
    name: 'whatsapp',
    label: 'Groupe WhatsApp de la CVC',
    href: 'https://chat.whatsapp.com/KVhM80OcIQSCnkKWp8mUwB?mode=wwc',
  },
]
</script>
