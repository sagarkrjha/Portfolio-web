import type { AboutSectionConfig } from "@/lib/types";

export const aboutConfig: AboutSectionConfig = {
  id: "about",
  eyebrow: "About",
  title: "Building software and understanding how it works.",
  description:
    "I enjoy working across software development, algorithms, systems, and developer tooling. My focus is on understanding the fundamentals behind the abstractions I use and turning that knowledge into practical software.",

  focus: [
    {
      title: "Software Engineering",
      description:
        "Designing maintainable applications with clear architecture and thoughtful engineering decisions.",
    },
    {
      title: "Algorithms & Data Structures",
      description:
        "Studying algorithms and data structures to understand how software solves problems efficiently.",
    },
    {
      title: "Developer Tools",
      description:
        "Building tools that improve development workflows and exploring how developer infrastructure works internally.",
    },
  ],
};