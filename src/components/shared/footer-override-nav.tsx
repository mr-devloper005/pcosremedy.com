'use client'

import Link from 'next/link'

const links = [
  { name: 'Social Bookmarking', href: '/sbm', key: 'sbm' },
  { name: 'About Us', href: '/about', key: 'about' },
  { name: 'Privacy', href: '/privacy', key: 'privacy' },
  { name: 'Terms', href: '/terms', key: 'terms' },
  { name: 'Contact', href: '/contact', key: 'contact' },
] as const

export function FooterOverrideNav() {
  return (
    <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center sm:gap-4">
      <ul className="flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-muted-foreground transition hover:text-[#76A13B] hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
