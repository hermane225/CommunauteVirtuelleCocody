import akwaba2026 from '@/assets/akwaba-2026.jpg'

// Événements à venir affichés sur la page d'accueil.
//
// Pour annoncer un événement :
//   1. déposer l'affiche dans src/assets (ex. : atelier-web.jpg)
//   2. l'importer ici :  import atelierWeb from '@/assets/atelier-web.jpg'
//   3. ajouter un bloc dans la liste ci-dessous
//
// Un événement disparaît tout seul du site le lendemain de sa date.
// Seuls `id`, `title` et `date` sont obligatoires.
// Dans `description`, une ligne vide sépare deux paragraphes.
//
// Exemple :
//   {
//     id: 'atelier-web',
//     title: 'Atelier d’initiation au développement web',
//     date: '2026-11-14', // année-mois-jour
//     heure: '8 h',
//     lieu: 'Siège de l’UVCI, Cocody',
//     description: 'Une matinée pour découvrir les bases du HTML et du CSS.',
//     programme: ['Accueil', 'Atelier pratique'], // facultatif
//     affiche: atelierWeb,
//     lien: 'https://chat.whatsapp.com/...', // facultatif : inscription ou informations
//   },

export const evenements = [
  {
    id: 'journee-akwaba-2026',
    title: 'Journée Akwaba',
    date: '2026-10-17',
    heure: '8 h 00',
    lieu: 'Groupe scolaire Laurier 9',
    description: `La Communauté Virtuelle de Cocody (CVC) organise une journée Akwaba exceptionnelle. Un moment unique pour découvrir, apprendre, échanger et intégrer une communauté dynamique et engagée !

Que tu sois nouveau ou ancien étudiant, cette journée est faite pour toi ! Viens t’informer, réseauter et saisir toutes les opportunités pour réussir ton parcours académique.

Rejoins une communauté solidaire, ambitieuse et tournée vers la réussite ! Invite tes amis et ne manque surtout pas cet événement !`,
    programme: [
      'Modèle pédagogique',
      'Présentation de la communauté',
      'Programme de formation',
      'Présentation du bureau',
      'Élection des délégués L1',
      'Cours de renforcement L1',
    ],
    affiche: akwaba2026,
  },
]
