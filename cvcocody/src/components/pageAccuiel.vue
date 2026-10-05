<template>
  <div>
    <PageHeader
      eyebrow="À propos"
      title="Découvrons ensemble la Communauté Virtuelle de Cocody"
      lead="Une initiative étudiante de l’UVCI pour apprendre, s’entraider et grandir ensemble."
    />

    <!-- présentation -->
    <section class="section-first">
      <div class="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div v-reveal>
          <p class="eyebrow text-brand-600">Qui sommes-nous ?</p>
          <h2 class="section-title mt-3">Une initiative étudiante, ancrée à Cocody</h2>
          <p class="mt-5 text-lg leading-relaxed text-ink/75">
            La Communauté Virtuelle de Cocody (CVC) est une initiative étudiante de l’Université
            Virtuelle de Côte d’Ivoire (UVCI) regroupant les apprenants résidant dans la commune de
            Cocody ou ses environs. Née de la volonté de renforcer les liens entre étudiants de la
            formation à distance, la CVC se veut un espace de rencontre, d’apprentissage et
            d’innovation collective.
          </p>
          <ul class="mt-7 flex flex-wrap gap-2">
            <li
              v-for="repere in reperes"
              :key="repere.label"
              class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-soft ring-1 ring-ink/5"
            >
              <component :is="repere.icon" class="h-4 w-4 text-leaf-600" />
              {{ repere.label }}
            </li>
          </ul>
        </div>

        <div v-reveal="150" class="relative">
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              :src="photos.bg"
              alt="Étudiants de la Communauté Virtuelle de Cocody lors d’une rencontre"
              class="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-soft"
            />
            <img
              :src="photos.arriere"
              alt="Présentation de la CVC devant les étudiants"
              loading="lazy"
              class="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
            <img
              :src="photos.f"
              alt="Étudiantes et étudiants assis au premier rang"
              loading="lazy"
              class="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
          <div
            class="absolute left-1/2 top-[58%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lift ring-4 ring-paper sm:h-24 sm:w-24"
          >
            <img
              :src="photos.logo"
              alt=""
              class="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- la devise -->
    <section class="surface-dark py-14 text-white sm:py-20">
      <div class="container-page">
        <p v-reveal class="eyebrow text-leaf-300">Notre devise</p>
        <div class="mt-6 grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div
            v-for="(mot, index) in devise"
            :key="mot.titre"
            v-reveal="index * 140"
            class="py-6 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
          >
            <h2
              class="text-5xl font-extrabold tracking-tight sm:text-6xl"
              :class="index === 2 ? 'text-leaf-300' : 'text-white'"
            >
              {{ mot.titre }}
            </h2>
            <p class="mt-3 leading-relaxed text-white/75">{{ mot.texte }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- mission, valeurs, place de chacun -->
    <section class="section">
      <div class="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div v-reveal class="lg:sticky lg:top-28 lg:self-start">
          <p class="eyebrow text-brand-600">Notre raison d’être</p>
          <h2 class="section-title mt-3">Plus qu’un simple regroupement</h2>
          <img
            :src="photos.bureau"
            alt="Membres du bureau de la communauté réunis"
            loading="lazy"
            class="mt-8 hidden aspect-[4/3] w-full rounded-3xl object-cover shadow-soft lg:block"
          />
        </div>

        <ol class="space-y-5">
          <li v-for="(etape, index) in etapes" :key="etape.titre" v-reveal="index * 120">
            <div
              class="group flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:gap-6 sm:p-8"
            >
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 font-display text-lg font-extrabold text-brand-700 transition duration-300 group-hover:bg-brand-700 group-hover:text-white sm:h-14 sm:w-14 sm:text-xl"
              >
                0{{ index + 1 }}
              </span>
              <div>
                <h3 class="text-xl font-bold tracking-tight sm:text-2xl">{{ etape.titre }}</h3>
                <p class="mt-3 leading-relaxed text-ink/75">{{ etape.texte }}</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- points clés -->
    <section class="section bg-white">
      <div class="container-page">
        <div v-reveal class="max-w-2xl">
          <p class="eyebrow text-brand-600">Nos piliers</p>
          <h2 class="section-title mt-3">Ce qui fait la CVC</h2>
        </div>
        <dl class="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          <div v-for="(point, index) in points" :key="point.title" v-reveal="index * 120">
            <div
              class="flex h-full gap-4 rounded-3xl bg-paper p-5 ring-1 ring-ink/5 sm:p-7 md:flex-col md:gap-0"
            >
              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white sm:h-14 sm:w-14"
              >
                <component :is="point.icon" class="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <div>
                <dt class="font-display text-lg font-bold tracking-tight sm:text-xl md:mt-6">
                  {{ point.title }}
                </dt>
                <dd class="mt-1.5 leading-relaxed text-ink/70 md:mt-3">{{ point.text }}</dd>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </section>

    <!-- mot du président -->
    <section class="section">
      <div class="container-page">
        <figure v-reveal class="mx-auto max-w-3xl text-center">
          <span
            class="font-display text-7xl font-extrabold leading-none text-brand-200"
            aria-hidden="true"
          >
            “
          </span>
          <blockquote
            class="-mt-6 font-display text-2xl font-bold leading-snug tracking-tight sm:text-4xl"
          >
            Servir, former et innover demeurent les piliers du développement de la communauté.
          </blockquote>
          <figcaption class="mt-8 flex items-center justify-center gap-4 text-left">
            <img
              :src="photos.president"
              alt="Portrait de Gboho Nouffé"
              loading="lazy"
              class="h-14 w-14 rounded-full object-cover object-top ring-2 ring-brand-200"
            />
            <span>
              <span class="block font-semibold">Gboho Nouffé</span>
              <span class="text-sm text-ink/60">Président de la CVC</span>
            </span>
          </figcaption>
          <router-link :to="{ name: 'bureauPage' }" class="btn btn-outline mt-8">
            Rencontrer le bureau
            <ArrowRightIcon class="h-4 w-4" />
          </router-link>
        </figure>
      </div>
    </section>

    <CtaBand
      title="Devenez acteur de votre parcours."
      text="Accompagnement par les pairs, opportunités de collaboration et culture numérique inclusive."
    />
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
  HandRaisedIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline'
import PageHeader from './PageHeader.vue'
import CtaBand from './CtaBand.vue'
import arriere from '@/assets/arriere.jpg'
import bg from '@/assets/bg.jpg'
import bureau from '@/assets/bureau.jpg'
import f from '@/assets/f.jpg'
import logo from '@/assets/c.jpg'
import president from '@/assets/pr.jpg'

const photos = { arriere, bg, bureau, f, logo, president }

const reperes = [
  { icon: AcademicCapIcon, label: 'Étudiants de l’UVCI' },
  { icon: MapPinIcon, label: 'Cocody et ses environs' },
  { icon: ComputerDesktopIcon, label: 'En présentiel et en ligne' },
]

const devise = [
  {
    titre: 'Unir',
    texte: 'Renforcer les liens entre étudiants de la formation à distance.',
  },
  {
    titre: 'Former',
    texte: 'Ateliers pratiques, formations, conférences et projets collaboratifs.',
  },
  {
    titre: 'Inspirer',
    texte: 'Un cadre stimulant où chacun peut s’exprimer et apprendre des autres.',
  },
]

const etapes = [
  {
    titre: 'Notre mission',
    texte:
      'Sa mission principale est de favoriser l’épanouissement académique, professionnel et social de ses membres. À travers diverses activités — rencontres en présentiel, ateliers pratiques, formations, conférences et projets collaboratifs — la communauté encourage la mise en réseau, le partage d’expériences et le développement de compétences complémentaires à la formation universitaire.',
  },
  {
    titre: 'Nos valeurs',
    texte:
      'Plus qu’un simple regroupement, la CVC incarne les valeurs de solidarité, de leadership et d’excellence propres à l’UVCI. Elle œuvre à créer un cadre stimulant, où chaque étudiant peut s’exprimer, apprendre des autres et contribuer activement à la vie de la communauté.',
  },
  {
    titre: 'Votre place',
    texte:
      'En rejoignant la Communauté Virtuelle de Cocody, chaque membre devient acteur de son propre parcours : il bénéficie d’un accompagnement par les pairs, découvre des opportunités de collaboration et participe à la construction d’une culture numérique inclusive et dynamique au service du développement de la Côte d’Ivoire.',
  },
]

const points = [
  {
    icon: MapPinIcon,
    title: 'Engagement local',
    text: 'Ancrée à Cocody, la communauté rassemble les étudiants pour apprendre, collaborer et grandir ensemble.',
  },
  {
    icon: HandRaisedIcon,
    title: 'Solidarité étudiante',
    text: 'Un espace d’entraide et de partage où chaque étudiant trouve du soutien.',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Activités et rencontres',
    text: 'Des ateliers et conférences pour renforcer les compétences et inspirer la réussite.',
  },
]
</script>
