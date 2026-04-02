import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Conscious Rest",
  description: "How Conscious Rest collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-ink mb-2">Privacy Policy</h1>
        <p className="text-sm text-ink-muted">
          Last updated: April 2, 2026
        </p>
      </header>

      <div className="space-y-8 text-ink-light leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Who we are
          </h2>
          <p>
            Conscious Rest (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
            &ldquo;our&rdquo;) operates the website conscious.rest. This
            privacy policy explains how we collect, use, and protect
            information when you visit our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Information we collect
          </h2>
          <h3 className="font-semibold text-ink mt-4 mb-2">
            Information you provide
          </h3>
          <p>
            If you contact us via email, we receive your email address and
            the contents of your message. We use this only to respond to
            your inquiry.
          </p>
          <h3 className="font-semibold text-ink mt-4 mb-2">
            Information collected automatically
          </h3>
          <p className="mb-2">
            When you visit our site, we may automatically collect:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Log data:</strong> IP address, browser type, pages
              visited, time and date of visit, time spent on pages, and
              other standard server log information.
            </li>
            <li>
              <strong>Analytics data:</strong> We use analytics services
              (such as Vercel Analytics or Google Analytics) to understand
              how visitors use our site. These services may collect
              anonymized data about page views, traffic sources, and user
              behavior.
            </li>
            <li>
              <strong>Cookies:</strong> Our site and third-party services
              may use cookies and similar tracking technologies. See the
              Cookies section below.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            How we use your information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To operate and maintain the website</li>
            <li>To respond to your inquiries</li>
            <li>
              To understand how visitors use our site so we can improve it
            </li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Affiliate partnerships and third-party links
          </h2>
          <p className="mb-2">
            Conscious Rest participates in affiliate programs, including
            but not limited to Amazon Associates, ShareASale, and Impact.
            When you click an affiliate link on our site:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              You will be redirected to the retailer&apos;s website, which
              has its own privacy policy.
            </li>
            <li>
              The affiliate network may place a cookie on your device to
              track the referral. This cookie is governed by the
              network&apos;s privacy policy, not ours.
            </li>
            <li>
              We do not receive your personal information from these
              transactions. We receive only anonymized commission reports
              (e.g., &ldquo;a sale was made&rdquo;).
            </li>
          </ul>
          <p className="mt-2">
            We are not responsible for the privacy practices of third-party
            websites. We encourage you to read their privacy policies
            before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Cookies</h2>
          <p className="mb-2">
            Cookies are small text files stored on your device. We use
            cookies for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Essential cookies:</strong> Required for basic site
              functionality.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand site
              usage and improve our content.
            </li>
            <li>
              <strong>Third-party cookies:</strong> Affiliate networks and
              analytics providers may set their own cookies when you
              interact with our site.
            </li>
          </ul>
          <p className="mt-2">
            You can control cookies through your browser settings. Blocking
            cookies may affect your experience on our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Your rights
          </h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:hello@conscious.rest"
              className="text-sage underline underline-offset-2"
            >
              hello@conscious.rest
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Children&apos;s privacy
          </h2>
          <p>
            Our site is not directed at children under 13. We do not
            knowingly collect personal information from children under 13.
            If you believe we have collected such information, please
            contact us and we will promptly remove it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">
            Changes to this policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes
            will be posted on this page with an updated &ldquo;last
            updated&rdquo; date. Your continued use of the site after
            changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">Contact us</h2>
          <p>
            If you have questions about this privacy policy, contact us
            at{" "}
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
