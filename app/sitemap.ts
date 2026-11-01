import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/docs", "/examples", "/roadmap", "/about"].map((url) => ({ url: `https://reposync.dev${url}`, lastModified: new Date("2026-11-01") })); }
