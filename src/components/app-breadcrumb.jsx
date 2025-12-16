'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { HomeIcon, ChevronRight } from 'lucide-react';

const AppBreadcrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter( path => path );
  return (
    <div className="pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 py-4">
                        <li className="mr-2 text-sm font-medium text-gray-900"><Link href="/"><HomeIcon /></Link></li>
                        {pathNames.map((path, index) => (
                        <li key={index}>
                            <div className="flex items-center">
                                <ChevronRight/>
                                <Link href={`/${pathNames.slice(0, index + 1).join('/')}`} className="ml-2 text-sm font-medium text-gray-900">
                                    {path.charAt(0).toUpperCase() + path.slice(1)}
                                </Link>
                            </div>
                        </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default AppBreadcrumb;