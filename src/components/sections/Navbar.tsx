import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Scroll links — only work on home page, otherwise navigate home + anchor
const scrollLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Page links — always navigate to their route
const pageLinks = [
  { label: "Timeline", href: "/timeline" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleScrollLink = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home, then let the browser handle the hash
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-text hover:text-primary transition-colors duration-200"
        >
          farhan<span className="text-primary">.</span>dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {/* Scroll links */}
          {scrollLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleScrollLink(link.href)}
                className="px-3 py-1.5 text-sm text-muted hover:text-text transition-colors duration-200 cursor-pointer rounded-md hover:bg-card"
              >
                {link.label}
              </button>
            </li>
          ))}

          {/* Divider */}
          <li className="mx-1 h-4 w-px bg-border" />

          {/* Page links */}
          {pageLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm transition-colors duration-200 rounded-md",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted hover:text-text hover:bg-card",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/farhanmaul987"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors duration-200"
          >
            GitHub
          </a>
          <button
            onClick={() => handleScrollLink("#contact")}
            className="inline-flex h-9 items-center px-4 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <ul className="section-container flex flex-col py-4 gap-0.5">
            {scrollLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleScrollLink(link.href)}
                  className="w-full text-left px-2 py-2.5 text-sm text-muted hover:text-text rounded-md hover:bg-card transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="my-2 border-t border-border" />

            {pageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "block px-2 py-2.5 text-sm rounded-md transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted hover:text-text hover:bg-card",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="my-2 border-t border-border" />

            <li>
              <a
                href="https://github.com/farhanmaul987"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2.5 text-sm text-muted hover:text-text rounded-md hover:bg-card transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
