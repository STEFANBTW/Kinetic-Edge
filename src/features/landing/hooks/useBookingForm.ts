import gsap from "gsap";
import React, { useState } from "react";
import { BookingFormData } from "../types/landing.types";

export function useBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    contactDetails: "",
    areaOfConcern: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tl = gsap.timeline();
    tl.to(".form-content", {
      x: 40,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    })
      .call(() => setSubmitted(true))
      .fromTo(
        ".success-content",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
  };

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData((prev: BookingFormData) => ({ ...prev, [field]: value }));
  };

  return {
    submitted,
    formData,
    updateField,
    handleSubmit,
  };
}
