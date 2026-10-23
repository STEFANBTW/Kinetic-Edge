import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTeamSlider } from "../hooks/useTeamSlider";

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { trackRef, team, nextSlide, prevSlide, isFirst, isLast } =
    useTeamSlider();

  useGSAP(
    () => {
      gsap.fromTo(
        ".team-card-initial",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 70%" },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="team"
      ref={containerRef}
      className="py-24 px-6 lg:px-12 bg-kinetic-bg overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-barlow font-bold text-[38px] md:text-[46px] uppercase leading-tight text-kinetic-primary">
              Your Recovery Team
            </h2>
            <p className="font-inter text-kinetic-text-secondary text-[17px] mt-2 max-w-[600px]">
              Every practitioner here is heavily trained in strength and
              conditioning. We celebrate milestones like game day.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              disabled={isFirst}
              data-testid="team-prev-button"
              className="w-12 h-12 rounded bg-kinetic-surface border border-kinetic-border flex items-center justify-center text-kinetic-primary hover:bg-kinetic-primary-light hover:border-kinetic-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Previous team member"
            >
              <ChevronLeft strokeWidth={2.5} size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={isLast}
              data-testid="team-next-button"
              className="w-12 h-12 rounded bg-kinetic-surface border border-kinetic-border flex items-center justify-center text-kinetic-primary hover:bg-kinetic-primary-light hover:border-kinetic-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Next team member"
            >
              <ChevronRight strokeWidth={2.5} size={24} />
            </button>
          </div>
        </div>

        {/* Track Viewport */}
        <div className="relative w-full overflow-hidden team-card-initial rounded-lg shadow-level-1">
          <div
            ref={trackRef}
            className="flex relative w-full"
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="min-w-full w-full flex-shrink-0 flex flex-col md:flex-row bg-kinetic-surface"
              >
                {/* Image Half */}
                <div className="w-full md:w-1/2 h-[350px] md:h-[450px]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover img-kinetic object-top"
                  />
                </div>

                {/* Text Half */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h3 className="font-barlow font-bold text-[32px] md:text-[40px] uppercase text-kinetic-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter font-semibold text-[15px] text-kinetic-accent-1 tracking-wide mb-1 uppercase">
                    {member.role}
                  </p>
                  <p className="font-inter text-kinetic-text-muted text-[14px] mb-8">
                    {member.creds}
                  </p>

                  <div className="relative pl-6 border-l-[3px] border-kinetic-accent-2 bg-kinetic-bg p-6 rounded-r">
                    <p className="font-inter italic text-[17px] text-kinetic-primary leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
