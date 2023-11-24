import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://saraikium.com", // replace this with your deployed domain
  author: "saraikium",
  desc: "Adnan Khan is a polyglot software engineer working on Python and JavaScript/TypeScript.",
  title: "Saraikium",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/saraikium",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saraikium/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:adnank122@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/saraikium",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
