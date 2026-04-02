import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-sand-dark">
      <nav className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-xl font-semibold tracking-tight text-ink">
            Conscious Rest
          </span>
          <span className="block text-xs text-ink-muted tracking-widest uppercase">
            Mattress reviews rooted in body awareness
          </span>
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/about"
            className="text-ink-light hover:text-sage transition-colors"
          >
            About
          </Link>
          <Link
            href="/philosophy"
            className="text-ink-light hover:text-sage transition-colors"
          >
            Our Philosophy
          </Link>
          <Link
            href="/reviews"
            className="text-ink-light hover:text-sage transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="/quiz"
            className="bg-sage text-white px-4 py-2 rounded-md hover:bg-sage-dark transition-colors"
          >
            Find Your Mattress
          </Link>
        </div>
      </nav>
    </header>
  );
}
