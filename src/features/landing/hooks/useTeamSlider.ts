import gsap from "gsap";
import { useRef, useState } from "react";
import { TEAM_MEMBERS_DATA } from "../data/landingData";

export function useTeamSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < TEAM_MEMBERS_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          xPercent: -100 * nextIndex,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          xPercent: -100 * prevIndex,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }
  };

  return {
    trackRef,
    currentIndex,
    team: TEAM_MEMBERS_DATA,
    nextSlide,
    prevSlide,
    isFirst: currentIndex === 0,
    isLast: currentIndex === TEAM_MEMBERS_DATA.length - 1,
  };
}
