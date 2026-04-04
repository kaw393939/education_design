import type { MetadataRoute } from "next";

import { buildAbsoluteSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/process/", "/status/", "/tokens/"].map((route) => ({
    url: buildAbsoluteSiteUrl(route),
    lastModified: new Date("2026-04-04T00:00:00Z"),
  }));
}