import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useBookingForm } from "../hooks/useBookingForm";

export default function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { submitted, formData, updateField, handleSubmit } = useBookingForm();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      tl.fromTo(
        ".booking-img",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
        0
      );

      tl.fromTo(
        ".booking-form-col",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
        0
      );

      tl.fromTo(
        ".booking-field",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
        0.3
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="book-now"
      ref={containerRef}
      className="bg-kinetic-bg relative overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Left: Image */}
      <div className="booking-img w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[600px] relative">
        <img
          src="/src/assets/images/booking_physio_1784731794819.jpg"
          alt="Confident physiotherapist smiling in gym"
          className="absolute inset-0 w-full h-full object-cover img-kinetic"
        />
      </div>

      {/* Right: Form */}
      <div className="booking-form-col w-full lg:w-1/2 bg-kinetic-surface flex flex-col justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
        {!submitted ? (
          <div className="form-content max-w-[500px] mx-auto w-full relative z-10">
            <div className="booking-field mb-10">
              <h2 className="font-barlow font-bold text-[38px] md:text-[46px] uppercase leading-none text-kinetic-primary mb-4">
                Take Your First Step
              </h2>
              <div className="flex items-center gap-3 text-kinetic-text-secondary font-inter">
                <Phone size={20} className="text-kinetic-accent-1" />
                <p>
                  Prefer to talk?{" "}
                  <a
                    href="tel:1300000000"
                    className="font-barlow text-[24px] text-kinetic-accent-1 font-semibold ml-1"
                  >
                    1300 000 000
                  </a>
                </p>
              </div>
              <p className="text-sm mt-1 text-kinetic-text-muted italic">
                We answer with a real human.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-testid="booking-form"
            >
              <div className="booking-field">
                <label className="block font-inter text-[14px] font-medium text-kinetic-text-secondary mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full bg-kinetic-bg border border-kinetic-border rounded px-4 py-3 font-inter text-[15px] focus:outline-none focus:border-kinetic-accent-1 focus:ring-2 focus:ring-kinetic-accent-1/20 transition-all text-kinetic-primary"
                  placeholder="Your name"
                />
              </div>

              <div className="booking-field">
                <label className="block font-inter text-[14px] font-medium text-kinetic-text-secondary mb-1">
                  Contact Details
                </label>
                <input
                  required
                  type="text"
                  value={formData.contactDetails}
                  onChange={(e) =>
                    updateField("contactDetails", e.target.value)
                  }
                  className="w-full bg-kinetic-bg border border-kinetic-border rounded px-4 py-3 font-inter text-[15px] focus:outline-none focus:border-kinetic-accent-1 focus:ring-2 focus:ring-kinetic-accent-1/20 transition-all text-kinetic-primary"
                  placeholder="Phone or email"
                />
              </div>

              <div className="booking-field">
                <label className="block font-inter text-[14px] font-medium text-kinetic-text-secondary mb-1">
                  Area of Concern
                </label>
                <select
                  value={formData.areaOfConcern}
                  onChange={(e) => updateField("areaOfConcern", e.target.value)}
                  className="w-full bg-kinetic-bg border border-kinetic-border rounded px-4 py-3 font-inter text-[15px] focus:outline-none focus:border-kinetic-accent-1 focus:ring-2 focus:ring-kinetic-accent-1/20 transition-all text-kinetic-primary"
                >
                  <option value="">Select an area</option>
                  <option value="neck-shoulder">Neck & Shoulder</option>
                  <option value="back">Lower Back & Spine</option>
                  <option value="hip-groin">Hip & Groin</option>
                  <option value="knee">Knee</option>
                  <option value="ankle-foot">Ankle & Foot</option>
                  <option value="other">Other / General</option>
                </select>
              </div>

              <div className="booking-field">
                <label className="block font-inter text-[14px] font-medium text-kinetic-text-secondary mb-1">
                  Tell us your goal (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.goal ?? ""}
                  onChange={(e) => updateField("goal", e.target.value)}
                  className="w-full bg-kinetic-bg border border-kinetic-border rounded px-4 py-3 font-inter text-[15px] focus:outline-none focus:border-kinetic-accent-1 focus:ring-2 focus:ring-kinetic-accent-1/20 transition-all resize-none text-kinetic-primary"
                  placeholder="What do you want to get back to doing?"
                ></textarea>
              </div>

              <div className="booking-field pt-2">
                <button
                  type="submit"
                  data-testid="booking-submit-button"
                  className="w-full bg-kinetic-accent-1 text-white font-inter font-semibold text-[15px] py-4 rounded hover:bg-[#007b94] transition-all hover:shadow-level-1 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Book Your Free Phone Consult
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="success-content max-w-[500px] mx-auto w-full relative z-10 hidden">
            <div className="w-16 h-16 rounded-full bg-kinetic-green/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-kinetic-green">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <h2 className="font-barlow font-bold text-[38px] md:text-[46px] uppercase leading-none text-kinetic-primary mb-4">
              Let's go.
            </h2>
            <p className="font-inter text-[17px] text-kinetic-text-secondary leading-relaxed">
              We've received your request. One of our specialists will call you
              within 24 hours to discuss your goals and get you scheduled.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
