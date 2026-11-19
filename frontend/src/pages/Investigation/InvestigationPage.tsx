import { ArrowLeft, FileText, Clock, Search, LockKeyhole } from "lucide-react";
import SuspectsSection from "../../assets/components/cases/SuspectsSection";
import ClueInvestigation from "../../assets/components/cases/ClueInvestigation";
import AccusationSection from "../../assets/components/cases/AccusationSection";
import { useState } from "react";
function InvestigationPage() {
  const [discoveredClues, setDiscoveredClues] = useState<number[]>([]);
  const [accusedSuspectId, setAccusedSuspectId] = useState<number | null>(null);
  const [isAccusationSubmitted, setIsAccusationSubmitted] = useState(false);
  const [isVerdictRevealed, setIsVerdictRevealed] = useState(false);
  const [reasoning, setReasoning] = useState("");
  const handleReplayCase = () => {
  setDiscoveredClues([]);
  setAccusedSuspectId(null);
  setIsAccusationSubmitted(false);
  setIsVerdictRevealed(false);
  setReasoning("");
};
  return (
    <main className="min-h-screen bg-[#101114] text-[#F5F1E8]">
      {/* Top Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#C49A52]"
          >
            <ArrowLeft size={17} />
            Back to Cases
          </a>

          <span className="text-xs tracking-[3px] text-[#C49A52]">
            THE DETECTIVE ROOM
          </span>

          <span className="text-xs text-gray-500">GUEST MODE</span>
        </div>
      </header>

      {/* Case Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C49A52]/50" />
            <p className="text-xs tracking-[5px] text-[#C49A52]">
              CASE FILE 001
            </p>
            <span className="h-px w-12 bg-[#C49A52]/50" />
          </div>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            The Missing Necklace
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-400">
            A valuable diamond necklace has mysteriously disappeared during a
            birthday party. Four people were present. Everyone has a different
            story.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="border border-emerald-500/30 px-4 py-2 text-xs text-emerald-400">
              EASY DIFFICULTY
            </span>

            <span className="flex items-center gap-2 text-xs text-gray-400">
              <Clock size={15} />
              10–15 MINUTES
            </span>

            <span className="flex items-center gap-2 text-xs text-gray-400">
              <FileText size={15} />
              MYSTERY INVESTIGATION
            </span>
          </div>
        </div>

        {/* Case Briefing */}
        <div className="mt-16 border border-[#C49A52]/30 bg-[#1C1E23] p-7 md:p-10">
          <div className="flex items-center gap-3">
            <LockKeyhole size={20} className="text-[#C49A52]" />

            <h2 className="font-serif text-2xl">Case Briefing</h2>
          </div>

          <div className="mt-7 space-y-5 text-sm leading-8 text-gray-400">
            <p>
              Priya was celebrating her birthday at home with friends and
              family. Earlier that evening, she had placed her valuable diamond
              necklace inside her bedroom drawer.
            </p>

            <p>
              Later, when she returned to her bedroom, she discovered that the
              necklace was missing. The drawer was no longer holding the
              valuable jewellery.
            </p>

            <p>
              Four people had access to the house during the evening. Each
              person has given an account of their activities.
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs tracking-[3px] text-[#C49A52]">
              YOUR MISSION
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Investigate the suspects, examine the clues, identify
              inconsistencies and determine what happened to the missing
              necklace.
            </p>
          </div>
        </div>

        {/* Coming Next */}
        <div className="mt-10 flex flex-col items-center text-center">
          <Search size={28} className="text-[#C49A52]" />

          <h3 className="mt-4 font-serif text-2xl">
            Your Investigation Begins
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Suspect profiles and evidence will appear in the next stage.
          </p>
        </div>
      </section>
      <SuspectsSection />

      <ClueInvestigation
        discoveredClues={discoveredClues}
        setDiscoveredClues={setDiscoveredClues}
      />

      <AccusationSection
        accusedSuspectId={accusedSuspectId}
        setAccusedSuspectId={setAccusedSuspectId}
        isAccusationSubmitted={isAccusationSubmitted}
        setIsAccusationSubmitted={setIsAccusationSubmitted}
        discoveredClues={discoveredClues}
        isVerdictRevealed={isVerdictRevealed}
        setIsVerdictRevealed={setIsVerdictRevealed}
        onReplayCase={handleReplayCase}
        reasoning={reasoning}
        setReasoning={setReasoning}
      />
    </main>
  );
}

export default InvestigationPage;
