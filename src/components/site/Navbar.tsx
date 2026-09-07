import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.asset.json";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/tenderly", label: "Tenderly" },
  { to: "/college", label: "College" },
  { to: "/co-curricular", label: "Co-curricular" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Cornerstone Schools logo"
            width={48}
            height={48}
            className="size-11 shrink-0"
          />
          <span
            className={cn(
              "flex flex-col leading-none transition-colors",
              scrolled || open ? "text-foreground" : "text-primary-foreground",
            )}
          >
            <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
              Cornerstone Schools
            </span>
            <span className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] opacity-70">
              Exalted of God
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  "after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100",
                  scrolled
                    ? "text-foreground/80 hover:text-primary data-[status=active]:text-primary"
                    : "text-primary-foreground/85 hover:text-primary-foreground data-[status=active]:text-primary-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              to="/about"
              hash="admissions"
              className="inline-flex items-center bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Apply for Admission
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-11 items-center justify-center border transition-colors lg:hidden",
            scrolled || open
              ? "border-border text-foreground"
              : "border-primary-foreground/40 text-primary-foreground",
          )}
        >
          {open ? <Menu className="size-5 hidden" /> : null}
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 text-base font-medium text-foreground/85 transition-colors data-[status=active]:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link
              to="/about"
              hash="admissions"
              onClick={() => setOpen(false)}
              className="block bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Apply for Admission
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
