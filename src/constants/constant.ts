interface NavbarItem {
  id: number
  type: string
  name: string
  title: string
  childrens?: NavbarItem[]
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    id: 1,
    type: 'link',
    name: 'homepage',
    title: 'Homepage',
  },
  {
    id: 2,
    type: 'link',
    name: 'marketplace',
    title: 'Marketplace',
  },
  {
    id: 3,
    type: 'link',
    name: 'community',
    title: 'Community',
  },
  {
    id: 4,
    type: 'link',
    name: 'homepage',
    title: 'How it works',
  },
  {
    id: 5,
    type: 'link',
    name: 'about-us',
    title: 'About Us',
  },
  {
    id: 6,
    type: 'menu',
    name: 'pages',
    title: 'Pages',
    childrens: [
      {
        id: 1,
        type: 'link',
        name: 'contact',
        title: 'Contact',
      },
      {
        id: 2,
        type: 'link',
        name: 'faq',
        title: 'FAQ',
      },
      {
        id: 3,
        type: 'link',
        name: '404',
        title: '404',
      },
      {
        id: 4,
        type: 'link',
        name: 'coming-soon',
        title: 'Coming Soon',
      },
      {
        id: 5,
        type: 'link',
        name: 'maintain',
        title: 'Maintain',
      },
      {
        id: 6,
        type: 'link',
        name: 'no-result',
        title: 'No Result',
      },
      {
        id: 7,
        type: 'link',
        name: 'terms-and-conditions',
        title: 'Terms and Conditions',
      },
      {
        id: 8,
        type: 'link',
        name: 'privacy-policy',
        title: 'Privacy Policy',
      },
    ],
  },
]

interface LinkSocial {
  id: number
  name: string
  url: string
}

export const LINKS_SOCIAL_MEDIA: LinkSocial[] = [
  {
    id: 1,
    url: 'https://www.instagram.com/',
    name: 'instagram',
  },
  {
    id: 2,
    url: 'https://www.facebook.com/',
    name: 'facebook',
  },
  {
    id: 3,
    url: 'https://www.twitter.com/',
    name: 'twitter',
  },
  {
    id: 4,
    url: 'https://www.tiktok.com/',
    name: 'tiktok',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/',
    name: 'youtube',
  },
  {
    id: 6,
    url: 'https://www.telegram.com/',
    name: 'telegram',
  },
]

export const FOOTER_LINKS = [
  {
    'Quick Link': [
      { label: 'About Us', path: '/about-us' },
      { label: 'NFTs', path: '/nfts' },
      { label: 'Collection', path: '/collection' },
      { label: 'Sellers', path: '/sellers' },
    ],
  },
  {
    Community: [
      { label: 'How it works', path: '/how-it-works' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'News', path: '/news' },
      { label: 'Join Community', path: '/join-community' },
    ],
  },
]
