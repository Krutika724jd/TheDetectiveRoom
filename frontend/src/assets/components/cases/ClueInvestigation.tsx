import { useState, type Dispatch, type SetStateAction } from "react";
import { Search, CheckCircle2, FileSearch, BookOpen, X } from "lucide-react";
import { missingNecklaceClues } from "../../../data/cases/missingNecklaceClues";
import SuspectEvidenceComparison from "./SuspectEvidenceComparison";
interface ClueInvestigationProps {
  discoveredClues: number[];
  setDiscoveredClues:Dispatch<SetStateAction<number | null>>;
}
function ClueInvestigation({discoveredClues,setDiscoveredClues}:ClueInvestigationProps) {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const totalClues = missingNecklaceClues.length;
  const progress = (discoveredClues.length / totalClues) * 100;

  const nextClue = missingNecklaceClues[discoveredClues.length];

  const handleInvestigate = (clueId: number) => {
    setDiscoveredClues((previous) => [...previous, clueId]);
  };

  return (
    <section className="mt-16 border-t border-white/10 pt-12 px-6">
      {/* Section Heading */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
          EVIDENCE ROOM
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F5F1E8]">
          Investigate the Clues
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
          Examine the available evidence carefully. Every discovery could bring
          you closer to uncovering the truth.
        </p>
      </div>

      {/* Investigation Progress */}
      <div className="mb-8 border border-white/10 bg-[#1C1E23] p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-gray-300">Investigation Progress</span>

          <span className="text-sm font-semibold text-[#C49A52]">
            {discoveredClues.length} / {totalClues} clues discovered
          </span>
        </div>

        <div className="h-2 overflow-hidden bg-white/10">
          <div
            className="h-full bg-[#C49A52] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsNotebookOpen((previous) => !previous)}
        className="mt-5 flex items-center gap-3 border border-[#C49A52]/40 px-5 py-3 text-sm text-[#C49A52] transition hover:bg-[#C49A52] hover:text-black"
      >
        {isNotebookOpen ? <X size={17} /> : <BookOpen size={17} />}

        {isNotebookOpen ? "Close Evidence Notebook" : "Open Evidence Notebook"}
      </button>
      {isNotebookOpen && (
        <div className="animate-evidence-reveal mt-6 border border-[#C49A52]/30 bg-[#1C1E23] p-6">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs tracking-[3px] text-[#C49A52]">
                INVESTIGATION RECORD
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#F5F1E8]">
                Evidence Notebook
              </h3>
            </div>

            <BookOpen size={28} className="text-[#C49A52]" />
          </div>

          <p className="mb-5 text-sm text-gray-400">
            Your investigation notes and discovered evidence are collected here.
          </p>

          {discoveredClues.length === 0 ? (
            <p className="border border-white/10 bg-[#25262A] p-5 text-sm text-gray-400">
              No evidence collected yet. Investigate your first clue to start
              building your case.
            </p>
          ) : (
            <div className="space-y-5">
              {missingNecklaceClues
                .filter((clue) => discoveredClues.includes(clue.id))
                .map((clue) => (
                  <div
                    key={clue.id}
                    className="border-l-2 border-[#C49A52] bg-[#25262A] p-5"
                  >
                    <p className="text-xs tracking-widest text-[#C49A52]">
                      CLUE 0{clue.sequence}
                    </p>

                    <h4 className="mt-2 font-serif text-xl text-[#F5F1E8]">
                      {clue.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {clue.evidence}
                    </p>
                  </div>
                ))}
            </div>
          )}

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm text-gray-300">
              Evidence collected:{" "}
              <span className="font-semibold text-[#C49A52]">
                {discoveredClues.length} / {totalClues}
              </span>
            </p>
          </div>
        </div>
      )}
      {/* Discovered Clues */}
      <div className="space-y-5">
        {missingNecklaceClues
          .filter((clue) => discoveredClues.includes(clue.id))
          .map((clue) => (
            <article
              key={clue.id}
              className="border border-emerald-500/20 bg-[#1C1E23] p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-[3px] text-emerald-400">
                    CLUE 0{clue.sequence} · DISCOVERED
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#F5F1E8]">
                    {clue.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">{clue.category}</p>
                </div>

                <CheckCircle2 className="text-emerald-400" size={24} />
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                {clue.description}
              </p>

              <div className="animate-evidence-reveal mt-5 border-l-2 border-[#C49A52] bg-[#25262A] p-5">
                <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C49A52]">
                  <FileSearch size={15} />
                  EVIDENCE DISCOVERED
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {clue.evidence}
                </p>
              </div>
            </article>
          ))}

        {/* Next Available Clue */}
        {nextClue && (
          <article className="border border-[#C49A52]/40 bg-[#1C1E23] p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-[3px] text-[#C49A52]">
                  CLUE 0{nextClue.sequence} · AVAILABLE
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#F5F1E8]">
                  {nextClue.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {nextClue.category}
                </p>
              </div>

              <Search className="text-[#C49A52]" size={24} />
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              {nextClue.description}
            </p>

            <button
              type="button"
              onClick={() => handleInvestigate(nextClue.id)}
              className="mt-6 flex items-center gap-3 bg-[#C49A52] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8b36f]"
            >
              <Search size={17} />
              Investigate Clue
            </button>
          </article>
        )}

        {/* All Clues Discovered */}
        {!nextClue && (
          <div className="border border-emerald-500/30 bg-[#1C1E23] p-6 text-center">
            <CheckCircle2 size={36} className="mx-auto text-emerald-400" />

            <h3 className="mt-4 font-serif text-2xl text-[#F5F1E8]">
              All Clues Discovered
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              You've examined all available evidence. Review your findings
              before making an accusation.
            </p>
          </div>
        )}
      </div>
      <SuspectEvidenceComparison discoveredClues={discoveredClues} />
    </section>
  );
}

export default ClueInvestigation;
