
export interface Clue {
  id: number;
  title: string;
  category: string;
  description: string;
  evidence: string;
  sequence: number;
}

export const missingNecklaceClues: Clue[] = [
  {
    id: 1,
    title: "The Party Photograph",
    category: "Photographic Evidence",
    description:
      "A photograph taken earlier during the birthday celebration may help establish when the necklace was last seen.",
    evidence:
      "The diamond necklace is clearly visible on Priya in the photograph.",
    sequence: 1,
  },
  {
    id: 2,
    title: "The Empty Jewelry Box",
    category: "Physical Evidence",
    description:
      "The jewelry box associated with the missing necklace was found empty after the incident.",
    evidence:
      "The necklace is missing, but the box itself shows no obvious signs of forced entry.",
    sequence: 2,
  },
  {
    id: 3,
    title: "The Guest Statements",
    category: "Witness Statements",
    description:
      "Each of the four suspects has provided an account of where they were during the birthday celebration.",
    evidence:
      "Their statements describe different locations and activities. These accounts need to be examined carefully.",
    sequence: 3,
  },
];
