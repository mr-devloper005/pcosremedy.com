import Image from 'next/image'
import { Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { FooterOverrideNav } from '@/components/shared/footer-override-nav'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-[#76A13B]/20 bg-white text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#76A13B]/25 bg-[#f4faf0]">
              <Image src="/favico.png" alt="" width={36} height={36} className="h-8 w-8 object-contain" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{SITE_CONFIG.name}</p>
            </div>
          </div>
          <FooterOverrideNav />
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs sm:flex-row sm:items-center">
          <p className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Shield className="h-3.5 w-3.5 text-[#76A13B]" />
            PDF document platform · sign-in stored locally in this browser
          </p>
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
