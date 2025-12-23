import React from 'react'
import Link from 'next/link'

function QAPage() {
    const faqs = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. Secure payments are guaranteed."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days within Australia. International shipping can take 7-14 business days depending on the destination. Express options are available at checkout."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unworn items in their original packaging with tags attached. Returns are free for all domestic orders."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has shipped, you will automatically receive an email with a tracking number and a link to real-time updates on your package's location."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping costs and estimated delivery times will be calculated at checkout based on your location and order size."
        },
        {
            question: "How do I find my size?",
            answer: "Check our size guide linked on each product page. We provide detailed measurements and fit tips to help you find the perfect size for your body type."
        }
    ];

    return (
        <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about our products and services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md">
                            <details className="group p-6 cursor-pointer">
                                <summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                                    <span className="text-lg">{faq.question}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-blue-500">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-gray-600 mt-4 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-600">
                    <p>Can't find what you're looking for? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our support team</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default QAPage
