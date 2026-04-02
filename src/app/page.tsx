import Link from "next/link";
import { getTopMattresses } from "@/data/mattresses";
import ATScoreCard from "@/components/ATScoreCard";
import AffiliateDisclosureBanner from "@/components/AffiliateDisclosureBanner";

export default function Home() {
  const topPicks = getTopMattresses(3);

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm tracking-widest uppercase text-sage mb-4">
          A different approach to mattress reviews
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-ink mb-6">
          Your body doesn&apos;t need to be held.
          <br />
          <span className="text-sage">It needs to be free.</span>
        </h1>
        <p className="text-lg text-ink-light max-w-2xl mx-auto leading-relaxed mb-8">
          The mattress industry sells you softness, contouring, and
          &ldquo;spinal alignment.&rdquo; But 130 years of the Alexander
          Technique tells us the opposite: a good mattress gets out of your
          way and lets your body do what it already knows how to do.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/quiz"
            className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium"
          >
            Find Your Mattress
          </Link>
          <Link
            href="/philosophy"
            className="border border-ink-muted text-ink-light px-6 py-3 rounded-md hover:border-sage hover:text-sage transition-colors font-medium"
          >
            Learn Our Approach
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white border-y border-sand-dark">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-ink mb-3">
            The mattress industry has it backwards.
          </h2>
          <p className="text-ink-light leading-relaxed mb-8 max-w-3xl">
            Every mainstream mattress review site asks the same question:
            &ldquo;What position do you sleep in?&rdquo; Then they recommend a
            mattress that molds to your body in that position. But here&apos;s
            what they miss &mdash;
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-warm-light border border-sand-dark rounded-lg p-6">
              <h3 className="font-semibold text-accent mb-2">
                What they tell you
              </h3>
              <ul className="space-y-2 text-sm text-ink-light">
                <li>&ldquo;Memory foam contours to your natural curves&rdquo;</li>
                <li>&ldquo;Zoned support keeps your spine aligned&rdquo;</li>
                <li>&ldquo;Pressure relief at key points&rdquo;</li>
                <li>&ldquo;Ergonomically designed for optimal posture&rdquo;</li>
              </ul>
            </div>
            <div className="bg-sage-light border border-sage/20 rounded-lg p-6">
              <h3 className="font-semibold text-sage-dark mb-2">
                What the Alexander Technique teaches
              </h3>
              <ul className="space-y-2 text-sm text-ink-light">
                <li>
                  Your &ldquo;natural curves&rdquo; right now reflect years of
                  habitual tension &mdash; contouring locks them in
                </li>
                <li>
                  Your spine is a living, dynamic system &mdash; it doesn&apos;t
                  need to be held in a fixed &ldquo;aligned&rdquo; position
                </li>
                <li>
                  Pressure point pain is a signal from your body &mdash; masking
                  it with softness treats the symptom, not the cause
                </li>
                <li>
                  Real posture isn&apos;t a position you hold &mdash; it&apos;s
                  a quality of freedom and ease in your whole self
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Pillars Preview */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-ink mb-3">
          How we rate mattresses: 6 pillars of body awareness
        </h2>
        <p className="text-ink-light mb-8 max-w-3xl">
          Instead of firmness scales and pressure maps, we evaluate every
          mattress through the lens of the Alexander Technique. Each pillar
          measures something the mainstream ignores.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Feedback",
              desc: "Does the surface give your nervous system clear information about where your body is in space?",
            },
            {
              title: "Freedom",
              desc: "Can you move, roll, and reposition without fighting the surface?",
            },
            {
              title: "Non-Interference",
              desc: "Does the mattress avoid imposing an idealized shape on your body?",
            },
            {
              title: "Primary Control",
              desc: "Does it support a free, unimpeded relationship between your head, neck, and back?",
            },
            {
              title: "Release",
              desc: "Does the surface encourage your muscles to let go over time, not just on first contact?",
            },
            {
              title: "Honest Sensation",
              desc: "Does long-term use confirm what the first night suggested, or was it a showroom trick?",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-sand-dark rounded-lg p-5"
            >
              <h3 className="font-semibold text-sage mb-1">{pillar.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/philosophy"
            className="text-sage hover:text-sage-dark text-sm font-medium underline underline-offset-4"
          >
            Read the full methodology
          </Link>
        </div>
      </section>

      {/* Top Picks */}
      <section className="bg-white border-y border-sand-dark">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <AffiliateDisclosureBanner />
          <h2 className="text-2xl font-bold text-ink mb-2">
            Our top-rated mattresses
          </h2>
          <p className="text-ink-light mb-8">
            Ranked by our AT Body Awareness Score &mdash; the mattresses that
            best support your body&apos;s natural intelligence.
          </p>
          <div className="space-y-6">
            {topPicks.map((m, i) => (
              <Link
                key={m.slug}
                href={`/reviews/${m.slug}`}
                className="flex flex-col md:flex-row items-start gap-6 bg-sand border border-sand-dark rounded-lg p-6 hover:border-sage/40 transition-colors group"
              >
                <div className="flex items-center gap-4 md:w-16 shrink-0">
                  <span className="text-3xl font-bold text-sage/40">
                    #{i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink group-hover:text-sage transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-sm text-ink-muted mb-1">{m.tagline}</p>
                  <p className="text-sm text-ink-light">
                    {m.type} &middot; {m.firmness} &middot; From {m.price}
                  </p>
                </div>
                <div className="shrink-0">
                  <ATScoreCard rating={m.atRating} compact />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
            >
              See All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-ink mb-3">
          Not sure where to start?
        </h2>
        <p className="text-ink-light mb-6 max-w-xl mx-auto">
          Our body awareness quiz asks different questions than any mattress
          quiz you&apos;ve taken. No firmness scales. No sleep position
          checkboxes. Just honest questions about how you use your body.
        </p>
        <Link
          href="/quiz"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium inline-block"
        >
          Take the Quiz
        </Link>
      </section>
    </>
  );
}
