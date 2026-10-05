<template>
  <div>
    <PageHeader
      eyebrow="Contact"
      title="Nous contacter"
      lead="Une question, une idée, l’envie de participer ? Voici comment joindre la Communauté Virtuelle de Cocody (CVC)."
    />

    <section class="section-first">
      <div class="container-page grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <dl class="grid gap-3 sm:grid-cols-2 sm:gap-6">
          <div
            v-for="(item, index) in coordonnees"
            :key="item.title"
            v-reveal="index * 100"
            :class="item.wide ? 'sm:col-span-2' : ''"
          >
            <component
              :is="item.href ? 'a' : 'div'"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              class="group flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition duration-300 sm:flex-col sm:items-start sm:gap-0 sm:p-7"
              :class="item.href ? 'hover:-translate-y-1.5 hover:shadow-lift' : ''"
            >
              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition duration-300 group-hover:bg-brand-700 group-hover:text-white sm:h-14 sm:w-14"
              >
                <SocialIcon v-if="item.social" :name="item.social" class="h-6 w-6" />
                <component :is="item.icon" v-else class="h-7 w-7" />
              </span>
              <div class="min-w-0">
                <dt class="text-sm font-medium text-ink/60 sm:mt-6">{{ item.title }}</dt>
                <dd
                  class="mt-0.5 break-words font-display text-lg font-bold tracking-tight sm:mt-1 sm:text-xl"
                >
                  {{ item.value }}
                </dd>
                <dd v-if="item.note" class="mt-1 text-ink/65 sm:mt-2">{{ item.note }}</dd>
              </div>
            </component>
          </div>
        </dl>

        <aside v-reveal="200">
          <div class="surface-dark flex h-full flex-col rounded-3xl p-6 text-white sm:p-10">
            <p class="eyebrow text-leaf-300">Nous rejoindre</p>
            <h2 class="mt-4 text-3xl font-bold leading-tight tracking-tight">
              Envie de faire partie de la communauté ?
            </h2>
            <p class="mt-4 leading-relaxed text-white/75">
              Remplissez le formulaire d’intégration : le bureau vous recontacte pour la suite.
            </p>
            <div class="mt-auto pt-8">
              <router-link :to="{ name: 'formePage' }" class="btn btn-leaf">
                Formulaire d’intégration
                <ArrowRightIcon class="h-4 w-4" />
              </router-link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRightIcon, ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import PageHeader from './PageHeader.vue'
import SocialIcon from './icons/SocialIcon.vue'

const coordonnees = [
  {
    icon: PhoneIcon,
    title: 'Téléphone',
    value: '07 68 66 00 47',
    href: 'tel:+2250768660047',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    value: 'gboho.noufe@uvci.edu.ci',
    href: 'mailto:gboho.noufe@uvci.edu.ci',
  },
  {
    social: 'whatsapp',
    title: 'WhatsApp',
    value: 'Groupe de la communauté',
    href: 'https://chat.whatsapp.com/KVhM80OcIQSCnkKWp8mUwB?mode=wwc',
    external: true,
  },
  {
    social: 'facebook',
    title: 'Facebook',
    value: 'Page de la CVC',
    href: 'https://www.facebook.com/share/19aTFFvGnW',
    external: true,
  },
  {
    icon: ClockIcon,
    title: 'Jours & heure de rencontre',
    value: 'Chaque samedi',
    note: 'À partir de 8 h',
    wide: true,
  },
]
</script>
