// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "CREAI.DIGITAL BLOG";
export const SITE_TITLE = "CREAI.DIGITAL BLOG";
export const SITE_DESCRIPTION = "Livestream dispensary cannibis and spiritual social  dvents.";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "CREAI.DIGITAL BLOG";
export const Tags_DESCRIPTION =
  "Livestream dispensary cannabis and spiritual social dvents.";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "🧙🏽‍♂️ WIZARD OF HAHZ " },
  { href: "/category/Two/1/", title: "🧠 AI" },
  { href: "/category/Three/1/", title: "🗺 MAP" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/weedw3w",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
