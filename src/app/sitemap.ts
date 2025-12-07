import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hofmannandreas.com",
      lastModified: "2025-12-07",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
