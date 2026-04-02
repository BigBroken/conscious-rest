import Link from "next/link";

export default function AffiliateDisclosureBanner() {
  return (
    <div className="bg-warm-light border border-sand-dark rounded-md px-4 py-3 mb-8 text-sm text-ink-muted">
      <strong className="text-ink-light">Disclosure:</strong> This page
      contains affiliate links. If you purchase a mattress through our
      links, we may earn a commission at no extra cost to you. This never
      influences our ratings &mdash; every mattress is scored using our{" "}
      <Link
        href="/philosophy"
        className="text-sage underline underline-offset-2"
      >
        6-pillar framework
      </Link>
      .{" "}
      <Link
        href="/disclosure"
        className="text-sage underline underline-offset-2"
      >
        Learn more.
      </Link>
    </div>
  );
}
