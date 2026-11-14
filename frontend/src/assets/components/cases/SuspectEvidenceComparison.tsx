import { useState } from "react";
import { Fingerprint, Search, FileSearch } from "lucide-react";
import { missingNecklaceAnalysis } from "../../../data/cases/missingNecklaceAnalysis";
import { missingNecklaceSuspects } from "../../../data/cases/missingNecklace";
import { missingNecklaceClues } from "../../../data/cases/missingNecklaceClues";

interface SuspectEvidenceComparisonProps {
  discoveredClues: number[];
}

function SuspectEvidenceComparison({
  discoveredClues,
}: SuspectEvidenceComparisonProps) {
  const [selectedSuspectId, setSelectedSuspectId] = useState(1);

  const selectedSuspect = missingNecklaceSuspects.find(
    (suspect) => suspect.id === selectedSuspectId,
  );

  const discoveredEvidence = missingNecklaceClues.filter((clue) =>
    discoveredClues.includes(clue.id),
  );
  const selectedAnalysis = missingNecklaceAnalysis.find(
    (analysis) => analysis.suspectId === selectedSuspectId,
  );

  const suspectEvidence = discoveredEvidence.map((clue) => {
    const analysis = selectedAnalysis?.evidence.find(
      (item) => item.clueId === clue.id,
    );

    return {
      ...clue,
      analysis: analysis ?? {
        type: "observation" as const,
        explanation:
          "This clue has not established a direct connection to this suspect yet.",
      },
    };
  });
  if (!selectedSuspect) return null;

  return (
    <section className="mt-16 border-t border-white/10 px-6 pt-12">
      {/* Section Heading */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
          INVESTIGATION ANALYSIS
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F5F1E8]">
          Suspect Evidence Comparison
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
          Review each suspect's statements and compare them with the evidence
          collected during your investigation.
        </p>
      </div>

      {/* Suspect Selection */}
      <div className="mb-6 border border-white/10 bg-[#1C1E23] p-6">
        <label
          htmlFor="suspect-select"
          className="mb-3 block text-xs font-semibold tracking-widest text-[#C49A52]"
        >
          SELECT A SUSPECT
        </label>

        <select
          id="suspect-select"
          value={selectedSuspectId}
          onChange={(event) => setSelectedSuspectId(Number(event.target.value))}
          className="w-full max-w-md border border-white/20 bg-[#25262A] px-4 py-3 text-sm text-[#F5F1E8] outline-none focus:border-[#C49A52]"
        >
          {missingNecklaceSuspects.map((suspect) => (
            <option key={suspect.id} value={suspect.id}>
              {suspect.name} — {suspect.role}
            </option>
          ))}
        </select>
      </div>

      {/* Suspect Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="border border-white/10 bg-[#1C1E23] p-6">
          <div className="flex items-center gap-4">
            <Fingerprint size={36} className="text-[#C49A52]" strokeWidth={1} />

            <div>
              <p className="text-xs tracking-[3px] text-[#C49A52]">
                SUSPECT 0{selectedSuspect.id}
              </p>

              <h3 className="mt-1 font-serif text-2xl text-[#F5F1E8]">
                {selectedSuspect.name}
              </h3>

              <p className="text-sm text-gray-500">{selectedSuspect.role}</p>
            </div>
          </div>

          <div className="mt-7 space-y-5 border-t border-white/10 pt-5">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#C49A52]">
                POSSIBLE MOTIVE
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                {selectedSuspect.motive}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-[#C49A52]">
                STATED ALIBI
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                {selectedSuspect.alibi}
              </p>
            </div>
          </div>
        </article>

        {/* Suspect Evidence Analysis */}
        <article className="border border-white/10 bg-[#1C1E23] p-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <FileSearch className="text-[#C49A52]" size={25} />

            <div>
              <h3 className="font-serif text-xl text-[#F5F1E8]">
                Evidence Analysis
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {suspectEvidence.length} clues reviewed
              </p>
            </div>
          </div>

          {suspectEvidence.length === 0 ? (
            <div className="py-8 text-center">
              <Search size={30} className="mx-auto text-gray-600" />

              <p className="mt-4 text-sm text-gray-400">
                No evidence discovered yet.
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Investigate clues to compare them with this suspect's
                statements.
              </p>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {suspectEvidence.map((clue) => (
                <div
                  key={clue.id}
                  className="border border-white/10 bg-[#25262A] p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs tracking-widest text-[#C49A52]">
                      CLUE 0{clue.sequence}
                    </p>

                    <span
                      className={`text-[10px] font-semibold tracking-widest ${
                        clue.analysis.type === "contradicting"
                          ? "text-red-400"
                          : clue.analysis.type === "supporting"
                            ? "text-emerald-400"
                            : "text-gray-400"
                      }`}
                    >
                      {clue.analysis.type.toUpperCase()}
                    </span>
                  </div>

                  <h4 className="mt-3 font-serif text-lg text-[#F5F1E8]">
                    {clue.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {clue.analysis.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>

      {/* Analysis Reminder */}
      <div className="mt-6 border border-[#C49A52]/20 bg-[#C49A52]/5 p-5">
        <p className="text-sm leading-7 text-gray-300">
          <span className="font-semibold text-[#C49A52]">
            Detective's Note:
          </span>{" "}
          A possible motive does not prove guilt. Examine the evidence carefully
          before drawing conclusions.
        </p>
      </div>
    </section>
  );
}

export default SuspectEvidenceComparison;
