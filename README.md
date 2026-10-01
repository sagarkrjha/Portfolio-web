# 🚀 Modern Config-Driven Developer Portfolio

A sleek, high-performance, and fully config-driven developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, **shadcn/ui**, **Radix UI**, **next-themes**, and **MDX**.

Designed with **separation of concerns** in mind: **99% of your portfolio is configured via centralized TypeScript configuration files**. You don't need to dig through component trees or write boilerplate UI code to make it entirely your own.

---

## ✨ Features

- **⚙️ 100% Config-Driven**: Update your bio, skills, socials, projects, terminal, and about narrative in `lib/config/` without touching layout code.
- **🔄 Automated GitHub & LeetCode Sync**: A custom TypeScript script (`pnpm run sync:data`) pulls your public GitHub repositories, stars, forks, and live LeetCode stats into an offline-first cache (`lib/generated/portfolio-data.json`).
- **🤖 Automated Daily GitHub Actions**: An automated CI workflow (`.github/workflows/build.yml`) runs nightly at 00:00 UTC to sync metrics, rebuild, and commit updated data back to your repo.
- **🛡️ Bulletproof Fallbacks & ISR**: Combines Next.js Incremental Static Regeneration (ISR) with offline verified JSON fallbacks so your site never breaks, even if third-party APIs are rate-limited or offline.
- **💻 Interactive Modal Terminal**: Emulates a real Unix CLI with 20+ functional commands (`neofetch`, `skills`, `projects`, `leetcode`, `github`, `whoami`, `foxy`, `cat`, etc.) dynamically bound to your config data.
- **🦊 Floating Mascot (Foxy)**: An animated companion with speech bubbles, interactive toggles, and terminal integration.
- **📊 GitHub Contributions Heatmap**: Real-time GitHub activity calendar with dark/light mode support.
- **📝 MDX Tech Blog**: Built-in blogging engine with metadata frontmatter, tag filters, and Prism syntax highlighting.
- **🎨 Dark & Light Modes**: System-aware theme toggling with smooth transitions via `next-themes`.
- **⚡ Bleeding Edge Tech**: Built with Next.js 16 (Turbopack ready), React 19, Tailwind CSS v4, and Biome.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── build.yml               # Automated nightly sync & build action
├── app/                            # Next.js 16 App Router pages & layouts
│   ├── about/                      # About page route
│   ├── blog/                       # MDX Blog listing & post routes ([slug])
│   ├── projects/                   # Dedicated projects directory page
│   ├── layout.tsx                  # Root layout with providers & theme
│   └── page.tsx                    # Landing page composing all sections
├── components/
│   ├── app-components/             # Portfolio sections (Hero, Projects, Terminal, etc.)
│   ├── layouts/                    # Header, Footer, and navigation
│   └── ui/                         # shadcn/ui & Radix UI primitives
├── content/
│   └── blog/                       # MDX markdown articles & write-ups
├── lib/
│   ├── config/                     # ⭐ PRIMARY CONFIGURATION FILES
│   │   ├── site.ts                 # Master config (profile, links, skills, repos)
│   │   ├── hero.ts                 # Hero section copy, actions, and media
│   │   └── about.ts                # Narrative & focus cards for About page
│   ├── generated/
│   │   └── portfolio-data.json     # Pre-fetched GitHub & LeetCode cache
│   └── services/                   # Dynamic API fetchers & badge normalizers
├── public/                         # Static assets (avatar.jpg, cover-image.jpg, etc.)
└── scripts/
    └── sync-portfolio-data.ts      # Data aggregation script for GitHub & LeetCode
```

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: [`pnpm`](https://pnpm.io/) (`v10+` or `v12+` recommended)

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-web.git
cd portfolio-web
```

### 3. Install Dependencies
```bash
pnpm install
```

### 4. Sync Portfolio Data
Fetch your live GitHub repositories and LeetCode statistics:
```bash
pnpm run sync:data
```

### 5. Launch the Development Server
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio!

---

## 🎯 Step-by-Step Customization Guide

Customizing this portfolio for yourself takes just a few minutes by updating the config files in `lib/config/`.

### Step 1: Update Your Core Profile (`lib/config/site.ts`)

Open [`lib/config/site.ts`](lib/config/site.ts). This is the single source of truth for your personal identity, social presence, and showcase items:

