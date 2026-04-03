import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Conscious Rest`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <nav className="text-sm text-ink-muted mb-6">
        <Link href="/blog" className="hover:text-sage">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="line-clamp-1">{post.title}</span>
      </nav>

      <header className="mb-8">
        <p className="text-sm text-ink-muted mb-2">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-ink-light leading-relaxed">
          {post.description}
        </p>
      </header>

      <img
        src={post.image}
        alt={post.imageAlt}
        className="w-full rounded-lg border border-sand-dark mb-10"
      />

      <div
        className="prose prose-ink max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-12 pt-8 border-t border-sand-dark flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/reviews"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium"
        >
          See Our Mattress Reviews
        </Link>
        <Link
          href="/quiz"
          className="border border-ink-muted text-ink-light px-6 py-3 rounded-md hover:border-sage hover:text-sage transition-colors font-medium"
        >
          Take the Body Awareness Quiz
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="text-sage hover:text-sage-dark text-sm font-medium"
        >
          &larr; All articles
        </Link>
      </div>
    </article>
  );
}
