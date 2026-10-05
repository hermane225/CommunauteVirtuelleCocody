<template>
  <div>
    <PageHeader
      eyebrow="Rejoindre la CVC"
      title="Formulaire d’intégration à la Communauté Virtuelle de Cocody"
      lead="Quelques informations suffisent : le bureau reçoit votre demande et revient vers vous."
    />

    <section class="section-first">
      <div class="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <!-- sur mobile, le formulaire passe en premier -->
        <div v-reveal class="order-2 lg:order-1">
          <p class="eyebrow text-brand-600">Pourquoi nous rejoindre</p>
          <h2 class="section-title mt-3">Une communauté qui vous accompagne</h2>
          <ul class="mt-8 space-y-5">
            <li v-for="raison in raisons" :key="raison" class="flex gap-4">
              <CheckCircleIcon class="mt-0.5 h-6 w-6 shrink-0 text-leaf-600" />
              <span class="text-lg leading-relaxed text-ink/75">{{ raison }}</span>
            </li>
          </ul>
        </div>

        <div v-reveal="150" class="order-1 lg:order-2">
          <div class="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 sm:p-10">
            <form @submit.prevent="sendEmail" class="space-y-6">
              <div>
                <label for="nom" class="mb-2 block text-sm font-semibold">Nom complet</label>
                <input
                  id="nom"
                  v-model="form.nom"
                  type="text"
                  autocomplete="name"
                  placeholder="Ex : Nguessan Hermane"
                  required
                  class="field"
                />
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="email" class="mb-2 block text-sm font-semibold">Adresse e-mail</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    autocomplete="email"
                    placeholder="exemple@email.com"
                    required
                    class="field"
                  />
                </div>
                <div>
                  <label for="tel" class="mb-2 block text-sm font-semibold">
                    Numéro de téléphone
                  </label>
                  <input
                    id="tel"
                    v-model="form.tel"
                    type="tel"
                    inputmode="tel"
                    autocomplete="tel"
                    placeholder="0700000000"
                    required
                    class="field"
                  />
                </div>
              </div>

              <div>
                <label for="message" class="mb-2 block text-sm font-semibold">
                  Pourquoi voulez-vous rejoindre la Communauté Virtuelle de Cocody ?
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Votre message ici..."
                  required
                  class="field"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn-brand w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="sending"
              >
                <template v-if="sending">Envoi en cours…</template>
                <template v-else>
                  Envoyer ma demande
                  <PaperAirplaneIcon class="h-5 w-5" />
                </template>
              </button>
            </form>

            <!-- Message de confirmation -->
            <div
              v-if="successMessage"
              role="status"
              class="mt-6 flex items-start gap-3 rounded-2xl border border-leaf-300 bg-leaf-50 p-4 text-leaf-800"
            >
              <CheckCircleIcon class="h-6 w-6 shrink-0" />
              {{ successMessage }}
            </div>

            <div
              v-if="errorMessage"
              role="alert"
              class="mt-6 flex items-start gap-3 rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700"
            >
              <ExclamationTriangleIcon class="h-6 w-6 shrink-0" />
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PaperAirplaneIcon,
} from '@heroicons/vue/24/outline'
import PageHeader from './PageHeader.vue'

const raisons = [
  'Un accompagnement par les pairs, notamment pour les nouveaux étudiants.',
  'Des ateliers, formations et conférences pour développer vos compétences.',
  'Des rencontres en présentiel chaque samedi et des projets collaboratifs.',
  'Un réseau d’entraide entre étudiants de l’UVCI à Cocody.',
]

// Champs du formulaire
const form = ref({
  nom: '',
  email: '',
  tel: '',
  message: '',
})

const sending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Fonction d'envoi
const sendEmail = async () => {
  sending.value = true
  try {
    const response = await emailjs.send(
      'service_18ntmmv', // Remplace par ton ID EmailJS
      'template_swk78b2', // Remplace par ton template ID
      {
        nom: form.value.nom,
        email: form.value.email,
        tel: form.value.tel,
        message: form.value.message,
      },
      '3lE5wjSzJBYDpnW5r', // Remplace par ta clé publique EmailJS
    )

    console.log('✅ Email envoyé avec succès:', response)
    successMessage.value = 'Merci ! Votre message a été envoyé avec succès.'
    errorMessage.value = ''
    form.value = { nom: '', email: '', tel: '', message: '' }
  } catch (error) {
    console.error('❌ Erreur:', error)
    errorMessage.value = "Une erreur s'est produite. Veuillez réessayer."
    successMessage.value = ''
  } finally {
    sending.value = false
  }
}
</script>
