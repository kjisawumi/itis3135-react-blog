import { Link } from 'react-router'

export default function NotFoundPage({ title = 'Page not found', message = 'Sorry, the page you are looking for does not exist.' }) {
  return (
    <section className="post-card" aria-labelledby="not-found-title">
      <h2 id="not-found-title">{title}</h2>
      <p>{message}</p>
      <Link to="/">Back to blog posts</Link>
    </section>
  )
}
