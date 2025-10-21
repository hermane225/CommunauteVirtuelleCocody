<template>
  <section class="bg-gray-50 py-12 px-6">
    <div class="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        <u> Formulaire d'intégration a la communauté Virtuelle de Cocody</u>
      </h2>

      <form @submit.prevent="sendEmail" class="space-y-5">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">Nom complet</label>
          <input
            v-model="form.nom"
            type="text"
            placeholder="Ex : Nguessan Hermane"
            required
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Adresse e-mail</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="exemple@email.com"
            required
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2">Numero de télephone </label>
          <input
            v-model="form.tel"
            type="number"
            placeholder="015444441"
            required
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-semibold mb-2"
            >Pourquoi voulez rejoindre la communauté Virtuelle de cocody ?</label
          >
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Votre message ici..."
            required
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-green-900 hover:bg-purple-900 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Envoyer le message
        </button>
      </form>

      <!-- Message de confirmation -->
      <div
        v-if="successMessage"
        class="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700 text-center"
      >
        ✅ {{ successMessage }}
      </div>

      <div
        v-if="errorMessage"
        class="mt-6 p-4 bg-red-100 border border-red-400 rounded-lg text-red-700 text-center"
      >
        ❌ {{ errorMessage }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Champs du formulaire
const form = ref({
  nom: '',
  email: '',
  tel: '',
  message: '',
})

const successMessage = ref('')
const errorMessage = ref('')

// Fonction d'envoi
const sendEmail = async () => {
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
  }
}
</script>
