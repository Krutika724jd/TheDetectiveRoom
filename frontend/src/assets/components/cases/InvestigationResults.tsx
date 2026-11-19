import { Award, Target, Search, Trophy } from "lucide-react";

interface InvestigationResultsProps {
  totalScore: number;
  detectiveRating: string;
  discoveredClues: number;
  totalClues: number;
  isCorrectAccusation: boolean;
}

function InvestigationResults({
  totalScore,
  detectiveRating,
  discoveredClues,
  totalClues,
  isCorrectAccusation,
}: InvestigationResultsProps) {
    const accusationPoints = isCorrectAccusation ? 500 : 0;
const cluePoints = discoveredClues * 50;
const allCluesBonus = discoveredClues === totalClues ? 250 : 0;
const completionPoints = 100;
  return (
    <section className="mt-12 rounded-2xl border border-[#C49A52]/30 bg-[#1C1E23] p-8">
      <div className="text-center">
        <Trophy className="mx-auto mb-4 text-[#C49A52]" size={40} />

        <p className="text-sm tracking-[4px] text-gray-400">
          INVESTIGATION COMPLETE
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#C49A52]">
          Your Detective Rating
        </h2>

        <p className="mt-5 text-6xl font-bold text-white">
          {detectiveRating}
        </p>

        <p className="mt-2 text-gray-400">
          {totalScore} / 1100 Points
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <div className="rounded-xl bg-[#101114] p-5">
          <Award className="mb-3 text-[#C49A52]" size={24} />
          <p className="text-sm text-gray-400">Accusation</p>
          <p className="mt-2 font-semibold text-white">
            {isCorrectAccusation ? "Correct" : "Incorrect"}
          </p>
        </div>

        <div className="rounded-xl bg-[#101114] p-5">
          <Search className="mb-3 text-[#C49A52]" size={24} />
          <p className="text-sm text-gray-400">Clues Discovered</p>
          <p className="mt-2 font-semibold text-white">
            {discoveredClues} / {totalClues}
          </p>
        </div>

        <div className="rounded-xl bg-[#101114] p-5">
          <Target className="mb-3 text-[#C49A52]" size={24} />
          <p className="text-sm text-gray-400">Investigation Status</p>
          <p className="mt-2 font-semibold text-white">
            Completed
          </p>
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-white/10 bg-[#101114] p-6">
  <h3 className="mb-6 text-lg font-semibold text-[#C49A52]">
    Score Breakdown
  </h3>

  <div className="space-y-4">
    {[
      { label: "Correct Accusation", points: accusationPoints },
      { label: "Clues Discovered", points: cluePoints },
      { label: "All Clues Bonus", points: allCluesBonus },
      { label: "Investigation Completed", points: completionPoints },
    ].map((item) => (
      <div
        key={item.label}
        className="flex items-center justify-between border-b border-white/10 pb-3"
      >
        <span className="text-sm text-gray-400">{item.label}</span>
        <span className="font-semibold text-white">
          +{item.points} pts
        </span>
      </div>
    ))}
  </div>

  <div className="mt-5 flex items-center justify-between">
    <span className="font-semibold text-white">Total Score</span>
    <span className="text-xl font-bold text-[#C49A52]">
      {totalScore} / 1100
    </span>
  </div>
</div>
    </section>
  );
}

export default InvestigationResults;