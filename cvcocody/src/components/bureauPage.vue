<template>
  <div>
    <PageHeader
      eyebrow="Le bureau"
      title="Les membres du bureau de la Communauté Virtuelle de Cocody"
      lead="Notre bureau est composé d’étudiants dynamiques et engagés, élus pour représenter et coordonner les activités de la communauté."
    />

    <section class="section-first" id="services">
      <div class="container-page">
        <p v-reveal class="max-w-3xl text-lg leading-relaxed text-ink/75">
          Ensemble, ils œuvrent au bon fonctionnement de la CVC, à la mise en place d’initiatives
          locales, et à la promotion des valeurs de l’Université Virtuelle de Côte d’Ivoire à
          Cocody.
        </p>

        <!-- président -->
        <div v-reveal class="mt-8 sm:mt-12">
          <article
            class="grid overflow-hidden rounded-3xl bg-brand-900 text-white shadow-lift md:grid-cols-[minmax(0,22rem)_1fr]"
          >
            <img
              :src="president.photo"
              :alt="`Portrait de ${president.name}`"
              class="aspect-square h-full w-full object-cover object-top sm:aspect-[4/5] md:aspect-auto"
            />
            <div class="flex flex-col justify-center p-6 sm:p-12">
              <p class="eyebrow text-leaf-300">{{ president.role }}</p>
              <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {{ president.name }}
              </h2>
              <p class="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                Président de la Communauté Virtuelle de Cocody, il conduit le bureau et porte la
                vision de la communauté.
              </p>
            </div>
          </article>
        </div>

        <!-- autres membres -->
        <div class="mt-3 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-8 lg:grid-cols-3">
          <div v-for="(membre, index) in membres" :key="membre.name" v-reveal="(index % 3) * 120">
            <article
              class="group relative h-full overflow-hidden rounded-2xl bg-ink shadow-soft sm:rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <img
                :src="membre.photo"
                :alt="`Portrait de ${membre.name}`"
                loading="lazy"
                class="aspect-[3/4] h-full w-full object-cover object-top transition duration-700 group-hover:scale-105 sm:aspect-[4/5]"
              />
              <div
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-3 pt-14 text-white sm:p-6 sm:pt-20"
              >
                <h3 class="text-sm font-bold leading-tight tracking-tight sm:text-xl">
                  {{ membre.name }}
                </h3>
                <p class="mt-1 text-xs font-medium text-leaf-300 sm:mt-1.5 sm:text-sm">
                  {{ membre.role }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Envie de vous impliquer&nbsp;?"
      text="Rejoignez la communauté et participez aux prochaines activités aux côtés du bureau."
    />
  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue'
import CtaBand from './CtaBand.vue'
import pr from '@/assets/pr.jpg'
import vice from '@/assets/vice.jpg'
import ngues from '@/assets/ngues.jpg'
import mano2 from '@/assets/mano2.jpg'
import dev from '@/assets/dev.jpg'
import alex from '@/assets/alex.jpg'
import michel from '@/assets/michel.jpg'

const president = { name: 'GBOHO NOUFE', role: 'Président', photo: pr }

const membres = [
  { name: 'SIDIBE GNIAMAN MAHAMADOU', role: 'Vice-président', photo: vice },
  { name: 'EDI N’GUESSAN DIVINE CAROLINE', role: 'Assistante du Président', photo: ngues },
  { name: 'N’GUESSAN HERMANE JUNIOR', role: 'Chargé de la Formation', photo: mano2 },
  { name: 'KOUASSI EDGAR', role: 'Chargé de la Comptabilité', photo: dev },
  { name: 'KOFFI KOUADIO JEAN ALEX', role: 'Chargé de la Communication', photo: alex },
  {
    name: 'TRAORE MICHEL IBRAHIM',
    role: 'Chargé de la mobilisation et de l’organisation des évènements',
    photo: michel,
  },
]
</script>
