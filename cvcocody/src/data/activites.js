import affiche from '@/assets/affiche.jpg'
import mtn from '@/assets/mtn.jpg'
import bureau from '@/assets/bureau.jpg'

// Chaque bloc de `content` est un sous-titre (h), un paragraphe (p) ou une liste (ul).
export const activites = [
  {
    id: 'journee-akwaba',
    date: '27 septembre 2025',
    tag: 'Événement',
    image: affiche,
    imageAlt: 'Affiche de la Journée Akwaba de la Communauté Virtuelle de Cocody',
    title: 'Retour sur la Journée Akwaba à la Communauté Virtuelle de Cocody',
    excerpt:
      'Le samedi 27 septembre dernier, la communauté virtuelle de Cocody a célébré la Journée Akwaba, un moment spécialement organisé pour accueillir chaleureusement les nouveaux membres.',
    content: [
      {
        p: 'L’événement a offert à chacun l’occasion de faire connaissance, partager ses idées et découvrir les multiples opportunités offertes par la communauté.',
      },
      {
        p: 'La journée a débuté par une séance d’accueil et d’introduction, présentant la vision et les objectifs de la communauté ainsi que les différentes manières de s’impliquer dans ses projets. Les participants ont ensuite pu profiter de rencontres et échanges, tissant de nouveaux liens et trouvant parfois des partenaires pour de futurs projets.',
      },
      {
        p: 'Des activités interactives, incluant jeux, quiz et discussions, ont animé la journée et renforcé les liens entre les membres. Enfin, la présentation des projets et initiatives a permis à chacun de comprendre comment contribuer concrètement et laisser sa marque dans la communauté.',
      },
      {
        p: 'Cette journée a été bien plus qu’un simple événement : elle a été un véritable moment de partage, de convivialité et de découverte, apprécié autant par les nouveaux arrivants que par les membres présents depuis longtemps. La Journée Akwaba a confirmé l’engagement de la communauté à créer des liens solides et à offrir un environnement stimulant pour tous ses membres.',
      },
    ],
  },
  {
    id: 'mtn-skills-academy',
    date: '25 septembre 2025',
    tag: 'Partenariat',
    image: mtn,
    imageAlt: 'Affiche de la cérémonie de lancement UVCI-MTN Skills Academy',
    title:
      'Participation des étudiants de la Communauté virtuelle de Cocody au lancement de la MTN Skills Academy – UVCI',
    excerpt:
      'La Communauté virtuelle de Cocody, composée d’étudiants de l’Université virtuelle de Côte d’Ivoire (UVCI), a pris part activement à la cérémonie de lancement de la « Skills Academy », une plateforme numérique initiée par la Fondation MTN-CI en partenariat avec l’UVCI.',
    content: [
      {
        p: 'L’événement s’est tenu le jeudi 25 septembre 2025 au sein de l’institution à Abidjan-Cocody, en présence de nombreuses autorités académiques et partenaires du monde du numérique.',
      },
      { h: 'Une initiative pour renforcer les compétences numériques' },
      {
        p: 'Le lancement, effectué symboliquement par M. Touré Vamara, représentant du ministre de l’Enseignement supérieur et de la Recherche scientifique, marque une nouvelle étape dans la promotion du numérique en Côte d’Ivoire. La plateforme MTN Skills Academy met à la disposition des apprenants plus de 400 ressources pédagogiques couvrant plusieurs domaines clés, notamment :',
      },
      {
        ul: [
          'le développement web',
          'l’intelligence artificielle',
          'la cybersécurité',
          'l’entrepreneuriat numérique',
        ],
      },
      {
        p: 'Ce partenariat vise à améliorer le taux d’employabilité des jeunes diplômés, à multiplier par trois le nombre de techniciens et d’ingénieurs formés au numérique et à favoriser la reconnaissance internationale des compétences acquises.',
      },
      { h: 'Un lien fort avec le Statut national de l’étudiant entrepreneur (SNEE)' },
      {
        p: 'Selon M. Touré Vamara, la plateforme vient renforcer le Statut national de l’étudiant entrepreneur (SNEE), un dispositif mis en place par le gouvernement pour encourager l’esprit d’initiative chez les jeunes. La combinaison du cadre légal du SNEE et des formations pratiques offertes par la Skills Academy permettra aux étudiants de transformer leurs projets en entreprises viables et d’apporter une réelle valeur ajoutée à l’économie numérique ivoirienne.',
      },
      { h: 'Une présence remarquée des étudiants de la Communauté virtuelle de Cocody' },
      {
        p: 'Les étudiants de la Communauté virtuelle de Cocody étaient présents en grand nombre lors de cette cérémonie. Leur participation témoigne de leur engagement actif dans la dynamique de transformation numérique initiée par l’UVCI et ses partenaires. Ils ont également pu échanger avec les responsables de la Fondation MTN-CI et de l’UVCI sur les opportunités de formation et de certification offertes par la plateforme.',
      },
    ],
  },
  {
    id: 'reunion-bureau',
    date: '25 septembre 2025',
    tag: 'Vie du bureau',
    image: bureau,
    imageAlt: 'Membres du bureau de la Communauté Virtuelle de Cocody réunis',
    title:
      'Réunion du bureau de la Communauté virtuelle de Cocody : fixation de la vision et des objectifs de la communauté',
    excerpt:
      'Le bureau de la Communauté virtuelle de Cocody (UVCI) s’est réuni le jeudi 25 septembre 2025 pour une rencontre stratégique présidée par M. Gboho Nouffé, président de la communauté.',
    content: [
      {
        p: 'Cette séance de travail avait pour objectif principal de définir la vision et les orientations de la communauté pour l’année académique à venir.',
      },
      { h: 'Objectifs de la rencontre' },
      { p: 'Les échanges ont porté sur la volonté du bureau de :' },
      {
        ul: [
          'Servir la communauté à travers des actions concrètes et utiles aux étudiants ;',
          'Accompagner et orienter les nouveaux membres afin de faciliter leur intégration à l’UVCI ;',
          'Favoriser l’innovation et la formation continue dans le domaine du numérique ;',
          'Créer un véritable réseau d’entraide et de collaboration entre les étudiants.',
        ],
      },
      {
        p: 'Cette rencontre marque une étape importante dans la construction d’une communauté solidaire, dynamique et inclusive, centrée sur le partage de connaissances et l’esprit d’équipe.',
      },
      { h: 'Déroulement de la réunion' },
      {
        p: 'Sous la direction du président Gboho Nouffé, les membres du bureau ont échangé sur les projets prioritaires à mettre en place, notamment la création de programmes de formation interne, d’ateliers pratiques et d’activités de networking entre étudiants. Des discussions ont également porté sur l’amélioration de la communication au sein de la communauté et la valorisation des initiatives étudiantes.',
      },
      { h: 'Résolutions et engagements' },
      { p: 'À l’issue de la rencontre, les membres du bureau se sont engagés à :' },
      {
        ul: [
          'Promouvoir une culture de service et de leadership parmi les étudiants ;',
          'Lancer des activités formatrices et collaboratives ;',
          'Renforcer la cohésion et le sentiment d’appartenance à la communauté.',
        ],
      },
      {
        p: 'Le président Gboho Nouffé a félicité les membres pour leur implication et a rappelé que « servir, former et innover » demeurent les piliers du développement de la Communauté virtuelle de Cocody.',
      },
    ],
  },
]
