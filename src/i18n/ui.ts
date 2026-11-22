export const defaultLang = 'ro';

export const ui = {
  ro: {
    'nav.home': 'Pagina principală',
    'nav.catalog': 'Catalog',
    'nav.onboarding': 'Onboarding',
    'nav.mentors': 'Mentori',
    'nav.resources': 'Resurse',
    'nav.getInvolved': 'Implică-te',

    // Footer
    'footer.rights': 'Academia peViitor. Toate drepturile rezervate.',
    'footer.description':
      'Academia peViitor © 2026 Dedicați excelenței academice și accesibilității universale în educație.',
    'footer.contact': 'Contactează-ne',
    'footer.links': 'Linkuri utile',
    'footer.resources': 'Resurse',
    'footer.contactHeading': 'Contact',
    'footer.contactLink': 'Contactați-ne',

    //  Mentori
    'mentors.title': 'Mentorii Noștri',
    'mentors.description':
      'Aici vei găsi lista mentorilor dedicați care te vor ajuta să îți dezvolți abilitățile și să îți atingi obiectivele.',

    // Catalog
    'catalog.title': 'Catalog de tutoriale',
    'catalog.description':
      'Tutoriale gratuite de tehnologie, de la primii pași până la nivel avansat. Alege un domeniu și începe.',
    'catalog.filter.domain': 'Domeniu',
    'catalog.filter.level': 'Nivel',
    'catalog.filter.all': 'Toate',
    'catalog.results': 'tutoriale găsite',
    'catalog.empty': 'Niciun tutorial nu corespunde filtrelor alese.',
    'catalog.noContent': 'Nu există încă tutoriale în limba română.',
    'catalog.reset': 'Resetează filtrele',

    // Tutorial
    'tutorial.series': 'Seria',
    'tutorial.previous': 'Lecția anterioară',
    'tutorial.next': 'Lecția următoare',
    'tutorial.minutes': 'min',
    'tutorial.updated': 'Actualizat',
    'tutorial.editOnGithub': 'Editează pe GitHub',
    'tutorial.videoFallback': 'Deschide videoclipul pe YouTube',
    'tutorial.videoTitle': 'Videoclip tutorial',
    'tutorial.license': 'Conținut sub licența CC BY-SA 4.0',
    'tutorial.backToCatalog': 'Înapoi la catalog',
    'tutorial.toc': 'Cuprins',
    'series.roadmap': 'Parcurs',
    'series.lessons': 'lecții',
    'series.start': 'Start',
    'series.review': 'Revezi',
    'series.project': 'Proiect final',
    'series.progress': 'Progresul tău',
    'series.openSeries': 'Vezi toată seria',

    // Domenii
    'domain.frontend': 'Frontend',
    'domain.backend': 'Backend',
    'domain.qa': 'QA',
    'domain.cybersecurity': 'Cybersecurity',
    'domain.data': 'Date',
    'domain.devops': 'DevOps',
    'domain.career': 'Carieră',
    'domain.general': 'General',

    // Niveluri
    'level.beginner': 'Începător',
    'level.intermediate': 'Intermediar',
    'level.advanced': 'Avansat',

    // Progres
    'progress.markDone': 'Marchează ca văzut',
    'progress.markUndone': '✓ Văzut (apasă ca să anulezi)',
    'progress.seen': 'Văzut',
    'progress.lessonsSeen': 'lecții văzute',

    // Cautare
    'search.label': 'Caută în tutoriale',
    'search.placeholder': 'Caută, de exemplu „git” sau „pull request”',
    'search.noResults': 'Niciun rezultat pentru',
    'search.results': 'rezultate pentru',
  },
  en: {
    'nav.home': 'Home',
    'nav.catalog': 'Catalog',
    'nav.onboarding': 'Onboarding',
    'nav.mentors': 'Mentors',
    'nav.resources': 'Resources',
    'nav.getInvolved': 'Get Involved',

    // Footer
    'footer.rights': 'peViitor Academy. All rights reserved.',
    'footer.description':
      'peViitor Academy © 2026 Dedicated to academic excellence and universal accessibility in education.',
    'footer.contact': 'Contact us',
    'footer.links': 'Usefull links',
    'footer.resources': 'Resources',
    'footer.contactHeading': 'Contact',
    'footer.contactLink': 'Contact us',

    //  Mentors
    'mentors.title': 'Our Mentors',
    'mentors.description':
      'Here you will find the list of dedicated mentors who will help you develop your skills and reach your goals.',

    // Catalog
    'catalog.title': 'Tutorial catalog',
    'catalog.description':
      'Free technology tutorials, from first steps to advanced level. Pick a domain and start.',
    'catalog.filter.domain': 'Domain',
    'catalog.filter.level': 'Level',
    'catalog.filter.all': 'All',
    'catalog.results': 'tutorials found',
    'catalog.empty': 'No tutorial matches the selected filters.',
    'catalog.noContent': 'There are no tutorials in English yet.',
    'catalog.reset': 'Reset filters',

    // Tutorial
    'tutorial.series': 'Series',
    'tutorial.previous': 'Previous lesson',
    'tutorial.next': 'Next lesson',
    'tutorial.minutes': 'min',
    'tutorial.updated': 'Updated',
    'tutorial.editOnGithub': 'Edit on GitHub',
    'tutorial.videoFallback': 'Open the video on YouTube',
    'tutorial.videoTitle': 'Tutorial video',
    'tutorial.license': 'Content licensed under CC BY-SA 4.0',
    'tutorial.backToCatalog': 'Back to catalog',
    'tutorial.toc': 'Table of content',
    'series.roadmap': 'Roadmap',
    'series.lessons': 'lessons',
    'series.start': 'Start',
    'series.review': 'Review',
    'series.project': 'Final project',
    'series.progress': 'Your progress',
    'series.openSeries': 'View the whole series',

    // Domains
    'domain.frontend': 'Frontend',
    'domain.backend': 'Backend',
    'domain.qa': 'QA',
    'domain.cybersecurity': 'Cybersecurity',
    'domain.data': 'Data',
    'domain.devops': 'DevOps',
    'domain.career': 'Career',
    'domain.general': 'General',

    // Levels
    'level.beginner': 'Beginner',
    'level.intermediate': 'Intermediate',
    'level.advanced': 'Advanced',

    // Progress
    'progress.markDone': 'Mark as seen',
    'progress.markUndone': '✓ Seen (click to undo)',
    'progress.seen': 'Seen',
    'progress.lessonsSeen': 'lessons seen',

    // Search
    'search.label': 'Search tutorials',
    'search.placeholder': 'Search, for example "git" or "pull request"',
    'search.noResults': 'No results for',
    'search.results': 'results for',
  },
} as const;

export const routes = {
  ro: {
    home: '',
    catalog: 'catalog',
    onboarding: 'onboarding',
    mentors: 'mentori',
    resources: 'resurse',
    'get-involved': 'implica-te',
    tutorials: 'tutoriale',
    series: 'seria',
  },
  en: {
    home: '',
    catalog: 'catalog',
    onboarding: 'onboarding',
    mentors: 'mentors',
    resources: 'resources',
    'get-involved': 'get-involved',
    tutorials: 'tutorials',
    series: 'series',
  },
} as const;
