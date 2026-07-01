import { Header } from './Header'
import { NewsGrid } from './NewsGrid'
import { PromoBanner } from './PromoBanner'
import './news.css'

export function NewsPage() {
  return (
    <div className="news-shell">
      <Header />
      <PromoBanner />
      <NewsGrid />
    </div>
  )
}
