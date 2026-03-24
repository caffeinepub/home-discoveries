import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { SiPinterest } from "react-icons/si";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Shop", href: "#products" },
    { label: "Inspo", href: "#boards" },
    { label: "Trends", href: "#boards" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border"
      style={{ backgroundColor: "oklch(0.96 0.012 72)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 shrink-0"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: "oklch(0.26 0.012 220)" }}
            >
              H
            </div>
            <span
              className="font-serif font-semibold text-lg hidden sm:block"
              style={{ color: "oklch(0.18 0.02 45)" }}
            >
              Home Discoveries
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                style={{ color: "oklch(0.52 0.022 55)" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search + Pinterest */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "oklch(0.52 0.022 55)" }}
              />
              <input
                type="search"
                placeholder="Search decor ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
                data-ocid="nav.search_input"
              />
            </div>
            <a
              href="https://www.pinterest.com/Homediscoveries2688/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "#E60023" }}
              data-ocid="nav.link"
            >
              <SiPinterest className="w-4 h-4" />
              <span className="hidden lg:inline">Saved</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium py-1"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-border bg-white/60 focus:outline-none"
                data-ocid="nav.search_input"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
