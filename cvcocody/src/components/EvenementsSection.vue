<template>
  <section class="bg-white section" id="evenements">
    <div class="container-page">
      <div v-reveal class="max-w-2xl">
        <p class="eyebrow text-brand-600">Agenda</p>
        <h2 class="section-title mt-3">Prochains événements</h2>
        <p class="mt-4 text-lg text-ink/70">
          Les rendez-vous à venir de la communauté. Notez la date et venez nombreux.
        </p>
      </div>

      <!-- aucun événement annoncé -->
      <div v-if="!aVenir.length" v-reveal class="mt-12">
        <div
          class="flex flex-col items-start gap-6 rounded-3xl bg-paper p-8 ring-1 ring-ink/5 sm:flex-row sm:items-center sm:p-10"
        >
          <span
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700"
          >
            <CalendarDaysIcon class="h-7 w-7" />
          </span>
          <div class="flex-1">
            <h3 class="text-xl font-bold tracking-tight">Aucun événement annoncé pour le moment</h3>
            <p class="mt-2 text-ink/70">
              La communauté se retrouve chaque samedi à partir de 8 h. Rejoignez le groupe WhatsApp
              pour être informé des prochaines annonces.
            </p>
          </div>
          <a :href="whatsapp" target="_blank" rel="noopener noreferrer" class="btn btn-brand">
            Groupe WhatsApp
          </a>
        </div>
      </div>

      <template v-else>
        <!-- le prochain événement, mis en avant -->
        <div v-reveal class="mt-12">
          <article
            class="surface-dark grid items-center overflow-hidden rounded-3xl text-white shadow-lift md:grid-cols-2 lg:grid-cols-[minmax(0,26rem)_1fr]"
          >
            <button
              v-if="prochain.affiche"
              type="button"
              class="group relative m-4 overflow-hidden rounded-2xl sm:m-6 md:mr-0"
              :aria-label="`Agrandir l’affiche : ${prochain.title}`"
              @click="affiche = prochain"
            >
              <img
                :src="prochain.affiche"
                :alt="`Affiche de l’événement ${prochain.title}`"
                class="w-full transition duration-700 group-hover:scale-105"
              />
              <span
                class="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft"
              >
                <MagnifyingGlassPlusIcon class="h-5 w-5" />
              </span>
            </button>
            <div v-else class="flex h-full items-center justify-center bg-white/5 p-10">
              <div class="text-center">
                <p class="font-display text-8xl font-extrabold leading-none text-leaf-300">
                  {{ prochain.jour }}
                </p>
                <p class="eyebrow mt-3 text-white/80">{{ prochain.mois }}</p>
              </div>
            </div>

            <div class="flex min-w-0 flex-col justify-center p-6 sm:p-10 md:p-8 lg:p-12">
              <!-- compte à rebours en direct -->
              <div v-if="rebours" class="self-start" role="timer" :aria-label="prochain.delai">
                <p class="eyebrow flex items-center gap-2 text-red-400">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></span>
                  Début dans
                </p>
                <div class="mt-3 flex gap-2" aria-hidden="true">
                  <div
                    v-for="bloc in rebours"
                    :key="bloc.label"
                    class="flex w-14 flex-col items-center rounded-2xl bg-red-600 py-2.5 text-white shadow-soft sm:w-16"
                  >
                    <span class="font-display text-2xl font-extrabold leading-none tabular-nums">
                      {{ bloc.valeur }}
                    </span>
                    <span class="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-wider">
                      {{ bloc.label }}
                    </span>
                  </div>
                </div>
              </div>
              <p
                v-else
                class="inline-flex items-center gap-2 self-start rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white"
              >
                <span class="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                C’est aujourd’hui !
              </p>
              <h3 class="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {{ prochain.title }}
              </h3>
              <p
                v-if="prochain.description"
                class="mt-4 whitespace-pre-line leading-relaxed text-white/75"
              >
                {{ prochain.description }}
              </p>
              <ul
                v-if="prochain.programme"
                class="mt-6 flex flex-wrap gap-2"
                aria-label="Programme"
              >
                <li
                  v-for="point in prochain.programme"
                  :key="point"
                  class="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/90"
                >
                  {{ point }}
                </li>
              </ul>
              <dl class="mt-7 space-y-3 text-white/90">
                <div class="flex items-center gap-3">
                  <CalendarDaysIcon class="h-5 w-5 shrink-0 text-leaf-300" />
                  <dt class="sr-only">Date</dt>
                  <dd class="first-letter:uppercase">
                    {{ prochain.dateLongue }}
                    <span v-if="prochain.heure" class="whitespace-nowrap">
                      · {{ prochain.heure }}</span
                    >
                  </dd>
                </div>
                <div v-if="prochain.lieu" class="flex items-center gap-3">
                  <MapPinIcon class="h-5 w-5 shrink-0 text-leaf-300" />
                  <dt class="sr-only">Lieu</dt>
                  <dd>{{ prochain.lieu }}</dd>
                </div>
              </dl>
              <a
                v-if="prochain.lien"
                :href="prochain.lien"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-leaf mt-8 self-start"
              >
                Participer
                <ArrowRightIcon class="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>

        <!-- les événements suivants -->
        <div v-if="suivants.length" class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(evenement, index) in suivants" :key="evenement.id" v-reveal="index * 120">
            <article
              class="flex h-full gap-5 rounded-3xl bg-paper p-6 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div
                class="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-700 text-white"
              >
                <span class="font-display text-3xl font-extrabold leading-none">
                  {{ evenement.jour }}
                </span>
                <span class="mt-1 text-xs font-semibold uppercase tracking-wider">
                  {{ evenement.moisCourt }}
                </span>
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-red-600">{{ evenement.delai }}</p>
                <h3 class="mt-1 text-lg font-bold leading-snug tracking-tight">
                  {{ evenement.title }}
                </h3>
                <p v-if="evenement.heure || evenement.lieu" class="mt-2 text-sm text-ink/65">
                  {{ [evenement.heure, evenement.lieu].filter(Boolean).join(' · ') }}
                </p>
                <button
                  v-if="evenement.affiche"
                  type="button"
                  class="mt-3 inline-flex items-center gap-2 py-1 text-sm font-semibold text-brand-700 transition hover:gap-3 hover:text-brand-900"
                  @click="affiche = evenement"
                >
                  Voir l’affiche
                  <ArrowRightIcon class="h-4 w-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </template>
    </div>

    <!-- affiche en grand -->
    <ModalOverlay
      :open="!!affiche"
      :label="affiche ? `Affiche : ${affiche.title}` : ''"
      @close="affiche = null"
    >
      <img
        v-if="affiche"
        :src="affiche.affiche"
        :alt="`Affiche de l’événement ${affiche.title}`"
        class="max-h-[88vh] w-auto rounded-2xl object-contain shadow-lift"
      />
    </ModalOverlay>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  MagnifyingGlassPlusIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline'
