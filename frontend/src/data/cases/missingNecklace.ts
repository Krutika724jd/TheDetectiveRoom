
export interface Suspect {
  id: number;
  name: string;
  role: string;
  description: string;
  motive: string;
  alibi: string;
}

export const missingNecklaceSuspects: Suspect[] = [
  {
    id: 1,
    name: "Priya",
    role: "The Birthday Host",
    description:
      "The owner of the diamond necklace. She hosted the birthday party and welcomed guests throughout the evening.",
    motive:
      "Financial difficulties have recently put her under pressure.",
    alibi:
      "Claims she was greeting guests when the necklace disappeared.",
  },
  {
    id: 2,
    name: "Ankit",
    role: "Close Friend",
    description:
      "A close friend of Priya who attended the birthday celebration.",
    motive:
      "He recently had a disagreement with Priya over money.",
    alibi:
      "Claims he spent most of the evening with other guests.",
  },
  {
    id: 3,
    name: "Neha",
    role: "Priya's Cousin",
    description:
      "A family member who knows Priya well and was present at the party.",
    motive:
      "She believes Priya has always received more attention from the family.",
    alibi:
      "Claims she was in the dining area during the incident.",
  },
  {
    id: 4,
    name: "Vikram",
    role: "Family Acquaintance",
    description:
      "A family acquaintance who was invited to celebrate with everyone.",
    motive:
      "He has recently been facing personal financial difficulties.",
    alibi:
      "Claims he was outside making a phone call.",
  },
];
