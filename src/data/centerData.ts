export interface Course {
  id: string;
  title: string;
  category: "diplomante" | "continue" | "alacarte";
  categoryLabel: string;
  duration: string;
  certification: string;
  description: string;
  skills: string[];
  level: string;
  format: "Présentiel" | "Hybride / Présentiel";
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarBg: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CENTER_INFO = {
  name: "CFPC Dream Real-ICT",
  fullName: "Centre de Formation Professionnelle CFPC Dream Real-ICT",
  tagline: "Votre tremplin vers le succès professionnel numérique à tous moments.",
  location: "Yaoundé, Alpha Manguier (Rez de chaussée Hôtel Lieugne)",
  whatsapp1: "+237699000563",
  whatsapp1Display: "+237 699 00 05 63",
  whatsapp2: "+237677710707",
  whatsapp2Display: "+237 677 71 07 07",
  email: "cfpcdreamreal@gmail.com",
  facebookUrl: "https://web.facebook.com/cfpcdreamreal/?_rdc=1&_rdr",
  hours: {
    weekdays: "Lundi - Vendredi : 8h - 17h30",
    saturday: "Samedi : 8h - 13h",
    sunday: "Dimanche : Fermé",
  },
  copyright: `© ${new Date().getFullYear()} CFPC Dream Real-ICT. Tous droits réservés.`,
};

export const WHATSAPP_LINK = (message?: string) => {
  const defaultMsg = "Bonjour CFPC Dream Real-ICT, je souhaite obtenir des informations sur vos formations.";
  return `https://wa.me/237699000563?text=${encodeURIComponent(message || defaultMsg)}`;
};

export const COURSES: Course[] = [
  {
    id: "secretariat-bureautique",
    title: "Secrétariat Bureautique & Assistant de Direction",
    category: "diplomante",
    categoryLabel: "Diplômante (DQP / CQP)",
    duration: "9 à 12 Mois",
    certification: "Diplôme de Qualification Professionnelle (DQP) reconnu par l'État",
    description: "Maîtrisez les outils bureautiques avancés (Word, Excel, PowerPoint), l'organisation administrative, la communication professionnelle et le classement informatique.",
    skills: ["Bureautique Avancée", "Gestion Administrative", "Rédaction Pro", "Comptabilité de Base"],
    level: "Tous niveaux",
    format: "Présentiel",
    popular: true,
  },
  {
    id: "webmaster-dev-web",
    title: "Webmestre & Développement Web / Mobile",
    category: "diplomante",
    categoryLabel: "Diplômante (DQP / CQP)",
    duration: "9 à 12 Mois",
    certification: "Diplôme de Qualification Professionnelle (DQP)",
    description: "Concevez, développez et administrez des sites web dynamiques et applications mobiles modernistes avec les meilleures technologies web du marché.",
    skills: ["HTML5 / CSS3", "JavaScript / React", "WordPress / CMS", "SEO & Maintenance"],
    level: "Débutant à Intermédiaire",
    format: "Hybride / Présentiel",
    popular: true,
  },
  {
    id: "comptabilite-informatisee",
    title: "Comptabilité Informatisée & Gestion des Entreprises",
    category: "diplomante",
    categoryLabel: "Diplômante (DQP / CQP)",
    duration: "9 à 12 Mois",
    certification: "Diplôme de Qualification Professionnelle (DQP)",
    description: "Formez-vous aux principes comptables, à la gestion fiscale et à la prise en main des logiciels leaders du secteur comme SAARI / Sage Comptabilité.",
    skills: ["Sage Saari", "Gestion de Paie", "Déclarations Fiscales", "Bilans & États"],
    level: "Bac ou équivalent",
    format: "Présentiel",
  },
  {
    id: "graphisme-design",
    title: "Infographie, Graphisme & Design Numérique",
    category: "diplomante",
    categoryLabel: "Diplômante (DQP / CQP)",
    duration: "9 à 12 Mois",
    certification: "Diplôme de Qualification Professionnelle (DQP)",
    description: "Libérez votre créativité et devenez un professionnel de l'image de marque : création de logos, supports publicitaires, charte graphique et retouche photo.",
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding & Typography"],
    level: "Tous niveaux",
    format: "Présentiel",
    popular: true,
  },
  {
    id: "maintenance-reseau",
    title: "Maintenance Informatique & Administration Réseau",
    category: "diplomante",
    categoryLabel: "Diplômante (DQP / CQP)",
    duration: "9 à 12 Mois",
    certification: "Diplôme de Qualification Professionnelle (DQP)",
    description: "Apprenez l'assemblage, le dépannage matériel et logiciel des ordinateurs, le câblage et la configuration des réseaux locaux d'entreprises.",
    skills: ["Diagnostic Matériel", "Windows & Linux", "Câblage RJ45 / Switch", "Sécurité Système"],
    level: "Tous niveaux",
    format: "Présentiel",
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital & Community Management",
    category: "continue",
    categoryLabel: "Formation Continue",
    duration: "3 à 6 Mois",
    certification: "Attestation de Qualification Professionnelle (AQP)",
    description: "Développez la visibilité des entreprises sur les réseaux sociaux, maîtrisez la publicité en ligne (Meta Ads, Google Ads) et la création de contenu engageant.",
    skills: ["Gestion RS (FB/Insta/LinkedIn)", "Social Ads", "Copywriting", "Stratégie Digitale"],
    level: "Tous niveaux",
    format: "Hybride / Présentiel",
  },
  {
    id: "excel-avance",
    title: "Maîtrise d'Excel Avancé & Analyse de Données",
    category: "alacarte",
    categoryLabel: "À la Carte",
    duration: "1 à 2 Mois",
    certification: "Attestation de Fin de Formation",
    description: "Perfectionnez vos compétences sur Excel : formules complexes, tableaux croisés dynamiques, TCD, automatisation et tableaux de bord décisionnels.",
    skills: ["RechercheV / XLOOKUP", "Tableaux Croisés", "Dashboards", "Macros de base"],
    level: "Intermédiaire",
    format: "Présentiel",
  },
  {
    id: "canva-visuels-pro",
    title: "Création Visuelle Rapide & Branding avec Canva",
    category: "alacarte",
    categoryLabel: "À la Carte",
    duration: "1 Mois",
    certification: "Attestation de Fin de Formation",
    description: "Concevez rapidement des affiches, flyers, présentations et visuels professionnels pour vos réseaux sans être un infographiste chevronné.",
    skills: ["Canva Pro", "Identité Visuelle", "Design Réseaux Sociaux", "Montage Vidéo Courte"],
    level: "Débutant",
    format: "Hybride / Présentiel",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marie K.",
    role: "Diplômée Secrétariat Bureautique (DQP)",
    quote: "Grâce au CFPC Dream Real-ICT, j'ai acquis une parfaite maîtrise des outils bureautiques et de la gestion administrative. J'ai décroché mon poste immédiatement après l'obtention de mon DQP !",
    avatarBg: "from-purple-600/20 to-indigo-600/20",
    rating: 5,
  },
  {
    id: "2",
    name: "Paul N.",
    role: "Spécialiste Développement Web & Mobile",
    quote: "Des formateurs passionnés et très praticiens. On développe de vraies applications dès les premières semaines. Une préparation d'excellence aux réalités du marché informatique.",
    avatarBg: "from-emerald-600/20 to-teal-600/20",
    rating: 5,
  },
  {
    id: "3",
    name: "Amina S.",
    role: "Webmestre & CMS WordPress",
    quote: "Reconversion professionnelle réussie à 100%. L'accompagnement individuel et l'accès permanent au matériel informatique m'ont permis d'être autonome et confiante.",
    avatarBg: "from-amber-600/20 to-orange-600/20",
    rating: 5,
  },
  {
    id: "4",
    name: "Serge M.",
    role: "Diplômé Comptabilité Informatisée (Sage)",
    quote: "La formation intense sur Sage Saari et les déclarations fiscales m'a ouvert les portes d'un cabinet comptable renommé à Yaoundé. L'équipe pédagogique est exceptionnelle.",
    avatarBg: "from-blue-600/20 to-cyan-600/20",
    rating: 5,
  },
  {
    id: "5",
    name: "Chantal B.",
    role: "Infographe & Designer Graphique",
    quote: "De la conception visuelle à la charte graphique, Dream Real-ICT m'a apporté toute l'expertise technique nécessaire pour réussir l'examen national DQP haut la main.",
    avatarBg: "from-pink-600/20 to-rose-600/20",
    rating: 5,
  },
  {
    id: "6",
    name: "Lionel T.",
    role: "Technicien Maintenance & Réseau",
    quote: "L'apprentissage 100% pratique sur le dépannage et le câblage m'a permis d'intégrer une grande entreprise. Le réseau professionnel du centre est un vrai accélérateur.",
    avatarBg: "from-green-600/20 to-emerald-600/20",
    rating: 5,
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Quels sont les prérequis pour s'inscrire ?",
    answer: "Aucun prérequis technique préalable n'est nécessaire pour la plupart de nos formations. Seules la motivation et la volonté d'apprendre comptent ! Nos formateurs s'adaptent au rythme de chaque apprenant.",
  },
  {
    question: "Les diplômes et attestations sont-ils reconnus par l'État ?",
    answer: "Oui ! Nos formations diplômantes préparent aux examens nationaux sanctionnés par le Diplôme de Qualification Professionnelle (DQP) et le Certificat de Qualification Professionnelle (CQP) reconnus par l'État camerounais (Ministère de la Formation Professionnelle). Nos formations continues délivrent également des attestations officielles.",
  },
  {
    question: "Peut-on suivre les formations à distance ou en cours du soir ?",
    answer: "Oui, nous offrons une grande flexibilité d'horaires : cours du jour, cours du soir et formules hybrides/à distance pour les personnes en activité ou ayant un emploi du temps chargé.",
  },
  {
    question: "Comment se passent le paiement et les facilités de financement ?",
    answer: "Nous proposons des facilités de paiement échelonné en plusieurs tranches tout au long de votre parcours afin de rendre les formations accessibles à tous les budgets.",
  },
  {
    question: "Où se situe exactement le centre CFPC Dream Real-ICT ?",
    answer: "Le centre est situé à Yaoundé, au quartier Alpha Manguier, au rez-de-chaussée de l'Hôtel Lieugne. Vous pouvez vous y rendre directement de 8h à 17h30 du lundi au vendredi et de 8h à 13h le samedi.",
  },
];

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
  subtext: string;
}

