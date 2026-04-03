import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Conscious Rest",
  description:
    "Body awareness, Alexander Technique, and what the mattress industry gets wrong about sleep. Articles from Conscious Rest.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Blog
        </p>
        <h1 className="text-3xl font-bold text-ink mb-3">
          Body awareness, sleep, and the surfaces in between
        </h1>
        <p className="text-ink-light max-w-2xl">
          Articles exploring how the Alexander Technique changes the way we
          think about mattresses, posture, and rest.
        </p>
      </header>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white border border-sand-dark rounded-lg overflow-hidden hover:border-sage/40 transition-colors group"
          >
            <div className="md:flex">
              <div className="md:w-72 shrink-0">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-ink-muted mb-2">{post.date}</p>
                <h2 className="text-lg font-semibold text-ink group-hover:text-sage transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-muted line-clamp-3">
                  {post.description}
                </p>
                <span className="inline-block mt-3 text-sm text-sage font-medium">
                  Read more &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
