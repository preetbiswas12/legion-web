export const navItems = [
  { name: 'Features', href: '/#stats' },
  { name: 'Install', href: '/#hero' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'FAQs', href: '/#faqs' },
];

export const logo = {
  href: '/#hero',
  src: '/logo.png',
  alt: 'Legion CLI Logo',
  width: 50,
  height: 50,
};

export const hamburgerIcon = {
  src: '/hamburger.svg',
  alt: 'Menu',
  width: 30,
  height: 30,
};

export const DISCORD_LINK = 'https://discord.gg/KhuxUg9vkt';
export const DEVFOLIO_LINK = 'https://legioncli.com/';

export const background =
  'https://res.cloudinary.com/dscnitrourkela/image/upload/v1754225393/hacknitr/kih0gsyskoslbgd9frvz.png';

export type Social = {
  name: string;
  href: string;
  icon: string;
};

export const SOCIALS: Social[] = [
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/legioncli/',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710454/hacknitr/cd0lyrhdlzfrevhbgluk.png',
  },
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/company/legioncli/',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/ljpzd4qbjttmkqrz3se0.png',
  },
  {
    name: 'TWITTER',
    href: 'https://x.com/legioncli',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1756584254/hacknitr/ba7wbkcwr2ukb9lk8snm.png',
  },
  {
    name: 'GITHUB',
    href: 'https://github.com/legion-cli/legion-cli',
    icon: 'https://res.cloudinary.com/dscnitrourkela/image/upload/v1755710453/hacknitr/xspkjzkj2uhjgiypnefh.png',
  },
];

export const HERO_IMAGES = {
  main: {
    desktop: '/Group 3.png',
    mobile: '/Group 3.png',
  },
  overlay: {
    desktop: '/Group 3.png',
    mobile: '/Group 3.png',
  },
};

export const FOOTER_TEXT = 'Crafted with ❤️ by Legion CLI Team';

export const playgroundMenu = [
  { name: 'Home', href: '/' },
  { name: 'Playground', href: '/playground' },
  // { name: 'Admin', href: '/admin' },
  // { name: 'Fonts', href: '/fonts' },
  // { name: 'Typography', href: '/typography' },
  // { name: 'Upload Asset', href: '/upload' },
];
