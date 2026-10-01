import type { HeroConfig } from "@/lib/types";
import { siteConfig } from "./site";

export const heroConfig: HeroConfig = {
  greeting: "I'm",
  name: siteConfig.name,

  role: siteConfig.role,

  description: siteConfig.bio,

  availability: siteConfig.availability,

  actions: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "default",
    },
    {
      label: "Read Architecture Blog",
      href: "/blog",
      variant: "outline",
    },
  ],

  socials: siteConfig.socialLinks,

  stats: [],

  scrollTarget: "#about",

  media: {
    src: "/cover-image.jpg",
    alt: "",
  },

  avatar: {
    src: "/avatar.jpg",
    alt: "",
  },
};