export function PromoBanner() {
  return (
    <section className="promo-banner" aria-label="Account banner">
      <div>
        <p>Sign in or create an account to watch, listen and join in</p>
      </div>
      <div className="promo-actions">
        <button type="button">Sign in</button>
        <a href="#" onClick={(event) => event.preventDefault()}>
          Register
        </a>
      </div>
    </section>
  )
}
