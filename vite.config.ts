import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Writes robots.txt and sitemap.xml at build time from VITE_SITE_URL, so the
 * same code deploys correctly on any host/domain (Hostinger, Vercel, …).
 */
function seoFiles(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/+$/, "");
  return {
    name: "seo-files",
    apply: "build",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${base}/connect</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Host-provided env vars (e.g. set in Hostinger/Vercel) override the committed .env.
  const env = { ...loadEnv(mode, process.cwd(), "VITE_"), ...process.env };
  const siteUrl = env.VITE_SITE_URL || "https://mudasirwali.in";
  return { plugins: [react(), tailwindcss(), seoFiles(siteUrl)] };
});
