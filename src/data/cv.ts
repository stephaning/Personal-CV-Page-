import type { CV } from '../types'
import photo from '../assets/download.jpeg'
import nailMenu from '../assets/work/nail-menu.webp'
import skincareQuote from '../assets/work/skincare-quote.webp'
import artOfHair from '../assets/work/art-of-hair.webp'

// Placeholder content — replace with your own details.
export const cv: CV = {
  profile: {
    name: 'Stephanie Fernandez',
    role: 'Virtual Assistant',
    bio: 'An IT student and virtual assistant who keeps conversations friendly and work organized. With a background in retail customer service, I enjoy helping clients stay on top of their inbox, schedule, and customer chats.',
    location: 'Panabo City, Philippines',
    photo,
    socials: [
      { kind: 'email', label: 'stephaniefernandez285@gmail.com', href: 'mailto:stephaniefernandez285@gmail.com' },
      { kind: 'github', label: 'GitHub', href: 'https://github.com/stephaning' },
    ],
  },

  experience: [
    {
      company: 'Freelance',
      role: 'Virtual Assistant / Chatter',
      start: '2025',
      end: 'Present',
      location: 'Remote',
      points: [
        'Manage client chats and inquiries with fast, friendly, and on-brand replies.',
        'Handle admin tasks such as scheduling, email management, and data entry.',
      ],
    },
    {
      company: 'Agrivis Store',
      role: 'Store Assistant',
      start: 'Oct 2022',
      end: 'Nov 2024',
      location: 'Panabo City, Philippines',
      points: [
        'Assisted customers with product inquiries, orders, and purchases.',
        'Kept inventory organized, restocked shelves, and recorded daily sales.',
      ],
    },
  ],

  projects: [
    {
      title: 'Salon & Beauty Social Media Kit',
      kind: 'Personal project',
      tools: ['Canva'],
      description:
        'A concept set of Instagram-ready posts for a beauty salon — a service price menu, a skincare quote, and an appointment promo — designed around one quiet-luxury palette of ivory, charcoal, and gold.',
      images: [
        { src: artOfHair, alt: 'Hair salon promo post: The Art of Hair', caption: 'Salon promo', width: 1200, height: 1200 },
        { src: nailMenu, alt: 'Nail salon price menu post', caption: 'Price menu', width: 960, height: 1200 },
        { src: skincareQuote, alt: 'Skincare quote post: Glow begins with care', caption: 'Quote post', width: 1200, height: 1200 },
      ],
    },
  ],

  skills: [
    { label: 'Communication', items: ['Chat Support', 'Customer Service', 'Written English', 'Fast Typing'] },
    { label: 'Admin', items: ['Data Entry', 'Email Management', 'Scheduling', 'Inventory'] },
    { label: 'Tools', items: ['Google Workspace', 'MS Office', 'Canva', 'Meta Business Suite'] },
    { label: 'Strengths', items: ['Time Management', 'Multitasking', 'Attention to Detail'] },
  ],

  education: [
    {
      school: 'Davao del Norte State College',
      degree: 'BS in Information Technology',
      start: '2023',
      end: '2027',
      note: 'Expected graduation 2027',
    },
  ],
}
