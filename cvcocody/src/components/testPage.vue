<template>
  <!-- nav bar section -->
  <nav class="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
    <marquee
      behavior="scroll"
      direction="left"
      class="bg-purple-800 inline-block text-white font-semibold text-lg"
    >
      Akwaba sur le site officiel de la Communauté Virtuelle de Cocody (CVC) — Une communauté
      étudiante de l’Université Virtuelle de Côte d’Ivoire à Cocody !
    </marquee>
    <div class="text-xl"></div>
    <div class="flex md:hidden">
      <button id="hamburger" @click="toggleMenu">
        <!-- <img
          v-show="!menuOpen"
          class="toggle block"
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width="40"
          height="40"
        />
        <img
          v-show="menuOpen"
          class="toggle hidden"
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width="40"
          height="40"
        /> -->
      </button>
    </div>
    <div
      class="w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none"
      :class="{ hidden: !menuOpen && isMobile }"
    >
      <!-- <a href="#home" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
        >Home
      </a>
      <a href="#services" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
        >Services
      </a>
      <a href="#aboutus" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
        >About us
      </a>
      <a href="#gallery" class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
        >Gallery
      </a>
      <a
        href="#contactUs"
        class="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
        >Visit Us
      </a> -->
    </div>

    <div class="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
      <a href="tel:+123">
        <div class="flex justify-end">
          <div>
            <!-- Heroicon name: phone -->
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            > -->
            <!-- <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg> -->
            <!-- Call now -->
          </div>
        </div>
      </a>
    </div>
  </nav>
  <!-- hero seciton -->
  <div class="relative w-full h-[320px]" id="home">
    <div class="absolute inset-0 opacity-70">
      <img
        src="/src/assets/salle.jpg"
        alt="Background Image"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <h1 class="text-grey-700 font-medium text-4xl md:text-3xl leading-tight mb-2">
          Unir, Former, Inspirer
        </h1>
        <p class="font-regular text-gray-950 text-xl mb-8 mt-4">
          Ancrée à Cocody, la communauté rassemble les étudiants de l’UVCI resident à cocody pour
          apprendre, collaborer et grandir ensemble, aussi bien en présentiel qu’en ligne.
        </p>
        <router-link
          :to="{ name: 'pageaccuiel' }"
          href="#contactUs"
          class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Découvrir la communauté</router-link
        >
      </div>
    </div>
  </div>

  <!-- our services section -->
  <section class="py-10" id="services">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Les Activités Récentes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
            alt="wheat flour grinding"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Wheat Flour Grinding</h3>
            <p class="text-gray-700 text-base">
              Our wheat flour grinding service provides fresh, high-quality flour to businesses and
              individuals in the area. We use state-of-the-art equipment to grind wheat into flour,
              and we offer a variety of flours to meet the needs of our customers.
            </p>
          </div>
        </div> -->
        <!-- <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
            alt="Coffee"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Gram Flour Grinding</h3>
            <p class="text-gray-700 text-base">
              Our gram flour is perfect for a variety of uses, including baking, cooking, and making
              snacks. It is also a good source of protein and fiber.Our gram flour grinding service
              is a convenient and affordable way to get the freshest gram flour possible.
            </p>
          </div>
        </div> -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/assets/affiche.jpg" alt="affiche" class="w-full h-64 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-gray-800 mb-2">
              <u> Retour sur la Journée Akwaba à la communauté virtuelle de Cocody</u>
            </h3>
            <div class="text-gray-700 text-base">
              Le samedi 27 septembre dernier, la communauté virtuelle de Cocody a célébré la Journée
              Akwaba, un moment spécialement organisé pour accueillir chaleureusement les nouveaux
              membres.
              <details>
                <summary>Voir Plus</summary>
                <p>
                  L’événement a offert à chacun l’occasion de faire connaissance, partager ses idées
                  et découvrir les multiples opportunités offertes par la communauté. La journée a
                  débuté par une séance d’accueil et d’introduction, présentant la vision et les
                  objectifs de la communauté ainsi que les différentes manières de s’impliquer dans
                  ses projets. Les participants ont ensuite pu profiter de rencontres et échanges,
                  tissant de nouveaux liens et trouvant parfois des partenaires pour de futurs
                  projets. Des activités interactives, incluant jeux, quiz et discussions, ont animé
                  la journée et renforcé les liens entre les membres. Enfin, la présentation des
                  projets et initiatives a permis à chacun de comprendre comment contribuer
                  concrètement et laisser sa marque dans la communauté. Cette journée a été bien
                  plus qu’un simple événement : elle a été un véritable moment de partage, de
                  convivialité et de découverte, apprécié autant par les nouveaux arrivants que par
                  les membres présents depuis longtemps. La Journée Akwaba a confirmé l’engagement
                  de la communauté à créer des liens solides et à offrir un environnement stimulant
                  pour tous ses membres.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/assets/mtn.jpg" alt="affiche" class="w-full h-64 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-gray-800 mb-2">
              <u
                >Participation des étudiants de la Communauté virtuelle de Cocody au lancement de la
                MTN Skills Academy – UVCI</u
              >
            </h3>
            <div class="text-gray-700 text-base">
              La Communauté virtuelle de Cocody, composée d’étudiants de l’Université virtuelle de
              Côte d’Ivoire (UVCI), a pris part activement à la cérémonie de lancement de la “Skills
              Academy”, une plateforme numérique initiée par la Fondation MTN-CI en partenariat avec
              l’UVCI.
              <details>
                <summary>Voir Plus</summary>
                <p>
                  L’événement s’est tenu le jeudi 25 septembre 2025 au sein de l’institution à
                  Abidjan-Cocody, en présence de nombreuses autorités académiques et partenaires du
                  monde du numérique. Une initiative pour renforcer les compétences numériques Le
                  lancement, effectué symboliquement par M. Touré Vamara, représentant du ministre
                  de l’Enseignement supérieur et de la Recherche scientifique, marque une nouvelle
                  étape dans la promotion du numérique en Côte d’Ivoire. La plateforme MTN Skills
                  Academy met à la disposition des apprenants plus de 400 ressources pédagogiques
                  couvrant plusieurs domaines clés, notamment : le développement web, l’intelligence
                  artificielle, la cybersécurité, et l’entrepreneuriat numérique. Ce partenariat
                  vise à améliorer le taux d’employabilité des jeunes diplômés, à multiplier par
                  trois le nombre de techniciens et d’ingénieurs formés au numérique et à favoriser
                  la reconnaissance internationale des compétences acquises. Un lien fort avec le
                  Statut national de l’étudiant entrepreneur (SNEE) Selon M. Touré Vamara, la
                  plateforme vient renforcer le Statut national de l’étudiant entrepreneur (SNEE),
                  un dispositif mis en place par le gouvernement pour encourager l’esprit
                  d’initiative chez les jeunes. La combinaison du cadre légal du SNEE et des
                  formations pratiques offertes par la Skills Academy permettra aux étudiants de
                  transformer leurs projets en entreprises viables et d’apporter une réelle valeur
                  ajoutée à l’économie numérique ivoirienne. Une présence remarquée des étudiants de
                  la Communauté virtuelle de Cocody Les étudiants de la Communauté virtuelle de
                  Cocody étaient présents en grand nombre lors de cette cérémonie. Leur
                  participation témoigne de leur engagement actif dans la dynamique de
                  transformation numérique initiée par l’UVCI et ses partenaires. Ils ont également
                  pu échanger avec les responsables de la Fondation MTN-CI et de l’UVCI sur les
                  opportunités de formation et de certification offertes par la plateforme.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/assets/bureau.jpg" alt="Coffee" class="w-full h-64 object-cover" />
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium text-gray-800 mb-2">
              <u
                >Réunion du bureau de la Communauté virtuelle de Cocody : Fixation de la vision et
                des objectifs de la communauté</u
              >
            </h3>
            <div class="text-gray-700 text-base">
              Le bureau de la Communauté virtuelle de Cocody (UVCI) s’est réuni le jeudi 25
              septembre 2025 pour une rencontre stratégique présidée par M. Gboho Nouffé, président
              de la communauté. Cette séance de travail avait pour objectif principal de définir la
              vision et les orientations de la communauté pour l’année académique à venir.
              <details>
                <summary>Voir plus</summary>
                <p>
                  Objectifs de la rencontre Les échanges ont porté sur la volonté du bureau de :
                  .Servir la communauté à travers des actions concrètes et utiles aux étudiants ;
                  -Accompagner et orienter les nouveaux membres afin de faciliter leur intégration à
                  l’UVCI ; -Favoriser l’innovation et la formation continue dans le domaine du
                  numérique ; -Créer un véritable réseau d’entraide et de collaboration entre les
                  étudiants. Cette rencontre marque une étape importante dans la construction d’une
                  communauté solidaire, dynamique et inclusive, centrée sur le partage de
                  connaissances et l’esprit d’équipe. Déroulement de la réunion Sous la direction du
                  président Gboho Nouffé, les membres du bureau ont échangé sur les projets
                  prioritaires à mettre en place, notamment la création de programmes de formation
                  interne, d’ateliers pratiques et d’activités de networking entre étudiants. Des
                  discussions ont également porté sur l’amélioration de la communication au sein de
                  la communauté et la valorisation des initiatives étudiantes. Résolutions et
                  engagements À l’issue de la rencontre, les membres du bureau se sont engagés à :
                  Promouvoir une culture de service et de leadership parmi les étudiants ; Lancer
                  des activités formatrices et collaboratives ; Renforcer la cohésion et le
                  sentiment d’appartenance à la communauté. Le président Gboho Nouffé a félicité les
                  membres pour leur implication et a rappelé que « servir, former et innover »
                  demeurent les piliers du développement de la Communauté virtuelle de Cocody.
                </p>
              </details>
            </div>
          </div>
        </div>
        <!-- special card -->
        <!-- <div class="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full"
        >
          <div class="text-center text-white font-medium">Special product</div>
          <img
            src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
            alt="Coffee"
            class="w-full h-64 object-cover rounded-t-lg"
          />
          <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
            <h3 class="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
            <p class="text-gray-700 text-base">
              <span class="font-medium underline">Our speciality is</span>
              <!- Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to
              tantalize your taste buds. We use only the freshest ingredients Our flavors include:
              Mango, spinach -->
        <!-- </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden"> -->
        <!-- <img
            src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
            alt="papad"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 text-center"> -->
        <!-- <h3 class="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
            <div class="text-gray-700 text-base"> -->
        <!-- Our company produces high-quality rice papad that is made with the finest ingredients.
              We use traditional methods to make our papad, which gives it a unique flavor and
              texture. Our papad is also gluten-free and vegan. -->
        <!-- <details>
                <summary>Read More</summary>
                <p>
                  <!- We offer a variety of rice papad flavors, including plain, salted, spicy, and -->
        <!-- flavored. We also offer a variety of sizes and shapes to choose from. Our papad is
                  available in bulk or in individual packages. -->
        <!-- </p>
              </details>
            </div>
          </div>
        </div>
      </div>  -->
      </div>
    </div>
  </section>

  <!-- about us -->
  <section class="bg-gray-100" id="aboutus">
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="max-w-lg">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
            Au cœur de la communauté
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            La Communauté virtuelle de Cocody (CVC) regroupe les étudiants de l’Université Virtuelle
            de Côte d’Ivoire (UVCI) résidant à Cocody ou affiliés à cette zone. Elle a pour mission
            de soutenir et accompagner les étudiants, notamment les nouveaux arrivants, en leur
            offrant un cadre d’entraide et de partage de connaissances. La communauté favorise
            également l’innovation, la formation et le réseautage, en organisant des ateliers, des
            projets collaboratifs et des activités permettant aux membres d’échanger, de développer
            leurs compétences et de renforcer les liens entre étudiants. La CVC constitue ainsi un
            espace dynamique où apprentissage, solidarité et collaboration sont au cœur de
            l’expérience étudiante.
          </p>
        </div>
        <div class="mt-12 md:mt-0">
          <img
            src="/src/assets/arriere.jpg"
            alt="About Us Image"
            class="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- why us  -->
  <section class="text-gray-700 body-font mt-10">
    ssa
    <div class="flex justify-center text-3xl font-bold text-gray-800 text-center">
      Nos atouts & valeurs
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap text-center justify-center">
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center">
              <img src="/src/assets/67_human_logo.jpg" class="w-50 mb-3" />
            </div>

            <h2 class="title-font font-regular text-3xl text-gray-950">Solidarité et entraide</h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center">
              <img src="/src/assets/preview.jpg" class="w-50 mb-3" />
            </div>
            <h2 class="title-font font-regular text-3xl text-gray-950">
              Réseautage et collaboration
            </h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center">
              <img src="/src/assets/innove.jpg" class="w-50 mb-3" />
            </div>
            <h2 class="title-font font-regular text-3xl text-gray-950">Innovation et créativité</h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center">
              <img src="/src/assets/leader.jpg" class="w-50 mb-3" />
            </div>
            <h2 class="title-font font-regular text-3xl text-gray-950">Engagement et leadership</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- gallery -->
  <section class="text-gray-700 body-font" id="gallery">
    <div class="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
      Galleries
    </div>

    <div
      class="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      <div class="group relative">
        <img
          src="/src/assets/f.jpg"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>

      <div class="group relative">
        <img
          src="/src/assets/bureau2.jpg"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>

      <div class="group relative">
        <img
          src="/src/assets/c.jpg"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>
      <div class="group relative">
        <img
          src="/src/assets/br.jpg"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>

      <!-- Repeat this div for each image -->
    </div>
  </section>

  <!-- Visit us section -->
  <!-- <section class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
        <p class="mt-3 text-lg text-gray-500">Let us serve you the best</p>
      </div>
      <div class="mt-8 lg:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="max-w-full mx-auto rounded-lg overflow-hidden">
              <div class="border-t border-gray-200 px-6 py-4">
                <h3 class="text-lg font-bold text-gray-900">Contact</h3>
                <p class="mt-1 font-bold text-gray-600">
                  <a href="tel:+123">Phone: +91 123456789</a>
                </p>
                <a class="flex m-1" href="tel:+919823331842">
                  <div class="flex-shrink-0">
                    <div
                      class="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2"
                    >
                      <!- Heroicon name: phone -->
  <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Call now -->
  <!-- </div>
                  </div>
                </a>
              </div>
              <div class="px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                <p class="mt-1 text-gray-600">Sale galli, 60 foot road, Latur</p>
              </div>
              <div class="border-t border-gray-200 px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                <p class="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
              </div>
            </div> -->
  <!-- </div>
          <div class="rounded-lg overflow-hidden order-none sm:order-first">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
              class="w-full"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div> -->
  <!-- </div>
  </section>  -->
  <!-- footer -->
  <!-- <section>
    <footer class="bg-gray-200 text-white py-4 px-3">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
          <p class="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
        </div>
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
            <li><a href="#contactUs" class="text-gray-400 hover:text-white">Contact</a></li>
            <li class="mx-4">
              <a href="/privacy" class="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </section> -->
</template>

<script>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const isMobile = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  const updateSize = () => {
    isMobile.value = window.innerWidth < 768
  }

  updateSize()
  window.addEventListener('resize ', updateSize)
})
</script>
