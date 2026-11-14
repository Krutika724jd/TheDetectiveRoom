import { Clock3, ArrowUpRight, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";
const cases = [
  {
    id: "CASE 001",
    title: "The Missing Necklace",
    description:
      "A diamond necklace disappears during a birthday party. Four people, four different stories. Can you identify the thief?",
    difficulty: "Easy",
    time: "10–15 min",
    icon: "necklace",
    path: "/investigation/missing-necklace",
  },
  {
    id: "CASE 002",
    title: "The 10:00 PM Mystery",
    description:
      "A confidential file is accessed after office hours. Everyone claims they left early, but the evidence says otherwise.",
    difficulty: "Easy",
    time: "15–20 min",
    icon: "office",
    path: null,
  },
  {
    id: "CASE 003",
    title: "The Locked Office",
    description:
      "A valuable document vanishes from a locked office. Nobody admits entering the room. What really happened?",
    difficulty: "Medium",
    time: "20–25 min",
    icon: "locked",
    path: null,
  },
];

function FeaturedCases() {
  return (
    <section
      id="cases"
      className="border-b border-white/10 bg-[#141519] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-[5px] text-[#C49A52]">
            CHOOSE YOUR INVESTIGATION
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#F5F1E8] md:text-5xl">
            Featured Mysteries
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
            Every case has a secret. Examine the evidence, question the suspects
            and uncover the truth.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((mystery) => (
            <article
              key={mystery.id}
              className="group overflow-hidden border border-white/10 bg-[#1C1E23] transition duration-300 hover:-translate-y-2 hover:border-[#C49A52]/60"
            >
              {/* Card Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#29251F] via-[#1C1E23] to-[#101114]">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(196,154,82,0.12),_transparent_70%)]" />

                <Fingerprint
                  size={76}
                  strokeWidth={0.8}
                  className="relative text-[#C49A52]/70 transition duration-300 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 text-xs tracking-[3px] text-[#C49A52]">
                  {mystery.id}
                </span>

                <span className="absolute bottom-5 right-5 text-[10px] tracking-[3px] text-gray-500">
                  CLASSIFIED
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`border px-3 py-1 text-xs ${
                      mystery.difficulty === "Easy"
                        ? "border-emerald-500/30 text-emerald-400"
                        : "border-[#C49A52]/30 text-[#C49A52]"
                    }`}
                  >
                    {mystery.difficulty}
                  </span>

                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock3 size={14} />
                    {mystery.time}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F1E8] transition group-hover:text-[#C49A52]">
                  {mystery.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-gray-400">
                  {mystery.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  {mystery.path ? (
                    <Link
                      to={mystery.path}
                      className="flex w-full items-center justify-between text-sm text-[#C49A52] transition hover:text-[#d8b36f]"
                    >
                      <span>Start Investigation</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-between text-sm text-gray-500"
                    >
                      <span>Investigation coming soon</span>
                      <ArrowUpRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCases;
