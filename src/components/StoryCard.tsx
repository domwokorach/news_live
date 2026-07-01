import type { Story } from './types'

type StoryCardProps = {
  story: Story
  compact?: boolean
}

export function StoryCard({ story, compact = false }: StoryCardProps) {
  const className = compact ? 'story-card compact' : 'story-card'

  return (
    <article className={className}>
      <div className="thumb-wrap">
        <img src={story.image} alt="" loading="lazy" />
        {story.accent === 'in-depth' ? <span className="tag">IN DEPTH</span> : null}
      </div>
      <h3>{story.title}</h3>
      {story.summary ? <p className="story-description">{story.summary}</p> : null}
      <small>
        {story.category} <span>{story.age}</span> <span>{story.hour}</span> <span>{story.date}</span>
      </small>
    </article>
  )
}
