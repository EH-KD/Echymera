import type { Project } from "@/types/project";

/**
 * Mock portfolio data. All clients, people and projects are fictional.
 * Thumbnails and hero images are generated placeholders in /public/media/projects.
 * Gallery stills are placeholders derived from each thumbnail. Three projects have a
 * `film` (all point at the same placeholder clip).
 */
export const projects: Project[] = [
  {
    id: "prj_001",
    title: "Northbound",
    slug: "northbound",
    category: "Film",
    description:
      "A short film following a lone surveyor crossing a frozen ridge line to reach a station that may no longer exist. Shot over nine days on location in sub-zero conditions.",
    year: 2025,
    featured: true,
    thumbnail: {
      type: "image",
      src: "/media/projects/northbound.jpg",
      alt: "Pale dawn light behind dark mountain ridges",
    },
    hero: {
      type: "image",
      src: "/media/projects/northbound.jpg",
      alt: "Pale dawn light behind dark mountain ridges",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/northbound-1.jpg",
        alt: "Still 1 of 3 from Northbound",
      },
      {
        type: "image",
        src: "/media/projects/northbound-2.jpg",
        alt: "Still 2 of 3 from Northbound",
      },
      {
        type: "image",
        src: "/media/projects/northbound-3.jpg",
        alt: "Still 3 of 3 from Northbound",
      },
    ],
    film: {
      type: "video",
      src: "/media/hero-loop.mp4",
      poster: "/media/projects/northbound.jpg",
      alt: "Northbound, full film",
    },
    services: ["Direction", "Cinematography", "Sound design", "Colour grade"],
    credits: [
      { role: "Director", name: "Ines Marek" },
      { role: "Director of Photography", name: "Tomas Reyes" },
      { role: "Editor", name: "Priya Anand" },
      { role: "Composer", name: "Elias Frost" },
    ],
  },
  {
    id: "prj_002",
    title: "Time Remains",
    slug: "halden-time-remains",
    category: "Commercial",
    description:
      "A launch film for a heritage watchmaker, built around macro photography of the movement and a single unbroken camera move.",
    client: "Halden & Co.",
    year: 2025,
    featured: true,
    thumbnail: {
      type: "image",
      src: "/media/projects/halden-time-remains.jpg",
      alt: "Concentric gold rings on a dark background, like a watch face",
    },
    hero: {
      type: "image",
      src: "/media/projects/halden-time-remains.jpg",
      alt: "Concentric gold rings on a dark background, like a watch face",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/halden-time-remains-1.jpg",
        alt: "Still 1 of 3 from Time Remains",
      },
      {
        type: "image",
        src: "/media/projects/halden-time-remains-2.jpg",
        alt: "Still 2 of 3 from Time Remains",
      },
      {
        type: "image",
        src: "/media/projects/halden-time-remains-3.jpg",
        alt: "Still 3 of 3 from Time Remains",
      },
    ],
    film: {
      type: "video",
      src: "/media/hero-loop.mp4",
      poster: "/media/projects/halden-time-remains.jpg",
      alt: "Time Remains, full film",
    },
    services: ["Concept", "Direction", "Macro cinematography", "Post-production"],
    credits: [
      { role: "Director", name: "Ines Marek" },
      { role: "Producer", name: "Dana Whitfield" },
      { role: "Director of Photography", name: "Luca Bianchi" },
      { role: "Colourist", name: "Mara Okonkwo" },
    ],
  },
  {
    id: "prj_003",
    title: "Static Bloom",
    slug: "static-bloom",
    category: "Music Video",
    description:
      "A single-take music video for an indie pop single, lit entirely with practical neon and shot through hand-made lens filters.",
    client: "Ivy Marlowe",
    year: 2024,
    featured: true,
    thumbnail: {
      type: "image",
      src: "/media/projects/static-bloom.jpg",
      alt: "Soft pink, cyan and violet out-of-focus lights",
    },
    hero: {
      type: "image",
      src: "/media/projects/static-bloom.jpg",
      alt: "Soft pink, cyan and violet out-of-focus lights",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/static-bloom-1.jpg",
        alt: "Still 1 of 3 from Static Bloom",
      },
      {
        type: "image",
        src: "/media/projects/static-bloom-2.jpg",
        alt: "Still 2 of 3 from Static Bloom",
      },
      {
        type: "image",
        src: "/media/projects/static-bloom-3.jpg",
        alt: "Still 3 of 3 from Static Bloom",
      },
    ],
    film: {
      type: "video",
      src: "/media/hero-loop.mp4",
      poster: "/media/projects/static-bloom.jpg",
      alt: "Static Bloom, full film",
    },
    services: ["Direction", "Lighting design", "Editing", "Colour grade"],
    credits: [
      { role: "Director", name: "Tomas Reyes" },
      { role: "Producer", name: "Dana Whitfield" },
      { role: "Gaffer", name: "Kai Sorensen" },
      { role: "Editor", name: "Priya Anand" },
    ],
  },
  {
    id: "prj_004",
    title: "The Salt Line",
    slug: "the-salt-line",
    category: "Documentary",
    description:
      "A quiet portrait of the last family harvesting salt by hand on a disappearing coastal flat.",
    year: 2024,
    featured: false,
    thumbnail: {
      type: "image",
      src: "/media/projects/the-salt-line.jpg",
      alt: "A lone figure standing on a pale salt flat at sunrise",
    },
    hero: {
      type: "image",
      src: "/media/projects/the-salt-line.jpg",
      alt: "A lone figure standing on a pale salt flat at sunrise",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/the-salt-line-1.jpg",
        alt: "Still 1 of 3 from The Salt Line",
      },
      {
        type: "image",
        src: "/media/projects/the-salt-line-2.jpg",
        alt: "Still 2 of 3 from The Salt Line",
      },
      {
        type: "image",
        src: "/media/projects/the-salt-line-3.jpg",
        alt: "Still 3 of 3 from The Salt Line",
      },
    ],
    services: ["Direction", "Cinematography", "Editing", "Sound mix"],
    credits: [
      { role: "Director", name: "Dana Whitfield" },
      { role: "Cinematographer", name: "Luca Bianchi" },
      { role: "Editor", name: "Elias Frost" },
    ],
  },
  {
    id: "prj_005",
    title: "Ember & Oak",
    slug: "ember-and-oak",
    category: "Commercial",
    description:
      "A sensory campaign for a wood-fired restaurant group: fire, smoke and sound, with almost no dialogue.",
    client: "Ember & Oak Kitchens",
    year: 2024,
    featured: false,
    thumbnail: {
      type: "image",
      src: "/media/projects/ember-and-oak.jpg",
      alt: "Glowing embers and sparks rising in the dark",
    },
    hero: {
      type: "image",
      src: "/media/projects/ember-and-oak.jpg",
      alt: "Glowing embers and sparks rising in the dark",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/ember-and-oak-1.jpg",
        alt: "Still 1 of 3 from Ember & Oak",
      },
      {
        type: "image",
        src: "/media/projects/ember-and-oak-2.jpg",
        alt: "Still 2 of 3 from Ember & Oak",
      },
      {
        type: "image",
        src: "/media/projects/ember-and-oak-3.jpg",
        alt: "Still 3 of 3 from Ember & Oak",
      },
    ],
    services: ["Concept", "Direction", "Food cinematography", "Sound design"],
    credits: [
      { role: "Director", name: "Ines Marek" },
      { role: "Producer", name: "Dana Whitfield" },
      { role: "Director of Photography", name: "Luca Bianchi" },
    ],
  },
  {
    id: "prj_006",
    title: "Voltage City",
    slug: "voltage-city",
    category: "Brand Film",
    description:
      "A brand film for a renewable energy company, following one night in a city as it switches to clean power.",
    client: "Arcadia Energy",
    year: 2023,
    featured: false,
    thumbnail: {
      type: "image",
      src: "/media/projects/voltage-city.jpg",
      alt: "City skyline at night with lit windows and blue glow",
    },
    hero: {
      type: "image",
      src: "/media/projects/voltage-city.jpg",
      alt: "City skyline at night with lit windows and blue glow",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/voltage-city-1.jpg",
        alt: "Still 1 of 3 from Voltage City",
      },
      {
        type: "image",
        src: "/media/projects/voltage-city-2.jpg",
        alt: "Still 2 of 3 from Voltage City",
      },
      {
        type: "image",
        src: "/media/projects/voltage-city-3.jpg",
        alt: "Still 3 of 3 from Voltage City",
      },
    ],
    services: ["Direction", "Aerial cinematography", "Motion graphics", "Post-production"],
    credits: [
      { role: "Director", name: "Tomas Reyes" },
      { role: "Producer", name: "Dana Whitfield" },
      { role: "Motion designer", name: "Mara Okonkwo" },
    ],
  },
  {
    id: "prj_007",
    title: "Quiet Rooms",
    slug: "quiet-rooms",
    category: "Film",
    description:
      "An intimate drama set across one afternoon in an empty house, told through light moving across a single room.",
    year: 2023,
    featured: false,
    thumbnail: {
      type: "image",
      src: "/media/projects/quiet-rooms.jpg",
      alt: "A bright window casting a shaft of light across a dark room",
    },
    hero: {
      type: "image",
      src: "/media/projects/quiet-rooms.jpg",
      alt: "A bright window casting a shaft of light across a dark room",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/quiet-rooms-1.jpg",
        alt: "Still 1 of 3 from Quiet Rooms",
      },
      {
        type: "image",
        src: "/media/projects/quiet-rooms-2.jpg",
        alt: "Still 2 of 3 from Quiet Rooms",
      },
      {
        type: "image",
        src: "/media/projects/quiet-rooms-3.jpg",
        alt: "Still 3 of 3 from Quiet Rooms",
      },
    ],
    services: ["Direction", "Cinematography", "Editing", "Colour grade"],
    credits: [
      { role: "Director", name: "Ines Marek" },
      { role: "Director of Photography", name: "Tomas Reyes" },
      { role: "Editor", name: "Priya Anand" },
    ],
  },
  {
    id: "prj_008",
    title: "Longshore",
    slug: "longshore",
    category: "Documentary",
    description:
      "Night fishing on a cold northern coast, filmed at the edge of what the camera could see.",
    client: "Northern Coast Trust",
    year: 2023,
    featured: false,
    thumbnail: {
      type: "image",
      src: "/media/projects/longshore.jpg",
      alt: "Moon reflecting on a dark sea at night",
    },
    hero: {
      type: "image",
      src: "/media/projects/longshore.jpg",
      alt: "Moon reflecting on a dark sea at night",
    },
    gallery: [
      {
        type: "image",
        src: "/media/projects/longshore-1.jpg",
        alt: "Still 1 of 3 from Longshore",
      },
      {
        type: "image",
        src: "/media/projects/longshore-2.jpg",
        alt: "Still 2 of 3 from Longshore",
      },
      {
        type: "image",
        src: "/media/projects/longshore-3.jpg",
        alt: "Still 3 of 3 from Longshore",
      },
    ],
    services: ["Direction", "Low-light cinematography", "Sound mix"],
    credits: [
      { role: "Director", name: "Dana Whitfield" },
      { role: "Cinematographer", name: "Luca Bianchi" },
      { role: "Sound", name: "Kai Sorensen" },
    ],
  },
];
