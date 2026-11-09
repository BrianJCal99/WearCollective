// Public URL of the live site, used for SEO metadata, the sitemap and robots.txt.
// Set NEXT_PUBLIC_SITE_URL in Vercel if the site moves to a custom domain.
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://wear-collective.vercel.app'
).replace(/\/$/, '');
