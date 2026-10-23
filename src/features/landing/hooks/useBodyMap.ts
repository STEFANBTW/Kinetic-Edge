import { useState } from "react";
import { CONDITIONS_DATA } from "../data/landingData";
import { ConditionArea } from "../types/landing.types";

export function useBodyMap() {
  // Default to lower back
  const defaultArea = CONDITIONS_DATA[1] ?? CONDITIONS_DATA[0]!;
  const [activeArea, setActiveArea] = useState<ConditionArea>(defaultArea);

  return {
    conditions: CONDITIONS_DATA,
    activeArea,
    selectArea: (area: ConditionArea) => setActiveArea(area),
  };
}
