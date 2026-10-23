import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "../../../assets/images/physio_hero_1784731738015.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0.0s Image and Panel sync
      tl.fromTo(
        ".hero-img-container",
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0
      );
      tl.fromTo(
        ".hero-panel",
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0
      );
      // Custom clip path animation
      tl.fromTo(
        ".hero-img-container",
        { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, calc(100% - 15vw) 100%, 0 100%)",
          duration: 0.7,
        },
        0
      );

      // 0.4s Badge pop
      tl.fromTo(
        ".hero-badge",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.3)" },
        0.4
      );

      // 0.7s Headline word reveal
      tl.fromTo(
        ".hero-hl-word",
        { x: -8, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: "power2.out" },
        0.7
      );

      // 1.3s Sub-statement
      tl.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        1.3
      );

      // 1.5s CTAs
      tl.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
        1.5
      );

      // Add pulse class to CTA after a delay
      gsap.delayedCall(2.1, () => {
        // Pulse removed per feedback
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden velocity-lines bg-kinetic-bg"
    >
      {/* Left: Image (55% width desktop) */}
      <div
        className="hero-img-container w-full md:w-[70vw] h-[50vh] md:h-auto absolute left-0 top-0 bottom-0 z-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, calc(100% - 15vw) 100%, 0 100%)",
        }}
      >
        <img
          src={heroImg}
          alt="Physiotherapist working with patient"
          className="w-full h-full object-cover object-center img-kinetic opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kinetic-primary/60 to-transparent mix-blend-multiply" />
      </div>

      {/* Right: Content Panel */}
      <div className="hero-panel relative z-10 w-full md:w-[60%] lg:w-[50%] mt-[40vh] md:mt-0 ml-auto flex flex-col justify-center items-end p-8 md:p-16 lg:p-24 lg:pl-16 bg-kinetic-surface/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none text-right">
        <div className="max-w-[720px] flex flex-col items-end">
          <div className="hero-badge inline-block bg-kinetic-accent-2 text-white font-inter text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-6">
            Results-Driven Rehab
          </div>

          <h1 className="font-barlow font-bold text-[36px] md:text-[44px] lg:text-[64px] leading-[1.05] tracking-[-0.01em] text-kinetic-primary mb-4 text-right flex flex-wrap justify-end gap-x-[0.25em] gap-y-1">
            {"Get back to the life you love — stronger than before."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="hero-hl-word inline-block">
                  {word}
                </span>
              ))}
          </h1>

          <div className="relative mb-6 pt-2">
            <p className="hero-sub font-inter text-[16px] md:text-[17px] text-kinetic-text-secondary leading-[1.8] text-right max-w-[380px]">
              <strong className="text-kinetic-primary font-semibold">
                Kinetic Edge Physiotherapy
              </strong>{" "}
              — elite-level rehabilitation for everyday athletes. Right here in
              Melbourne. We know exactly how to get you from here to there.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-end sm:items-center justify-end gap-6 mt-8">
            <button
              className="hero-cta bg-kinetic-accent-1 text-[15px] font-inter font-semibold text-white px-8 py-3.5 rounded hover:bg-[#007b94] transition-all duration-200 hover:-translate-y-1 hover:translate-x-0.5 shadow-level-1 flex items-center gap-2 cursor-pointer"
              data-testid="hero-start-recovery-button"
            >
              Start Your Recovery
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <a
              href="#conditions"
              className="hero-cta font-inter text-[15px] font-semibold text-kinetic-primary flex items-center gap-1 group"
            >
              See Conditions We Treat
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="text-kinetic-accent-1 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
