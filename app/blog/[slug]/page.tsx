import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/services/blog";
import { highlightCode } from "@/lib/prism";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.meta.title} | Sagar Kumar Jha`,
    description: post.meta.description,
  };
}

// Custom simple markdown content renderer with syntax highlighting
function renderMarkdownContent(content: string) {
  // Split on code blocks and normal paragraphs
  const parts = content.split(/(```[\s\S]*?```)/g);

  return parts.map((part, index) => {
    if (part.startsWith("```") && part.endsWith("```")) {
      const firstLineEnd = part.indexOf("\n");
      const lang = part.slice(3, firstLineEnd).trim();
      const code = part.slice(firstLineEnd + 1, -3);

      const { highlightedHtml, language } = highlightCode(code, lang);

      return (
        <pre
          key={index}
          className="my-4 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 font-mono text-sm leading-relaxed text-foreground"
        >
          {highlightedHtml ? (
            <code
              className={`language-${language} font-mono text-sm`}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Prism output is safe
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          ) : (
            <code>{code}</code>
          )}
        </pre>
      );
    }

    // Process normal markdown sections
    const lines = part.split("\n\n");
    return (
      <div key={index} className="space-y-4">
        {lines.map((paragraph, pIdx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("# ")) {
            return (
              <h1 key={pIdx} className="text-3xl font-bold tracking-tight mt-6 mb-3">
                {trimmed.replace("# ", "")}
              </h1>
            );
          }
          if (trimmed.startsWith("## ")) {
            return (
              <h2 key={pIdx} className="text-2xl font-semibold tracking-tight mt-6 mb-2 border-b pb-1">
                {trimmed.replace("## ", "")}
              </h2>
            );
          }
          if (trimmed.startsWith("### ")) {
            return (
              <h3 key={pIdx} className="text-xl font-semibold tracking-tight mt-4 mb-2">
                {trimmed.replace("### ", "")}
              </h3>
            );
          }
          if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
            const items = trimmed.split("\n").map((i) => i.replace(/^[-*]\s+/, ""));
            return (
              <ul key={pIdx} className="list-disc list-inside space-y-1 text-sm text-muted-foreground my-2">
                {items.map((it, itIdx) => (
                  <li key={itIdx}>{it}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={pIdx} className="text-sm sm:text-base leading-7 text-muted-foreground">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 max-w-2xl mx-auto px-4 sm:px-0">
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-6"
        >
          ← Back to all posts
        </Link>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <time dateTime={post.meta.date}>{post.meta.date}</time>
          <span>•</span>
          <span>{post.meta.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {post.meta.title}
        </h1>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono bg-muted/60 px-2 py-0.5 rounded text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t pt-8 space-y-4">
        {renderMarkdownContent(post.content)}
      </div>
    </article>
  );
}
