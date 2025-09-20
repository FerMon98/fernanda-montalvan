import type { Translations } from './types';

export const translations: Translations = {
  en: {
    // Hero
    'hero.title': "Hi, I'm Fernanda — Full-Stack Developer",
    'hero.subtitle': 'I build clean, fast web apps with React, TypeScript, PHP & Node.',
    'hero.cta': 'See my projects',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact',
    'hero.downloadCV': 'Download CV',

    // Nav
    'nav.themeElectric': 'Electric',
    'nav.themeCyber': 'Cyber',
    'nav.toggleThemeLabel': 'Toggle theme',
    'nav.brand': 'Fernanda Montalván',
    'nav.projects': 'Projects',
    'nav.playground': 'Playground',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.contact': 'Contact',
    'nav.language': 'Language',

    // Resume (titles, nav, updated tag)
    'resume.title': 'Resume',
    'resume.download': 'Download PDF',
    'resume.updated': 'Updated Sep 2025',
    'resume.summaryTitle': 'Professional Summary',
    'resume.skillsTitle': 'Technical Skills',
    'resume.experienceTitle': 'Experience',
    'resume.educationTitle': 'Education',
    'resume.certificationsTitle': 'Certifications',
    'resume.nav.summary': 'Summary',
    'resume.nav.experience': 'Experience',
    'resume.nav.skills': 'Skills',
    'resume.nav.education': 'Education',
    'resume.nav.certs': 'Certifications',
    'resume.softSkillsTitle': 'Soft Skills',
    'resume.softSkills.json': JSON.stringify([
      'Communication',
      'Teamwork',
      'Problem solving',
      'Adaptability',
      'Attention to detail',
      'Ownership',
      'Time management',
      'Mentoring & training',
      'User empathy',
      'Documentation'
    ]),


    // Resume (dynamic content)
    'resume.summary':
      'Full-Stack Developer (React, TypeScript, PHP, MySQL) focused on clean UX, accessibility, and pragmatic delivery. Background in Technical Support and KYC training helps me translate real user needs into reliable interfaces and APIs.',

    // skills: string[]
    'resume.skills.json': JSON.stringify([
      'React', 'TypeScript', 'Vite',
      'Node.js', 'Express',
      'PHP', 'MySQL/MariaDB',
      'Tailwind 4.1', 'shadcn/ui',
      'Prisma', 'Figma',
      'Docker (basics)', 'GitHub Actions'
    ]),

    // experience: {role, company, period, location?, bullets[]}[]
    'resume.experience.json': JSON.stringify([
      {
        role: 'KYC Specialist',
        company: 'Fourthline',
        period: '2024–2025',
        location: 'Barcelona, Spain',
        bullets: [
          'Conducted KYC and QES checks ensuring AML/eIDAS compliance; reduced verification errors by 25%.',
          'Streamlined verification workflows with cross-functional teams, cutting average resolution time by 20%.'
        ]
      },
      {
        role: 'Risk Trainer',
        company: 'Teleperformance',
        period: '2022–2023',
        location: 'Barcelona, Spain',
        bullets: [
          'Developed and delivered fraud-prevention trainings, raising agent scores by 15%.',
          'Maintained training content, ensuring alignment with evolving compliance policies.'
        ]
      },
      {
        role: 'Risk Specialist',
        company: 'Teleperformance',
        period: '2022',
        location: 'Barcelona, Spain',
        bullets: [
          'Reviewed merchant applications and transactions to validate compliance; helped prevent €50K+ potential fraud losses.',
          'Authored daily management reports highlighting risk patterns and mitigation strategies.'
        ]
      },
      {
        role: 'Office 365 Ambassador (Microsoft)',
        company: 'Concentrix',
        period: '2019–2021',
        location: 'Managua, Nicaragua',
        bullets: [
          'Tier-2 support for Exchange, Teams, SharePoint; onboarding and license management.',
          'Assisted hybrid/cloud migration to Azure AD; resolved setup and integration issues.',
          'Contributed to internal KB updates and training efforts.'
        ]
      },
      {
        role: 'Sr. Technical Support (Microsoft)',
        company: 'Concentrix',
        period: '2018–2019',
        location: 'Managua, Nicaragua',
        bullets: [
          'Frontline support for Windows OS and Microsoft software (connectivity, updates, compatibility).',
          'Password resets and account recovery; improved access resolution times.'
        ]
      }
    ]),

    // education: {title, org, hours?, year?, location?, details?: string[]}[]
    'resume.education.json': JSON.stringify([
      {
        title: 'Full-Stack with React (Web App Developer)',
        org: 'Fundación Esplai – Migracode',
        hours: '376h',
        year: '2025',
        location: 'Barcelona, Spain',
        details: ['React, TypeScript, Node/Express, Vite, Tailwind, projects and teamwork']
      },
      {
        title: 'Web App Developer',
        org: 'Grup CIEF – SOC (Professional Certificate)',
        hours: '510h',
        year: '2025',
        location: 'Barcelona, Spain',
        details: ['HTML, CSS, JavaScript, PHP, MySQL, deployments']
      },
      {
        title: 'Cybersecurity in the Industry',
        org: 'MainJobs',
        hours: '120h',
        year: '2025',
        location: 'Barcelona, Spain',
        details: ['Security fundamentals, risk, mitigation, best practices']
      }
    ]),

    // certifications: {title, org?, year?, location?}[]
    'resume.certs.json': JSON.stringify([
      { title: 'Microsoft Azure Fundamentals (AZ-900)' },
      { title: 'Agile Project Management with SCRUM', org: 'Índice Gestoría y Formación', year: '2024', location: 'Barcelona' },
      { title: 'Global Diplomacy – Diplomacy in the Modern World', org: 'University of London', year: '2020', location: 'Managua' }
    ]),

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let’s build something great together.',
    'contact.nameLabel': 'Your name',
    'contact.emailLabel': 'Email',
    'contact.whereLabel': 'Where are you contacting from?',
    'contact.subjectLabel': 'Subject (optional)',
    'contact.messageLabel': 'Message',
    'contact.privacyLabel': 'I consent to be contacted about this inquiry.',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thanks! Your message was sent.',
    'contact.error': 'Something went wrong. Please try again.',
    'contact.honeypot': 'Leave this field empty',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.social': 'Social media links',

    // About section
    'about.blurb':
      'Certified Full-Stack Web Developer focused on building clean, accessible and user-centered interfaces with React, TypeScript, Tailwind and pragmatic backend with Node, PHP & MySQL. Before transitioning into web development, I worked in technical support & fintech (KYC/Risk), explaining complex systems to non-technical users and training teams.',
    'about.note':
      'I enjoy translating real user problems into simple interfaces and working across the stack when needed. Currently showcasing Huellas and a revamped Music Library.',

    // Support stack
    'about.support.title': 'Hands-on Support Stack',
    'about.support.item1': 'Microsoft 365 / Office 365 admin & troubleshooting',
    'about.support.item2': 'Google Workspace (GSuite) administration',
    'about.support.item3': 'Windows setup, OS hygiene, user provisioning',
    'about.support.item4': 'Basic networking (DNS, VPN, proxies, Wi-Fi)',
    'about.support.item5': 'Ticketing, documentation, and knowledge bases',
    'about.support.item6': 'Risk/KYC operations and agent training',

    // Certifications (About block)
    'about.certs.title': 'Certifications & Training',
    'about.certs.item1': 'Web App Development Certification — 510h',
    'about.certs.item2': 'Full-Stack w/ React Bootcamp — 376h (Fundación Esplai, Sep 2025)',
    'about.certs.item3': 'Microsoft Azure Fundamentals (AZ-900)',
    'about.certs.item4': 'JavaScript FullStack Junior Developer Badge',

    // Core tech
    'about.coreTech.title': 'Core Tech',
    'tech.react': 'React',
    'tech.typescript': 'TypeScript',
    'tech.tailwind': 'Tailwind',
    'tech.node': 'Node.js',
    'tech.express': 'Express',
    'tech.php': 'PHP',
    'tech.mysql': 'MySQL/MariaDB',
    'tech.vite': 'Vite',
    'tech.javascript': 'JavaScript',
    'tech.css': 'CSS',
    'tech.html': 'HTML5',
    'tech.bootstrap': 'Bootstrap',
    'tech.nocodb': 'NocoDB',
    'tech.docker': 'Docker',

    // Projects section (homepage/cards)
    'projects.featured': 'Featured Projects',

    // Huellas
    'projects.huellas.title': 'Huellas – Pet Health Platform',
    'projects.huellas.summary':
      'Full-stack platform with authentication, pet profiles, and health records. Built with clean architecture principles and containerized services.',
    'projects.huellas.hl1': 'Hexagonal-inspired service boundaries',
    'projects.huellas.hl2': 'Dockerized multi-service development setup',
    'projects.huellas.hl3': 'REST API with typed contracts',
    'projects.huellas.role': 'Full-Stack Developer',
    'projects.huellas.resp1': 'Designed React UI and component structure',
    'projects.huellas.resp2': 'Built Node/Express API with typed contracts',
    'projects.huellas.resp3': 'Dockerized services and MySQL schema',

    // Music Library
    'projects.music.title': 'Ferzk’s Music Library',
    'projects.music.summary':
      'Personal music library with playlists, user authentication, and song metadata. Modular PHP architecture with normalized SQL schema.',
    'projects.music.hl1': 'Authentication + playlists',
    'projects.music.hl2': 'Normalized schema',
    'projects.music.hl3': 'Clean separation with PHP includes',
    'projects.music.role': 'PHP/MySQL Developer',
    'projects.music.resp1': 'Implemented auth and playlist flows in PHP',
    'projects.music.resp2': 'Designed normalized SQL schema for library',
    'projects.music.resp3': 'Wrote clean, modular PHP includes',

    // Fernanda’s Academy (UI)
    'projects.academy.title': 'Fernanda’s Academy — Learning Platform UI',
    'projects.academy.summary':
      'Frontend prototype of a learning platform: search courses, dynamic display, and user-facing settings for language and theme.',
    'projects.academy.hl1': 'Hooks-based React UI',
    'projects.academy.hl2': 'Integration with Bootstrap',
    'projects.academy.hl3': 'Dynamic content and search',
    'projects.academy.hl4': 'Language & theme personalization',
    'projects.academy.role': 'Frontend Developer',
    'projects.academy.resp1': 'Built course listing and search UX with Hooks',
    'projects.academy.resp2': 'Integrated Bootstrap and responsive layouts',
    'projects.academy.resp3': 'Added language/theme settings for users',

    // Placeholders
    'projects.placeholder.title': 'Upcoming Project',
    'projects.placeholder.description': 'A new project will be added here soon. Stay tuned!',
    'projects.placeholder.summary': 'Placeholder for a future portfolio project.',
    // Personal slice (NEW)
    'about.personal.tagline': 'Night owl · Ocean lover · Coding lover',
    'about.personal.languages': 'ES (native) · EN (C2) · CA (B1)',
    'about.personal.bio':
      "I’m Fernanda — curious builder, music explorer, and late-night coder. I love discovering new sounds, reading, good food, and anything that puts me near nature—especially water. I’m happiest in winter nights with rain and a clean UI taking shape.",
    'about.personal.values.json': JSON.stringify(['Loyalty', 'Honesty', 'Ownership']),
    'about.personal.hobbies.json': JSON.stringify([
      'Discovering new music',
      'Reading',
      'Food & cooking',
      'Nature walks',
      'Water views & swims',
      'Night owl energy',
      'Pets'
    ]),
    'about.personal.horus': 'This is Horus — Labrador + German Shepherd mix and professional treat negotiator.',
    'about.personal.now': 'Doing Now: Learning German (Duolingo) · Continuing Catalan · Practicing driving · Polishing my portfolio',
    'about.personal.valuesTitle': 'Core beliefs',
    'about.personal.listeningNow': 'Listening now',

  },

  es: {
    // Hero
    'hero.title': 'Hola, soy Fernanda — Desarrolladora Full-Stack',
    'hero.subtitle': 'Creo apps web rápidas y limpias con React, TypeScript, PHP y Node.',
    'hero.cta': 'Ver mis proyectos',
    'hero.viewProjects': 'Ver proyectos',
    'hero.contact': 'Contacto',
    'hero.downloadCV': 'Descargar CV',

    // Nav
    'nav.themeElectric': 'Eléctrico',
    'nav.themeCyber': 'Ciber',
    'nav.toggleThemeLabel': 'Cambiar tema',
    'nav.brand': 'Fernanda Montalván',
    'nav.projects': 'Proyectos',
    'nav.playground': 'Playground',
    'nav.about': 'Sobre mí',
    'nav.resume': 'Currículum',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',

    // Resume (titles, nav, updated tag)
    'resume.title': 'Currículum',
    'resume.download': 'Descargar PDF',
    'resume.updated': 'Actualizado sep 2025',
    'resume.summaryTitle': 'Resumen profesional',
    'resume.skillsTitle': 'Habilidades técnicas',
    'resume.experienceTitle': 'Experiencia',
    'resume.educationTitle': 'Formación',
    'resume.certificationsTitle': 'Certificaciones',
    'resume.nav.summary': 'Resumen',
    'resume.nav.experience': 'Experiencia',
    'resume.nav.skills': 'Habilidades',
    'resume.nav.education': 'Formación',
    'resume.nav.certs': 'Certificaciones',
    'resume.softSkillsTitle': 'Habilidades blandas',
    'resume.softSkills.json': JSON.stringify([
      'Comunicación',
      'Trabajo en equipo',
      'Resolución de problemas',
      'Adaptabilidad',
      'Atención al detalle',
      'Responsabilidad',
      'Gestión del tiempo',
      'Mentoría y formación',
      'Empatía con el usuario',
      'Documentación'
    ]),


    // Resume (dynamic content)
    'resume.summary':
      'Desarrolladora Full-Stack (React, TypeScript, PHP, MySQL) enfocada en UX limpia, accesibilidad y entregas pragmáticas. La experiencia en Soporte Técnico y formación KYC me ayuda a traducir necesidades reales en interfaces y APIs fiables.',

    'resume.skills.json': JSON.stringify([
      'React', 'TypeScript', 'Vite',
      'Node.js', 'Express',
      'PHP', 'MySQL/MariaDB',
      'Tailwind 4.1', 'shadcn/ui',
      'Prisma', 'Figma',
      'Docker (básico)', 'GitHub Actions'
    ]),

    'resume.experience.json': JSON.stringify([
      {
        role: 'Especialista KYC',
        company: 'Fourthline',
        period: '2024–2025',
        location: 'Barcelona, España',
        bullets: [
          'Realicé controles KYC y QES cumpliendo AML/eIDAS; reduje errores de verificación en 25%.',
          'Optimicé flujos de verificación con equipos transversales, reduciendo el tiempo de resolución en 20%.'
        ]
      },
      {
        role: 'Formadora de Riesgo',
        company: 'Teleperformance',
        period: '2022–2023',
        location: 'Barcelona, España',
        bullets: [
          'Diseñé e impartí formaciones en prevención de fraude, aumentando la puntuación de agentes en 15%.',
          'Mantuve contenidos alineados con políticas de cumplimiento.'
        ]
      },
      {
        role: 'Especialista de Riesgo',
        company: 'Teleperformance',
        period: '2022',
        location: 'Barcelona, España',
        bullets: [
          'Revisión de comercios y transacciones para validar cumplimiento; prevención potencial > €50K en fraude.',
          'Informes diarios a dirección con patrones de riesgo y propuestas de mitigación.'
        ]
      },
      {
        role: 'Embajadora Office 365 (Microsoft)',
        company: 'Concentrix',
        period: '2019–2021',
        location: 'Managua, Nicaragua',
        bullets: [
          'Soporte T2 para Exchange, Teams, SharePoint; onboarding y licenciamiento.',
          'Apoyo en migración híbrida/nube a Azure AD; resolución de integración.',
          'Actualización de KB interna y apoyo en formaciones.'
        ]
      },
      {
        role: 'Soporte Técnico Sr. (Microsoft)',
        company: 'Concentrix',
        period: '2018–2019',
        location: 'Managua, Nicaragua',
        bullets: [
          'Soporte de primera línea para Windows y suite Microsoft.',
          'Reseteo de contraseñas y recuperación de cuentas; mejora de tiempos de acceso.'
        ]
      }
    ]),

    'resume.education.json': JSON.stringify([
      {
        title: 'Desarrolladora de Aplicaciones Web con React (Full-Stack)',
        org: 'Fundación Esplai – Migracode',
        hours: '376h',
        year: '2025',
        location: 'Barcelona, España',
        details: ['React, TypeScript, Node/Express, Vite, Tailwind, proyectos en equipo']
      },
      {
        title: 'Desarrolladora de Aplicaciones Web',
        org: 'Grup CIEF – SOC (Certificado Profesional)',
        hours: '510h',
        year: '2025',
        location: 'Barcelona, España',
        details: ['HTML, CSS, JavaScript, PHP, MySQL, despliegues']
      },
      {
        title: 'Ciberseguridad en la Industria',
        org: 'MainJobs',
        hours: '120h',
        year: '2025',
        location: 'Barcelona, España',
        details: ['Fundamentos de seguridad, riesgos, mitigación y buenas prácticas']
      }
    ]),

    'resume.certs.json': JSON.stringify([
      { title: 'Microsoft Azure Fundamentals (AZ-900)' },
      { title: 'Gestión de Proyectos Ágiles con SCRUM', org: 'Índice Gestoría y Formación', year: '2024', location: 'Barcelona' },
      { title: 'Diplomacia Global – Diplomacy in the Modern World', org: 'University of London', year: '2020', location: 'Managua' }
    ]),

    // Contact (subtitle -> "juntos")
    'contact.title': 'Contacto',
    'contact.subtitle': 'Construyamos algo genial juntos.',
    'contact.nameLabel': 'Tu nombre',
    'contact.emailLabel': 'Correo electrónico',
    'contact.whereLabel': '¿Desde dónde nos contactas?',
    'contact.subjectLabel': 'Asunto (opcional)',
    'contact.messageLabel': 'Mensaje',
    'contact.privacyLabel': 'Acepto ser contactada sobre esta consulta.',
    'contact.submit': 'Enviar mensaje',
    'contact.sending': 'Enviando…',
    'contact.success': '¡Gracias! Tu mensaje ha sido enviado.',
    'contact.error': 'Algo salió mal. Inténtalo de nuevo.',
    'contact.honeypot': 'Deja este campo vacío',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.social': 'Enlaces a redes sociales',

    // About section
    'about.blurb':
      'Desarrolladora Full-Stack certificada, enfocada en crear interfaces limpias, accesibles y centradas en el usuario con React, TypeScript y Tailwind, y un backend pragmático con Node, PHP y MySQL. Antes de pasar al desarrollo web, trabajé en soporte técnico y fintech (KYC/Riesgo), explicando sistemas complejos a usuarios no técnicos y formando equipos.',
    'about.note':
      'Disfruto traduciendo problemas reales de usuarios en interfaces simples y trabajo a lo largo del stack cuando es necesario. Actualmente destacando Huellas y una versión renovada de Music Library.',

    'about.support.title': 'Stack de soporte práctico',
    'about.support.item1': 'Administración y soporte de Microsoft 365 / Office 365',
    'about.support.item2': 'Administración de Google Workspace (GSuite)',
    'about.support.item3': 'Configuración de Windows, higiene del SO y provisión de usuarios',
    'about.support.item4': 'Redes básicas (DNS, VPN, proxys, Wi-Fi)',
    'about.support.item5': 'Ticketing, documentación y bases de conocimiento',
    'about.support.item6': 'Operaciones de Riesgo/KYC y formación de agentes',

    'about.certs.title': 'Certificaciones y formación',
    'about.certs.item1': 'Certificado de Desarrollo de Aplicaciones Web — 510h',
    'about.certs.item2': 'Bootcamp Full-Stack con React — 376h (Fundación Esplai, sep 2025)',
    'about.certs.item3': 'Microsoft Azure Fundamentals (AZ-900)',
    'about.certs.item4': 'Insignia JavaScript FullStack Junior Developer',

    'about.coreTech.title': 'Tecnologías principales',
    'tech.react': 'React',
    'tech.typescript': 'TypeScript',
    'tech.tailwind': 'Tailwind',
    'tech.node': 'Node.js',
    'tech.express': 'Express',
    'tech.php': 'PHP',
    'tech.mysql': 'MySQL/MariaDB',
    'tech.vite': 'Vite',
    'tech.javascript': 'JavaScript',
    'tech.css': 'CSS',
    'tech.html': 'HTML5',
    'tech.bootstrap': 'Bootstrap',
    'tech.nocodb': 'NocoDB',
    'tech.docker': 'Docker',

    'projects.featured': 'Proyectos destacados',

    'projects.huellas.title': 'Huellas – Plataforma de Salud de Mascotas',
    'projects.huellas.summary':
      'Plataforma full-stack con autenticación, perfiles de mascotas y registros de salud. Construida con principios de arquitectura limpia y servicios en contenedores.',
    'projects.huellas.hl1': 'Límites de servicio inspirados en arquitectura hexagonal',
    'projects.huellas.hl2': 'Entorno de desarrollo multi-servicio con Docker',
    'projects.huellas.hl3': 'API REST con contratos tipados',
    'projects.huellas.role': 'Desarrolladora Full-Stack',
    'projects.huellas.resp1': 'Diseñé la UI en React y la estructura de componentes',
    'projects.huellas.resp2': 'Construí API con Node/Express y contratos tipados',
    'projects.huellas.resp3': 'Dockericé servicios y el esquema MySQL',

    'projects.music.title': 'Ferzk’s Music Library',
    'projects.music.summary':
      'Librería musical personal con playlists, autenticación de usuarios y metadatos de canciones. Arquitectura PHP modular con esquema SQL normalizado.',
    'projects.music.hl1': 'Autenticación + playlists',
    'projects.music.hl2': 'Esquema normalizado',
    'projects.music.hl3': 'Separación limpia con includes de PHP',
    'projects.music.role': 'Desarrolladora PHP/MySQL',
    'projects.music.resp1': 'Implementé autenticación y playlists en PHP',
    'projects.music.resp2': 'Diseñé el esquema SQL normalizado de la librería',
    'projects.music.resp3': 'Código PHP modular y claro (includes)',

    'projects.academy.title': 'Fernanda’s Academy — Plataforma de aprendizaje (UI)',
    'projects.academy.summary':
      'Prototipo frontend de una plataforma de aprendizaje: búsqueda de cursos, contenido dinámico y ajustes de idioma y tema.',
    'projects.academy.hl1': 'UI en React basada en Hooks',
    'projects.academy.hl2': 'Integración con Bootstrap',
    'projects.academy.hl3': 'Contenido dinámico y búsqueda',
    'projects.academy.hl4': 'Personalización de idioma y tema',
    'projects.academy.role': 'Desarrolladora Frontend',
    'projects.academy.resp1': 'Listado de cursos y búsqueda con Hooks',
    'projects.academy.resp2': 'Integración con Bootstrap y diseño responsive',
    'projects.academy.resp3': 'Ajustes de idioma y tema para usuarios',

    'projects.placeholder.title': 'Próximo proyecto',
    'projects.placeholder.description': 'Pronto añadiré un nuevo proyecto aquí. ¡Estate atento!',
    'projects.placeholder.summary': 'Marcador de posición para un proyecto futuro del portafolio.',
    // Personal slice (NEW)
    'about.personal.tagline': 'Ave nocturna · Amante del océano · Amante del código',
    'about.personal.languages': 'ES (nativa) · EN (C2) · CA (B1)',
    'about.personal.bio':
      'Soy Fernanda—constructora curiosa, exploradora musical y desarrolladora nocturna. Me encanta descubrir música nueva, leer, la buena comida y cualquier plan que me acerque a la naturaleza—especialmente al agua. Soy feliz en noches de invierno con lluvia y una UI limpia tomando forma.',
    'about.personal.values.json': JSON.stringify(['Lealtad', 'Honestidad', 'Responsabilidad']),
    'about.personal.hobbies.json': JSON.stringify([
      'Descubrir música nueva',
      'Lectura',
      'Comida y cocina',
      'Paseos en la naturaleza',
      'Vistas al agua y nadar',
      'Energía nocturna',
      'Mascotas'
    ]),
    'about.personal.horus': 'Este es Horus — mezcla de Labrador y Pastor Alemán, experto negociador de chuches.',
    'about.personal.now': 'En lo que estoy trabajando: Aprendiendo alemán (Duolingo) · Continuando catalán · Practicando conducir · Puliendo mi portafolio',
    'about.personal.valuesTitle': 'Valores',
    'about.personal.listeningNow': 'Escuchando ahora',


  },

  ca: {
    // Hero
    'hero.title': 'Hola, sóc la Fernanda — Desenvolupadora Full-Stack',
    'hero.subtitle': 'Faig apps web netes i ràpides amb React, TypeScript, PHP i Node.',
    'hero.cta': 'Veure els meus projectes',
    'hero.viewProjects': 'Veure projectes',
    'hero.contact': 'Contacte',
    'hero.downloadCV': 'Descarregar CV',

    // Nav
    'nav.themeElectric': 'Elèctric',
    'nav.themeCyber': 'Ciber',
    'nav.toggleThemeLabel': 'Canviar tema',
    'nav.brand': 'Fernanda Montalván',
    'nav.projects': 'Projectes',
    'nav.playground': 'Playground',
    'nav.about': 'Sobre mi',
    'nav.resume': 'Currículum',
    'nav.contact': 'Contacte',
    'nav.language': 'Idioma',

    // Resume (titles, nav, updated tag)
    'resume.title': 'Currículum',
    'resume.download': 'Descarregar PDF',
    'resume.updated': 'Actualitzat set. 2025',
    'resume.summaryTitle': 'Resum professional',
    'resume.skillsTitle': 'Habilitats tècniques',
    'resume.experienceTitle': 'Experiència',
    'resume.educationTitle': 'Formació',
    'resume.certificationsTitle': 'Certificacions',
    'resume.nav.summary': 'Resum',
    'resume.nav.experience': 'Experiència',
    'resume.nav.skills': 'Habilitats',
    'resume.nav.education': 'Formació',
    'resume.nav.certs': 'Certificacions',
    'resume.softSkillsTitle': 'Habilitats toves',
    'resume.softSkills.json': JSON.stringify([
      'Comunicació',
      'Treball en equip',
      'Resolució de problemes',
      'Adaptabilitat',
      'Atenció al detall',
      'Responsabilitat',
      'Gestió del temps',
      'Mentoria i formació',
      'Empatia amb l’usuari',
      'Documentació'
    ]),


    // Resume (dynamic content)
    'resume.summary':
      'Desenvolupadora Full-Stack (React, TypeScript, PHP, MySQL) centrada en UX neta, accessibilitat i lliuraments pragmàtics. L’experiència en Suport Tècnic i formació KYC m’ajuda a traduir necessitats reals en interfícies i APIs fiables.',

    'resume.skills.json': JSON.stringify([
      'React', 'TypeScript', 'Vite',
      'Node.js', 'Express',
      'PHP', 'MySQL/MariaDB',
      'Tailwind 4.1', 'shadcn/ui',
      'Prisma', 'Figma',
      'Docker (bàsic)', 'GitHub Actions'
    ]),

    'resume.experience.json': JSON.stringify([
      {
        role: 'Especialista KYC',
        company: 'Fourthline',
        period: '2024–2025',
        location: 'Barcelona, Espanya',
        bullets: [
          'Controls KYC i QES complint AML/eIDAS; reducció d’errors de verificació del 25%.',
          'Optimització de fluxos amb equips transversals, reduint el temps mitjà de resolució en un 20%.'
        ]
      },
      {
        role: 'Formadora de Risc',
        company: 'Teleperformance',
        period: '2022–2023',
        location: 'Barcelona, Espanya',
        bullets: [
          'Formacions en prevenció de frau, augmentant la puntuació d’agents en un 15%.',
          'Manteniment de continguts alineats amb polítiques de compliment.'
        ]
      },
      {
        role: 'Especialista de Risc',
        company: 'Teleperformance',
        period: '2022',
        location: 'Barcelona, Espanya',
        bullets: [
          'Revisió d’altes i transaccions per validar compliment; prevenció potencial > €50K en frau.',
          'Informes diaris a direcció amb patrons de risc i mesures de mitigació.'
        ]
      },
      {
        role: 'Ambassador Office 365 (Microsoft)',
        company: 'Concentrix',
        period: '2019–2021',
        location: 'Managua, Nicaragua',
        bullets: [
          'Suport N2 per a Exchange, Teams, SharePoint; onboarding i llicències.',
          'Suport en migració híbrid/núvol a Azure AD; resolució d’integració.',
          'Actualització de KB intern i suport en formacions.'
        ]
      },
      {
        role: 'Suport Tècnic Sr. (Microsoft)',
        company: 'Concentrix',
        period: '2018–2019',
        location: 'Managua, Nicaragua',
        bullets: [
          'Suport de primera línia per a Windows i suite Microsoft.',
          'Restabliment de contrasenyes i recuperació de comptes.'
        ]
      }
    ]),

    'resume.education.json': JSON.stringify([
      {
        title: 'Desenvolupadora d’Aplicacions Web amb React (Full-Stack)',
        org: 'Fundació Esplai – Migracode',
        hours: '376h',
        year: '2025',
        location: 'Barcelona, Espanya',
        details: ['React, TypeScript, Node/Express, Vite, Tailwind, projectes en equip']
      },
      {
        title: 'Desenvolupadora d’Aplicacions Web',
        org: 'Grup CIEF – SOC (Certificat Professional)',
        hours: '510h',
        year: '2025',
        location: 'Barcelona, Espanya',
        details: ['HTML, CSS, JavaScript, PHP, MySQL, desplegaments']
      },
      {
        title: 'Ciberseguretat a la Indústria',
        org: 'MainJobs',
        hours: '120h',
        year: '2025',
        location: 'Barcelona, Espanya',
        details: ['Fonaments de seguretat, risc, mitigació i bones pràctiques']
      }
    ]),

    'resume.certs.json': JSON.stringify([
      { title: 'Microsoft Azure Fundamentals (AZ-900)' },
      { title: 'Gestió Àgil de Projectes amb SCRUM', org: 'Índice Gestoría y Formación', year: '2024', location: 'Barcelona' },
      { title: 'Global Diplomacy – Diplomacy in the Modern World', org: 'University of London', year: '2020', location: 'Managua' }
    ]),

    // Contact
    'contact.title': 'Contacte',
    'contact.subtitle': 'Construïm alguna cosa genial plegats.',
    'contact.nameLabel': 'El teu nom',
    'contact.emailLabel': 'Correu electrònic',
    'contact.whereLabel': 'Des d’on ens contactes?',
    'contact.subjectLabel': 'Assumpte (opcional)',
    'contact.messageLabel': 'Missatge',
    'contact.privacyLabel': 'Autoritzo que em contactin sobre aquesta consulta.',
    'contact.submit': 'Enviar missatge',
    'contact.sending': 'Enviant…',
    'contact.success': 'Gràcies! El teu missatge s’ha enviat.',
    'contact.error': 'Alguna cosa ha fallat. Torna-ho a provar.',
    'contact.honeypot': 'Deixa aquest camp buit',

    // Footer
    'footer.rights': 'Tots els drets reservats.',
    'footer.social': 'Enllaços a les xarxes socials',

    // About section
    'about.blurb':
      'Desenvolupadora Full-Stack certificada, centrada a crear interfícies netes, accessibles i orientades a l’usuari amb React, TypeScript i Tailwind, i un backend pragmàtic amb Node, PHP i MySQL. Abans de passar al desenvolupament web, vaig treballar en suport tècnic i fintech (KYC/Risc), explicant sistemes complexos a usuaris no tècnics i formant equips.',
    'about.note':
      'Gaudeixo de traduir problemes reals d’usuari en interfícies simples i treballar a tot l’stack quan cal. Actualment destaquen Huellas i una versió renovada de Music Library.',

    'about.support.title': 'Stack de suport pràctic',
    'about.support.item1': 'Administració i suport de Microsoft 365 / Office 365',
    'about.support.item2': 'Administració de Google Workspace (GSuite)',
    'about.support.item3': "Configuració de Windows, higiene del SO i provisió d'usuaris",
    'about.support.item4': 'Xarxes bàsiques (DNS, VPN, proxys, Wi-Fi)',
    'about.support.item5': 'Ticketing, documentació i bases de coneixement',
    'about.support.item6': "Operacions de Risc/KYC i formació d'agents",

    'about.certs.title': 'Certificacions i formació',
    'about.certs.item1': 'Certificat de Desenvolupament d’Aplicacions Web — 510h',
    'about.certs.item2': 'Bootcamp Full-Stack amb React — 376h (Fundació Esplai, set. 2025)',
    'about.certs.item3': 'Microsoft Azure Fundamentals (AZ-900)',
    'about.certs.item4': 'Insígnia JavaScript FullStack Junior Developer',

    'about.coreTech.title': 'Tecnologies principals',
    'tech.react': 'React',
    'tech.typescript': 'TypeScript',
    'tech.tailwind': 'Tailwind',
    'tech.node': 'Node.js',
    'tech.express': 'Express',
    'tech.php': 'PHP',
    'tech.mysql': 'MySQL/MariaDB',
    'tech.vite': 'Vite',
    'tech.javascript': 'JavaScript',
    'tech.css': 'CSS',
    'tech.html': 'HTML5',
    'tech.bootstrap': 'Bootstrap',
    'tech.nocodb': 'NocoDB',
    'tech.docker': 'Docker',

    'projects.featured': 'Projectes destacats',

    'projects.huellas.title': 'Huellas – Plataforma de Salut per a Mascotes',
    'projects.huellas.summary':
      'Plataforma full-stack amb autenticació, perfils de mascotes i registres de salut. Construïda amb principis d’arquitectura neta i serveis contenitzats.',
    'projects.huellas.hl1': 'Límits de servei inspirats en arquitectura hexagonal',
    'projects.huellas.hl2': 'Entorn de desenvolupament multi-servei amb Docker',
    'projects.huellas.hl3': 'API REST amb contractes tipats',
    'projects.huellas.role': 'Desenvolupadora Full-Stack',
    'projects.huellas.resp1': 'Disseny de la UI en React i estructura de components',
    'projects.huellas.resp2': 'API amb Node/Express i contractes tipats',
    'projects.huellas.resp3': 'Dockerització de serveis i esquema MySQL',

    'projects.music.title': 'Ferzk’s Music Library',
    'projects.music.summary':
      'Biblioteca musical personal amb playlists, autenticació d’usuaris i metadades de cançons. Arquitectura PHP modular amb esquema SQL normalitzat.',
    'projects.music.hl1': 'Autenticació + playlists',
    'projects.music.hl2': 'Esquema normalitzat',
    'projects.music.hl3': 'Separació neta amb includes de PHP',
    'projects.music.role': 'Desenvolupadora PHP/MySQL',
    'projects.music.resp1': 'Autenticació i playlists en PHP',
    'projects.music.resp2': 'Disseny d’esquema SQL normalitzat',
    'projects.music.resp3': 'Codi PHP modular i net (includes)',

    'projects.academy.title': 'Fernanda’s Academy — Plataforma d’aprenentatge (UI)',
    'projects.academy.summary':
      'Prototip frontend d’una plataforma d’aprenentatge: cerca de cursos, contingut dinàmic i ajustos d’idioma i tema.',
    'projects.academy.hl1': 'Interfície en React amb Hooks',
    'projects.academy.hl2': 'Integració amb Bootstrap',
    'projects.academy.hl3': 'Contingut dinàmic i cerca',
    'projects.academy.hl4': 'Personalització d’idioma i tema',
    'projects.academy.role': 'Desenvolupadora Frontend',
    'projects.academy.resp1': 'Llistat de cursos i cerca amb Hooks',
    'projects.academy.resp2': 'Integració amb Bootstrap i disseny responsive',
    'projects.academy.resp3': "Ajustos d’idioma i tema per a usuaris",

    'projects.placeholder.title': 'Projecte proper',
    'projects.placeholder.description': 'Aviat afegiré un nou projecte aquí. Estigues atent!',
    'projects.placeholder.summary': 'Marcador de posició per a un projecte futur del portafoli.',

    // Personal slice (NEW)
    'about.personal.tagline': 'Noctàmbula · Amant de l’oceà · Amant del codi',
    'about.personal.languages': 'ES (nativa) · EN (C2) · CA (B1)',
    'about.personal.bio':
      'Soc la Fernanda—constructora curiosa, exploradora de música i programadora nocturna. M’agrada descobrir sons nous, llegir, el bon menjar i qualsevol pla que em porti a prop de la natura—especialment de l’aigua. Soc feliç en nits d’hivern amb pluja i una UI neta prenent forma.',
    'about.personal.values.json': JSON.stringify(['Lleialtat', 'Honestedat', 'Responsabilitat']),
    'about.personal.hobbies.json': JSON.stringify([
      'Descobrir música nova',
      'Lectura',
      'Menjar i cuina',
      'Passejos per la natura',
      'Vistes a l’aigua i nedar',
      'Energia nocturna',
      'Mascotes'
    ]),
    'about.personal.horus': 'Aquest és en Horus — barreja de Labrador i Pastor Alemany, expert negociador de xuxes.',
    'about.personal.now': 'Estic treballant en: Aprenent alemany (Duolingo) · Continuant català · Practicant conduir · Polint el meu portfoli',
    'about.personal.valuesTitle': 'Valors',
    'about.personal.listeningNow': 'Escoltant ara',

  },
};