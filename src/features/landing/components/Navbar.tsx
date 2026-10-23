import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../../shared/utils/cn";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 h-[72px] bg-kinetic-surface border-b border-kinetic-border z-50 flex items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="font-barlow font-semibold text-[28px] tracking-[0.02em] uppercase text-kinetic-primary pt-1 leading-none">
            Kinetic Edge
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Team", "Conditions We Treat"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              className="text-kinetic-primary font-inter font-medium text-[15px] relative group overflow-hidden"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-kinetic-accent-1 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-250 ease-in-out" />
            </a>
          ))}
          <button
            className="bg-kinetic-accent-1 text-kinetic-surface font-inter font-semibold text-[15px] px-6 py-2.5 rounded hover:bg-[#007b94] transition-all duration-200 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-level-1 flex items-center gap-2 cursor-pointer"
            data-testid="navbar-start-recovery-button"
          >
            Start Your Recovery
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="translate-x-0 group-hover:translate-x-[2px] transition-transform"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu Toggle */}
        <button
          className="md:hidden text-kinetic-primary p-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open mobile navigation menu"
          data-testid="mobile-menu-toggle"
        >
          <Menu size={28} strokeWidth={2.5} />
        </button>

        {/* Global Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
          <div id="nav-progress" className="h-full bg-kinetic-accent-1 w-0" />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-kinetic-surface z-[100] flex flex-col justify-center px-8 border-l-4 border-kinetic-accent-1 animate-in slide-in-from-right-full duration-300">
          <button
            className="absolute top-6 right-6 p-2 text-kinetic-primary cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile navigation menu"
          >
            <X size={32} strokeWidth={2.5} />
          </button>
          <div className="flex flex-col gap-6">
            {["Services", "Team", "Conditions We Treat", "Book Now"].map(
              (label, i) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                  className="font-barlow font-bold text-[32px] uppercase text-kinetic-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animation: `slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${i * 0.06}s`,
                    opacity: 0,
                    transform: "translateX(40px)",
                  }}
                >
                  {label}
                </a>
              )
            )}
            <div className="mt-8 pt-8 border-t border-kinetic-border">
              <p className="font-inter text-kinetic-text-secondary text-sm mb-2">
                Call us directly
              </p>
              <a
                href="tel:1300000000"
                className="font-barlow font-bold text-[32px] text-kinetic-accent-1"
              >
                1300 000 000
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animation definition for mobile menu */}
      <style>{`
        @keyframes slideLeft {
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Spacer to prevent overlap since navbar is fixed */}
      <div className="h-[72px]" />
    </>
  );
}
