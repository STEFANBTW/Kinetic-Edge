import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useBodyMap } from "../hooks/useBodyMap";

export default function BodyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { conditions, activeArea, selectArea } = useBodyMap();

  useGSAP(
    () => {
      // Reveal map and spots on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      tl.fromTo(
        ".body-map-outline",
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        ".hotspot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.3)",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="conditions-we-treat"
      ref={containerRef}
      className="py-24 px-6 lg:px-12 bg-kinetic-surface relative border-y border-kinetic-primary-light"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #121820 1px, transparent 1px), linear-gradient(to bottom, #121820 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left: Interactive Body Map */}
        <div className="w-full lg:w-1/2 flex justify-center relative min-h-[400px] lg:min-h-[600px] body-map-outline">
          <div className="relative w-full max-w-[400px] aspect-[3/4]">
            <img 
              src="/src/assets/images/athlete_anatomy_model_1784732597631.jpg"
              alt="Anatomical Body Map"
              className="w-full h-full object-cover mix-blend-multiply drop-shadow-md opacity-80 grayscale rounded-lg"
            />

            {/* Hotspots */}
            {conditions.map((cond) => (
              <button
                key={cond.id}
                data-testid={`bodymap-hotspot-${cond.id}`}
                className="hotspot absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 z-20 focus:outline-none cursor-pointer group"
                style={{ top: cond.y, left: cond.x }}
                onClick={() => selectArea(cond)}
                onMouseEnter={() => selectArea(cond)}
                aria-label={cond.label}
              >
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 transition-colors duration-300 relative ${
                    activeArea.id === cond.id
                      ? "bg-kinetic-accent-2 border-white"
                      : "bg-kinetic-accent-2/60 border-kinetic-surface hover:bg-kinetic-accent-2"
                  }`}
                >
                  {activeArea.id === cond.id && (
                    <div className="absolute inset-0 rounded-full bg-kinetic-accent-2 opacity-50 animate-ping" />
                  )}
                </div>
                
                {/* Always show a small label next to hotspot for clarity */}
                <span className="absolute left-full ml-3 bg-kinetic-surface/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-inter font-semibold text-kinetic-primary shadow-sm border border-kinetic-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {cond.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content Panel */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <h2 className="font-barlow font-bold text-[38px] md:text-[46px] uppercase leading-tight text-kinetic-primary">
              Where does it hurt?
            </h2>
            <p className="font-inter text-kinetic-text-secondary text-[17px] mt-2">
              Select an area on the map to see common pathways we treat.
            </p>
          </div>

          {/* Condition Detail Card (Crossfade via React Key) */}
          <div
            key={activeArea.id}
            className="bg-kinetic-bg border border-kinetic-border p-8 rounded-lg shadow-level-1 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out fill-mode-both"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-kinetic-accent-1 rounded-sm" />
              <h3 className="font-barlow font-bold text-[32px] uppercase text-kinetic-primary">
                {activeArea.label}
              </h3>
            </div>

            <ul className="space-y-4 mb-8">
              {activeArea.content.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-kinetic-accent-2 mt-2.5 flex-shrink-0" />
                  <span className="font-inter text-[16px] text-kinetic-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex items-center gap-2 font-inter font-semibold text-[15px] text-kinetic-accent-1 hover:text-[#007b94] group transition-colors"
            >
              Discuss this with a physio
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
