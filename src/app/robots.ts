// ✅ src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://fathersmedia.in/sitemap.xml",
    host: "https://fathersmedia.in",
  };
}
