import {
  Fingerprint,
  ArrowUpRight,
  //   Youtube,
  Search,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore Cases", href: "#cases" },
  { label: "How to Play", href: "#how-to-play" },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141519] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A52]">
                <Fingerprint size={23} className="text-[#C49A52]" />
              </div>

              <div>
                <h2 className="font-serif text-xl text-[#F5F1E8]">
                  THE DETECTIVE ROOM
                </h2>
                <p className="text-[10px] tracking-[3px] text-[#C49A52]">
                  EVERY CLUE MATTERS
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              A world of mysteries, hidden clues and unanswered questions. Step
              inside, trust your instincts and uncover the truth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-[#F5F1E8]">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-[#C49A52]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-serif text-xl text-[#F5F1E8]">
              Enter the Mystery
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Think you have what it takes to solve a mystery? Your next
              investigation is waiting.
            </p>

            <a
              href="#cases"
              className="mt-6 inline-flex items-center gap-3 border border-[#C49A52] px-5 py-3 text-sm text-[#C49A52] transition hover:bg-[#C49A52] hover:text-black"
            >
              <Search size={16} />
              Explore Mysteries
              <ArrowUpRight size={16} />
            </a>

            {/* YouTube placeholder for future channel */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <FaYoutube size={20} className="text-white" />
              <span>Our YouTube channel is coming soon</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} The Detective Room. All rights
            reserved.
          </p>

          <p className="tracking-widest">THINK. INVESTIGATE. UNCOVER.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
