import type { CaseHistory, PlayerProfile } from "../types/player";

const PLAYER_STORAGE_KEY = "detective-room-player";

const defaultPlayer: PlayerProfile = {
  detectiveName: "Detective",
  totalPoints: 0,
  completedCases: 0,
  bestRating: "C",
  caseHistory: [],
};

export const getPlayerProfile = (): PlayerProfile => {
  const storedProfile = localStorage.getItem(PLAYER_STORAGE_KEY);

  if (!storedProfile) {
    return defaultPlayer;
  }

  try {
    return JSON.parse(storedProfile) as PlayerProfile;
  } catch {
    return defaultPlayer;
  }
};

export const savePlayerProfile = (profile: PlayerProfile): void => {
  localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(profile));
};

export const saveCaseResult = (caseResult: CaseHistory): void => {
  const profile = getPlayerProfile();

  const ratingOrder = ["C", "B", "A", "S"];

  const currentRatingIndex = ratingOrder.indexOf(profile.bestRating);
  const newRatingIndex = ratingOrder.indexOf(caseResult.rating);

  const updatedProfile: PlayerProfile = {
    ...profile,
    totalPoints: profile.totalPoints + caseResult.score,
    completedCases: profile.completedCases + 1,
    bestRating:
      newRatingIndex > currentRatingIndex
        ? caseResult.rating
        : profile.bestRating,
    caseHistory: [...profile.caseHistory, caseResult],
  };

  savePlayerProfile(updatedProfile);
};