import ModalOverlay from './ModalOverlay.vue'
import { evenements } from '@/data/evenements'

const whatsapp = 'https://chat.whatsapp.com/KVhM80OcIQSCnkKWp8mUwB?mode=wwc'
const JOUR = 24 * 60 * 60 * 1000

const affiche = ref(null)

// horloge mise à jour chaque seconde pour le compte à rebours
const maintenant = ref(new Date())
let horloge

onMounted(() => {
  horloge = setInterval(() => {
    maintenant.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => clearInterval(horloge))

// 'AAAA-MM-JJ' lu comme une date locale (et non UTC)
function lireDate(texte) {
  const [annee, mois, jour] = texte.split('-').map(Number)
  return new Date(annee, mois - 1, jour)
}

// début de l'événement : la date, plus l'heure si elle est renseignée ('8 h', '8 h 30', '14h00')
function lireDebut(evenement) {
  const debut = lireDate(evenement.date)
  const heure = /(\d{1,2})\s*h\s*(\d{2})?/i.exec(evenement.heure || '')
  if (heure) debut.setHours(Number(heure[1]), Number(heure[2] || 0))
  return debut
}

// espace insécable avant ! ? ; : pour ne pas laisser la ponctuation seule en début de ligne
function typographie(texte) {
  return texte ? texte.replace(/ ([!?;:])/g, '\u00a0$1') : texte
}

function delai(jours) {
  if (jours === 0) return 'Aujourd’hui'
  if (jours === 1) return 'Demain'
  return `Dans ${jours} jours`
}

const aVenir = computed(() => {
  const instant = maintenant.value
  const aujourdhui = new Date(instant.getFullYear(), instant.getMonth(), instant.getDate())

  return evenements
    .map((evenement) => {
      const date = lireDate(evenement.date)
      const jours = Math.round((date - aujourdhui) / JOUR)
      return {
        ...evenement,
        description: typographie(evenement.description),
        jours,
        delai: delai(jours),
        jour: date.getDate(),
        mois: date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
        moisCourt: date.toLocaleDateString('fr-FR', { month: 'short' }),
        dateLongue: date.toLocaleDateString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      }
    })
    .filter((evenement) => evenement.jours >= 0)
    .sort((a, b) => a.jours - b.jours)
})

const prochain = computed(() => aVenir.value[0])

// temps restant avant le prochain événement, ou null une fois qu'il a commencé
const rebours = computed(() => {
  if (!prochain.value) return null
  const reste = lireDebut(prochain.value) - maintenant.value
  if (reste <= 0) return null
  const secondes = Math.floor(reste / 1000)
  const deuxChiffres = (nombre) => String(nombre).padStart(2, '0')
  return [
    { label: 'jours', valeur: Math.floor(secondes / 86400) },
    { label: 'heures', valeur: deuxChiffres(Math.floor(secondes / 3600) % 24) },
    { label: 'min', valeur: deuxChiffres(Math.floor(secondes / 60) % 60) },
    { label: 's', valeur: deuxChiffres(secondes % 60) },
  ]
})
const suivants = computed(() => aVenir.value.slice(1))
</script>
