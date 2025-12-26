import React from 'react'
import Link from "next/link"

const AppFooter = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="group">
                            <div className="text-2xl font-black tracking-tighter text-gray-900">
                                WEAR<span className="text-indigo-600">COLLECTIVE</span>
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link href="/about" className="hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/contact" className="hover:underline">Contact</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/support" className="hover:underline">Support</Link>
                                </li>
                                <li>
                                    <Link href="/qa" className="hover:underline">Q&A</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Find Us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link href="/store-locator" className="hover:underline">Store Locator</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.instagram.com" target="_blank" className="hover:underline ">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com" target="_blank" className="hover:underline">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © {new Date().getFullYear()} <Link href="/" className="font-bold"><span className="text-gray-900">WEAR</span><span className="text-indigo-600">COLLECTIVE</span></Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter