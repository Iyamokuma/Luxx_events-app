export const site = {
  name: 'Luxx Haven Events',
  url: 'https://luxx-events.com',
  domain: 'luxx-events.com',
  brand: {
    primary: 'Luxx',
    secondary: 'Haven',
    suffix: 'Events',
  },
  tagline: 'Event decor, styling, and rentals — for every occasion life brings.',
  email: 'enquiries@luxx-events.com',
  notifyEmails: ['luxxhavenevents@gmail.com', 'luxehavenevents@yahoo.com'],
  phone: '07958 928614',
  address: '12 Regent Street, London, W1B 5AH',
  hours: 'Mon–Sat, 9:00–18:00',
};

export const heroServices = [
  { label: 'Event Decor', accent: 'gold' },
  { label: 'Styling', accent: 'rose' },
  { label: 'Rentals', accent: 'plum' },
];

export const heroContent = {
  eyebrow: 'Event decor · styling · rentals',
  headline: 'Styled settings for every occasion life brings',
  description:
    'Luxx Haven Events transforms weddings, celebrations, and remembrance services with curtain draping, florals, backdrops, and a full rental catalogue — all under one roof.',
  ctaPrimary: 'Book a Consultation',
  ctaSecondary: 'View gallery',
  orbitLabels: ['Decor', 'Styling', 'Rentals'],
};

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Rentals', to: '/rentals' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

// Hero background video — local file in public/videos/
export const heroVideo = {
  src: '/videos/hero.mp4',
};

export const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    alt: 'Bride and groom holding hands at their wedding',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    alt: 'Grand ballroom with chandeliers and elegant draping',
  },
  {
    src: '/images/hero/hero-floral-chair.png',
    alt: 'White rose and babys breath floral arrangement on an event chair',
  },
  {
    src: '/images/hero/hero-table-setting.png',
    alt: 'Luxury outdoor table setting with gold centrepiece, white florals, and elegant glassware',
  },
  {
    src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80',
    alt: 'Wedding ceremony aisle dressed with flowers',
  },
];

export const aboutContent = {
  headline: 'We dress the moments that matter most.',
  intro:
    'Luxx Haven Events is an event decor and styling studio creating beautiful, meaningful settings for weddings, birthdays, christenings, funerals, and every celebration in between — with a full rental catalogue to match.',
  story: [
    'From joyful milestones to tender farewells, every gathering deserves a setting styled with care. We transform venues with curtain draping, florals, backdrops, and considered table styling, so each event feels personal and complete.',
    'Our roots and our craft come together in the details — including traditional touches such as Adinkra symbols for funerals — because honouring culture and family is at the heart of what we do.',
  ],
  values: [
    {
      title: 'Styled With Meaning',
      text: 'Every drape, bloom, and backdrop is chosen to reflect the occasion — celebration or remembrance.',
    },
    {
      title: 'Every Occasion Covered',
      text: 'Weddings, children’s parties, christenings, Holy Communions, and funerals — we style them all with equal care.',
    },
    {
      title: 'Decor & Rentals Together',
      text: 'One team for styling and hire — plinths, tableware, linens, and backdrops — so everything simply works.',
    },
  ],
  stats: [
    { value: '350+', label: 'Events Styled' },
    { value: '6', label: 'Event Types Covered' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
};

export const services = [
  {
    id: 'decor-styling',
    title: 'Event Decor & Styling',
    summary: 'Complete decor design and on-the-day styling that brings your occasion to life.',
    details: [
      'Concept, colour palette, and theme design',
      'Full venue dressing and finishing touches',
      'Styling for celebrations and remembrance events',
    ],
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'curtain-draping',
    title: 'Curtain Draping',
    summary: 'Elegant ceiling and wall draping that softens spaces and frames your event beautifully.',
    details: [
      'Ceiling, wall, and entrance draping',
      'Colour-matched fabrics to your theme',
      'Installation and takedown included',
    ],
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'floristry',
    title: 'Floral Arrangements & Floristry',
    summary: 'Fresh and artificial florals — centrepieces, arches, and arrangements for every occasion.',
    details: [
      'Table centrepieces and top-table florals',
      'Floral arches and statement installations',
      'Sympathy and tribute arrangements',
    ],
    image:
      'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'food-table',
    title: 'Food Table Decoration',
    summary: 'Beautifully dressed food and dessert tables that make serving part of the experience.',
    details: [
      'Buffet and dessert table styling',
      'Linens, risers, and serving displays',
      'Coordinated with your overall theme',
    ],
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'venue-styling',
    title: 'Venue Styling',
    summary: 'Full venue transformation — from bare hall to a finished, photograph-ready space.',
    details: [
      'Space planning and layout design',
      'Chair covers, sashes, and table dressing',
      'Lighting and ambience touches',
    ],
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'backdrops',
    title: 'Backdrop Design & Setup',
    summary: 'Statement backdrops for ceremonies, photos, and stages — designed, built, and installed.',
    details: [
      'Custom backdrop design and build',
      'Balloon, floral, and fabric backdrops',
      'Delivery, setup, and collection',
    ],
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  },
];

export const eventsCovered = [
  {
    id: 'weddings',
    title: 'Weddings',
    text: 'Ceremony and reception styling that makes your day unforgettable.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'birthdays',
    title: 'Birthday Parties',
    text: 'Milestone birthdays styled around you — bold, elegant, or intimate.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'childrens-parties',
    title: "Children's Parties",
    text: 'Playful themes, joyful colours, and magical backdrops for little ones.',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'funerals',
    title: 'Funerals',
    text: 'Dignified, respectful styling for celebrations of life — including traditional Adinkra symbols.',
    image:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'christenings',
    title: 'Christenings',
    text: 'Soft, graceful settings for welcoming and blessing new life.',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'holy-communion',
    title: 'Holy Communion Events',
    text: 'Elegant styling that honours the significance of the day.',
    image:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=700&q=80',
  },
];

// Rental catalogue — photos in public/images/rentals/
export const rentals = [
  {
    id: 'chiavari-chair',
    name: 'Chiavari Chair',
    category: 'Furniture',
    price: '£3 each',
    description: 'Classic gold chiavari chairs with plush seat cushions for ceremonies, receptions, and dining.',
    image: '/images/rentals/chiavari-chair.png',
  },
  {
    id: 'luxury-dining-table',
    name: 'Luxury Dining Table',
    category: 'Furniture',
    price: '£180',
    description: 'Premium dining table hire for elegant seated events.',
    image: '/images/rentals/luxury-dining-table.png',
  },
  {
    id: 'candelabra-candle',
    name: 'Candelabra Candle',
    category: 'Décor',
    price: '£30',
    description: 'Crystal candelabra with hurricane shades and hanging drops for elegant table and venue styling.',
    image: '/images/rentals/candelabra-candle.png',
  },
  {
    id: 'charger-plate-silver',
    name: 'Charger Plate',
    category: 'Tableware',
    price: '£1 each',
    description: 'Silver sunburst charger plate with a decorative wavy rim for layered table settings.',
    image: '/images/rentals/charger-plate-silver.png',
  },
  {
    id: 'charger-plate-gold',
    name: 'Charger Plate',
    category: 'Tableware',
    price: '£2 each',
    description: 'White charger plate with a gold sunburst rim for elegant layered place settings.',
    image: '/images/rentals/charger-plate-gold.png',
  },
  {
    id: 'curtain-stand-50ft-drape',
    name: 'Curtain Stand 50ft Drape',
    category: 'Draping',
    price: '£50',
    description: 'Pipe-and-drape stand with 50ft black curtain panels for backdrops, dividers, and venue dressing.',
    image: '/images/rentals/curtain-stand-50ft-drape.png',
  },
  {
    id: 'plinths',
    name: 'Plinths',
    category: 'Décor',
    price: '£40 per set of 5',
    description: 'White display plinths for cakes, florals, signage, and styled feature displays.',
    image: '/images/rentals/plinths.png',
  },
  {
    id: 'cutlery-set',
    name: 'Cutlery Set',
    category: 'Tableware',
    price: '£1 per set',
    description: 'Polished gold cutlery sets — knife, fork, tablespoon, and teaspoon for each place setting.',
    image: '/images/rentals/cutlery-set.png',
  },
];

export const rentalCategories = ['All', ...new Set(rentals.map((item) => item.category))];

export const galleryItems = [
  {
    id: 'g1',
    title: 'Ivory & Gold Wedding Reception',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g2',
    title: 'Garden Ceremony Florals',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g3',
    title: 'Evening Sparkler Send-Off',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g4',
    title: 'Milestone Birthday Cake Moment',
    category: 'Birthdays',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g5',
    title: 'Balloon Styling & Party Decor',
    category: 'Birthdays',
    image:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g6',
    title: 'Confetti & Colour for Little Ones',
    category: "Children's Parties",
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g7',
    title: 'Celebration of Life Setting',
    category: 'Funerals',
    image:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g8',
    title: 'Christening Day Styling',
    category: 'Christenings',
    image:
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'g9',
    title: 'First Holy Communion',
    category: 'Holy Communion',
    image:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80',
  },
];

export const galleryCategories = ['All', ...new Set(galleryItems.map((item) => item.category))];

export const testimonials = [
  {
    id: 't1',
    quote:
      'The draping, the flowers, the tables — our wedding venue was breathtaking. Guests kept asking who styled it.',
    name: 'Amelia & James',
    event: 'Wedding Reception',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'They styled my father’s funeral with such dignity, and the Adinkra symbols meant everything to our family. Thank you for honouring him so beautifully.',
    name: 'Akosua Mensah',
    event: 'Celebration of Life',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'My daughter’s christening looked like something from a magazine. Soft, elegant, and so personal.',
    name: 'Priya Sharma',
    event: 'Christening',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'The backdrop and balloon styling made my son’s party unforgettable — and the hire process was completely stress-free.',
    name: 'Helena Wright',
    event: "Children's Birthday Party",
    rating: 5,
  },
];

export const eventTypes = [
  'Wedding',
  'Birthday Party',
  "Children's Party",
  'Funeral',
  'Christening',
  'Holy Communion',
  'Other',
];

export const seo = {
  home: {
    title: 'Luxx Haven Events — Event Decor, Styling & Rentals',
    description:
      'Event decor and styling for weddings, birthdays, christenings, Holy Communions, and funerals — plus a full rental catalogue of chairs, tables, tableware, linens, and backdrops.',
  },
  about: {
    title: 'About Us — Luxx Haven Events',
    description:
      'Meet Luxx Haven Events — specialists in event decor, curtain draping, floristry, and venue styling for every occasion, from weddings to celebrations of life.',
  },
  services: {
    title: 'Services — Luxx Haven Events',
    description:
      'Event decor & styling, curtain draping, floral arrangements, food table decoration, venue styling, and backdrop design & setup.',
  },
  rentals: {
    title: 'Rental Catalogue — Luxx Haven Events',
    description:
      'Hire chiavari chairs, luxury dining tables, candelabras, 50ft curtain drapes, plinths, cutlery sets, and more for weddings and events.',
  },
  gallery: {
    title: 'Event Gallery — Luxx Haven Events',
    description:
      'Explore weddings, birthdays, children’s parties, christenings, communions, and celebrations of life styled by Luxx Haven Events.',
  },
  testimonials: {
    title: 'Testimonials — Luxx Haven Events',
    description:
      'Read what families and couples say about Luxx Haven Events — trusted for styling life’s biggest moments with care.',
  },
  contact: {
    title: 'Contact — Luxx Haven Events',
    description:
      'Get in touch with Luxx Haven Events for decor, styling, and rental enquiries. We respond within one business day.',
  },
};
