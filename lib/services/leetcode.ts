import { siteConfig } from "@/lib/config";
import cachedData from "@/lib/generated/portfolio-data.json";

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
}

// Cached real stats as fallback if external proxies fail or timeout
const REAL_DEFAULT_STATS: LeetCodeStats = (cachedData.leetcode as LeetCodeStats) || {
  username: siteConfig.leetcode.username,
  totalSolved: 710,
  easySolved: 204,
  mediumSolved: 358,
  hardSolved: 148,
  totalQuestions: 3500,
};

export async function getLeetCodeStats(): Promise<LeetCodeStats> {
  const username = siteConfig.leetcode.username;

  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "portfolio-web-app",
      },
      signal: AbortSignal.timeout(6000),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.totalSolved !== undefined) {
        return {
          username,
          totalSolved: data.totalSolved ?? REAL_DEFAULT_STATS.totalSolved,
          easySolved: data.easySolved ?? REAL_DEFAULT_STATS.easySolved,
          mediumSolved: data.mediumSolved ?? REAL_DEFAULT_STATS.mediumSolved,
          hardSolved: data.hardSolved ?? REAL_DEFAULT_STATS.hardSolved,
          totalQuestions: data.totalQuestions ?? REAL_DEFAULT_STATS.totalQuestions,
        };
      }
    }
  } catch (error) {
    console.warn("Falling back to real verified LeetCode stats for devsagarkrjha:", error);
  }

  return REAL_DEFAULT_STATS;
}
