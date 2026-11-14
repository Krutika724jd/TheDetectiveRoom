
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
      "A photograph taken during Priya's birthday celebration may help establish when the necklace was last seen.",
    evidence:
      "The photograph was taken at 8:45 PM. Priya is clearly wearing the diamond necklace, confirming that it was still in her possession at that time.",
    sequence: 1,
  },
  {
    id: 2,
    title: "The Empty Jewelry Box",
    category: "Physical Evidence",
    description:
      "The jewelry box associated with the missing necklace was discovered empty after the celebration.",
    evidence:
      "The box was found at 9:30 PM in the guest bedroom. There are no visible signs of forced entry or damage. The necklace appears to have been removed deliberately.",
    sequence: 2,
  },
  {
    id: 3,
    title: "The Guest Statements",
    category: "Witness Statements",
    description:
      "All four suspects have provided accounts of their whereabouts during the period when the necklace disappeared.",
    evidence:
      "Priya claims she was greeting guests. Ankit says he remained in the living room. Neha claims she was in the dining area. Vikram says he went outside between 9:05 PM and 9:20 PM to make a phone call.",
    sequence: 3,
  },
  {
    id: 4,
    title: "The Phone Records",
    category: "Digital Evidence",
    description:
      "Records from Vikram's phone may help verify his statement about making an important call outside.",
    evidence:
      "The available call records show no outgoing or incoming calls between 9:00 PM and 9:30 PM. This does not support Vikram's claim that he was making a phone call during that period.",
    sequence: 4,
  },
  {
    id: 5,
    title: "The Hallway Photograph",
    category: "Photographic Evidence",
    description:
      "A photograph captured by a hallway camera may reveal who was near the guest bedroom during the incident.",
    evidence:
      "A photograph timestamped 9:12 PM shows Vikram walking through the guest bedroom corridor. This places him near the room where the jewelry box was later discovered empty.",
    sequence: 5,
  },
];
