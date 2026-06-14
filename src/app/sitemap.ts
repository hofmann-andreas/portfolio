import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hofmannandreas.com/",
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
