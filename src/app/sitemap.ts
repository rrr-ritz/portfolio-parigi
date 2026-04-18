import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parigill.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: "monthly" | "yearly";
  }> = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work/applenj", priority: 0.8, changeFrequency: "yearly" },
    { path: "/work/pits", priority: 0.8, changeFrequency: "yearly" },
    { path: "/work/hungie", priority: 0.5, changeFrequency: "yearly" },
    { path: "/work/nscc", priority: 0.5, changeFrequency: "yearly" },
    { path: "/work/pro-av", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/miscellany", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
