import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { mattresses, getMattressBySlug, getScore } from "@/data/mattresses";
import ATScoreCard from "@/components/ATScoreCard";
import AffiliateDisclosureBanner from "@/components/AffiliateDisclosureBanner";
import HealthDisclaimer from "@/components/HealthDisclaimer";

export function generateStaticParams() {
  return mattresses.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMattressBySlug(slug);
  if (!m) return { title: "Not Found" };
  return {
    title: `${m.name} Review — Conscious Rest`,
    description: m.verdict,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getMattressBySlug(slug);
  if (!m) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <AffiliateDisclosureBanner />

      {/* Breadcrumb */}
      <nav className="text-sm text-ink-muted mb-6">
        <Link href="/reviews" className="hover:text-sage">
          Reviews
        </Link>
        <span className="mx-2">/</span>
        <span>{m.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs bg-sage-light text-sage-dark px-2 py-0.5 rounded">
            {m.type}
          </span>
          <span className="text-xs bg-sage-light text-sage-dark px-2 py-0.5 rounded">
            {m.firmness}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-2">
          {m.name}
        </h1>
        <p className="text-lg text-ink-muted italic">{m.tagline}</p>
        <p className="text-ink-light mt-2">From {m.price}</p>
      </header>

      {/* Product Image */}
      {m.hasImage && (
        <section className="mb-10">
          <img
            src={m.imageUrl}
            alt={m.name}
            className="w-full rounded-lg border border-sand-dark"
          />
        </section>
      )}

      {/* Score Card */}
      <section className="mb-10">
        <ATScoreCard rating={m.rating} />
      </section>

      {/* Verdict */}
      <section className="mb-10 bg-sage-light border border-sage/20 rounded-lg p-6">
        <h2 className="font-semibold text-sage-dark mb-2">Our Verdict</h2>
        <p className="text-ink-light leading-relaxed mb-4">{m.verdict}</p>
        <a
          href={m.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sage text-white px-5 py-2 rounded-md hover:bg-sage-dark transition-colors text-sm font-medium inline-block"
        >
          Check Price at {m.brand}
        </a>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-ink mb-3">Overview</h2>
        <p className="text-ink-light leading-relaxed">{m.overview}</p>
      </section>

      {/* Why We Recommend */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-ink mb-3">
          Why we recommend this mattress
        </h2>
        <p className="text-ink-light leading-relaxed">{m.whyWeRecommend}</p>
      </section>

      {/* Pros and Cons */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div className="bg-sage-light border border-sage/20 rounded-lg p-6">
          <h3 className="font-semibold text-sage-dark mb-3">What works</h3>
          <ul className="space-y-2">
            {m.pros.map((pro) => (
              <li
                key={pro}
                className="text-sm text-ink-light flex items-start gap-2"
              >
                <span className="text-sage mt-0.5 shrink-0">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-warm-light border border-sand-dark rounded-lg p-6">
          <h3 className="font-semibold text-accent mb-3">
            What to watch for
          </h3>
          <ul className="space-y-2">
            {m.cons.map((con) => (
              <li
                key={con}
                className="text-sm text-ink-light flex items-start gap-2"
              >
                <span className="text-accent mt-0.5 shrink-0">&ndash;</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="mb-10 text-center">
        <a
          href={m.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
        >
          Check Price at {m.brand}
        </a>
        <p className="text-xs text-ink-muted mt-2">
          We may earn a commission if you purchase through this link.
        </p>
      </div>

      {/* Best For */}
      <section className="mb-10">
        <h2 className="font-semibold text-ink mb-3">Best for</h2>
        <div className="flex flex-wrap gap-2">
          {m.bestFor.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-sage-light text-sage-dark px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border border-sand-dark rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold text-ink mb-2">
          Ready to try the {m.brand}?
        </h2>
        <p className="text-sm text-ink-muted mb-4">
          Most of our recommended mattresses come with 100+ night trial
          periods. Experience it with your own body &mdash; that&apos;s the
          only review that ultimately matters.
        </p>
        <a
          href={m.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sage text-white px-8 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
        >
          Check Price at {m.brand}
        </a>
        <p className="text-xs text-ink-muted mt-3">
          We may earn a commission if you purchase through this link. This
          never influences our ratings.
        </p>
      </section>

      {/* Back */}
      <div className="mt-10">
        <Link
          href="/reviews"
          className="text-sage hover:text-sage-dark text-sm font-medium"
        >
          &larr; Back to all reviews
        </Link>
      </div>

      <HealthDisclaimer />
    </article>
  );
}
