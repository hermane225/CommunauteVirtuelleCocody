<template>
  <section class="overflow-hidden bg-white py-8 sm:py-16">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <!-- Partie texte en haut -->
      <div class="text-center lg:text-left">
        <p class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Découvrons ensemble la Communauté Virtuelle de Cocody
        </p>

        <h2 class="text-base font-semibold leading-7 text-gray-600 mt-4">Unir, Former, Inspirer</h2>

        <p class="mt-6 text-lg leading-8 text-gray-600 text-justify">
          La Communauté Virtuelle de Cocody (CVC) est une initiative étudiante de l’Université
          Virtuelle de Côte d’Ivoire (UVCI) regroupant les apprenants résidant dans la commune de
          Cocody ou ses environs. Née de la volonté de renforcer les liens entre étudiants de la
          formation à distance, la CVC se veut un espace de rencontre, d’apprentissage et
          d’innovation collective.
          <br /><br />
          Sa mission principale est de favoriser l’épanouissement académique, professionnel et
          social de ses membres. À travers diverses activités — rencontres en présentiel, ateliers
          pratiques, formations, conférences et projets collaboratifs — la communauté encourage la
          mise en réseau, le partage d’expériences et le développement de compétences
          complémentaires à la formation universitaire.
          <br /><br />
          Plus qu’un simple regroupement, la CVC incarne les valeurs de solidarité, de leadership et
          d’excellence propres à l’UVCI. Elle œuvre à créer un cadre stimulant, où chaque étudiant
          peut s’exprimer, apprendre des autres et contribuer activement à la vie de la communauté.
          <br /><br />
          En rejoignant la Communauté Virtuelle de Cocody, chaque membre devient acteur de son
          propre parcours : il bénéficie d’un accompagnement par les pairs, découvre des
          opportunités de collaboration et participe à la construction d’une culture numérique
          inclusive et dynamique au service du développement de la Côte d’Ivoire.
        </p>

        <!-- Points clés -->
        <dl
          class="mt-10 max-w-xl mx-auto space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
        >
          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
              >
                <path
                  d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"
                />
              </svg>
              Engagement local
            </dt>
            <dd class="inline">
              <br />
              Ancrée à Cocody, la communauté rassemble les étudiants pour apprendre, collaborer et
              grandir ensemble.
            </dd>
          </div>

          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C8.13 2 5 5.13 5 9c0 4.5 7 13 7 13s7-8.5 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                  clip-rule="evenodd"
                />
              </svg>
              Solidarité étudiante
            </dt>
            <dd class="inline">
              <br />Un espace d’entraide et de partage où chaque étudiant trouve du soutien.
            </dd>
          </div>

          <div class="relative pl-9">
            <dt class="inline font-semibold text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8z"
                  clip-rule="evenodd"
                />
              </svg>
              Activités et rencontres
            </dt>
            <dd class="inline">
              <br />Des ateliers et conférences pour renforcer les compétences et inspirer la
              réussite.
            </dd>
          </div>
        </dl>
      </div>

      <!-- Image en bas -->
      <div class="mt-16 flex justify-center">
        <img
          src="/src/assets/bg.jpg"
          alt="Illustration de la Communauté Virtuelle de Cocody"
          class="w-full max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>
