"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Globe, ShieldCheck, Leaf } from 'lucide-react';

const brands = [
  {
    name: 'Aether',
    slug: 'aether',
    description: 'High-performance technical outerwear designed for the modern explorer. Melding architectural lines with extreme durability.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/aether.png',
    tags: ['Technical', 'Outerwear', 'Premium'],
    color: 'bg-zinc-900',
  },
  {
    name: 'Loom & Thread',
    slug: 'loom-thread',
    description: 'Sustainable, hand-crafted basics made from the finest organic fibers. Timeless silhouettes that honor the art of weaving.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/loom_thread.png',
    tags: ['Sustainable', 'Basics', 'Hand-Crafted'],
    color: 'bg-stone-100',
  },
  {
    name: 'Vanguard',
    slug: 'vanguard',
    description: 'Bold, avant-garde streetwear that balances artistic expression with urban functionality.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/vanguard.png',
    tags: ['Streetwear', 'Avant-Garde', 'Bold'],
    color: 'bg-indigo-950',
  },
  {
    name: 'Serene',
    slug: 'serene',
    description: 'Minimalist loungewear inspired by Zen philosophy. Elevated comfort for the mindful individual.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/serene.png',
    tags: ['Minimalist', 'Loungewear', 'Zen'],
    color: 'bg-sage-100',
  },
  {
    name: 'Onyx',
    slug: 'onyx',
    description: 'Sophisticated, monochrome evening wear and tailored essentials for a life of understated elegance.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/onyx.png',
    tags: ['Luxury', 'Evening', 'Monochrome'],
    color: 'bg-black',
  },
  {
    name: 'Terra',
    slug: 'terra',
    description: 'Rugged, earth-toned apparel built for long-lasting performance in any environment.',
    image: 'https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/terra.png',
    tags: ['Outdoor', 'Industrial', 'Durable'],
    color: 'bg-orange-900',
  },
];

const BrandsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/placeholders/hero.png"
          alt="WearCollective Brands Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4">
            OUR <span className="text-indigo-400">COLLECTIVE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            A curated selection of the world's most innovative, ethical, and aesthetically driven brands.
          </p>
        </div>
      </section>

      {/* Values/Introduction */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4">The Selection Process</h2>
          <p className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            We don't just sell clothes. We partner with visionaries <br className="hidden md:block" /> who share our commitment to design and planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20 text-gray-500">
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <Leaf size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Sustainability</h3>
            <p className="text-gray-500 text-sm">Commitment to low-impact materials and ethical labor.</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <Sparkles size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Design Focus</h3>
            <p className="text-gray-500 text-sm">Pioneering aesthetics and innovative silhouettes.</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Quality First</h3>
            <p className="text-gray-500 text-sm">Garments built to last, moving away from fast fashion.</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <Globe size={28} />
            </div>
            <h3 className="text-lg font-bold mb-2">Global Curation</h3>
            <p className="text-gray-500 text-sm">Finding the best talent from every corner of the world.</p>
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">THE BRANDS</h2>
              <p className="text-gray-500 mt-2 text-lg">Swipe through our current selection of innovators.</p>
            </div>
            <Link href="/products" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm border-b-2 border-indigo-600 pb-1">
              Shop Collective <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brands.map((brand) => (
              <div
                key={brand.slug}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {brand.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gray-900 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">{brand.name}</h3>
                    <div className={`w-3 h-3 rounded-full mt-3 ${brand.color}`} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
                    {brand.description}
                  </p>
                  <Link
                    href={`/products?brand=${brand.slug}`}
                    className="flex items-center gap-2 font-bold text-gray-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-xs"
                  >
                    Explore Brand <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">BECOME PART OF THE <br />COLLECTIVE.</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
              Get early access to brand drops, exclusive collaborations, and invitations to our gallery events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signin"
                className="px-8 py-4 bg-white text-indigo-600 font-black rounded-full hover:bg-indigo-50 transition-colors uppercase tracking-widest text-sm"
              >
                Join Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-indigo-500 text-white font-black rounded-full hover:bg-indigo-400 transition-colors uppercase tracking-widest text-sm border border-indigo-400"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;