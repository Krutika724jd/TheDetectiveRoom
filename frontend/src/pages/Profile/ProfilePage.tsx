import { useState } from "react";
import {
  ArrowLeft,
  Award,
  Target,
  Trophy,
  UserRound,
  Search,
  Shield,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getPlayerProfile } from "../../utils/playerStorage";
import type { PlayerProfile } from "../../types/player";
import { achievements } from "../../data/achievements";
const iconMap = {
  trophy: Trophy,
  search: Search,
  award: Award,
  shield: Shield,
};
function ProfilePage() {
  const [profile] = useState<PlayerProfile>(() => getPlayerProfile());
  const playerAchievements = achievements.map((achievement) => {
    const unlockedAchievement = profile.achievements.find(
      (item) => item.achievementId === achievement.id,
    );

    return {
      ...achievement,
      isUnlocked: Boolean(unlockedAchievement),
      unlockedAt: unlockedAchievement?.unlockedAt,
    };
  });
  const unlockedAchievements = playerAchievements.filter(
    (achievement) => achievement.isUnlocked,
  );
  const totalAchievements = playerAchievements.length;
  const progress =
    totalAchievements > 0
      ? (unlockedAchievements.length / totalAchievements) * 100
      : 0;
  return (
    <main className="min-h-screen bg-[#101114] px-6 py-10 text-[#F5F1E8]">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#C49A52]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-10 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
            DETECTIVE HEADQUARTERS
          </p>

          <h1 className="mt-3 font-serif text-4xl">Detective Profile</h1>

          <p className="mt-3 text-sm text-gray-400">
            Your investigations, achievements, and detective journey.
          </p>
        </div>

        <div className="mt-10 border border-[#C49A52]/30 bg-[#1C1E23] p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C49A52]/10">
              <UserRound size={32} className="text-[#C49A52]" />
            </div>

            <div>
              <p className="text-xs tracking-widest text-gray-500">
                DETECTIVE NAME
              </p>

              <h2 className="mt-2 font-serif text-3xl">
                {profile.detectiveName}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-white/10 bg-[#1C1E23] p-6">
            <Trophy className="text-[#C49A52]" size={26} />
            <p className="mt-5 text-sm text-gray-400">Total Points</p>
            <p className="mt-2 text-3xl font-bold">{profile.totalPoints}</p>
          </div>

          <div className="border border-white/10 bg-[#1C1E23] p-6">
            <Target className="text-[#C49A52]" size={26} />
            <p className="mt-5 text-sm text-gray-400">Completed Cases</p>
            <p className="mt-2 text-3xl font-bold">{profile.completedCases}</p>
          </div>

          <div className="border border-white/10 bg-[#1C1E23] p-6">
            <Award className="text-[#C49A52]" size={26} />
            <p className="mt-5 text-sm text-gray-400">Best Detective Rating</p>
            <p className="mt-2 text-3xl font-bold text-[#C49A52]">
              {profile.bestRating}
            </p>
          </div>
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#C49A52]">
            Detective Achievements
          </h2>
          {/* Investigation Progress */}
          <div className="mb-8 border border-white/10 bg-[#1C1E23] p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-300">
                Achievement Progress
              </span>

              <span className="text-sm font-semibold text-[#C49A52]">
                {unlockedAchievements.length}/ {totalAchievements} Unlocked
              </span>
            </div>

            <div className="h-2 overflow-hidden bg-white/10">
              <div
                className="h-full bg-[#C49A52] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {playerAchievements.map((achievement) => {
              const Icon = iconMap[achievement.icon];
              return (
                <div
                  key={achievement.id}
                  className={`rounded-xl border p-5 ${
                    achievement.isUnlocked
                      ? "border-[#C49A52] bg-[#1C1E23]"
                      : "border-gray-700 bg-[#151619] opacity-60"
                  }`}
                >
                  <div className="flex gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C49A52] bg-[#C49A52]/10">
                      <Icon size={32} className="text-[#C49A52]" />
                    </div>
                    <h3 className="font-semibold text-white">
                      {achievement.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm text-gray-400">
                    {achievement.description}
                  </p>
                  {achievement.isUnlocked && achievement.unlockedAt && (
                    <p className="mt-3 text-sm text-gray-400">
                      {new Date(achievement.unlockedAt).toLocaleDateString(
                        "en-IN",
                      )}
                    </p>
                  )}
                  <p className="mt-3 text-xs text-[#C49A52]">
                    {achievement.isUnlocked ? (
                      <span className="flex gap-2">
                        <Check size={14} />
                        Unlocked
                      </span>
                    ) : (
                      "Locked"
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="mt-12 mb-6 text-center">
          <p className="text-xs font-semibold tracking-[4px] text-[#C49A52]">
            YOUR INVESTIGATIONS
          </p>

          <h2 className="mt-3 font-serif text-2xl text-[#F5F1E8]">
            Case History
          </h2>
        </div>
        {profile.caseHistory.length === 0 ? (
          <p>No investigations completed yet.</p>
        ) : (
          <section className="font-serif text-2xl text-[#C49A52] mt-12">
            {profile.caseHistory.map((caseItem, index) => {
              return (
                <div
                  key={`${caseItem.caseId}-${caseItem.completedAt}-${index}`}
                  className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border border-white/10 bg-[#1C1E23] p-6"
                >
                  <div>{caseItem.caseTitle}</div>
                  <div>
                    {caseItem.completedAt
                      ? new Date(caseItem.completedAt).toLocaleDateString(
                          "en-IN",
                        )
                      : "In Progress"}
                  </div>
                  <div className="text-xl font-bold text-[#C49A52]">
                    {caseItem.score}
                  </div>
                  <div>{caseItem.rating}</div>
                  <div className="text-emerald-400">
                    {caseItem.isCorrectAccusation ? "Correct" : "Incorrect"}
                  </div>
                  <div>
                    {caseItem.discoveredClues} / {caseItem.totalClues} Clues
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}

export default ProfilePage;
