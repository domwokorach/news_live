import { useEffect, useState } from 'react'
import {
  fallbackNewsData,
  fetchNewsData,
  hasNewsApiKey,
  NEWS_CATEGORIES,
  NEWS_COUNTRIES,
} from './data'
import { StoryCard } from './StoryCard'
import { TopStory } from './TopStory'
import type { NewsCategory, NewsCountry, NewsData } from './data'

export function NewsGrid() {
  const [newsData, setNewsData] = useState<NewsData>(fallbackNewsData)
  const [isLoading, setIsLoading] = useState(true)
  const [country, setCountry] = useState<NewsCountry>('us')
  const [category, setCategory] = useState<NewsCategory>('general')

  useEffect(() => {
    let mounted = true

    const loadNews = async () => {
      const liveNews = await fetchNewsData({ country, category })

      if (mounted) {
        setNewsData(liveNews)
        setIsLoading(false)
      }
    }

    void loadNews()

    const refreshInterval = window.setInterval(() => {
      void loadNews()
    }, 60000)

    return () => {
      mounted = false
      window.clearInterval(refreshInterval)
    }
  }, [country, category])

  return (
    <main className="news-grid" aria-label="Top stories">
      <section className="news-controls" aria-label="News filters">
        <label>
          Country
          <select
            value={country}
            onChange={(event) => {
              setIsLoading(true)
              setCountry(event.target.value as NewsCountry)
            }}
          >
            {NEWS_COUNTRIES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(event) => {
              setIsLoading(true)
              setCategory(event.target.value as NewsCategory)
            }}
          >
            {NEWS_CATEGORIES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <p className="refresh-copy">Auto refresh: every 60 seconds</p>
      </section>

      {!hasNewsApiKey ? (
        <p className="loading-copy">
          Missing VITE_NEWS_API_KEY in .env.local. Showing fallback stories.
        </p>
      ) : null}

      {isLoading ? <p className="loading-copy">Loading latest headlines...</p> : null}

      <TopStory story={newsData.topStory} />

      <section className="side-grid" aria-label="Side stories">
        {newsData.sideStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </section>

      <section className="lower-grid" aria-label="More stories">
        {newsData.lowerStories.map((story) => (
          <StoryCard key={story.id} story={story} compact />
        ))}
      </section>
    </main>
  )
}
