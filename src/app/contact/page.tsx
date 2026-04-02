import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Conscious Rest",
  description: "Get in touch with the Conscious Rest team.",
};

export default function ContactPage() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-10">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          Contact
        </p>
        <h1 className="text-3xl font-bold text-ink mb-4">Get in touch</h1>
        <p className="text-ink-light leading-relaxed">
          Have a question about one of our reviews? Want to suggest a
          mattress for us to evaluate? Found an error? We&apos;d love to
          hear from you.
        </p>
      </header>

      <section className="bg-white border border-sand-dark rounded-lg p-8 mb-8">
        <h2 className="text-xl font-bold text-ink mb-4">Email us</h2>
        <p className="text-ink-light mb-4">
          The best way to reach us is by email. We aim to respond within
          48 hours.
        </p>
        <a
          href="mailto:hello@conscious.rest"
          className="inline-block bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium"
        >
          hello@conscious.rest
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink mb-2">
          What we can help with
        </h2>
        <div className="grid gap-4">
          <div className="bg-white border border-sand-dark rounded-lg p-5">
            <h3 className="font-semibold text-ink mb-1">
              Mattress questions
            </h3>
            <p className="text-sm text-ink-muted">
              Questions about a specific mattress, our review methodology,
              or how our scoring works.
            </p>
          </div>
          <div className="bg-white border border-sand-dark rounded-lg p-5">
            <h3 className="font-semibold text-ink mb-1">
              Review requests
            </h3>
            <p className="text-sm text-ink-muted">
              Want us to review a mattress that&apos;s not on the site?
              Let us know. We prioritize mattresses that align with AT
              principles.
            </p>
          </div>
          <div className="bg-white border border-sand-dark rounded-lg p-5">
            <h3 className="font-semibold text-ink mb-1">
              Corrections and feedback
            </h3>
            <p className="text-sm text-ink-muted">
              If you spot an error in our content, an outdated price, or a
              broken link, please let us know so we can fix it.
            </p>
          </div>
          <div className="bg-white border border-sand-dark rounded-lg p-5">
            <h3 className="font-semibold text-ink mb-1">
              Alexander Technique professionals
            </h3>
            <p className="text-sm text-ink-muted">
              If you&apos;re a certified AT teacher and would like to
              contribute, collaborate, or offer corrections to our
              application of AT principles, we&apos;d especially love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 bg-warm-light border border-sand-dark rounded-lg p-5">
        <h3 className="font-semibold text-accent mb-1">
          A note on medical questions
        </h3>
        <p className="text-sm text-ink-light">
          We cannot provide medical advice or personalized health
          recommendations. If you have questions about pain, injury, or a
          medical condition as it relates to your sleep surface, please
          consult a qualified healthcare professional.
        </p>
      </section>
    </article>
  );
}
