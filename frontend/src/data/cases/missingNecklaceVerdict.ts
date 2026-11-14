
export interface CaseVerdict {
  culpritId: number;
  title: string;
  summary: string;
  motive: string;
  opportunity: string;
  explanation: {
    clueId: number;
    title: string;
    detail: string;
  }[];
}

export const missingNecklaceVerdict: CaseVerdict = {
  culpritId: 4,

  title: "The Truth Behind the Missing Necklace",

  summary:
    "Vikram is the person responsible for stealing Priya's diamond necklace.",

  motive:
    "Vikram was experiencing financial difficulties, giving him a possible reason to steal the valuable necklace.",

  opportunity:
    "The hallway photograph places Vikram near the guest bedroom corridor at 9:12 PM, during the period when the necklace disappeared.",

  explanation: [
    {
      clueId: 1,
      title: "The Party Photograph",
      detail:
        "At 8:45 PM, Priya was still wearing the necklace. This establishes that it was present shortly before the theft.",
    },
    {
      clueId: 2,
      title: "The Empty Jewelry Box",
      detail:
        "The necklace was missing from the guest bedroom jewelry box. There were no signs of forced entry, suggesting the theft may have involved someone with access to the room.",
    },
    {
      clueId: 3,
      title: "The Guest Statements",
      detail:
        "Vikram claimed he was outside making a phone call between 9:05 PM and 9:20 PM. His statement becomes questionable when compared with the remaining evidence.",
    },
    {
      clueId: 4,
      title: "The Phone Records",
      detail:
        "No incoming or outgoing calls were recorded between 9:00 PM and 9:30 PM. This challenges Vikram's specific claim that he was making a phone call.",
    },
    {
      clueId: 5,
      title: "The Hallway Photograph",
      detail:
        "The photograph taken at 9:12 PM places Vikram near the guest bedroom corridor, contradicting his claim that he was outside.",
    },
  ],
};
