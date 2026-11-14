
import {
  Search,
  BookOpen,
  Fingerprint,
  Lightbulb,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Case",
    description:
      "Explore our mystery files and select a case that catches your attention.",
    icon: Search,
  },
  {
    number: "02",
    title: "Read the Story",
    description:
      "Understand the incident, discover the crime scene and meet the suspects.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Examine the Clues",
    description:
      "Investigate evidence, compare statements and uncover hidden details.",
    icon: Fingerprint,
  },
  {
    number: "04",
    title: "Make Your Accusation",
    description:
      "Connect the evidence, identify the culprit and explain your theory.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Reveal the Truth",
    description:
      "Discover the actual solution and see how well you solved the mystery.",
    icon: Trophy,
  },
];

function HowToPlay() {
  return (
    <section
      id="how-to-play"
      className="border-b border-white/10 bg-[#101114] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-[5px] text-[#C49A52]">
            YOUR JOURNEY AS A DETECTIVE
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#F5F1E8] md:text-5xl">
            How to Play
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
            Solving a mystery is easier when you know where to begin.
            Follow these five steps and uncover the truth.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border border-white/10 bg-[#1C1E23] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C49A52]/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#C49A52]/50">
                    {step.number}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-[#C49A52] transition group-hover:scale-110"
                  />
                </div>

                <div className="mb-4 mt-8 h-px w-12 bg-[#C49A52]/50" />

                <h3 className="font-serif text-xl text-[#F5F1E8]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowToPlay;
