import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Dumbbell, Target, Users } from "lucide-react";
import { PILLARS_DATA } from "../data/landingData";

export default function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 3 Pillars animation driven by scroll
      const cards = gsap.utils.toArray(".pillar-card");
      const icons = gsap.utils.toArray(".pillar-icon");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        })
        .fromTo(
          cards[0] as Element,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
          0
        )
        .fromTo(
          cards[1] as Element,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
          0.1
        )
        .fromTo(
          cards[2] as Element,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
          0.2
        );

      icons.forEach((icon, i) => {
        gsap.fromTo(
          icon as Element,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.2)",
            delay: 0.2 + i * 0.1,
            scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className="w-8 h-8 text-white" strokeWidth={2.5} />;
      case "Target":
        return <Target className="w-8 h-8 text-white" strokeWidth={2.5} />;
      case "Users":
        return <Users className="w-8 h-8 text-white" strokeWidth={2.5} />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 lg:px-12 bg-kinetic-bg relative z-20"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="sr-only">Our Methodology</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card bg-kinetic-surface p-8 lg:p-10 shadow-level-1 transform transition-all duration-300 hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-level-2 group border border-transparent hover:border-kinetic-accent-1/30 relative"
              style={{
                borderRadius: "8px",
                clipPath: "polygon(0 3%, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="pillar-icon w-16 h-16 rounded flex items-center justify-center bg-kinetic-accent-1 mb-6 transform-origin-center">
                {renderIcon(pillar.iconName)}
              </div>
              <h3 className="font-barlow font-semibold text-[32px] uppercase text-kinetic-primary leading-tight mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-[16px] text-kinetic-text-secondary leading-[1.6]">
                {pillar.desc}
              </p>

              {/* Decorative subtle element */}
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-16 h-[2px] bg-kinetic-accent-1 rotate-45 transform origin-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
