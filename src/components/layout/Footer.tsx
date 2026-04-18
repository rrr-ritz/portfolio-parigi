import Link from "next/link";

const CONTACTS = [
  { label: "Email", href: "mailto:pgill123@terpmail.umd.edu" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pari-gill" },
];

const SECONDARY_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Miscellany", href: "/miscellany" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-espresso/10 bg-cream">
      <div className="mx-auto flex max-w-[1514px] flex-col gap-8 px-5 py-12 md:px-[calc(18/1514*100%)] md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl text-espresso md:text-5xl">Pari Gill</p>
            <p className="mt-2 font-serif text-muted">Product Designer</p>
          </div>

          <ul className="flex flex-wrap gap-6">
            {CONTACTS.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="font-serif text-lg text-espresso underline decoration-espresso/30 underline-offset-4 transition-colors hover:decoration-espresso"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-espresso/10 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-6">
            {SECONDARY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-serif text-sm text-muted transition-colors hover:text-espresso"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-serif text-sm text-muted">
            Designed by Pari Gill · © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
