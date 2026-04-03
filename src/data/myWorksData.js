/** Portfolio projects — set `projectUrl` when each site is deployed. */
export const myWorksData = [
  {
    id: 'sakura-fubuki',
    imageURL:
      'https://res-console.cloudinary.com/dicvjx88i/thumbnails/v1/image/upload/v1775253337/c2FrdXJhX2Z1YnVraV9tb2NrdXBfdnhwNGly/drilldown',
    title: 'Sakura Fubuki',
    caption: 'A React restaurant reservation website',
    description:
      'Sakura Fubuki is a restaurant reservation website. The emphasis is on the design and reservation logic. The restaurant has six tables. Availability is calculated from the tables that are still free together with the current time and date. Available times stay in sync with the real clock, so the guest always sees slots that make sense for “now.” The project highlights working with data structures to model bookings and tables, alongside a clear, intentional layout. It also reflects an understanding of web design fundamentals. The site is fully responsive.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: null,
  },
  {
    id: 'brewtiful-day',
    imageURL: 'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253353/brewtiful_mockup_uayno5.png',
    title: 'Brewtiful Day',
    caption: 'A coffee shop website',
    description:
      'Brewtiful Day presents a small coffee-shop experience online: guests browse beverages, add items to a shopping cart, and tailor drinks through dedicated customization rules. The build focuses on clear state and predictable data modeling so cart contents and options stay consistent as selections change. The interface is composed from reusable React components and shared styling patterns, which keeps the layout coherent while making the customization flow easy to extend. The result demonstrates practical use of data structures alongside component-driven architecture and maintainable CSS.',
    tech: 'ReactJS, CSS',
    projectUrl: null,
  },
  {
    id: 'ace-ventures',
    imageURL: 'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253206/ace_ventires_mockup_fti8vf.png',
    title: 'AceVentures',
    caption: 'A tennis court booking website',
    description:
      'AceVentures is a booking experience built around tennis courts: players choose a court and a time window, with availability surfaced in a clear, step-by-step flow. The most substantive logic sits in how open slots are derived—availability is computed from the underlying schedule and reservations, which leans on structured data and small, deliberate algorithms so only valid times are offered as inputs change. The front end is organized with composable React components and a consistent CSS system for layout, typography, and responsive behavior. Together, the project illustrates how component structure, styling discipline, and algorithmic scheduling logic can support a dependable reservation interface.',
    tech: 'ReactJS, CSS',
    projectUrl: null,
  },
  {
    id: 'boston-modern-bath',
    imageURL:
      'https://res-console.cloudinary.com/dicvjx88i/thumbnails/v1/image/upload/v1775253370/Ym1iX21vY2t1cF9oZ2VwZWI=/drilldown',
    title: 'Boston Modern Bath',
    caption: 'A website for a small construction business',
    description:
      'A marketing site for a construction and remodeling business: services, trust-building content, and contact flows via Formspree. Structure and styling aim for clarity and professionalism, with responsive layouts so estimates and inquiries are easy on phones or desktops.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: null,
  },
  {
    id: 'sogdiana-tattoo',
    imageURL:
      'https://res-console.cloudinary.com/dicvjx88i/thumbnails/v1/image/upload/v1775253387/c29nZGlfbW9ja3VwX3g2MGphYQ==/drilldown',
    title: 'Sogdiana Tattoo Studio',
    caption: 'A tattoo artist website',
    description:
      'A portfolio-forward site for a tattoo studio: gallery emphasis, artist story, and booking-oriented contact. Built with React and Formspree, with CSS used to keep the visual tone bold but readable across viewports.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: null,
  },
];
