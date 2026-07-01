import type { Story } from './types'

export const fallbackTopStory: Story = {
  id: 'lead-1',
  title: 'Woman raped by Superdry co-founder tells BBC she was working for him at the time',
  summary:
    'She described feeling fear and dread as she returned to her job, working for James Holder, after the attack.',
  category: 'UK',
  age: '2h',
  hour: '08:15',
  date: '01/07/2026',
  image:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
}

export const fallbackSideStories: Story[] = [
  {
    id: 's-1',
    title: "Chris Mason: Starmer's defence plan leaves crunching trade-offs for Burnham to confront",
    summary: 'The move raises immediate political and budget pressure in Labour strongholds.',
    category: 'Politics',
    age: '1h',
    hour: '09:20',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 's-2',
    title: 'Households urged to submit meter readings as energy prices rise',
    summary: 'Suppliers say timely readings can help people avoid inaccurate estimated bills.',
    category: 'Business',
    age: '9h',
    hour: '03:40',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 's-3',
    title: 'Why Gen Z are planning for life without a state pension',
    summary: 'Younger savers are shifting toward private plans amid long-term policy uncertainty.',
    category: 'BBC InDepth',
    age: '9h',
    hour: '03:05',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80',
    accent: 'in-depth',
  },
]

export const fallbackLowerStories: Story[] = [
  {
    id: 'l-1',
    title: 'Trump made more than $1bn from crypto in first year back in office',
    summary: 'Campaign filings and disclosures point to major digital asset gains over 12 months.',
    category: 'World',
    age: '4h',
    hour: '06:30',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'l-2',
    title: 'Three-year-old rescued and taken to hospital six days after Venezuela quake',
    summary: 'Emergency teams say the child was found conscious during overnight operations.',
    category: 'World',
    age: '5h',
    hour: '05:42',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'l-3',
    title: 'Women with PMOS should have yearly NHS checks, says health watchdog',
    summary: 'Updated guidance calls for routine screening and earlier intervention by clinics.',
    category: 'Health',
    age: '6h',
    hour: '04:50',
    date: '01/07/2026',
    image:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
  },
]

export type NewsData = {
  topStory: Story
  sideStories: Story[]
  lowerStories: Story[]
}

export type NewsCountry = 'us' | 'gb' | 'ca' | 'au' | 'in'
export type NewsCategory =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology'

export const NEWS_COUNTRIES: Array<{ label: string; value: NewsCountry }> = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'India', value: 'in' },
]

export const NEWS_CATEGORIES: Array<{ label: string; value: NewsCategory }> = [
  { label: 'General', value: 'general' },
  { label: 'Business', value: 'business' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Health', value: 'health' },
  { label: 'Science', value: 'science' },
  { label: 'Sports', value: 'sports' },
  { label: 'Technology', value: 'technology' },
]

export type NewsFilters = {
  country: NewsCountry
  category: NewsCategory
}

type NewsApiArticle = {
  source?: { name?: string }
  title?: string
  description?: string
  urlToImage?: string
  publishedAt?: string
}

type NewsApiResponse = {
  status: 'ok' | 'error'
  articles?: NewsApiArticle[]
}

const API_URL = 'https://newsapi.org/v2/top-headlines'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY
export const hasNewsApiKey = Boolean(API_KEY)
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80'

const hoursAgo = (publishedAt?: string): string => {
  if (!publishedAt) {
    return 'recent'
  }

  const publishedTime = new Date(publishedAt).getTime()
  if (Number.isNaN(publishedTime)) {
    return 'recent'
  }

  const elapsedHours = Math.max(1, Math.round((Date.now() - publishedTime) / 3600000))
  return `${elapsedHours}h`
}

const formatPublishedHour = (publishedAt?: string): string => {
  if (!publishedAt) {
    return '--:--'
  }

  const publishedDate = new Date(publishedAt)
  if (Number.isNaN(publishedDate.getTime())) {
    return '--:--'
  }

  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(publishedDate)
}

const formatPublishedDate = (publishedAt?: string): string => {
  if (!publishedAt) {
    return '--/--/----'
  }

  const publishedDate = new Date(publishedAt)
  if (Number.isNaN(publishedDate.getTime())) {
    return '--/--/----'
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(publishedDate)
}

const mapStory = (article: NewsApiArticle, index: number): Story => {
  const category = article.source?.name || 'News'

  return {
    id: `live-${index}`,
    title: article.title || 'Untitled story',
    summary: article.description || undefined,
    category,
    age: hoursAgo(article.publishedAt),
    hour: formatPublishedHour(article.publishedAt),
    date: formatPublishedDate(article.publishedAt),
    image: article.urlToImage || FALLBACK_IMAGE,
    accent: category.toLowerCase().includes('depth') ? 'in-depth' : 'default',
  }
}

export const fallbackNewsData: NewsData = {
  topStory: fallbackTopStory,
  sideStories: fallbackSideStories,
  lowerStories: fallbackLowerStories,
}

export async function fetchNewsData(filters: NewsFilters): Promise<NewsData> {
  if (!API_KEY) {
    return fallbackNewsData
  }

  try {
    const requestUrl = new URL(API_URL)
    requestUrl.searchParams.set('country', filters.country)
    requestUrl.searchParams.set('category', filters.category)
    requestUrl.searchParams.set('pageSize', '20')
    requestUrl.searchParams.set('apiKey', API_KEY)

    const response = await fetch(requestUrl, {
      headers: {
        'X-Api-Key': API_KEY,
        Authorization: API_KEY,
      },
    })

    if (!response.ok) {
      return fallbackNewsData
    }

    const payload = (await response.json()) as NewsApiResponse
    const mappedStories = (payload.articles || [])
      .filter((article) => Boolean(article.title))
      .map(mapStory)

    if (payload.status !== 'ok' || mappedStories.length < 7) {
      return fallbackNewsData
    }

    return {
      topStory: mappedStories[0],
      sideStories: mappedStories.slice(1, 4),
      lowerStories: mappedStories.slice(4, 7),
    }
  } catch {
    return fallbackNewsData
  }
}
