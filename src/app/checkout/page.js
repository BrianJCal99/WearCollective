import React from 'react'
import Image from 'next/image'

const CartPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="text-lg text-black">Redirecting you to a secure</span>
          <Image src="/Stripe_wordmark_-_slate.svg" alt="Stripe Logo" width={100} height={100} />
          <span className="text-lg text-black">payment portal to finish checkout.</span>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  )
}

export default CartPage