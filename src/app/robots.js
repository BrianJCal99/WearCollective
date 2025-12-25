export default function robots() {
    const baseUrl = 'https://www.wearcollective.store';

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
