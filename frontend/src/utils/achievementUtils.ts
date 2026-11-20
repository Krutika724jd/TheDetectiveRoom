import type { Achievement } from "../types/achievement";
import { achievements } from "../data/achievements";

export const getNewAchievements = (
  completedCases: number,
  discoveredClues: number,
  totalClues: number,
  isCorrectAccusation: boolean,
  alreadyUnlocked: string[]
): Achievement[] => {
  return achievements.filter((achievement) => {
    if (alreadyUnlocked?.includes(achievement.id)) {
      return false;
    }

    if (achievement.id === "first-case" && completedCases >= 1) {
      return true;
    }

    if (
      achievement.id === "evidence-expert" &&
      discoveredClues === totalClues
    ) {
      return true;
    }

    if (
      achievement.id === "perfect-investigation" &&
      discoveredClues === totalClues &&
      isCorrectAccusation
    ) {
      return true;
    }
    if (achievement.id === "master-detective" && completedCases >= 3) {
      return true;
    }
    return false;
  });
};