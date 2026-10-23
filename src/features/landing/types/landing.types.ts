export interface Pillar {
  id: string;
  title: string;
  desc: string;
  iconName: "Dumbbell" | "Target" | "Users";
}

export interface ConditionArea {
  id: string;
  label: string;
  x: string;
  y: string;
  content: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  creds: string;
  quote: string;
  img: string;
}

export interface Testimonial {
  id: string;
  author: string;
  conditionNote: string;
  recoveryNote: string;
  quote: string;
  rotationClass: string;
  positionClass: string;
  zIndexClass: string;
}

export interface BookingFormData {
  fullName: string;
  contactDetails: string;
  areaOfConcern: string;
  goal?: string;
}
