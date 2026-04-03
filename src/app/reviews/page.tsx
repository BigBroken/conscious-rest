import Link from "next/link";
import type { Metadata } from "next";
import { mattresses, getScore } from "@/data/mattresses";
import ATScoreCard from "@/components/ATScoreCard";
import AffiliateDisclosureBanner from "@/components/AffiliateDisclosureBanner";

export const metadata: Metadata = {
  title: "Mattress Reviews — Conscious Rest",
  description:
    "Every mattress reviewed on freedom of movement, non-interference, and responsiveness. No firmness scales. No pressure maps.",
};

export default function ReviewsPage() {
  const sorted = [...mattresses].sort(
    (a, b) => getScore(b.rating) - getScore(a.rating)
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AffiliateDisclosureBanner />
      <header className="mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Mattress Reviews
        </p>
        <h1 className="text-3xl font-bold text-ink mb-3">
          Every mattress. One honest question.
        </h1>
        <p className="text-ink-light max-w-2xl">
          Does this surface let your body do what it needs to do during
          sleep &mdash; move freely, rest without bracing, and not
          reinforce the tension you carry from the day?{" "}
          <Link
            href="/philosophy"
            className="text-sage underline underline-offset-2"
          >
            Read our methodology.
          </Link>
        </p>
      </header>

      <div className="space-y-5">
        {sorted.map((m, i) => (
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
                  <ATScoreCard rating={m.rating} compact />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-light mb-3">
                  <span>{m.type}</span>
                  <span>{m.firmness}</span>
                  <span>From {m.price}</span>
                </div>
                <p className="text-sm text-ink-muted line-clamp-2">
                  {m.verdict}
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
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-ink-muted text-sm mb-4">
          Not sure which is right for you?
        </p>
        <Link
          href="/quiz"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
        >
          Take the Quiz
        </Link>
      </div>
    </div>
  );
}
