import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Library, UserCircle } from 'lucide-react'
import { mockFaqs } from '@/data/mock-data'

const topics = [
  {
    title: 'Onboarding & sign-in',
    description: 'Create a profile, use local sign-in, and know what is stored in your browser compared to the cloud.',
    icon: UserCircle,
  },
  {
    title: 'SBM library & collections',
    description: 'Build shelves, add references, and keep partner-ready context next to your links without clutter.',
    icon: Library,
  },
]

export default function HelpPage() {
  return (
    <PageShell
      title="Help center"
      description="Guides for the SBM profile, resource library, and account basics — in the same green and blue system as the home experience."
      actions={
        <Button asChild className="bg-[#76A13B] text-white hover:bg-[#658d34]">
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => {
              const I = topic.icon
              return (
                <Card
                  key={topic.title}
                  className="border border-border bg-white shadow-sm transition hover:border-[#76A13B]/30"
                >
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1AAAD1]/20 bg-[#e0f4fa]/60 text-[#0a6b82]">
                      <I className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-semibold text-foreground">{topic.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
        </div>
        <Card className="h-fit border border-border bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Popular questions</h3>
            <p className="mb-3 text-sm text-muted-foreground">Select a topic to expand. Answers are written for the current SBM product surface.</p>
            <Accordion type="single" collapsible className="w-full">
              {mockFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left text-foreground hover:text-[#76A13B] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
