import { Link } from 'react-router'

export default function BlogPost({ post, preview = false, children }) {
  const Title = preview ? 'h3' : 'h2'
  const paragraphs = post.content.split('\n\n')

  return (
    <article className="post-card" aria-labelledby={`post-title-${post.id}`}>
      <Title className="post-title" id={`post-title-${post.id}`}>
        {preview ? <Link to={`/posts/${post.id}`}>{post.title}</Link> : post.title}
      </Title>
      <div className="post-content">
        {preview
          ? <p>{paragraphs[0]}{paragraphs.length > 1 ? '…' : ''}</p>
          : paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <div className="post-meta">
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> <time dateTime={post.date}>{post.date}</time></p>
      </div>
      {preview && <Link className="read-more" to={`/posts/${post.id}`} aria-label={`Read more: ${post.title}`}>Read more →</Link>}
      {children}
    </article>
  )
}
