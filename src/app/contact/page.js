import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Email Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Email</h3>
            <div className="space-y-3">
              <a href="mailto:stores@wearcollective.store" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                stores@wearcollective.store
              </a>
              <a href="mailto:support@wearcollective.store" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                support@wearcollective.store
              </a>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Phone</h3>
            <a href="tel:+61460123456" className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-lg">
              +61 460 123 456
            </a>
            <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
          </div>

          {/* Address Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Office</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              10 Yarra St,<br />
              South Yarra VIC 3141
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage