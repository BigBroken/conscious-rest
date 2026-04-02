import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Conscious Rest",
  description:
    "How Conscious Rest earns money, how affiliate links work, and our commitment to honest reviews.",
};

export default function DisclosurePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-ink mb-2">
          Affiliate Disclosure
        </h1>
        <p className="text-sm text-ink-muted">
          Last updated: April 2, 2026
        </p>
      </header>

      <div className="space-y-8 text-ink-light leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            How we make money
          </h2>
          <p>
            Conscious Rest is a free resource. We earn money through
            affiliate commissions. When you click a link on our site and
            purchase a mattress or other product, we may receive a
            commission from the retailer at no additional cost to you. This
            is how we fund the site and keep our content free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Our affiliate partnerships
          </h2>
          <p className="mb-3">
            Conscious Rest participates in the following affiliate
            programs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Amazon Associates Program</strong> &mdash;
              Conscious Rest is a participant in the Amazon Services LLC
              Associates Program, an affiliate advertising program designed
              to provide a means for sites to earn advertising fees by
              advertising and linking to Amazon.com.{" "}
              <strong>
                As an Amazon Associate, we earn from qualifying purchases.
              </strong>
            </li>
            <li>
              <strong>ShareASale</strong> &mdash; We partner with mattress
              brands through the ShareASale affiliate network, including
              but not limited to Avocado, Brooklyn Bedding, WinkBeds,
              Helix, and others.
            </li>
            <li>
              <strong>Impact</strong> &mdash; We partner with brands
              through the Impact affiliate platform, including Saatva.
            </li>
          </ul>
        </section>

        <section className="bg-sage-light border border-sage/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-sage-dark mb-3">
            Our editorial independence commitment
          </h2>
          <p className="mb-3">
            <strong>
              Affiliate commissions never influence our reviews, ratings,
              or recommendations.
            </strong>
          </p>
          <p className="mb-3">
            Every mattress we review is evaluated using our{" "}
            <Link
              href="/philosophy"
              className="text-sage underline underline-offset-2"
            >
              6-pillar AT Body Awareness framework
            </Link>
            . This framework is applied consistently to every product
            regardless of whether we have an affiliate relationship with
            the brand. Our scores are based on how well a mattress supports
            body awareness, not on commission rates.
          </p>
          <p>
            We will never recommend a product that doesn&apos;t meet our
            standards simply because it pays a higher commission. If a
            mattress fails our evaluation, it doesn&apos;t appear on the
            site &mdash; period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            How affiliate links work
          </h2>
          <p className="mb-3">
            When you click an affiliate link on our site:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              You are redirected to the retailer&apos;s website (e.g.,
              Avocado, Saatva, Amazon).
            </li>
            <li>
              A small tracking cookie is placed on your browser by the
              affiliate network. This cookie identifies that you came from
              our site.
            </li>
            <li>
              If you make a purchase within the cookie&apos;s duration
              (typically 30 days), we receive a commission.
            </li>
            <li>
              <strong>You pay the same price</strong> whether you use our
              link or go directly to the retailer. Our commission comes
              from the retailer&apos;s marketing budget, not from your
              pocket.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Identifying affiliate links
          </h2>
          <p>
            Affiliate links on our site are typically labeled with
            &ldquo;Check Price&rdquo; buttons or similar calls to action.
            Every review page that contains affiliate links includes a
            disclosure notice near the link. If you&apos;re ever unsure
            whether a link is an affiliate link, assume that product links
            on our site may be affiliate links.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            FTC compliance
          </h2>
          <p>
            This disclosure is provided in accordance with the Federal
            Trade Commission&apos;s guidelines on endorsements and
            testimonials (16 CFR Part 255). We are committed to
            transparent, honest communication about our financial
            relationships with the brands and products we review.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Questions?</h2>
          <p>
            If you have questions about our affiliate relationships or this
            disclosure, contact us at{" "}
            <a
              href="mailto:hello@conscious.rest"
              className="text-sage underline underline-offset-2"
            >
              hello@conscious.rest
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
