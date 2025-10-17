// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "HAHZ.LIVE BLOG";
export const SITE_TITLE = "HAHZ.LIVE BLOG";
export const SITE_DESCRIPTION = "Daily tech, spiritual and digital RWA real estate content.";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "HAHZ.LIVE BLOG";
export const Tags_DESCRIPTION =
  "Daily tech, spiritual and digital RWA real estate content.";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Blockchain thought leader the Wizard of HAHZ educates readers on the new spiritual digital economy.`,
    description: `Daily tech, spiritual and digital RWA real estate content.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in HAHZ.LIVE`,
    description: `Browse all articles under the ${category} category in HAHZ.LIVE`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "🧙🏽‍♂️ SPIRITUAL " },
  { href: "/category/Two/1/", title: "🧠 TECH" },
  { href: "/category/Three/1/", title: "🗺 REAL ESTATE" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/what-is-stablecoin-hahz-live/", title: "TECH" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/wizardofhahz",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
