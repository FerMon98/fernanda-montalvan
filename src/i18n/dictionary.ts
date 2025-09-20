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
    // Footer & legal nav
    'legal.nav.notice': 'Legal Notice',
    'legal.nav.privacy': 'Privacy Policy',
    'legal.nav.cookies': 'Cookies Policy',
    'footer.cookiePrefs': 'Cookie preferences',

    // Cookie banner
    'cookie.banner.message':
      'This site may load third-party embeds (e.g., Spotify) that use non-essential cookies. You can Accept or Reject.',
    'cookie.banner.accept': 'Accept',
    'cookie.banner.reject': 'Reject',

    // Cookie blocked (Spotify gate)
    'cookie.blocked.spotifyText':
      'To play Spotify content, please give consent to third-party cookies.',
    'cookie.blocked.acceptAndLoad': 'Accept and load Spotify',
    'cookie.blocked.reject': 'Reject',
    'cookie.blocked.prefs': 'Preferences',
    'cookie.blocked.moreInfo':
      'More info in the Cookies Policy.',

    // --- Legal: Legal Notice ---
    'legal.notice.title': 'Legal Notice',
    'legal.notice.responsible': 'Controller: Fernanda Montalván',
    'legal.notice.address': 'Address: Spain',
    'legal.notice.contact': 'Contact: {email}',
    'legal.notice.activity': 'Activity: Personal portfolio without direct commercial purpose.',
    'legal.notice.terms.title': 'Terms of Use',
    'legal.notice.terms.body':
      'Access and use of this website imply acceptance of this Legal Notice, the Privacy Policy and the Cookies Policy. The user agrees to make diligent use of the site and not to carry out unlawful or bad-faith activities.',
    'legal.notice.ipr.title': 'Intellectual Property',
    'legal.notice.ipr.body':
      'Unless otherwise indicated, the contents, design and code are owned by the controller or published under their respective licenses. Reproduction, distribution or transformation is prohibited without authorization or outside the terms of the applicable license.',
    'legal.notice.links.title': 'Links',
    'legal.notice.links.body':
      'This site may include links to third-party pages. No responsibility is assumed for their contents or policies.',
    'legal.notice.law.title': 'Applicable Law',
    'legal.notice.law.body':
      'LSSI-CE, GDPR, Spanish LOPDGDD and other applicable Spanish/EU regulations.',

    // --- Legal: Privacy Policy ---
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.controller': 'Controller: Fernanda Montalván',
    'legal.privacy.contact': 'Contact: {email}',
    'legal.privacy.purpose':
      'Site purpose: personal portfolio.',
    'legal.privacy.data.title': 'Data Processed',
    'legal.privacy.data.items':
      '• Contact form: name, email, message and, where applicable, location and subject.\n' +
      '• Email communications: data you voluntarily send to handle your request.\n' +
      '• Third-party embeds (Spotify): may involve cookies/trackers by the third party. These loads are blocked until you give consent (see Cookies Policy).',
    'legal.privacy.bases.title': 'Purposes and Legal Basis',
    'legal.privacy.bases.body':
      'Handling queries and communications received via the contact form or email. Legal basis: consent (Art. 6.1.a GDPR) and/or legitimate interest to reply (Art. 6.1.f GDPR).',
    'legal.privacy.recipients.title': 'Recipients and Processors',
    'legal.privacy.recipients.body':
      '• FormSubmit (form delivery service). When you send the form, data is transmitted to this provider to be forwarded by email. Check their privacy policy for details.\n' +
      '• Strictly necessary technical providers (e.g., static hosting on GitHub Pages).\n' +
      '• Spotify as a third party when you accept to load its iframes.',
    'legal.privacy.storage.title': 'Retention',
    'legal.privacy.storage.body':
      'Data is kept only as long as necessary to handle the communication and any resulting legal obligations.',
    'legal.privacy.rights.title': 'Rights',
    'legal.privacy.rights.body':
      'You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {email}. You may also lodge a complaint with the Spanish Data Protection Agency (AEPD).',
    'legal.privacy.security.title': 'Security Measures',
    'legal.privacy.security.body':
      'Appropriate technical and organizational measures are applied according to risk.',
    'legal.privacy.updates.title': 'Updates',
    'legal.privacy.updates.body':
      'This policy may be updated to reflect regulatory or technical changes.',

    // --- Legal: Cookies Policy ---
    'legal.cookies.title': 'Cookies Policy',
    'legal.cookies.intro':
      'This site does not use first-party cookies for analytics or advertising. However, it integrates third-party content (e.g., Spotify players) that may set cookies or tracking technologies when loaded. Such loads remain blocked until you give your consent.',
    'legal.cookies.third.title': 'Which third parties may set cookies?',
    'legal.cookies.third.list': '• Spotify (playlists and “listening now” embeds).',
    'legal.cookies.consent.title': 'Consent Management',
    'legal.cookies.consent.body':
      'On first access, a banner lets you Accept or Reject non-essential cookies on equal terms. You can change your choice at any time from “Cookie preferences” in the footer.',
    'legal.cookies.browser.title': 'Browser Controls',
    'legal.cookies.browser.body':
      'You can configure your browser to block or delete cookies. Check your browser’s help for more information.',
    'legal.cookies.updates.title': 'Updates',
    'legal.cookies.updates.body':
      'This policy may be updated to reflect changes in third-party services.',

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
    // Footer & legal nav
    'legal.nav.notice': 'Aviso legal',
    'legal.nav.privacy': 'Política de privacidad',
    'legal.nav.cookies': 'Política de cookies',
    'footer.cookiePrefs': 'Preferencias de cookies',

    // Cookie banner
    'cookie.banner.message':
      'Este sitio puede cargar contenidos de terceros (p. ej., Spotify) que usan cookies no esenciales. Puedes Aceptar o Rechazar.',
    'cookie.banner.accept': 'Aceptar',
    'cookie.banner.reject': 'Rechazar',

    // Cookie blocked (Spotify gate)
    'cookie.blocked.spotifyText':
      'Para reproducir contenidos de Spotify es necesario tu consentimiento para cookies de terceros.',
    'cookie.blocked.acceptAndLoad': 'Aceptar y cargar Spotify',
    'cookie.blocked.reject': 'Rechazar',
    'cookie.blocked.prefs': 'Preferencias',
    'cookie.blocked.moreInfo':
      'Más información en la Política de cookies.',

    // --- Legal: Aviso legal ---
    'legal.notice.title': 'Aviso legal',
    'legal.notice.responsible': 'Responsable: Fernanda Montalván',
    'legal.notice.address': 'Domicilio: España',
    'legal.notice.contact': 'Contacto: {email}',
    'legal.notice.activity': 'Actividad: Portafolio personal sin finalidad comercial directa.',
    'legal.notice.terms.title': 'Condiciones de uso',
    'legal.notice.terms.body':
      'El acceso y uso del sitio implican la aceptación de este Aviso Legal, la Política de Privacidad y la Política de Cookies. El usuario se compromete a un uso diligente y a no realizar actividades ilícitas o contrarias a la buena fe.',
    'legal.notice.ipr.title': 'Propiedad intelectual',
    'legal.notice.ipr.body':
      'Salvo indicación en contrario, los contenidos, diseño y código son titularidad de la responsable o se publican bajo sus respectivas licencias. Queda prohibida su reproducción, distribución o transformación sin autorización o fuera de los términos de la licencia aplicable.',
    'legal.notice.links.title': 'Enlaces',
    'legal.notice.links.body':
      'Este sitio puede enlazar a páginas de terceros. No se asume responsabilidad por sus contenidos o políticas.',
    'legal.notice.law.title': 'Legislación aplicable',
    'legal.notice.law.body':
      'LSSI-CE, RGPD, LOPDGDD y demás normativa española/UE aplicable.',

    // --- Legal: Privacidad ---
    'legal.privacy.title': 'Política de privacidad',
    'legal.privacy.controller': 'Responsable: Fernanda Montalván',
    'legal.privacy.contact': 'Contacto: {email}',
    'legal.privacy.purpose':
      'Finalidad del sitio: portafolio personal.',
    'legal.privacy.data.title': 'Datos que se tratan',
    'legal.privacy.data.items':
      '• Formulario de contacto: nombre, email, mensaje y, en su caso, “dónde” y asunto.\n' +
      '• Comunicación por email: los datos que voluntariamente remitas para atender tu solicitud.\n' +
      '• Contenidos de terceros (Spotify): pueden implicar cookies/trackers del tercero. Estas cargas se bloquean hasta tu consentimiento (ver Política de Cookies).',
    'legal.privacy.bases.title': 'Finalidades y base jurídica',
    'legal.privacy.bases.body':
      'Atender consultas y comunicaciones recibidas vía formulario o email. Base jurídica: consentimiento (art. 6.1.a RGPD) y/o interés legítimo en responder (art. 6.1.f RGPD).',
    'legal.privacy.recipients.title': 'Destinatarios y encargados',
    'legal.privacy.recipients.body':
      '• FormSubmit (servicio de envío de formularios). Al enviar el formulario, los datos se transmiten a este proveedor para su reenvío por email. Consulta su política de privacidad.\n' +
      '• Proveedores técnicos estrictamente necesarios (p. ej., alojamiento estático en GitHub Pages).\n' +
      '• Spotify como tercero cuando aceptas cargar sus iframes.',
    'legal.privacy.storage.title': 'Conservación',
    'legal.privacy.storage.body':
      'Los datos se conservan solo el tiempo necesario para atender la comunicación y las obligaciones legales derivadas.',
    'legal.privacy.rights.title': 'Derechos',
    'legal.privacy.rights.body':
      'Puedes ejercer derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {email}. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).',
    'legal.privacy.security.title': 'Medidas de seguridad',
    'legal.privacy.security.body':
      'Se aplican medidas técnicas y organizativas adecuadas al riesgo.',
    'legal.privacy.updates.title': 'Actualizaciones',
    'legal.privacy.updates.body':
      'Esta política puede actualizarse para reflejar cambios normativos o técnicos.',

    // --- Legal: Cookies ---
    'legal.cookies.title': 'Política de cookies',
    'legal.cookies.intro':
      'Este sitio no utiliza cookies propias con fines analíticos o publicitarios. No obstante, integra contenidos de terceros (p. ej., reproductores de Spotify) que pueden instalar cookies o tecnologías de seguimiento al cargarse. Dichas cargas permanecen bloqueadas hasta que otorgues tu consentimiento.',
    'legal.cookies.third.title': '¿Qué terceros pueden instalar cookies?',
    'legal.cookies.third.list': '• Spotify (playlists y “escuchando ahora”).',
    'legal.cookies.consent.title': 'Gestión del consentimiento',
    'legal.cookies.consent.body':
      'Al acceder, aparece un banner que permite Aceptar o Rechazar cookies no esenciales en igualdad de condiciones. Puedes cambiar tu decisión en cualquier momento desde “Preferencias de cookies” en el pie de página.',
    'legal.cookies.browser.title': 'Cómo desactivar cookies en el navegador',
    'legal.cookies.browser.body':
      'Puedes configurar tu navegador para bloquear o eliminar cookies. Consulta la ayuda de tu navegador.',
    'legal.cookies.updates.title': 'Actualizaciones',
    'legal.cookies.updates.body':
      'Esta política puede actualizarse para reflejar cambios en los servicios de terceros integrados.',

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
    // Footer & legal nav
    'legal.nav.notice': 'Avís legal',
    'legal.nav.privacy': 'Política de privacitat',
    'legal.nav.cookies': 'Política de galetes',
    'footer.cookiePrefs': 'Preferències de galetes',

    // Cookie banner
    'cookie.banner.message':
      'Aquest lloc pot carregar contingut de tercers (p. ex., Spotify) que fa servir galetes no essencials. Pots Acceptar o Rebutjar.',
    'cookie.banner.accept': 'Acceptar',
    'cookie.banner.reject': 'Rebutjar',

    // Cookie blocked (Spotify gate)
    'cookie.blocked.spotifyText':
      'Per reproduir contingut de Spotify cal el teu consentiment per a galetes de tercers.',
    'cookie.blocked.acceptAndLoad': 'Acceptar i carregar Spotify',
    'cookie.blocked.reject': 'Rebutjar',
    'cookie.blocked.prefs': 'Preferències',
    'cookie.blocked.moreInfo':
      'Més informació a la Política de galetes.',

    // --- Legal: Avís legal ---
    'legal.notice.title': 'Avís legal',
    'legal.notice.responsible': 'Responsable: Fernanda Montalván',
    'legal.notice.address': 'Domicili: Espanya',
    'legal.notice.contact': 'Contacte: {email}',
    'legal.notice.activity': 'Activitat: Portafolis personal sense finalitat comercial directa.',
    'legal.notice.terms.title': "Condicions d'ús",
    'legal.notice.terms.body':
      "L'accés i l'ús del lloc impliquen l'acceptació d'aquest Avís legal, de la Política de privacitat i de la Política de galetes. L'usuari es compromet a un ús diligent i a no realitzar activitats il·lícites o contràries a la bona fe.",
    'legal.notice.ipr.title': 'Propietat intel·lectual',
    'legal.notice.ipr.body':
      'Llevat indicació en contra, els continguts, el disseny i el codi són titularitat de la responsable o es publiquen sota les seves llicències. Es prohibeix la reproducció, distribució o transformació sense autorització o fora dels termes de la llicència aplicable.',
    'legal.notice.links.title': 'Enllaços',
    'legal.notice.links.body':
      'Aquest lloc pot incloure enllaços a pàgines de tercers. No s’assumeix responsabilitat pels seus continguts o polítiques.',
    'legal.notice.law.title': 'Llei aplicable',
    'legal.notice.law.body':
      'LSSI-CE, RGPD, LOPDGDD i la resta de normativa espanyola/UE aplicable.',

    // --- Legal: Privacitat ---
    'legal.privacy.title': 'Política de privacitat',
    'legal.privacy.controller': 'Responsable: Fernanda Montalván',
    'legal.privacy.contact': 'Contacte: {email}',
    'legal.privacy.purpose':
      'Finalitat del lloc: portafolis personal.',
    'legal.privacy.data.title': 'Dades tractades',
    'legal.privacy.data.items':
      '• Formulari de contacte: nom, email, missatge i, si escau, ubicació i assumpte.\n' +
      '• Comunicació per email: les dades que remetis voluntàriament per atendre la teva sol·licitud.\n' +
      '• Continguts de tercers (Spotify): poden implicar galetes/trackers del tercer. Aquestes càrregues es bloquegen fins al teu consentiment (vegeu Política de galetes).',
    'legal.privacy.bases.title': 'Finalitats i base jurídica',
    'legal.privacy.bases.body':
      "Atendre consultes i comunicacions rebudes via formulari o email. Base jurídica: consentiment (art. 6.1.a RGPD) i/o interès legítim per respondre (art. 6.1.f RGPD).",
    'legal.privacy.recipients.title': 'Destinataris i encarregats',
    'legal.privacy.recipients.body':
      '• FormSubmit (servei d’enviament de formularis). En enviar el formulari, les dades es transmeten a aquest proveïdor perquè les reenviï per email. Consulta la seva política de privacitat.\n' +
      '• Proveïdors tècnics estrictament necessaris (p. ex., allotjament estàtic a GitHub Pages).\n' +
      '• Spotify com a tercer quan acceptes carregar els seus iframes.',
    'legal.privacy.storage.title': 'Conservació',
    'legal.privacy.storage.body':
      'Les dades es conserven només el temps necessari per atendre la comunicació i les obligacions legals derivades.',
    'legal.privacy.rights.title': 'Drets',
    'legal.privacy.rights.body':
      'Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a {email}. També pots reclamar davant l’Agència Espanyola de Protecció de Dades (AEPD).',
    'legal.privacy.security.title': 'Mesures de seguretat',
    'legal.privacy.security.body':
      'S’apliquen mesures tècniques i organitzatives adequades al risc.',
    'legal.privacy.updates.title': 'Actualitzacions',
    'legal.privacy.updates.body':
      'Aquesta política pot actualitzar-se per reflectir canvis normatius o tècnics.',

    // --- Legal: Galetes ---
    'legal.cookies.title': 'Política de galetes',
    'legal.cookies.intro':
      'Aquest lloc no utilitza galetes pròpies amb finalitats analítiques o publicitàries. Tanmateix, integra contingut de tercers (p. ex., reproductors de Spotify) que pot instal·lar galetes o tecnologies de seguiment en carregar-se. Aquestes càrregues romanen bloquejades fins que atorguis el teu consentiment.',
    'legal.cookies.third.title': 'Quins tercers poden instal·lar galetes?',
    'legal.cookies.third.list': '• Spotify (llistes de reproducció i “escoltant ara”).',
    'legal.cookies.consent.title': 'Gestió del consentiment',
    'legal.cookies.consent.body':
      'En accedir, apareix un bàner que permet Acceptar o Rebutjar galetes no essencials en igualtat de condicions. Pots canviar la teva decisió en qualsevol moment des de “Preferències de galetes” al peu de pàgina.',
    'legal.cookies.browser.title': 'Com desactivar galetes al navegador',
    'legal.cookies.browser.body':
      'Pots configurar el navegador per bloquejar o eliminar galetes. Consulta l’ajuda del teu navegador.',
    'legal.cookies.updates.title': 'Actualitzacions',
    'legal.cookies.updates.body':
      'Aquesta política pot actualitzar-se per reflectir canvis en els serveis de tercers integrats.',
  },
};