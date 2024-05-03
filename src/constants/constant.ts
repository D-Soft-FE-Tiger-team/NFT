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
