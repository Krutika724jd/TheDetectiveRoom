
import type { Achievement } from "../types/achievement";

export const achievements: Achievement[] = [
  {
    id: "first-case",
    title: "First Case",
    description: "Complete your first investigation.",
    icon: "trophy",
    isUnlocked: false,
  },
  {
    id: "evidence-expert",
    title: "Evidence Expert",
    description: "Discover every clue in a case.",
    icon: "search",
    isUnlocked: false,
  },
  {
    id: "perfect-investigation",
    title: "Perfect Investigation",
    description: "Discover every clue and correctly identify the culprit.",
    icon: "award",
    isUnlocked: false,
  },
    {
    id: "master-detective",
    title: "Master Detective",
    description: "Complete three investigations.",
    icon: "shield",
    isUnlocked: false,
  },
];
