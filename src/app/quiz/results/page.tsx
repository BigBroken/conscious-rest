"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { calculateResult } from "@/data/quiz";
import { getMattressBySlug, getATScore } from "@/data/mattresses";
import ATScoreCard from "@/components/ATScoreCard";

function ResultsContent() {
  const searchParams = useSearchParams();
  const answers: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    answers[key] = value;
  });

  const result = calculateResult(answers);
  const recommended = result.slugs
    .map(getMattressBySlug)
    .filter(Boolean);

  const tierLabels = {
    explorer: "Body Awareness Explorer",
    developing: "Developing Practitioner",
    practitioner: "Aware Practitioner",
  };

  const tierColors = {
    explorer: "bg-warm-light text-accent",
    developing: "bg-sage-light text-sage-dark",
    practitioner: "bg-sage text-white",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Result Header */}
      <header className="text-center mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Your Results
        </p>
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${tierColors[result.tier]}`}
        >
          {tierLabels[result.tier]}
        </span>
        <h1 className="text-3xl font-bold text-ink mb-4">
          Your mattress recommendations
        </h1>
        <p className="text-ink-light max-w-xl mx-auto leading-relaxed">
          {result.message}
        </p>
      </header>

      {/* Education insert */}
      <section className="bg-sage-light border border-sage/20 rounded-lg p-6 mb-10">
        <h2 className="font-semibold text-sage-dark mb-2">
          A note about the transition
        </h2>
        <p className="text-sm text-ink-light leading-relaxed">
          If you&apos;re moving from a soft mattress to one of our
          recommendations, give your body 2&ndash;3 weeks to adjust. The
          Alexander Technique teaches us that what feels
          &ldquo;right&rdquo; is often just what&apos;s familiar. Initial
          unfamiliarity with a firmer, more honest surface is normal
          &mdash; and often a sign that your body is receiving new
          information it hasn&apos;t had before. That&apos;s a good thing.
        </p>
      </section>

      {/* Recommendations */}
      <section className="space-y-6 mb-10">
        {recommended.map((m, i) => {
          if (!m) return null;
          return (
            <div
              key={m.slug}
              className="bg-white border border-sand-dark rounded-lg p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs text-sage font-medium mb-1">
                    {i === 0 ? "Top Pick" : `Pick #${i + 1}`}
                  </p>
                  <h3 className="text-lg font-semibold text-ink">
                    {m.name}
                  </h3>
                  <p className="text-sm text-ink-muted">{m.tagline}</p>
                </div>
                <ATScoreCard rating={m.atRating} compact />
              </div>
              <p className="text-sm text-ink-light mb-3">
                {m.type} &middot; {m.firmness} &middot; From {m.price}
              </p>
              <p className="text-sm text-ink-light leading-relaxed mb-4">
                {m.whyWeRecommend}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {m.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-sage-light text-sage-dark px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={m.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage text-white px-5 py-2 rounded-md hover:bg-sage-dark transition-colors text-sm font-medium"
                >
                  Check Price
                </a>
                <Link
                  href={`/reviews/${m.slug}`}
                  className="text-sage hover:text-sage-dark text-sm font-medium underline underline-offset-2"
                >
                  Read full review
                </Link>
              </div>
              <p className="text-xs text-ink-muted mt-2">
                We may earn a commission from this link. This never
                influences our ratings.
              </p>
            </div>
          );
        })}
      </section>

      {/* Next steps */}
      <section className="text-center">
        <p className="text-ink-muted text-sm mb-4">
          Want to understand the principles behind these recommendations?
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/philosophy"
            className="border border-ink-muted text-ink-light px-5 py-2 rounded-md hover:border-sage hover:text-sage transition-colors text-sm font-medium"
          >
            Read Our Philosophy
          </Link>
          <Link
            href="/reviews"
            className="border border-ink-muted text-ink-light px-5 py-2 rounded-md hover:border-sage hover:text-sage transition-colors text-sm font-medium"
          >
            See All Reviews
          </Link>
        </div>
      </section>
    </div>
  );
}

export default function QuizResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-6 py-16 text-center text-ink-muted">
          Calculating your recommendations...
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
