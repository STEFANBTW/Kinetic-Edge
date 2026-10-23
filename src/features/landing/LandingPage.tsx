import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import {
  BodyMap,
  Booking,
  Footer,
  Hero,
  Navbar,
  Pillars,
  Team,
  Testimonials,
} from "./";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function LandingPage() {
  const appRef = useRef<HTMLDivElement>(null);

  // Setup global scrub for navbar progress
  useGSAP(
    () => {
      gsap.to("#nav-progress", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.05,
        },
      });
    },
    { scope: appRef }
  );

  return (
    <div
      ref={appRef}
      className="min-h-screen relative font-inter bg-kinetic-bg text-kinetic-primary overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <Pillars />
      <BodyMap />
      <Team />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}