#### 1. Identity & Bio
```typescript
export const siteConfig: SiteConfig = {
  title: "Your Name | Software Engineer",
  name: "Your Name",
  role: "Software Engineer",
  bio: "Passionate about building scalable systems, developer tooling, and modern web applications.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  // ...
};
```

#### 2. Social Links
Update the links to your social profiles:
```typescript
socialLinks: [
  { platform: "github", label: "GitHub", href: "https://github.com/<your-username>", external: true },
  { platform: "leetcode", label: "LeetCode", href: "https://leetcode.com/u/<your-username>/", external: true },
  { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/<your-handle>", external: true },
  { platform: "twitter", label: "X (Twitter)", href: "https://x.com/<your-handle>", external: true },
  { platform: "discord", label: "Discord", href: "https://discord.com/users/<your-id>", external: true },
],
```

#### 3. GitHub & LeetCode Handles
Set your exact usernames so the automated sync script and live APIs know whose data to fetch:
```typescript
github: {
  username: "your-github-username",
  repositoryCount: 4,          // Number of featured repos to prioritize
  pinnedRepos: ["repo-one"],   // Specific repos you want highlighted
  includeForks: false,         // Include or omit forked repos
},

leetcode: {
  username: "your-leetcode-username",
  profileUrl: "https://leetcode.com/u/your-leetcode-username/",
},
```

#### 4. Terminal Configuration
Customize the shell prompt displayed in the interactive terminal modal:
```typescript
terminal: {
  unixUser: "yourusername",    // Displays as: yourusername@hostname:~$
  hostname: "portfolio",
  homePath: "~",
},
```

#### 5. Skills & Categories
Group your skills into categories. Marking `featured: true` highlights them in the skills grid and terminal `skills` command:
```typescript
skills: [
  {
    title: "Frontend & UI",
    skills: [
      { name: "TypeScript", featured: true },
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "Tailwind CSS", featured: true },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "Go", featured: true },
    ],
  },
  // Add more categories as desired...
],
```

#### 6. Featured Projects & Experience
You can define projects explicitly to guarantee descriptions, links, and tags even before running GitHub sync:
```typescript
featuredProjects: [
  {
    repoName: "my-flagship-project",
    title: "My Flagship Project",
    description: "High-performance distributed system with real-time replication.",
    techStack: ["Go", "Docker", "gRPC"],
    githubUrl: "https://github.com/your-username/my-flagship-project",
    liveUrl: "https://my-flagship-project.dev",
    featured: true,
    stars: 50,
    forks: 5,
  },
],
```

---

### Step 2: Configure the Hero Section (`lib/config/hero.ts`)

Open [`lib/config/hero.ts`](lib/config/hero.ts) to adjust call-to-action buttons, hero media, or custom greetings:

```typescript
export const heroConfig: HeroConfig = {
  greeting: "Hello, I'm",
  name: siteConfig.name,
  role: siteConfig.role,
  description: siteConfig.bio,
  availability: siteConfig.availability,

  actions: [
    { label: "View Projects", href: "#projects", variant: "default" },
    { label: "Read Blog", href: "/blog", variant: "outline" },
  ],

  media: {
    src: "/cover-image.jpg",
    alt: "Cover Banner",
  },
  avatar: {
    src: "/avatar.jpg",
    alt: "Profile Avatar",
  },
};
```

---

### Step 3: Customize About Page & Focus Areas (`lib/config/about.ts`)

Open [`lib/config/about.ts`](lib/config/about.ts) to define your personal engineering story and focus pillars:

```typescript
export const aboutConfig: AboutSectionConfig = {
  id: "about",
  eyebrow: "About Me",
  title: "Architecting reliable systems and crafting great user experiences.",
  description: "Share your journey, philosophy, and what drives you...",
  focus: [
    {
      title: "Full-Stack Development",
      description: "Building scalable web applications with clean, maintainable code.",
    },
    {
      title: "Systems Architecture",
      description: "Designing performant, distributed backends and reliable data pipelines.",
    },
  ],
};
```

---

### Step 4: Replace Images & Media (`public/`)

Drop your custom images directly into the `public/` directory:

| File Path | Description | Recommended Dimensions |
| :--- | :--- | :--- |
| `public/avatar.jpg` | Your personal avatar / headshot | Square (e.g. 500x500px, JPG/PNG) |
| `public/cover-image.jpg` | Hero banner / background art | Landscape (e.g. 1920x1080px, JPG/WebP) |
| `public/foxy.gif` | Floating mascot animation | Transparent GIF (optional) |

