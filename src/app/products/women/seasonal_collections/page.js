'use client'
import React from 'react'
import Link from 'next/link'

const WomenSeasonalCollectionsPage = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center p-6 sm:p-12">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-[3rem] bg-zinc-950 px-8 py-24 text-center shadow-2xl sm:px-16 sm:py-32">
        {/* Modern decorative background with Glow effects */}
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
          <svg viewBox="0 0 1024 1024" className="h-full w-full" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#premium-glow-women-seasonal)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="premium-glow-women-seasonal">
                <stop stopColor="#EC4899" />
                <stop offset="1" stopColor="#F43F5E" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-pink-300 uppercase">
            Coming Soon
          </span>

          <h1 className="max-w-4xl text-5xl font-black tracking-tighter text-white sm:text-8xl">
            WOMEN'S <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent italic">SEASONAL.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl font-light">
            Curated for every season, designed for every woman. <br className="hidden sm:block" />
            Timeless pieces that capture the essence of the moment.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-bold text-black transition-all hover:scale-105 active:scale-95"
            >
              Back to Store
            </Link>
            <button className="text-zinc-500 hover:text-white transition-all text-sm font-bold tracking-widest uppercase py-4">
              Get Notified
            </button>
          </div>
        </div>

        {/* Minimalist Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
    </div>
  )
}

export default WomenSeasonalCollectionsPage