export const STATS: StatItem[] = [
  {
    id: "exp",
    value: "10+",
    label: "Années d'Expérience",
    description: "Plus d'une décennie d'excellence pédagogique dans la formation aux métiers du numérique et de la gestion administrative à Yaoundé.",
    iconName: "Award",
    subtext: "Expertise & Pédagogie certifiée *",
  },
  {
    id: "trainers",
    value: "15+",
    label: "Formateurs Qualifiés",
    description: "Des professionnels en activité et ingénieurs passionnés engagés dans un accompagnement individuel 100% pratique.",
    iconName: "Users",
    subtext: "Encadrement personnalisé au quotidien *",
  },
  {
    id: "courses",
    value: "25+",
    label: "Formations Accessibles",
    description: "Un catalogue complet allant des diplômes DQP/CQP reconnus par l'État aux modules intensifs du soir et à la carte.",
    iconName: "BookOpen",
    subtext: "Diplômantes et formations courtes *",
  },
  {
    id: "satisfaction",
    value: "98%",
    label: "Taux de Satisfaction",
    description: "Nos apprenants et diplômés valident la qualité des cours et l'impact direct de la formation sur leur insertion professionnelle.",
    iconName: "TrendingUp",
    subtext: "Insertion pro & Compétences réelles *",
  },
];

export const ADVANTAGES = [
  {
    title: "Flexibilité des Horaires",
    description: "Des horaires adaptés à votre rythme de vie (cours du jour, cours du soir, présentiel et hybride).",
    icon: "Clock",
  },
  {
    title: "Accompagnement Personnalisé",
    description: "Un suivi individuel et un coaching d'insertion professionnelle tout au long de votre parcours.",
    icon: "Handshake",
  },
  {
    title: "Matériel de Pointe",
    description: "Des équipements informatiques récents et performants pour un apprentissage 100% pratique.",
    icon: "Laptop",
  },
  {
    title: "Réseau Professionnel",
    description: "Des opportunités directes d'insertion et de stages grâce à notre réseau d'entreprises partenaires.",
    icon: "Globe",
  },
];

export const PILLARS = [
  {
    title: "Un accès rapide à l'emploi",
    description: "Des formations courtes et intensives conçues pour une insertion professionnelle efficace et rapide sur le marché du travail.",
    icon: "Rocket",
  },
  {
    title: "Des compétences concrètes",
    description: "Des savoir-faire 100% pratiques adaptés aux exigences réelles des recruteurs et des entreprises.",
    icon: "Wrench",
  },
  {
    title: "Certifications reconnues par l'État",
    description: "Des diplômes DQP/CQP et attestations reconnus par l'État pour valoriser officiellement votre CV.",
    icon: "GraduationCap",
  },
];

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: "hr-akym",
    name: "HR by AKYM",
    logo: "/partners/hr-akym.png",
    description: "Solutions RH et accompagnement stratégique",
  },
  {
    id: "medicom",
    name: "Medicom",
    logo: "/partners/medicom.png",
    description: "Services et Solutions de Communication",
  },
  {
    id: "kreative-framework",
    name: "The Kreative Framework",
    logo: "/partners/kreative-framework.png",
    description: "Agence de Création & Stratégie Digitale",
  },
  {
    id: "tep-multiservices",
    name: "TEP Multi-Services",
    logo: "/partners/tep-multiservices.jpg",
    description: "Services & Solutions Entreprises",
  },
  {
    id: "mbombo-solutions",
    name: "Mbombo Solutions",
    logo: "/partners/mbombo-solutions.png",
    description: "Solutions Entreprises & Innovation",
  },
  {
    id: "arkiv-institute",
    name: "Arkiv Program Training Institute",
    logo: "/partners/arkiv-institute.png",
    description: "Institut de Formation & Programme Spécialisé",
  },
  {
    id: "pluriel",
    name: "Pluriel",
    logo: "/partners/pluriel.png",
    description: "For a brighter experience together !",
  },
];
