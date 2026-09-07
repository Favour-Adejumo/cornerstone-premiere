import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";


const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/tenderly", label: "Tenderly" },
  { to: "/college", label: "College" },
  { to: "/about", label: "About" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center bg-primary-foreground p-1">
              <img
                src="/logo.jpg"
                alt="Cornerstone Schools logo"
                width={56}
                height={56}
                loading="lazy"
                className="size-full object-contain"
              />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold">Cornerstone Schools</span>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.3em] opacity-70">
                Exalted of God
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-80">
            Raising disciplined and excellent students for the future through quality education and
            strong values.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Quick Links
          </h2>
          <ul className="mt-6 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contact</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="opacity-85">Olakunle Bus-stop, Apata, Ibadan</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="tel:+2349064367102" className="opacity-85 hover:opacity-100">
                +2349064367102
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href="mailto:cornerstoneschools1@gmail.com"
                className="break-all opacity-85 hover:opacity-100"
              >
                cornerstoneschools1@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs opacity-70 sm:px-8">
          © 2026 Cornerstone Schools. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
