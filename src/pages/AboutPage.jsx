import { Link } from 'react-router'

export default function AboutPage() {
  return (
    <section className="post-card" aria-labelledby="about-title">
      <h2 id="about-title">About My Blog</h2>
      <p>Welcome to My Blog! This is a place to share thoughts, practice writing, and connect through comments.</p>
      <p>This React blog was created for ITIS 3135 and extended with individual post pages, a contact form, and light and dark themes.</p>
      <Link to="/">Back to the blog</Link>
    </section>
  )
}
