
import { ArrowRight, FileText, Fingerprint, Play, Search } from "lucide-react";
import FeaturedCases from "../../assets/components/cases/FeaturedCases";
import Footer from "../../assets/components/layout/Footer";
import HowToPlay from "../../common/HowToPlay";

function HomePage() {
  return (
    <main className="min-h-screen bg-[#101114] text-[#F5F1E8]">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C49A52]">
              <Fingerprint className="text-[#C49A52]" size={22} />
            </div>

            <div>
              <h1 className="font-serif text-xl tracking-wide">
                THE DETECTIVE ROOM
              </h1>
              <p className="text-[10px] tracking-[3px] text-[#C49A52]">
                EVERY CLUE MATTERS
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#" className="transition hover:text-[#C49A52]">
              Home
            </a>
            <a href="#cases" className="transition hover:text-[#C49A52]">
              Explore Cases
            </a>
            <a href="#how-to-play" className="transition hover:text-[#C49A52]">
              How to Play
            </a>
          </div>

          <button className="flex items-center gap-2 rounded border border-[#C49A52] px-4 py-2 text-sm text-[#C49A52] transition hover:bg-[#C49A52] hover:text-black">
            <Search size={16} />
            Investigate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,154,82,0.12),_transparent_65%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-28 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[5px] text-[#C49A52]">
              YOUR INVESTIGATION STARTS HERE
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-tight md:text-7xl">
              Every clue tells a story.
              <span className="mt-2 block text-[#C49A52]">Find the truth.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-gray-400">
              Step into the world of mysteries. Examine evidence, question
              suspects, connect the clues and solve the cases that others
              cannot.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-[#C49A52] px-7 py-4 font-semibold text-black transition hover:bg-[#d8b36f]">
                <Search size={18} />
                Start Investigating
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-3 border border-white/20 px-7 py-4 text-gray-200 transition hover:border-[#C49A52] hover:text-[#C49A52]">
                <Play size={17} />
                How It Works
              </button>
            </div>

            <p className="mt-6 text-xs tracking-wide text-gray-500">
              NO ACCOUNT REQUIRED · JUST YOUR LOGIC
            </p>
          </div>

          {/* Decorative Investigation Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-full bg-[#C49A52]/10 blur-3xl" />

            <div className="relative rotate-2 border border-[#C49A52]/30 bg-[#1C1E23] p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs tracking-[3px] text-[#C49A52]">
                  CLASSIFIED FILE
                </span>
                <FileText className="text-[#C49A52]" />
              </div>

              <div className="py-12 text-center">
                <Fingerprint
                  size={100}
                  strokeWidth={0.8}
                  className="mx-auto text-[#C49A52]/80"
                />

                <h3 className="mt-8 font-serif text-3xl">THE UNKNOWN</h3>

                <p className="mt-3 text-sm tracking-widest text-gray-500">
                  CASE NO. 001
                </p>

                <div className="mx-auto mt-8 h-px w-24 bg-[#C49A52]/60" />

                <p className="mt-6 text-sm italic text-gray-400">
                  Some secrets are hidden in plain sight.
                </p>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-5 text-xs tracking-widest text-gray-500">
                <span>INVESTIGATION DIVISION</span>
                <span>TOP SECRET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mysteries */}
      <FeaturedCases />

      {/* How to Play */}
      <HowToPlay />
      <Footer/>
    </main>
  );
}

export default HomePage;
