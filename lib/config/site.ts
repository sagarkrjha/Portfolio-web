import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  title: "Sagar Kumar Jha | Software Developer",
  name: "Sagar Kumar Jha",
  role: "Software Developer",
  bio: "Passionate about building modern, scalable software with clean architecture, high performance, and great user experiences.",
  location: "India",
  availability: "Building my latest project",

  navItems: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],

  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/sagarkrjha",
      external: true,
    },
    {
      platform: "leetcode",
      label: "LeetCode",
      href: "https://leetcode.com/u/devsagarkrjha/",
      external: true,
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/devsagarkumarjha",
      external: true,
    },
    {
      platform: "twitter",
      label: "X (Twitter)",
      href: "https://x.com/devsagarkrjha",
      external: true,
    },
    {
      platform: "discord",
      label: "Discord",
      href: "https://discord.com/users/894502933801107476",
      external: true,
    },
  ],

  github: {
    username: "sagarkrjha",
    repositoryCount: 4,
    pinnedRepos: ["minigit"],
    includeForks: false,
  },

  leetcode: {
    username: "devsagarkrjha",
    profileUrl: "https://leetcode.com/u/devsagarkrjha/",
  },

  terminal: {
    /** Shell username based on GitHub handle */
    unixUser: "sagarkrjha",
    /** Machine / domain hostname */
    hostname: "github",
    /** Virtual home directory path based on GitHub username */
    homePath: "~",
  },

  sections: {
    projects: {
      number: "01",
      badge: "Featured Work",
      title: "Featured Engineering Projects",
      description:
        "Core open-source systems, developer tooling, and highlighted projects built with high performance and clean architecture.",
    },
    skills: {
      number: "02",
      badge: "Core Competencies",
      title: "Technical Stack & Architecture",
      description:
        "Core systems programming, frontend architectures, databases, and DevOps automation tooling.",
    },
    leetcode: {
      number: "03",
      badge: "LeetCode Stats",
      title: "Competitive Programming & Problem Solving",
      description:
        "Live metrics, contest rating, and algorithmic mastery across data structures and complex algorithms.",
    },
    contributions: {
      number: "04",
      badge: "Open Source Activity",
      title: "GitHub Contributions & Activity",
      description:
        "Consistent daily contributions, open-source commits, and active project development across GitHub.",
    },
  },

  statusCards: {
    architectureFocus: {
      title: "Distributed Tools",
      subtitle: "Clean Architecture",
    },
    coreLanguagesFallback: "C++, TypeScript",
  },

  skills: [
    {
      title: "Frontend & UI",
      skills: [
        { name: "TypeScript", featured: true },
        { name: "JavaScript", featured: true },
        { name: "React", featured: true },
        { name: "Next.js", featured: true },
        { name: "Tailwind CSS", featured: true },
        { name: "HTML5/CSS3", featured: false },
        { name: "Radix UI", featured: false },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", featured: true },
        { name: "Express", featured: false },
        { name: "REST APIs", featured: true },
        { name: "PostgreSQL", featured: true },
        { name: "MongoDB", featured: false },
        { name: "C++20", featured: true },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", featured: true },
        { name: "GitHub Actions", featured: true },
        { name: "Docker", featured: false },
        { name: "Linux / Bash", featured: true },
        { name: "pnpm", featured: false },
        { name: "VS Code", featured: false },
      ],
    },
    {
      title: "Core CS",
      skills: [
        { name: "Data Structures & Algorithms", featured: true },
        { name: "System Design", featured: false },
        { name: "Object-Oriented Programming", featured: true },
      ],
    },
  ],

  featuredProjects: [
    {
      repoName: "minigit",
      title: "minigit",
      description:
        "Distributed Version Control System built in Modern C++20 featuring SHA-256 content-addressable storage, commit graphs, and branch management.",
      techStack: ["C++", "C++20"],
      githubUrl: "https://github.com/sagarkrjha/minigit",
      featured: true,
      stars: 13,
      forks: 0,
    },
    {
      repoName: "Portfolio-web",
      title: "Portfolio Website",
      description:
        "My portfolio website as a Software developer to showcase my personal work and stats with dynamic GitHub sync, interactive modal terminal, and MDX engine.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/sagarkrjha/Portfolio-web",
      liveUrl: "https://sagarkrjha.vercel.app",
      featured: false,
      stars: 0,
      forks: 0,
    },
    {
      repoName: "next-mdx-starter",
      title: "Next.js MDX Starter",
      description:
        "A modern, reusable starter template built with Next.js (App Router), Tailwind CSS v4, Biome, shadcn/ui, Radix UI, next-themes, and react-icons.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/sagarkrjha/next-mdx-starter",
      featured: false,
      stars: 0,
      forks: 0,
    },
    {
      repoName: "sagarkrjha",
      title: "Developer Profile README & Workflow",
      description:
        "Automated developer profile powered by GitHub Actions, showcasing projects, engineering interests, GitHub activity, and LeetCode metrics.",
      techStack: ["JavaScript"],
      githubUrl: "https://github.com/sagarkrjha/sagarkrjha",
      featured: false,
      stars: 0,
      forks: 0,
    },
  ],

  hobbies: [
    {
      title: "Exploring Open Source",
      description: "Reading codebase architectures and experimenting with developer tooling.",
    },
    {
      title: "Competitive Programming",
      description: "Solving algorithmic problems and optimizing time/space complexity.",
    },
    {
      title: "Tech Reading & Writing",
      description: "Writing about software design, web systems, and problem-solving lessons.",
    },
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Software Developer",
      company: "Independent / Projects",
      location: "India",
      description: [
        "Architecting modern full-stack web applications and developer tools.",
        "Focusing on performance optimization, responsive UX, and scalable codebases.",
      ],
      technologies: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "C++"],
    },
  ],
};
