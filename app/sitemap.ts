import type { MetadataRoute } from "next";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/cases", "/blog", "/contacts", "/privacy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
