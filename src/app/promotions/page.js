"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Tag, Clock } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'Summer Clearance',
    description: 'End of season sale on selected summer collections. Limited time only.',
    discount: '70',
    validUntil: '2025-12-31',
    category: 'Seasonal',
    code: 'SUMMER70'
  },
  {
    id: 2,
    title: 'New Member Exclusive',
    description: 'Welcome to WEARCOLLECTIVE! Enjoy 25% off your first purchase.',
    discount: '25',
    validUntil: '2025-12-31',
    category: 'New Members',
    code: 'WELCOME25'
  },
  {
    id: 3,
    title: 'Premium Brands Sale',
    description: 'Exclusive discount on Aether, Onyx, and Vanguard collections.',
    discount: '40',
    validUntil: '2025-12-30',
    category: 'Premium',
    code: 'LUXURY40'
  },
  {
    id: 4,
    title: 'Bundle & Save',
    description: 'Mix and match any 3 items and get the lowest priced item free.',
    discount: 'BOGO',
    validUntil: '2025-12-28',
    category: 'Bundle Deals',
    code: 'BUNDLE3'
  },
  {
    id: 5,
    title: 'Sustainable Style',
    description: 'Support sustainable fashion with discounts on Loom & Thread and Terra.',
    discount: '30',
    validUntil: '2025-12-29',
    category: 'Sustainable',
    code: 'ECO30'
  },
  {
    id: 6,
    title: 'Flash Sale',
    description: '24-hour flash sale on handpicked items. Don\'t miss out!',
    discount: '50',
    validUntil: '2025-12-24',
    category: 'Flash Sale',
    code: 'FLASH50'
  }
];

const PromotionsPage = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyPromoCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-24 sm:pb-32">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl pt-6 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-5xl font-extrabold tracking-tighter text-gray-900 sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.9] text-center lg:text-left">
            EXCLUSIVE <span className="text-indigo-600">PROMOTIONS.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-xl font-light leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Discover unbeatable deals on premium fashion. Save big on your favorite brands and styles.
          </p>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mb-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Current Offers</h2>
            <p className="text-4xl font-black text-gray-900 tracking-tighter sm:text-5xl">ACTIVE DEALS</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:border-indigo-600 transition-colors"
              >
                {/* Discount Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded">
                      {promo.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-indigo-600 tracking-tighter">
                      {promo.discount}{promo.discount !== 'BOGO' && '%'}
                    </div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {promo.discount === 'BOGO' ? 'Deal' : 'Off'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-3">
                  {promo.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {promo.description}
                </p>

                {/* Expiry */}
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-6">
                  <Clock size={14} />
                  <span>Valid until {new Date(promo.validUntil).toLocaleDateString('en-US')}</span>
                </div>

                {/* Promo Code */}
                <div className="bg-gray-50 border border-gray-200 rounded px-4 py-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Code</div>
                      <div className="text-lg font-black text-gray-900 tracking-wider">{promo.code}</div>
                    </div>
                    <button
                      onClick={() => copyPromoCode(promo.code)}
                      className="px-4 py-2 text-indigo-600 font-bold text-sm hover:bg-indigo-50 rounded transition-colors"
                    >
                      {copiedCode === promo.code ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 w-full py-3 text-gray-900 font-semibold text-sm hover:text-indigo-600 transition-colors group"
                >
                  Shop Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-t border-gray-200">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 place-items-center">
            <div className="flex flex-col-reverse gap-2">
              <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 text-center">Max Discount</dt>
              <dd className="text-5xl font-black tracking-tighter text-gray-900 text-center">70%</dd>
            </div>
            <div className="flex flex-col-reverse gap-2">
              <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 text-center">Active Deals</dt>
              <dd className="text-5xl font-black tracking-tighter text-gray-900 text-center">50+</dd>
            </div>
            <div className="flex flex-col-reverse gap-2">
              <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 text-center">Free Shipping</dt>
              <dd className="text-5xl font-black tracking-tighter text-gray-900 text-center">$100</dd>
            </div>
            <div className="flex flex-col-reverse gap-2">
              <dt className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 text-center">New Daily</dt>
              <dd className="text-5xl font-black tracking-tighter text-gray-900 text-center">24/7</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">Stay Updated</h2>
          <p className="text-4xl font-black text-gray-900 tracking-tighter sm:text-5xl mb-6">
            NEVER MISS A DEAL
          </p>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
            Subscribe to our newsletter and be the first to know about new promotions and exclusive member-only discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors text-sm"
            >
              Subscribe Now
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border border-gray-300 text-gray-900 font-semibold rounded hover:border-gray-400 transition-colors text-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;