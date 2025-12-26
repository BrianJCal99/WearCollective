/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const stats = [
  { label: 'Founded', value: '2024' },
  { label: 'Happy Customers', value: '25k+' },
  { label: 'Partner Brands', value: '100+' },
  { label: 'Countries Served', value: '12' },
]

const values = [
  {
    name: 'Sustainability First',
    description:
      'We believe in fashion that feels good in every way. From eco-friendly materials to carbon-neutral shipping, every decision we make is rooted in protecting our planet.',
  },
  {
    name: 'Inclusive Design',
    description:
      'Style belongs to everyone. We consciously curate collections that transcend traditional boundaries, offering pieces that celebrate all body types, genders, and expressions.',
  },
  {
    name: 'Uncompromising Quality',
    description:
      'We reject the throwaway culture of fast fashion. Our pieces are chosen for their durability, craftsmanship, and timeless appeal, ensuring they remain staples in your wardrobe for years.',
  },
  {
    name: 'Community Driven',
    description: 'WEARCOLLECTIVE is more than a store; it is a platform for connection. We champion independent designers and listen to our community to shape the future of style.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Redefining Fashion, <br />
              <span className="text-indigo-600">Empowering You.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              WEARCOLLECTIVE is a movement dedicated to bringing high-quality, sustainable, and inclusive fashion to the world. We bridge the gap between conscious creators and stylish consumers.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by thousands worldwide</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our growth is a testament to the shared belief that fashion can be a force for good.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-gray-50 p-8 hover:bg-gray-100 transition-colors">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-24 sm:mt-32 xl:mx-auto xl:max-w-7xl px-6 lg:px-8">
        <img
          src="https://iheaqdluewqbcbcunigk.supabase.co/storage/v1/object/public/brand_logo/logo_placeholder_1920x1080px.png"
          alt="Team collaboration"
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every piece in our collection is selected with intention. Here is what we stand for.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900 text-xl mb-2">{value.name}</dt>
              <dd className="text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to find your look?
              <br />
              Join the collective today.
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products/new_arrivals"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop New Arrivals
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}