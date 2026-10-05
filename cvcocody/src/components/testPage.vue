<template>
  <div>
    <!-- hero -->
    <section class="surface-dark relative overflow-hidden text-white" id="home">
      <div
        class="container-page grid items-center gap-12 py-12 sm:gap-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28"
      >
        <div>
          <p class="eyebrow animate-rise text-leaf-300">
            Université Virtuelle de Côte d’Ivoire · Cocody
          </p>
          <h1
            class="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span class="block animate-rise" style="animation-delay: 80ms">Unir,</span>
            <span class="block animate-rise" style="animation-delay: 180ms">Former,</span>
            <span class="block animate-rise text-leaf-300" style="animation-delay: 280ms">
              Inspirer.
            </span>
          </h1>
          <p
            class="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-white/80"
            style="animation-delay: 380ms"
          >
            Ancrée à Cocody, la communauté rassemble les étudiants de l’UVCI résidant à Cocody pour
            apprendre, collaborer et grandir ensemble, aussi bien en présentiel qu’en ligne.
          </p>
          <div class="mt-9 flex animate-rise flex-wrap gap-3" style="animation-delay: 480ms">
            <router-link :to="{ name: 'formePage' }" class="btn btn-leaf">
              Rejoindre la communauté
              <ArrowRightIcon class="h-4 w-4" />
            </router-link>
            <router-link :to="{ name: 'pageaccuiel' }" class="btn btn-ghost">
              Découvrir la communauté
            </router-link>
          </div>
        </div>

        <div class="relative animate-rise pb-10 sm:pb-14 lg:pl-6" style="animation-delay: 300ms">
          <img
            :src="photos.arriere"
            alt="Présentation devant les étudiants lors d’une rencontre de la CVC"
            class="aspect-[4/3] w-full rotate-1 rounded-3xl object-cover shadow-lift ring-1 ring-white/20"
          />
          <img
            :src="photos.f"
            alt="Étudiantes et étudiants de la communauté réunis"
            class="absolute bottom-0 left-0 w-2/5 -rotate-3 rounded-2xl border-4 border-white object-cover shadow-lift"
          />
          <div
            class="absolute -top-5 right-3 flex animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-lift sm:right-6"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-100 text-leaf-700"
            >
              <CalendarDaysIcon class="h-5 w-5" />
            </span>
            <span class="text-sm leading-tight">
              <span class="block font-semibold">Chaque samedi</span>
              <span class="text-ink/60">Rencontre dès 8 h</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <EvenementsSection />

    <!-- activités récentes -->
    <section class="section" id="services">
      <div class="container-page">
        <div v-reveal class="max-w-2xl">
          <p class="eyebrow text-brand-600">Actualités</p>
          <h2 class="section-title mt-3">Les activités récentes</h2>
          <p class="mt-4 text-lg text-ink/70">
            Rencontres, partenariats et vie du bureau : ce qui s’est passé dernièrement dans la
            communauté.
          </p>
        </div>

        <!-- carrousel à faire glisser sur mobile, grille à partir de la tablette -->
        <div
          class="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-2 sm:-mx-8 sm:px-8 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:p-0 lg:grid-cols-3"
        >
          <div
            v-for="(activite, index) in activites"
            :key="activite.id"
            v-reveal="index * 120"
            class="w-[84%] shrink-0 snap-center sm:w-[55%] md:w-auto"
          >
            <article
              class="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div class="relative aspect-[4/3] overflow-hidden">
                <img
                  :src="activite.image"
                  :alt="activite.imageAlt"
                  loading="lazy"
                  class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <span
                  class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800"
                >
                  {{ activite.tag }}
                </span>
              </div>
              <div class="flex flex-1 flex-col p-6">
                <p class="text-sm font-medium text-leaf-700">{{ activite.date }}</p>
                <h3 class="mt-2 text-xl font-bold leading-snug tracking-tight">
                  {{ activite.title }}
                </h3>
                <p class="mt-3 line-clamp-4 text-ink/70">{{ activite.excerpt }}</p>
                <button
                  type="button"
                  class="mt-5 inline-flex items-center gap-2 self-start pt-1 text-sm font-semibold text-brand-700 transition hover:gap-3 hover:text-brand-900"
                  @click="openArticle(activite)"
                >
                  Lire la suite
                  <ArrowRightIcon class="h-4 w-4" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- au cœur de la communauté -->
    <section class="bg-white section" id="aboutus">
      <div class="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div v-reveal class="relative">
          <div
            class="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-brand-100"
            aria-hidden="true"
          ></div>
          <img
            :src="photos.bg"
            alt="Étudiants de la communauté assis lors d’une rencontre"
            loading="lazy"
            class="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div v-reveal="120">
          <p class="eyebrow text-brand-600">Qui sommes-nous ?</p>
          <h2 class="section-title mt-3">Au cœur de la communauté</h2>
          <p class="mt-6 text-lg leading-relaxed text-ink/75">
            La Communauté virtuelle de Cocody (CVC) regroupe les étudiants de l’Université Virtuelle
            de Côte d’Ivoire (UVCI) résidant à Cocody ou affiliés à cette zone. Elle a pour mission
            de soutenir et accompagner les étudiants, notamment les nouveaux arrivants, en leur
            offrant un cadre d’entraide et de partage de connaissances.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-ink/75">
            La communauté favorise également l’innovation, la formation et le réseautage, en
            organisant des ateliers, des projets collaboratifs et des activités permettant aux
            membres d’échanger, de développer leurs compétences et de renforcer les liens entre
            étudiants.
          </p>
          <router-link :to="{ name: 'pageaccuiel' }" class="btn btn-outline mt-8">
            En savoir plus
            <ArrowRightIcon class="h-4 w-4" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- atouts & valeurs -->
    <section class="section">
      <div class="container-page">
        <div v-reveal class="mx-auto max-w-2xl text-center">
          <p class="eyebrow text-brand-600">Ce qui nous anime</p>
          <h2 class="section-title mt-3">Nos atouts &amp; valeurs</h2>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          <div v-for="(valeur, index) in valeurs" :key="valeur.title" v-reveal="index * 100">
            <div
              class="group h-full rounded-3xl bg-white p-4 shadow-soft sm:p-7 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1.5 hover:bg-brand-900 hover:shadow-lift"
            >
              <span
                class="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition duration-300 group-hover:bg-leaf-400 group-hover:text-ink sm:h-14 sm:w-14"
              >
                <component :is="valeur.icon" class="h-5 w-5 sm:h-7 sm:w-7" />
              </span>
              <h3
                class="mt-4 text-base font-bold leading-snug tracking-tight transition duration-300 group-hover:text-white sm:mt-6 sm:text-xl"
              >
                {{ valeur.title }}
              </h3>
              <p
                class="mt-2 text-sm text-ink/70 transition duration-300 group-hover:text-white/75 sm:mt-3 sm:text-base"
              >
                {{ valeur.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- galerie -->
    <section class="bg-white section" id="galerie">
      <div class="container-page">
        <div v-reveal class="max-w-2xl">
          <p class="eyebrow text-brand-600">En images</p>
          <h2 class="section-title mt-3">Galerie</h2>
          <p class="mt-4 text-lg text-ink/70">
            Quelques instants de la vie de la communauté. Cliquez sur une photo pour l’agrandir.
          </p>
        </div>
        <div class="mt-8 columns-2 gap-3 sm:mt-12 sm:gap-4 md:columns-3 lg:columns-4">
          <div
            v-for="(photo, index) in galerie"
            :key="photo.src"
            v-reveal="(index % 4) * 80"
            class="mb-3 break-inside-avoid sm:mb-4"
          >
            <button
              type="button"
              class="group relative block w-full overflow-hidden rounded-2xl"
              :aria-label="`Agrandir la photo : ${photo.alt}`"
              @click="openPhoto(index)"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                loading="lazy"
                class="w-full transition duration-700 group-hover:scale-105"
              />
              <span
                class="absolute inset-0 flex items-center justify-center bg-brand-950/0 text-white opacity-0 transition duration-300 group-hover:bg-brand-950/45 group-hover:opacity-100"
              >
                <MagnifyingGlassPlusIcon class="h-8 w-8" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Étudiant de l’UVCI à Cocody&nbsp;? Votre place est ici."
      text="Rejoignez un réseau d’entraide, de formation et de projets collaboratifs."
    />

    <!-- lecture d'un article -->
    <ModalOverlay :open="!!article" :label="article ? article.title : ''" @close="article = null">
      <article
        v-if="article"
        class="w-full max-w-3xl overflow-y-auto rounded-3xl bg-white text-ink shadow-lift"
      >
        <div class="p-6 sm:p-10">
          <p class="text-sm font-medium text-leaf-700">{{ article.tag }} · {{ article.date }}</p>
          <h2 class="mt-3 pr-10 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {{ article.title }}
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-ink/80">{{ article.excerpt }}</p>
          <template v-for="(block, index) in article.content" :key="index">
            <h3 v-if="block.h" class="mt-8 text-xl font-bold tracking-tight text-brand-800">
              {{ block.h }}
            </h3>
            <p v-else-if="block.p" class="mt-4 leading-relaxed text-ink/80">{{ block.p }}</p>
            <ul v-else class="mt-4 space-y-2">
              <li v-for="item in block.ul" :key="item" class="flex gap-3 text-ink/80">
                <span class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500"></span>
                {{ item }}
              </li>
            </ul>
          </template>
        </div>
      </article>
    </ModalOverlay>

    <!-- visionneuse de la galerie -->
    <ModalOverlay
      :open="photoIndex !== null"
      label="Photo de la galerie"
      @close="photoIndex = null"
    >
      <figure v-if="photoIndex !== null" class="flex max-h-full flex-col items-center">
        <img
          :src="galerie[photoIndex].src"
          :alt="galerie[photoIndex].alt"
          class="max-h-[78vh] w-auto rounded-2xl object-contain shadow-lift"
        />
        <figcaption class="mt-4 flex items-center gap-4 text-white">
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-ink"
            aria-label="Photo précédente"
            @click="stepPhoto(-1)"
          >
            <ChevronLeftIcon class="h-5 w-5" />
          </button>
          <span class="text-sm text-white/80">{{ photoIndex + 1 }} / {{ galerie.length }}</span>
          <button
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-ink"
            aria-label="Photo suivante"
            @click="stepPhoto(1)"
          >
            <ChevronRightIcon class="h-5 w-5" />
          </button>
        </figcaption>
      </figure>
    </ModalOverlay>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HandRaisedIcon,
  LightBulbIcon,
  MagnifyingGlassPlusIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'
import EvenementsSection from './EvenementsSection.vue'
import CtaBand from './CtaBand.vue'
import ModalOverlay from './ModalOverlay.vue'
import { activites } from '@/data/activites'
import arriere from '@/assets/arriere.jpg'
import bg from '@/assets/bg.jpg'
import br from '@/assets/br.jpg'
import bureau from '@/assets/bureau.jpg'
import bureau2 from '@/assets/bureau2.jpg'
import f from '@/assets/f.jpg'
import lespr from '@/assets/lespr.jpg'
import salle from '@/assets/salle.jpg'

const photos = { arriere, bg, f }

const valeurs = [
  {
    icon: HandRaisedIcon,
    title: 'Solidarité et entraide',
    text: 'Un cadre d’entraide où chaque étudiant, nouveau ou ancien, trouve du soutien.',
  },
  {
    icon: UserGroupIcon,
    title: 'Réseautage et collaboration',
    text: 'Des rencontres et des projets collaboratifs pour renforcer les liens entre étudiants.',
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation et créativité',
    text: 'Des ateliers et des formations pour développer ses compétences dans le numérique.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Engagement et leadership',
    text: 'Une culture de service où chacun peut s’impliquer et contribuer à la vie de la communauté.',
  },
]

const galerie = [
  { src: f, alt: 'Étudiantes et étudiants assis au premier rang lors d’une rencontre' },
  { src: bureau2, alt: 'Deux membres du bureau de la communauté' },
  { src: bg, alt: 'Étudiants attentifs pendant une rencontre' },
  { src: br, alt: 'Étudiants dans la salle pendant une activité' },
  { src: arriere, alt: 'Présentation de la CVC devant les étudiants' },
  { src: bureau, alt: 'Cinq membres du bureau réunis' },
  { src: salle, alt: 'La salle de rencontre de la communauté' },
  { src: lespr, alt: 'Deux membres en discussion avant une rencontre' },
]

const article = ref(null)
const photoIndex = ref(null)

function openArticle(activite) {
  article.value = activite
}

function openPhoto(index) {
  photoIndex.value = index
}

function stepPhoto(step) {
  photoIndex.value = (photoIndex.value + step + galerie.length) % galerie.length
}

function onKeydown(event) {
  if (photoIndex.value === null) return
  if (event.key === 'ArrowRight') stepPhoto(1)
  if (event.key === 'ArrowLeft') stepPhoto(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
