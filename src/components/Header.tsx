const primaryLinks = ['Home', 'UK', 'World', 'Business', 'Culture', 'Politics', 'Health', 'Tech']
const secondaryLinks = ['England', 'N. Ireland', 'Scotland', 'Alba', 'Wales', 'Cymru', 'Local News', 'My News']

export function Header() {
  return (
    <header className="news-header">
      <div className="brand-row">
        <div className="bbc-blocks" aria-label="BBC">
          <span>D</span>
          <span>O</span>
          <span>M</span>
          <span>I</span>
          <span>N</span>
          <span>I</span> 
          <span>C</span>                  
        </div>
        <nav aria-label="Global">
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>Sport</li>
            <li>Weather</li>
            <li>iPlayer</li>
          </ul>
        </nav>
      </div>

      <div className="section-row">
        <h1>NEWS</h1>
      </div>

      <nav className="topic-row" aria-label="Main topics">
        {primaryLinks.map((item) => (
          <a key={item} href="#" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
      </nav>

      <nav className="subtopic-row" aria-label="Regional topics">
        {secondaryLinks.map((item) => (
          <a key={item} href="#" onClick={(event) => event.preventDefault()}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}
