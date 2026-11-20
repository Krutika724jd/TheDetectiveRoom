export interface CaseHistory {
  caseId: string;
  caseTitle: string;
  score: number;
  rating: string;
  isCorrectAccusation: boolean;
  discoveredClues: number;
  totalClues: number;
  completedAt: string;
}

export interface PlayerProfile {
  detectiveName: string;
  totalPoints: number;
  completedCases: number;
  bestRating: string;
  caseHistory: CaseHistory[];
  achievements: {
    achievementId: string;
    unlockedAt: string;
  }[];
}
