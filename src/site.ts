export const site = {
  name: "Simon Kell",
  title: "Simon Kell - Homepage",
  description:
    "Private Homepage von Simon Kell mit Projekten, Experimenten und Notizen.",
  nav: [
    { href: "#projects", label: "Projekte" },
    { href: "#focus", label: "Fokus" },
    { href: "#contact", label: "Kontakt" },
  ],
  hero: {
    eyebrow: "Private Homepage",
    headline: "Ein Zuhause für Projekte, Experimente und Dinge, die ich baue.",
    paragraphs: [
      "Hier entsteht meine persönliche Homepage: ein kurzer Einstieg zu mir, vor allem aber eine kuratierte Sammlung meiner Projekte.",
      "Der technische Fokus liegt bewusst auf einer schnellen statischen Seite, die sauber versioniert und automatisch zu Strato deployed werden kann.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/simonkell" },
      { label: "Projekte ansehen", href: "#projects" },
    ],
  },
  roles: ["Developer", "Maker", "Football Nerd"],
  focus: [
    {
      title: "Projekte sichtbar machen",
      description:
        "Jedes Projekt bekommt eine kurze Beschreibung, Tech-Stack, Status und optional Links zu Demo oder Repository.",
    },
    {
      title: "Schnell und wartbar",
      description:
        "Astro rendert statisches HTML, Tailwind liefert das kompakte Styling, und Inhalte liegen als Markdown im Repo.",
    },
    {
      title: "Einfach deployen",
      description:
        "Ein Push auf main kann die gebaute Seite per GitHub Action auf den Strato-Webspace spiegeln.",
    },
  ],
  contact: {
    status: "In Aufbau",
    links: [
      { label: "GitHub", href: "https://github.com/simonkell" },
    ],
  },
};
