import Link from 'next/link'
import { Bookmark, Globe2, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const pillars = [
  {
    title: 'Social bookmarking',
    description: 'Save, group, and revisit important links through bookmark collections that are easier to scan than scattered browser tabs.',
    icon: Bookmark,
  },
] as const

const sections = [
  {
    eyebrow: 'Social bookmarking',
    title: 'Bookmark libraries that organize useful links into reusable collections.',
    description: 'The bookmarking side of the platform helps visitors save resources, keep context, and return to grouped references without clutter.',
    href: '/sbm',
    cta: 'Open social bookmarking',
  },
] as const

export function HomePageOverride() {
  return (
    <div className="min-h-screen bg-[#f3f6ef] text-[#1f2617]">
      <NavbarShell />

      <main className="overflow-hidden">
        <section className="relative isolate border-b border-[#d5ddc8] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_rgba(243,246,239,0.9)_42%,_rgba(224,244,250,0.55)_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cfdac2] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5d684f] shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#76A13B]" />
                  PDF document platform
                </span>
                <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[#1f2617] sm:text-6xl lg:text-7xl">
                  PDF documents and social bookmarking in one focused platform.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#56604b] sm:text-lg">
                  Pcosremedy is positioned as a PDF and document platform where file sharing, saved resources, and organized content
                  live together in a cleaner and more structured experience.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-[#56604b] sm:grid-cols-3">
                  {[
                    'Browse PDF documents and downloadable resources',
                    'Collect links inside bookmark shelves and organized resource sets',
                    'Present your platform as a document and sharing product',
                  ].map((item) => (
                    <div key={item} className="rounded-[1.5rem] border border-[#d5ddc8] bg-white px-4 py-4 leading-6 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-[#d5ddc8] bg-white p-7 shadow-[0_24px_60px_rgba(64,76,34,0.08)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c775f]">Platform summary</p>
                      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1f2617]">
                        Built around documents, bookmarks, and organized content.
                      </h2>
                    </div>
                    <span className="rounded-full bg-[#eaf2df] p-3 text-[#5f872b]">
                      <Globe2 className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-[#56604b]">
                    The homepage now introduces the product with direct PDF language so visitors understand the purpose before they open document pages or resource collections.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c775f]">Main platform areas</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#1f2617]">
              The homepage now explains the product through the features that actually matter.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-1">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[2rem] border border-[#d5ddc8] bg-white p-7 shadow-[0_18px_45px_rgba(64,76,34,0.07)]">
                <span className="inline-flex rounded-2xl bg-[#eef4e4] p-3 text-[#5f872b]">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-[#1f2617]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-8 text-[#56604b]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d5ddc8] bg-[#f8faf4]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-[#d5ddc8] bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c775f]">Why this homepage works</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1f2617]">
                  It now represents a PDF document product instead of looking like an unrelated publishing site.
                </h2>
                <div className="mt-8 space-y-4">
                  {[
                    ['Documents first', 'Visitors can immediately understand that PDF documents are one of the main destination types on the platform.'],
                    ['Bookmarking clarity', 'Social bookmarking is explained as a core product feature, not hidden behind generic resource wording.'],
                    ['Brand consistency', 'The copy, sections, and labels now align with the site purpose across the homepage and supporting pages.'],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[1.4rem] border border-[#dfe7d5] bg-[#fbfcf8] p-4">
                      <p className="text-sm font-semibold text-[#1f2617]">{title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#56604b]">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                {sections.map((section) => (
                  <Link
                    key={section.title}
                    href={section.href}
                    className="group rounded-[2rem] border border-[#d5ddc8] bg-white p-7 shadow-[0_18px_45px_rgba(64,76,34,0.07)] transition hover:-translate-y-1 hover:bg-[#fcfdf9]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6c775f]">{section.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#1f2617]">{section.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-8 text-[#56604b]">{section.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2f6f87]">
                      <Layers3 className="h-4 w-4" />
                      {section.cta}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
