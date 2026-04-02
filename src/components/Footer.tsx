import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sand-dark mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="font-semibold text-ink mb-2">Conscious Rest</p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Mattress reviews informed by the Alexander Technique. We
              believe your body doesn&apos;t need to be held &mdash; it
              needs to be free.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Navigate</p>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/philosophy" className="text-ink-muted hover:text-sage">
                Our Philosophy
              </Link>
              <Link href="/reviews" className="text-ink-muted hover:text-sage">
                Mattress Reviews
              </Link>
              <Link href="/quiz" className="text-ink-muted hover:text-sage">
                Find Your Mattress
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Company</p>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/about" className="text-ink-muted hover:text-sage">
                About Us
              </Link>
              <Link href="/contact" className="text-ink-muted hover:text-sage">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-ink mb-2">Legal</p>
            <div className="flex flex-col gap-1.5 text-sm">
              <Link href="/disclosure" className="text-ink-muted hover:text-sage">
                Affiliate Disclosure
              </Link>
              <Link href="/privacy" className="text-ink-muted hover:text-sage">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-ink-muted hover:text-sage">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-sand-dark text-xs text-ink-muted">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <span>
              &copy; {new Date().getFullYear()} Conscious Rest. All rights
              reserved.
            </span>
            <span>
              As an Amazon Associate, we earn from qualifying purchases.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
