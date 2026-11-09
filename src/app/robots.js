import { SITE_URL } from '@/lib/site';

export default function robots() {
    const baseUrl = SITE_URL;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/account/',
                    '/checkout/',
                    '/cart/',
                    '/_next/',
                    '/admin/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/api/',
                    '/account/',
                    '/checkout/',
                    '/cart/',
                    '/_next/',
                    '/admin/',
                ],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: [
                    '/api/',
                    '/account/',
                    '/checkout/',
                    '/cart/',
                    '/_next/',
                    '/admin/',
                ],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
