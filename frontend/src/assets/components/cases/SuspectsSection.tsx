
import { Fingerprint } from "lucide-react";
import { missingNecklaceSuspects } from "../../../data/cases/missingNecklace";

function SuspectsSection() {
  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
          PEOPLE OF INTEREST
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#F5F1E8]">
          Meet the Suspects
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
          Four people were present at the birthday celebration.
          Each has a story to tell, but whose story can you trust?
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {missingNecklaceSuspects.map((suspect) => (
          <article
            key={suspect.id}
            className="border border-white/10 bg-[#1C1E23] p-6 transition duration-300 hover:border-[#C49A52]/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs tracking-[3px] text-[#C49A52]">
                  SUSPECT 0{suspect.id}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#F5F1E8]">
                  {suspect.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {suspect.role}
                </p>
              </div>

              <Fingerprint
                size={32}
                strokeWidth={1}
                className="text-[#C49A52]/70"
              />
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              {suspect.description}
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#C49A52]">
                  POSSIBLE MOTIVE
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {suspect.motive}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-[#C49A52]">
                  STATED ALIBI
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {suspect.alibi}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SuspectsSection;
