import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/landingData";
import { cn } from "../../../shared/utils/cn";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".test-card");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        })
        .fromTo(
          cards[0] as Element,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          0
        )
        .fromTo(
          cards[1] as Element,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          0.12
        )
        .fromTo(
          cards[2] as Element,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          0.24
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 lg:px-12 bg-kinetic-surface relative border-y border-kinetic-primary-light overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2 className="font-barlow font-bold text-[38px] md:text-[46px] uppercase leading-tight text-kinetic-primary text-center mb-16">
          Proof in Motion
        </h2>

        {/* Mosaic Layout */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-0 lg:h-[400px] items-center lg:items-start justify-center">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className={cn(
                "test-card w-full max-w-[420px] bg-white border border-kinetic-border shadow-level-1 p-8 rounded-lg lg:absolute transform hover:-translate-y-2 lg:hover:rotate-0 hover:z-50 duration-300 transition-all",
                item.positionClass,
                item.rotationClass,
                item.zIndexClass
              )}
            >
              <Quote className="w-10 h-10 text-kinetic-accent-2 opacity-25 mb-4" />
              <p className="font-inter italic text-[17px] text-kinetic-text-secondary leading-[1.7] mb-6">
                "{item.quote}"
              </p>
              <p className="font-barlow font-semibold text-[18px] text-kinetic-primary">
                {item.author} — {item.conditionNote}
              </p>
              <p className="font-inter text-[13px] text-kinetic-accent-1 font-semibold uppercase mt-1">
                {item.recoveryNote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
