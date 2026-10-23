import { ConditionArea, Pillar, TeamMember, Testimonial } from "../types/landing.types";
import jackImg from "../../../assets/images/physio_jack_1784731754629.jpg";
import sarahImg from "../../../assets/images/physio_sarah_1784731769068.jpg";
import marcusImg from "../../../assets/images/physio_marcus_1784731782137.jpg";

export const PILLARS_DATA: Pillar[] = [
  {
    id: "active",
    title: "Active, Not Passive",
    desc: "We don't do endless manual therapy. We load, strengthen, and progress to build lasting resilience.",
    iconName: "Dumbbell",
  },
  {
    id: "measured",
    title: "Measured, Not Guessed",
    desc: "Every session is tracked with objective metrics so you see your physical progress clearly.",
    iconName: "Target",
  },
  {
    id: "team",
    title: "Team-Based, Not Solo",
    desc: "You get a physio, an exercise physiologist, and a rehab coach working together on your case.",
    iconName: "Users",
  },
];

export const CONDITIONS_DATA: ConditionArea[] = [
  {
    id: "shoulder",
    label: "Shoulder & Neck",
    x: "68%",
    y: "26%",
    content: [
      "Rotator cuff injuries",
      "Frozen shoulder",
      "Post-surgical shoulder rehab",
      "Neck stiffness & tension headaches",
    ],
  },
  {
    id: "elbow",
    label: "Elbow & Wrist",
    x: "25%",
    y: "44%",
    content: [
      "Tennis & golfer's elbow",
      "Wrist sprains",
      "Carpal tunnel syndrome",
      "Post-fracture stiffness",
    ],
  },
  {
    id: "back",
    label: "Lower Back & Spine",
    x: "50%",
    y: "45%",
    content: [
      "Sciatica & nerve pain",
      "Disc bulges & herniations",
      "Chronic lower back ache",
      "Post-op spinal fusion",
    ],
  },
  {
    id: "hip",
    label: "Hip & Groin",
    x: "58%",
    y: "56%",
    content: [
      "Hip impingement & replacement",
      "Osteoarthritis management",
      "Groin strains & athletic pubalgia",
      "Gluteal tendinosis",
    ],
  },
  {
    id: "knee",
    label: "Knee",
    x: "36%",
    y: "74%",
    content: [
      "ACL & meniscus recovery",
      "Patellofemoral pain",
      "Osteoarthritis protocols",
      "ITB syndrome",
    ],
  },
  {
    id: "calf",
    label: "Calf & Shin",
    x: "64%",
    y: "83%",
    content: [
      "Shin splints",
      "Calf strains",
      "Compartment syndrome",
      "Stress fractures",
    ],
  },
  {
    id: "ankle",
    label: "Ankle & Foot",
    x: "35%",
    y: "92%",
    content: [
      "Achilles tendinopathy",
      "Ankle sprains & instability",
      "Plantar fasciitis",
      "Post-fracture rehab",
    ],
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "jack",
    name: "Jack Morrison",
    role: "Lead Physiotherapist & S&C Coach",
    creds: "B.Phty, Mast. Sports Rehab",
    quote: "Rehabilitation is just training in the presence of an injury. We don't stop moving, we move smarter.",
    img: jackImg,
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Exercise Physiologist",
    creds: "B.ExSc, ESSAM AEP",
    quote: "Your body adapts to what you demand of it. My job is to help you send it the right signals.",
    img: sarahImg,
  },
  {
    id: "marcus",
    name: "Dr. Marcus Chen",
    role: "Post-Operative Specialist",
    creds: "DPT, OCS",
    quote: "Surgery fixes the structure; we restore the function. The real work begins after you leave the hospital.",
    img: marcusImg,
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "sarah-acl",
    author: "Sarah",
    conditionNote: "ACL reconstruction",
    recoveryNote: "Back to netball in 7 months",
    quote: "I had given up on running after two years of knee pain. They didn't just rub it; they loaded it and taught me how to move. Ran my first 10k pain-free last week.",
    rotationClass: "lg:-rotate-1",
    positionClass: "lg:top-0 lg:left-[5%]",
    zIndexClass: "z-20",
  },
  {
    id: "michael-hip",
    author: "Michael",
    conditionNote: "Hip & Groin Rehab",
    recoveryNote: "Pain-free golfing",
    quote: "Unlike other clinics where you just lie on a bed, Kinetic is an active gym. They made me feel like an athlete again, even though I'm 62 recovering from a hip subluxation.",
    rotationClass: "lg:rotate-1",
    positionClass: "lg:top-12 lg:right-[5%]",
    zIndexClass: "z-10",
  },
  {
    id: "elena-back",
    author: "Elena",
    conditionNote: "Chronic Back Pain",
    recoveryNote: "Lifting heavy again",
    quote: "The objective measurements changed everything. Seeing my strength metrics improve week over week kept me fiercely motivated to do my homework exercises.",
    rotationClass: "lg:-rotate-1",
    positionClass: "lg:top-32 lg:left-[30%]",
    zIndexClass: "z-30",
  },
];
