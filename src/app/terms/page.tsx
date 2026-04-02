import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Conscious Rest",
  description: "Terms and conditions for using Conscious Rest.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-ink mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-ink-muted">
          Last updated: April 2, 2026
        </p>
      </header>

      <div className="space-y-8 text-ink-light leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Agreement to terms
          </h2>
          <p>
            By accessing and using conscious.rest (&ldquo;the
            Site&rdquo;), you agree to be bound by these Terms of Service.
            If you do not agree, please do not use the Site. We reserve the
            right to update these terms at any time. Continued use of the
            Site constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Nature of content
          </h2>
          <p>
            Conscious Rest provides mattress reviews, educational content
            about the Alexander Technique, and product recommendations.
            All content is based on our personal research, experience, and
            application of Alexander Technique principles.
          </p>
        </section>

        <section className="bg-warm-light border border-sand-dark rounded-lg p-6">
          <h2 className="text-xl font-bold text-accent mb-3">
            Health and medical disclaimer
          </h2>
          <p className="mb-3">
            <strong>
              The content on this Site is for informational and educational
              purposes only. It is not medical advice, health advice,
              physical therapy advice, or a substitute for professional
              medical consultation.
            </strong>
          </p>
          <p className="mb-3">
            The operators of this Site are not doctors, licensed physical
            therapists, or certified Alexander Technique teachers. Our
            mattress reviews and recommendations are based on our personal
            application of Alexander Technique principles and should not be
            interpreted as clinical or therapeutic guidance.
          </p>
          <p className="mb-3">
            References to posture, body awareness, muscular tension,
            spinal alignment, and related topics are educational in nature.
            We do not claim that any mattress can treat, cure, prevent, or
            diagnose any medical condition, including but not limited to
            back pain, spinal disorders, or sleep disorders.
          </p>
          <p>
            If you have a medical condition, chronic pain, or concerns
            about your sleep or physical health, consult a qualified
            healthcare professional before making changes to your sleep
            surface or routine. You use the information on this Site at
            your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Affiliate relationships and compensation
          </h2>
          <p>
            Conscious Rest participates in affiliate advertising programs.
            This means we may earn commissions when you click links on our
            Site and make purchases at third-party retailers. These
            affiliate relationships do not influence our reviews, ratings,
            or recommendations. Our 6-pillar AT Body Awareness framework
            is applied consistently to every product we evaluate,
            regardless of affiliate status. For full details, see our{" "}
            <a
              href="/disclosure"
              className="text-sage underline underline-offset-2"
            >
              Affiliate Disclosure
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Intellectual property
          </h2>
          <p>
            All original content on this Site &mdash; including text,
            graphics, logos, and the AT Body Awareness scoring framework
            &mdash; is the property of Conscious Rest and is protected by
            copyright law. You may not reproduce, distribute, or create
            derivative works from our content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Third-party links
          </h2>
          <p>
            Our Site contains links to third-party websites, including
            retailer sites and affiliate networks. We are not responsible
            for the content, privacy practices, or accuracy of information
            on third-party sites. Following links to external sites is at
            your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Product information accuracy
          </h2>
          <p>
            We make reasonable efforts to ensure the accuracy of product
            information, prices, and availability on our Site. However,
            mattress manufacturers may change their products, pricing, and
            availability without notice. We are not responsible for
            discrepancies between information on our Site and current
            information on retailer sites. Always verify product details
            and pricing on the retailer&apos;s website before purchasing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, Conscious Rest and its
            operators shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising from
            your use of the Site, reliance on any information provided, or
            any purchases made through affiliate links. This includes, but
            is not limited to, damages related to physical discomfort,
            injury, or dissatisfaction with products purchased based on our
            recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Governing law
          </h2>
          <p>
            These terms shall be governed by and construed in accordance
            with the laws of the United States. Any disputes arising from
            these terms or your use of the Site shall be resolved in the
            applicable courts of that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
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
