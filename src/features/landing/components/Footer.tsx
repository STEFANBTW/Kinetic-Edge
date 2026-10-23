import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      tl.fromTo(
        ".footer-col",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
        0
      );

      tl.fromTo(
        ".footer-sketch",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
        "+=0.2"
      );

      tl.fromTo(
        ".footer-grounding",
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.8, ease: "power2.inOut" },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      ref={containerRef}
      className="bg-kinetic-primary text-white pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
        {/* Col 1 */}
        <div className="footer-col flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-barlow font-semibold text-[28px] tracking-[0.02em] uppercase leading-none pt-1">
              Kinetic Edge
            </span>
          </div>
          <p className="font-inter text-kinetic-text-muted text-[15px] leading-relaxed max-w-[280px]">
            Elite-level rehabilitation for everyday athletes. We measure every
            step of your progress.
          </p>
        </div>

        {/* Col 2 */}
        <div className="footer-col flex flex-col items-center md:items-start">
          <h4 className="font-inter font-semibold text-white mb-4 uppercase tracking-wider text-[13px]">
            Quick Links
          </h4>
          <ul className="space-y-3 font-inter text-[15px] text-kinetic-text-muted">
            <li>
              <a
                href="#services"
                className="hover:text-kinetic-accent-1 transition-colors"
              >
                Our Methodology
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-kinetic-accent-1 transition-colors"
              >
                The Team
              </a>
            </li>
            <li>
              <a
                href="#conditions-we-treat"
                className="hover:text-kinetic-accent-1 transition-colors"
              >
                Conditions We Treat
              </a>
            </li>
            <li>
              <a
                href="#book-now"
                className="hover:text-kinetic-accent-1 transition-colors"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="footer-col flex flex-col items-center md:items-start">
          <h4 className="font-inter font-semibold text-white mb-4 uppercase tracking-wider text-[13px]">
            Contact Location
          </h4>
          <p className="font-inter text-[15px] text-kinetic-text-muted mb-2">
            100 Active Way
          </p>
          <p className="font-inter text-[15px] text-kinetic-text-muted mb-6">
            Melbourne, VIC 3000
          </p>
          <a
            href="tel:1300000000"
            className="font-barlow font-bold text-[28px] text-kinetic-accent-1 hover:text-[#007b94] transition-colors"
          >
            1300 000 000
          </a>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        <p className="footer-sketch font-sketch text-[28px] text-white/90 mb-12">
          get back out there
        </p>

        {/* The Grounding Line */}
        <div className="w-full flex justify-center mb-6">
          <div className="footer-grounding h-[3px] bg-kinetic-accent-2 shadow-[0_0_12px_rgba(240,125,58,0.5)] w-full" />
        </div>

        <div className="w-full flex justify-between items-center font-inter text-[13px] text-kinetic-text-muted">
          <p>&copy; {new Date().getFullYear()} Kinetic Edge Physiotherapy.</p>
          <p>Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
