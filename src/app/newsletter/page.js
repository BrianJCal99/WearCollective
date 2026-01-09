import NewsletterForm from "@/components/newsletter-form";

export const metadata = {
    title: 'Newsletter | WEARCOLLECTIVE',
    description: 'Stay updated with the latest trends and exclusive offers from WEARCOLLECTIVE.',
};

export default function NewsletterPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-7xl pt-16 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
                        Join the <span className="text-indigo-600">Collective</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Be the first to know about new arrivals, sales, and fashion insights. Our newsletter is your exclusive pass to the world of WEARCOLLECTIVE.
                    </p>
                </div>
            </div>

            {/* We reuse the same component as requested, but we remove the large top margin if we're using it here */}
            <NewsletterForm marginTop="mt-16 sm:mt-24" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col">
                            <dt className="text-base font-bold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                Weekly Drops
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto text-sm">Get notified about our weekly limited edition drops before everyone else. Never miss out on your favorite pieces.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-bold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.659A2.25 2.25 0 009.568 3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                    </svg>
                                </div>
                                Exclusive Offers
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto text-sm">Receive member-only discounts and early access to our seasonal sales. Save more while building your timeless wardrobe.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-bold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                Fashion Insights
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto text-sm">Stay ahead of the curve with our curated fashion insights and sustainability reports from industry experts.</p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
