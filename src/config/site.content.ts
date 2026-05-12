import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'PDF document platform',
  },
  footer: {
    tagline: 'PDF document platform',
  },
  hero: {
    badge: 'PDF documents and bookmarking',
    title: ['Build a comprehensive document library with', 'PDFs, collections, and saved resources.'],
    description: 'Pcosremedy is a PDF and bookmarking platform for organizing documents, sharing resources, and keeping content structured.',
    primaryCta: {
      label: 'Open social bookmarking',
      href: '/sbm',
    },
    secondaryCta: {
      label: 'Browse PDF library',
      href: '/pdf',
    },
    searchPlaceholder: 'Search PDFs, links, and collections',
    focusLabel: 'Focus',
    featureCardBadge: 'platform focus',
    featureCardTitle: 'PDF documents and saved resources define the homepage experience.',
    featureCardDescription:
      'The content now presents the product clearly as a PDF and bookmarking platform instead of a generic content website.',
  },
  home: {
    metadata: {
      title: 'PDF document platform for document sharing and saved resources',
      description: 'Explore PDF documents, social bookmarking collections, and document-focused platform surfaces.',
      openGraphTitle: 'PDF document platform',
      openGraphDescription:
        'Pcosremedy combines PDF document libraries, social bookmarking, and structured resource libraries in one product.',
      keywords: ['PDF documents', 'social bookmarking', 'PDF library', 'resource library', 'document platform'],
    },
    introBadge: 'About the platform',
    introTitle: 'Built for document sharing, saved resources, and structured discovery.',
    introParagraphs: [
      'This site brings together PDF document libraries, social bookmarking collections, and supporting content so people can manage documents and resources in one place.',
      'Instead of looking like a general-purpose content site, the platform is now presented around its actual product purpose: PDF and document sharing.',
      'Whether someone starts with a PDF document or a bookmark collection, they can continue exploring connected surfaces without losing context.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Homepage positioned around PDF documents and libraries.',
      'Connected sections for documents, bookmark shelves, and supporting resources.',
      'Cleaner discovery flow for document sharing and saved links.',
      'Simple interface that keeps structure and trust easy to understand.',
    ],
    primaryLink: {
      label: 'Social bookmarking',
      href: '/sbm',
    },
    secondaryLink: {
      label: 'PDF library',
      href: '/pdf',
    },
  },
  cta: {
    badge: 'Start exploring',
    title: 'Explore PDF documents, saved links, and document-focused platform sections.',
    description: 'Pcosremedy is designed as a PDF document website with clearer product positioning and structured discovery.',
    primaryCta: {
      label: 'Open social bookmarking',
      href: '/sbm',
    },
    secondaryCta: {
      label: 'Browse PDF library',
      href: '/pdf',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Articles and related reading inside the broader PDF document platform.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Structured pages and related content connected to the PDF document experience.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Announcements and short-form content connected to the broader platform.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Visual content and supporting media across the PDF document website.',
  },
  profile: {
    title: 'Public profiles',
    description: 'Profile pages for people, brands, and projects presented through a public credibility surface.',
  },
  sbm: {
    title: 'Social bookmarking and saved resources',
    description: 'Bookmark collections, saved links, and organized resource shelves.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Downloadable files and document resources connected to the broader platform.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual posts, and story-led content where imagery carries the experience.',
      'These posts connect with articles, listings, and other sections so visuals can act as entry points into deeper content.',
      'Browse the latest visual updates, then continue into related stories or supporting pages for more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Public profiles and identity pages',
    paragraphs: [
      'Profiles capture the identity behind a person, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as public credibility anchors across the site and connect naturally with saved resources, stories, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Social bookmarking', href: '/sbm' }
    ],
  },
  sbm: {
    title: 'Social bookmarking and curated resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related profiles, stories, or other resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'PDF library', href: '/pdf' }
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Social bookmarking', href: '/sbm' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
