/** Portfolio projects — set `projectUrl` when each site is deployed. */
export const myWorksData = [
  {
    id: 'sakura-fubuki',
    // Use res.cloudinary.com/.../image/upload/... — res-console URLs are dashboard links and won’t load in <img>.
    imageURL:
      'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253337/sakura_fubuki_mockup_vxp4ir.png',
    title: 'Sakura Fubuki',
    caption: 'A React restaurant reservation website',
    description:
      'Sakura Fubuki is a restaurant reservation website. The emphasis is on the design and reservation logic. The restaurant has six tables. Availability is calculated from the tables that are still free together with the current time and date. Available times stay in sync with the real clock, so the guest always sees slots that make sense for “now.” The project highlights working with data structures to model bookings and tables, alongside a clear, intentional layout. It also reflects an understanding of web design fundamentals. The site is fully responsive.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: 'https://sakurafubuki.netlify.app/',
  },
  {
    id: 'brewtiful-day',
    imageURL: 'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253353/brewtiful_mockup_uayno5.png',
    title: 'Brewtiful Day',
    caption: 'A coffee shop website',
    description:
      'Brewtiful Day presents a small coffee-shop experience online: guests browse beverages, add items to a shopping cart, and tailor drinks through dedicated customization rules. The build focuses on clear state and predictable data modeling so cart contents and options stay consistent as selections change. The interface is composed from reusable React components and shared styling patterns, which keeps the layout coherent while making the customization flow easy to extend. The result demonstrates practical use of data structures alongside component-driven architecture and maintainable CSS.',
    tech: 'ReactJS, CSS',
    projectUrl: 'https://brewtifulday.netlify.app/',
  },
  {
    id: 'ace-ventures',
    imageURL: 'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253206/ace_ventires_mockup_fti8vf.png',
    title: 'AceVentures',
    caption: 'A tennis court booking website',
    description:
      'AceVentures is a booking experience built around tennis courts: players choose a court and a time window, with availability surfaced in a clear, step-by-step flow. The most substantive logic sits in how open slots are derived—availability is computed from the underlying schedule and reservations, which leans on structured data and small, deliberate algorithms so only valid times are offered as inputs change. The front end is organized with composable React components and a consistent CSS system for layout, typography, and responsive behavior. Together, the project illustrates how component structure, styling discipline, and algorithmic scheduling logic can support a dependable reservation interface.',
    tech: 'ReactJS, CSS',
    projectUrl: 'https://ace-ventures.netlify.app/',
  },
  {
    id: 'boston-modern-bath',
    imageURL:
      'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253370/bmb_mockup_hgepeb.png',
    title: 'Boston Modern Bath',
    caption: 'A website for a small Boston construction business',
    description:
      'Boston Modern Bath is a straightforward React marketing site for a small construction company serving the Boston area. The centerpiece is a contact form that routes submissions through Formspree, so inquiries are delivered reliably without a custom server. The client also asked for a project gallery to showcase work alongside essential company information. The experience is built to be fully responsive: the priority is letting homeowners and contractors reach the business quickly from a phone or tablet in the field. The site remains in active development as content and polish are iterated with the client.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: 'https://boston-modern-bath.netlify.app/',
  },
  {
    id: 'sogdiana-tattoo',
    imageURL:
      'https://res.cloudinary.com/dicvjx88i/image/upload/v1775253387/sogdi_mockup_x60jaa.png',
    title: 'Sogdiana Tattoo Studio',
    caption: 'A tattoo session booking website',
    description:
      'Sogdiana Tattoo Studio is a session-booking site for an independent tattoo artist. The technical stack mirrors Boston Modern Bath—React, hand-authored CSS, and Formspree for form handling—so patterns stay consistent across client projects. The artist needed the first usable version on a short timeline so she could keep in touch with new and returning clients without interruption; the flow is optimized for booking and messaging from a mobile device on the go. The emphasis is fast, clear communication rather than heavy custom infrastructure. Like the Boston Modern Bath site, this project is still in active development as features and copy evolve.',
    tech: 'ReactJS, Formspree, CSS',
    projectUrl: 'https://sogditattoostudio.netlify.app/',
  },
];