> 💡 **Tip**: If you prefer custom filenames, just update the path in `lib/config/hero.ts`.

---

### Step 5: Add or Edit Blog Posts (`content/blog/`)

Articles live as `.mdx` files in `content/blog/`. Each post includes standard frontmatter:

```mdx
---
title: "How I Built My Distributed Key-Value Store"
description: "A deep dive into consensus algorithms and memory-mapped file persistence."
date: "2026-04-01"
readTime: "6 min read"
tags: ["Go", "Distributed Systems", "Database"]
---

# How I Built My Distributed Key-Value Store

Write your content using GitHub Flavored Markdown and interactive React/MDX components.
Code blocks are automatically highlighted with PrismJS syntax coloring!
```

---

### Step 6: Test Data Sync Locally

Once you have set your GitHub and LeetCode usernames in `lib/config/site.ts`, test the data aggregator:

```bash
pnpm run sync:data
```

This will:
1. Connect to GitHub's REST API and fetch all your public repositories, languages, stars, and topics.
2. Filter tech badges to keep only languages & frameworks (omitting noisy GitHub topics like "practice" or "code").
3. Connect to the LeetCode stats API and fetch your solved problem count (Easy, Medium, Hard).
4. Save the compiled payload to [`lib/generated/portfolio-data.json`](lib/generated/portfolio-data.json).

---

## 🤖 Automated Daily Sync with GitHub Actions

The repository includes a GitHub Actions workflow in [`.github/workflows/build.yml`](.github/workflows/build.yml) that:
- Runs every day at **00:00 UTC** via cron.
- Runs automatically on every push to `main`.
- Runs on-demand via GitHub's **Run workflow** button (`workflow_dispatch`).
- Commits updated stats back to `lib/generated/portfolio-data.json` with `[skip ci]`.

### Enabling Write Permissions for GitHub Actions:
To let the GitHub Action commit fresh stats back to your repository:
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Actions** > **General**.
3. Scroll down to **Workflow permissions**.
4. Select **Read and write permissions**.
5. Click **Save**.

*(Optional)* If you have lots of repositories or run into GitHub API unauthenticated rate limits, create a Personal Access Token (PAT) with `repo` read access and add it to your repo secrets as `PAT_TOKEN`.

---

## ⌨️ Interactive Terminal Commands

Visitors can open the modal terminal anytime by clicking the terminal icon in the header or pressing the command triggers. Built-in commands include:

| Command | Action |
| :--- | :--- |
| `neofetch` | Displays your system specs, tech summary, and ASCII mascot |
| `about` | Prints your bio, location, and role |
| `skills` | Lists technical skills and core stack |
| `projects` | Interactive list of your GitHub projects with links |
| `leetcode` | Shows live algorithmic problem-solving metrics |
| `github` | Displays GitHub statistics and profile URL |
| `social` | Lists all your social media channels and handles |
| `blog` | Lists your latest blog articles |
| `whoami` | Shows your current shell username |
| `fox` / `mascot` | Displays the cute ASCII Fox companion |
| `clear` | Clears the terminal screen |
| `help` | Lists all available terminal commands |

---

## 📜 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Dev** | `pnpm run dev` | Starts local Next.js development server on `localhost:3000` |
| **Build** | `pnpm run build` | Compiles optimized production bundle |
| **Start** | `pnpm run start` | Serves the production build locally |
| **Sync** | `pnpm run sync:data` | Pulls live GitHub repos, project badges & LeetCode stats into local cache |
| **Lint** | `pnpm run lint` | Runs Biome linter check |
| **Lint Fix**| `pnpm run lint:fix` | Fixes formatting and linting errors automatically |
| **Format** | `pnpm run format` | Formats the codebase using Biome |

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)
The easiest way to deploy this Next.js app:
1. Push your customized code to your GitHub repository.
2. Import the project into [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm run build`
   - **Install Command**: `pnpm install`
4. Click **Deploy**!

### Deploy on Netlify / Other Platforms
Make sure your build command is set to:
```bash
pnpm run build
```
And output directory:
```bash
.next
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, clone, and make it your own!

---

⭐ **Enjoying this template?** Don't forget to star the repository on GitHub!
