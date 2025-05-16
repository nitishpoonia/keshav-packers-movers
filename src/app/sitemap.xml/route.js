export async function GET() {
  const baseUrl = "https://keshavpackersmovers.com"; // Change to your actual domain
  const lastmod = "2025-05-16";
  const pages = [
    "",
    "services",
    "faq",
    "contact",
    "pricing",
    "about",
    "gallery",
  ];

  const urls = pages
    .map(
      (page) =>
        `<url><loc>${baseUrl}/${page}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
