import { useState } from "react";
import { Fingerprint, Send, CheckCircle2 } from "lucide-react";
import CaseVerdict from "./CaseVerdict";
import { missingNecklaceSuspects } from "../../../data/cases/missingNecklace";

function AccusationSection() {
  const [selectedSuspectId, setSelectedSuspectId] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVerdict, setShowVerdict] = useState(false);
  const selectedSuspect = missingNecklaceSuspects.find(
    (suspect) => suspect.id === Number(selectedSuspectId),
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedSuspectId || !reasoning.trim()) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section className="mt-16 border-t border-white/10 px-6 pt-12">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
          FINAL INVESTIGATION
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F5F1E8]">
          Make Your Accusation
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
          You've examined the suspects and collected the evidence. Now decide
          who you believe is responsible for the missing necklace.
        </p>
      </div>

      {isSubmitted ? (
        <div className="border border-[#C49A52]/30 bg-[#1C1E23] p-8">
          <CheckCircle2 size={40} className="text-[#C49A52]" />

          <h3 className="mt-5 font-serif text-2xl text-[#F5F1E8]">
            Accusation Submitted
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            You have accused{" "}
            <span className="font-semibold text-[#C49A52]">
              {selectedSuspect?.name}
            </span>
            .
          </p>

          <div className="mt-6 border-l-2 border-[#C49A52] bg-[#25262A] p-4">
            <p className="text-xs font-semibold tracking-widest text-[#C49A52]">
              YOUR REASONING
            </p>

            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-gray-300">
              {reasoning}
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Your accusation has been recorded. Are you ready to discover the
            truth?
          </p>

          <button
            type="button"
            onClick={() => setShowVerdict(true)}
            className="mt-7 flex items-center justify-center gap-3 bg-[#C49A52] px-7 py-4 text-xs font-bold tracking-widest text-[#101114] transition hover:bg-[#D6AD68]"
          >
            REVEAL CASE VERDICT
            <Fingerprint size={16} />
          </button>

          {showVerdict && (
            <CaseVerdict accusedSuspectId={Number(selectedSuspectId)} />
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-[#1C1E23] p-6 md:p-8"
        >
          <div className="mb-7">
            <label
              htmlFor="accused-suspect"
              className="mb-3 block text-xs font-semibold tracking-widest text-[#C49A52]"
            >
              WHO IS THE CULPRIT?
            </label>

            <div className="flex items-center gap-3 border border-white/10 bg-[#25262A] px-4">
              <Fingerprint size={20} className="shrink-0 text-[#C49A52]" />

              <select
                id="accused-suspect"
                value={selectedSuspectId}
                onChange={(event) => setSelectedSuspectId(event.target.value)}
                required
                className="w-full bg-transparent py-4 text-sm text-[#F5F1E8] outline-none"
              >
                <option value="" disabled className="bg-[#25262A]">
                  Select a suspect
                </option>

                {missingNecklaceSuspects.map((suspect) => (
                  <option
                    key={suspect.id}
                    value={suspect.id}
                    className="bg-[#25262A]"
                  >
                    {suspect.name} — {suspect.role}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-7">
            <label
              htmlFor="accusation-reasoning"
              className="mb-3 block text-xs font-semibold tracking-widest text-[#C49A52]"
            >
              EXPLAIN YOUR REASONING
            </label>

            <textarea
              id="accusation-reasoning"
              value={reasoning}
              onChange={(event) => setReasoning(event.target.value)}
              required
              minLength={20}
              rows={6}
              placeholder="Which clues made you suspicious? Explain how the evidence supports your accusation..."
              className="w-full resize-y border border-white/10 bg-[#25262A] p-4 text-sm leading-7 text-[#F5F1E8] outline-none placeholder:text-gray-600 focus:border-[#C49A52]"
            />

            <p className="mt-2 text-xs text-gray-500">
              Minimum 20 characters. Support your accusation with evidence.
            </p>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-3 bg-[#C49A52] px-7 py-4 text-xs font-bold tracking-widest text-[#101114] transition hover:bg-[#D6AD68]"
          >
            SUBMIT ACCUSATION
            <Send size={15} />
          </button>
        </form>
      )}
    </section>
  );
}

export default AccusationSection;
