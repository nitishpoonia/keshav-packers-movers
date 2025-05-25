export async function GET() {
  const baseUrl = "https://keshavpackersmovers.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/pricing",
    "/faq",
    "/gallery",
  ];

  // Dynamic service pages
  const servicePages = [
    "/services/home-relocation",
    "/services/bike-car-relocation",
    "/services/office-relocation",
    "/services/packing-unpacking",
    "/services/storage-solutions",
    "/services/international-relocation",
  ];

  // Combine all pages
  const allPages = [...staticPages, ...servicePages];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    const url = `${baseUrl}${page}`;
    const lastmod = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format

    // Set priority based on page importance
    let priority = "0.8";
    if (page === "") priority = "1.0"; // Homepage
    else if (page === "/services") priority = "0.9"; // Main services page
    else if (page.startsWith("/services/"))
      priority = "0.8"; // Individual service pages
    else if (["/about", "/contact"].includes(page))
      priority = "0.7"; // Important pages
    else priority = "0.6"; // Other pages

    // Set change frequency
    let changefreq = "monthly";
    if (page === "") changefreq = "weekly"; // Homepage changes more frequently
    else if (page === "/services" || page.startsWith("/services/"))
      changefreq = "monthly";
    else changefreq = "yearly";

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
