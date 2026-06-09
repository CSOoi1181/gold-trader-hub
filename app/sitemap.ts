import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gold-trader-hub.vercel.app";

  const analysisPages = [
    "/analysis/gold-analysis-2026-06-03",
    "/analysis/gold-analysis-2026-06-04",
    "/analysis/gold-analysis-2026-06-05",
    "/analysis/gold-analysis-2026-06-06",
    "/analysis/gold-analysis-2026-06-08",
    "/analysis/gold-analysis-2026-06-09",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/analysis`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    ...analysisPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}