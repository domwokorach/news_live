import type { Story } from './types'

type TopStoryProps = {
  story: Story
}

export function TopStory({ story }: TopStoryProps) {
  return (
    <article className="top-story">
      <img src={story.image} alt="" loading="lazy" />
      <h2>{story.title}</h2>
      {story.summary ? <p>{story.summary}</p> : null}
      <small>
        {story.category} <span>{story.age}</span> <span>{story.hour}</span> <span>{story.date}</span>
      </small>
    </article>
  )
}
