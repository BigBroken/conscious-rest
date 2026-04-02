import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Conscious Rest",
  description:
    "Who we are, why we started Conscious Rest, and how the Alexander Technique informs our approach to mattress reviews.",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-sm tracking-widest uppercase text-sage mb-3">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          Why Conscious Rest exists
        </h1>
        <p className="text-lg text-ink-light leading-relaxed">
          We started Conscious Rest because we couldn&apos;t find a single
          mattress review site that asked the right questions. Every site
          we found rated mattresses on firmness scales, pressure maps, and
          sleep position charts &mdash; tools borrowed from the same
          marketing machine that sells you the mattress in the first place.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-ink mb-4">Our background</h2>
        <p className="text-ink-light leading-relaxed mb-4">
          We are students and advocates of the Alexander Technique &mdash;
          a method of body awareness developed over 130 years ago by F.M.
          Alexander. The Alexander Technique is taught worldwide in
          conservatories, universities, chronic pain clinics, and private
          practices. It has been the subject of peer-reviewed research,
          including a landmark BMJ trial demonstrating its effectiveness
          for chronic back pain.
        </p>
        <p className="text-ink-light leading-relaxed mb-4">
          Through our own practice of AT, we noticed something that most
          people overlook: the surface you sleep on for 7&ndash;8 hours
          every night has a profound effect on your body&apos;s ability to
          release tension and self-organize. Yet almost nobody talks about
          mattresses through the lens of body awareness. That gap is why
          this site exists.
        </p>
        <p className="text-ink-light leading-relaxed">
          We want to be transparent: we are not certified Alexander
          Technique teachers (that requires a 1,600+ hour training
          program). We are informed practitioners who apply AT principles
          to our daily lives, including how we evaluate sleep surfaces.
          Where our knowledge meets its limits, we defer to and cite
          the work of certified teachers and published research.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-ink mb-4">
          What we believe
        </h2>
        <ul className="space-y-3 text-ink-light">
          <li>
            <strong>Your body is intelligent.</strong> It doesn&apos;t
            need a mattress to tell it what shape to be. It needs a
            surface that gets out of the way.
          </li>
          <li>
            <strong>Posture is not a position.</strong> It&apos;s a
            dynamic quality of ease, freedom, and coordination. You
            can&apos;t buy it in a mattress &mdash; but you can buy a
            mattress that supports it.
          </li>
          <li>
            <strong>Comfort can be misleading.</strong> What feels
            immediately &ldquo;right&rdquo; is often just what&apos;s
            familiar. We value honest feedback over false comfort.
          </li>
          <li>
            <strong>Transparency matters.</strong> We earn affiliate
            commissions from some links on this site. This never
            influences our ratings.{" "}
            <Link
              href="/disclosure"
              className="text-sage underline underline-offset-2"
            >
              Read our full disclosure.
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-ink mb-4">
          How we review mattresses
        </h2>
        <p className="text-ink-light leading-relaxed mb-4">
          Every mattress we review is evaluated through our{" "}
          <Link
            href="/philosophy"
            className="text-sage underline underline-offset-2"
          >
            6-pillar AT Body Awareness framework
          </Link>
          . We test for proprioceptive feedback, freedom of movement,
          non-interference, Primary Control support, muscular release over
          time, and long-term honest sensation.
        </p>
        <p className="text-ink-light leading-relaxed">
          We don&apos;t use pressure mapping machines or motion-capture
          rigs. Our testing tool is the educated human body &mdash; the
          same tool the Alexander Technique has relied on for over a
          century. We believe that if you develop the awareness, you can
          verify everything we say with your own body. That&apos;s the
          point.
        </p>
      </section>

      <section className="mb-10 bg-warm-light border border-sand-dark rounded-lg p-6">
        <h2 className="font-semibold text-accent mb-2">
          Health disclaimer
        </h2>
        <p className="text-sm text-ink-light leading-relaxed">
          The content on Conscious Rest is for informational and
          educational purposes only. It is not medical advice and should
          not be treated as such. We are not doctors, physical therapists,
          or certified Alexander Technique teachers. If you have chronic
          pain, a medical condition, or concerns about your sleep, please
          consult a qualified healthcare professional. Our mattress
          recommendations are based on our application of Alexander
          Technique principles and our personal experience &mdash; your
          body and needs may differ.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-ink mb-4">Get in touch</h2>
        <p className="text-ink-light leading-relaxed">
          Have a question, suggestion, or correction? We&apos;d love to
          hear from you. Reach us at{" "}
          <a
            href="mailto:hello@conscious.rest"
            className="text-sage underline underline-offset-2"
          >
            hello@conscious.rest
          </a>{" "}
          or visit our{" "}
          <Link
            href="/contact"
            className="text-sage underline underline-offset-2"
          >
            contact page
          </Link>
          .
        </p>
      </section>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <Link
          href="/philosophy"
          className="bg-sage text-white px-6 py-3 rounded-md hover:bg-sage-dark transition-colors font-medium"
        >
          Read Our Philosophy
        </Link>
        <Link
          href="/reviews"
          className="border border-ink-muted text-ink-light px-6 py-3 rounded-md hover:border-sage hover:text-sage transition-colors font-medium"
        >
          See Our Reviews
        </Link>
      </div>
    </article>
  );
}
