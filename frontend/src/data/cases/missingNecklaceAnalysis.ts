
export interface SuspectClueAnalysis {
  clueId: number;
  type: "supporting" | "contradicting" | "observation";
  explanation: string;
}

export interface SuspectAnalysis {
  suspectId: number;
  evidence: SuspectClueAnalysis[];
}

export const missingNecklaceAnalysis: SuspectAnalysis[] = [
  {
    suspectId: 1,
    evidence: [
      {
        clueId: 1,
        type: "supporting",
        explanation:
          "The photograph confirms Priya was wearing the necklace at 8:45 PM, establishing that it was present shortly before the incident.",
      },
    ],
  },
  {
    suspectId: 2,
    evidence: [
      {
        clueId: 3,
        type: "observation",
        explanation:
          "Ankit claims he spent most of the evening in the living room. No discovered clue currently disproves this statement.",
      },
    ],
  },
  {
    suspectId: 3,
    evidence: [
      {
        clueId: 3,
        type: "observation",
        explanation:
          "Neha claims she was in the dining area. No discovered clue currently disproves this statement.",
      },
    ],
  },
 
{
  suspectId: 4,
  evidence: [
    {
      clueId: 1,
      type: "observation",
      explanation:
        "The photograph confirms the necklace was present at 8:45 PM. This helps establish the timeline of when it could have disappeared.",
    },
    {
      clueId: 2,
      type: "observation",
      explanation:
        "The jewelry box was found empty, with no signs of forced entry. This suggests the person responsible may have had access to the guest bedroom.",
    },
    {
      clueId: 3,
      type: "observation",
      explanation:
        "Vikram claims he was outside making a phone call between 9:05 PM and 9:20 PM.",
    },
    {
      clueId: 4,
      type: "contradicting",
      explanation:
        "The phone records show no incoming or outgoing calls between 9:00 PM and 9:30 PM, challenging his explanation.",
    },
    {
      clueId: 5,
      type: "contradicting",
      explanation:
        "The 9:12 PM hallway photograph places Vikram near the guest bedroom corridor, raising questions about his whereabouts.",
    },
  ],
},

];
