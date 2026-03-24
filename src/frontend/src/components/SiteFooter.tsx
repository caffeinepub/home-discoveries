import { SiInstagram, SiPinterest } from "react-icons/si";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "homediscoveries.com";

  return (
    <footer
      className="py-12 px-4"
      style={{
        backgroundColor: "oklch(0.22 0.008 220)",
        color: "oklch(0.9 0.01 68)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand + Links */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  backgroundColor: "oklch(0.916 0.024 68)",
                  color: "oklch(0.22 0.008 220)",
                }}
              >
                H
              </div>
              <span className="font-serif font-semibold text-lg">
                Home Discoveries
              </span>
            </div>
            <p
              className="text-sm mb-5"
              style={{ color: "oklch(0.7 0.015 68)" }}
            >
              Curated home decor ideas and inspiration for every style.
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                  { label: "Affiliate Disclosure", href: "#disclosure" },
                  { label: "Terms", href: "#terms" },
                  { label: "Privacy", href: "#privacy" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-75"
                      style={{ color: "oklch(0.78 0.015 68)" }}
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-serif font-semibold text-base mb-4">
              Follow Along
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.pinterest.com/Homediscoveries2688/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Visit our Pinterest page"
                data-ocid="footer.link"
              >
                <SiPinterest className="w-5 h-5" style={{ color: "#E60023" }} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-75"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Visit our Instagram page"
                data-ocid="footer.link"
              >
                <SiInstagram
                  className="w-5 h-5"
                  style={{ color: "oklch(0.88 0.015 68)" }}
                />
              </a>
            </div>
            <p
              className="mt-6 text-xs max-w-xs text-center"
              style={{ color: "oklch(0.62 0.015 68)" }}
            >
              As an Amazon Associate, I earn from qualifying purchases. This
              site contains affiliate links.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-2">
              Get Decor Inspo
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.7 0.015 68)" }}
            >
              Weekly home decor ideas delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "oklch(0.9 0.01 68)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                data-ocid="footer.input"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: "oklch(0.916 0.024 68)",
                  color: "oklch(0.22 0.008 220)",
                }}
                data-ocid="footer.submit_button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "oklch(0.58 0.012 68)",
          }}
        >
          <p>© {year} Home Discoveries. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
