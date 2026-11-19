import {
  CheckCircle2,
  XCircle,
  Fingerprint,
  FileSearch,
  Scale,
} from "lucide-react";

import { missingNecklaceVerdict } from "../../../data/cases/missingNecklaceVerdict";
import { missingNecklaceSuspects } from "../../../data/cases/missingNecklace";
import InvestigationResults from "./InvestigationResults";
interface CaseVerdictProps {
  accusedSuspectId: number;
}

function CaseVerdict({ accusedSuspectId, discoveredClues }: CaseVerdictProps) {
  const totalClues = missingNecklaceVerdict.explanation.length;

  const isCorrectAccusation =
    accusedSuspectId === missingNecklaceVerdict.culpritId;

  const cluePoints = discoveredClues.length * 50;

  const correctAccusationPoints = isCorrectAccusation ? 500 : 0;

  const completionBonus = discoveredClues.length === totalClues ? 250 : 0;

  // CaseVerdict appears only after the player reveals the verdict.
  const investigationCompletionPoints = 100;

  const totalScore =
    correctAccusationPoints +
    cluePoints +
    completionBonus +
    investigationCompletionPoints;

  const detectiveRating =
    totalScore >= 1000
      ? "S"
      : totalScore >= 800
        ? "A"
        : totalScore >= 600
          ? "B"
          : "C";
  const verdict = missingNecklaceVerdict;

  const culprit = missingNecklaceSuspects.find(
    (suspect) => suspect.id === verdict.culpritId,
  );

  const isCorrect = accusedSuspectId === verdict.culpritId;

  if (!culprit) return null;

  return (
    <section className="mt-10 border border-[#C49A52]/30 bg-[#1C1E23] p-6 md:p-10">
      {/* Verdict Heading */}
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[5px] text-[#C49A52]">
          CASE 001 · FINAL VERDICT
        </p>

        <h2 className="mt-5 font-serif text-3xl text-[#F5F1E8] md:text-4xl">
          The Truth Has Been Revealed
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
          Every investigation has an answer. Discover what really happened to
          Priya's missing diamond necklace.
        </p>
      </div>

      {/* Player Result */}
      <div className="mt-10 border border-white/10 bg-[#25262A] p-6 text-center">
        {isCorrect ? (
          <CheckCircle2 size={42} className="mx-auto text-emerald-400" />
        ) : (
          <XCircle size={42} className="mx-auto text-red-400" />
        )}

        <h3 className="mt-4 font-serif text-2xl text-[#F5F1E8]">
          {isCorrect ? "Excellent Detective Work!" : "Case Not Solved"}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          {isCorrect
            ? "You identified the person responsible for stealing the necklace."
            : "Your accusation was incorrect. Review the evidence to discover who was responsible."}
        </p>
      </div>

      {/* Culprit Reveal */}
      <div className="mt-8 border border-[#C49A52]/30 bg-[#101114] p-7 text-center">
        <Fingerprint
          size={42}
          strokeWidth={1}
          className="mx-auto text-[#C49A52]"
        />

        <p className="mt-5 text-xs tracking-[4px] text-[#C49A52]">
          THE CULPRIT
        </p>

        <h3 className="mt-3 font-serif text-4xl text-[#F5F1E8]">
          {culprit.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{culprit.role}</p>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
          {verdict.summary}
        </p>
      </div>

      {/* Motive and Opportunity */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="border border-white/10 bg-[#25262A] p-6">
          <div className="flex items-center gap-3">
            <Fingerprint size={22} className="text-[#C49A52]" />

            <h4 className="font-serif text-xl text-[#F5F1E8]">The Motive</h4>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            {verdict.motive}
          </p>
        </article>

        <article className="border border-white/10 bg-[#25262A] p-6">
          <div className="flex items-center gap-3">
            <Scale size={22} className="text-[#C49A52]" />

            <h4 className="font-serif text-xl text-[#F5F1E8]">
              The Opportunity
            </h4>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            {verdict.opportunity}
          </p>
        </article>
      </div>

      {/* Evidence Explanation */}
      <div className="mt-10">
        <div className="flex items-center gap-3 border-b border-white/10 pb-5">
          <FileSearch size={25} className="text-[#C49A52]" />

          <div>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">
              How the Evidence Connects
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              A closer look at all five clues
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {verdict.explanation.map((clue) => (
            <article
              key={clue.clueId}
              className="border-l-2 border-[#C49A52] bg-[#25262A] p-5"
            >
              <p className="text-xs tracking-widest text-[#C49A52]">
                CLUE 0{clue.clueId}
              </p>

              <h4 className="mt-2 font-serif text-lg text-[#F5F1E8]">
                {clue.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {clue.detail}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-8 border border-[#C49A52]/20 bg-[#C49A52]/5 p-6">
        <p className="text-sm leading-7 text-gray-300">
          <span className="font-semibold text-[#C49A52]">
            Final Detective's Note:
          </span>{" "}
          The evidence raises serious questions about Vikram's alibi and places
          him near the guest bedroom. However, the clues are circumstantial
          rather than direct proof of the theft.
        </p>
      </div>
      <InvestigationResults
        totalScore={totalScore}
        detectiveRating={detectiveRating}
        discoveredClues={discoveredClues.length}
        totalClues={totalClues}
        isCorrectAccusation={isCorrectAccusation}
      />
    </section>
  );
}

export default CaseVerdict;
