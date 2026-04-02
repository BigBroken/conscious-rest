import Link from "next/link";
import type { Metadata } from "next";
import { mattresses, getATScore } from "@/data/mattresses";
import ATScoreCard from "@/components/ATScoreCard";
import AffiliateDisclosureBanner from "@/components/AffiliateDisclosureBanner";

export const metadata: Metadata = {
  title: "Mattress Reviews — Conscious Rest",
  description:
    "Every mattress reviewed through our 6-pillar Alexander Technique framework. No firmness scales. No pressure maps. Just honest body awareness.",
};

export default function ReviewsPage() {
  const sorted = [...mattresses].sort(
    (a, b) => getATScore(b.atRating) - getATScore(a.atRating)
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AffiliateDisclosureBanner />
      <header className="mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Mattress Reviews
        </p>
        <h1 className="text-3xl font-bold text-ink mb-3">
          Every mattress. One honest framework.
        </h1>
        <p className="text-ink-light max-w-2xl">
          Each mattress is evaluated through our 6-pillar AT Body Awareness
          framework. We prioritize feedback, freedom, and non-interference
          over firmness scales and marketing claims.{" "}
          <Link
            href="/philosophy"
            className="text-sage underline underline-offset-2"
          >
            Read our methodology.
          </Link>
        </p>
      </header>

      <div className="space-y-5">
        {sorted.map((m, i) => {
          const score = getATScore(m.atRating);
          return (
            <Link
              key={m.slug}
              href={`/reviews/${m.slug}`}
              className="block bg-white border border-sand-dark rounded-lg p-6 hover:border-sage/40 transition-colors group"
            >
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="flex items-start gap-4 md:w-12 shrink-0">
                  <span className="text-2xl font-bold text-sage/30">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h2 className="text-lg font-semibold text-ink group-hover:text-sage transition-colors">
                        {m.name}
                      </h2>
                      <p className="text-sm text-ink-muted">{m.tagline}</p>
                    </div>
                    <ATScoreCard rating={m.atRating} compact />
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-light mb-3">
                    <span>{m.type}</span>
                    <span>{m.firmness}</span>
                    <span>From {m.price}</span>
                    <span>{m.affiliateNetwork}</span>
                  </div>
                  <p className="text-sm text-ink-muted line-clamp-2">
                    {m.atVerdict}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {m.bestFor.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-sage-light text-sage-dark px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-ink-muted text-sm mb-4">
          Not sure which is right for you?
        </p>
        <Link
          href="/quiz"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
        >
          Take the Body Awareness Quiz
        </Link>
      </div>
    </div>
  );
}
