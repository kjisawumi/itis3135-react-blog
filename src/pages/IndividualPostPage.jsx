import { Link, useParams } from 'react-router'
import BlogPost from '../components/BlogPost.jsx'
import CommentSection from '../components/CommentSection.jsx'
import NotFoundPage from './NotFoundPage.jsx'

export default function IndividualPostPage({ posts, commentsByPost, onAddComment }) {
  const { postId } = useParams()
  const post = posts.find((item) => String(item.id) === postId)

  if (!post) {
    return <NotFoundPage title="Post not found" message="Sorry, this blog post does not exist." />
  }

  return (
    <>
      <Link className="back-link" to="/">← Back to blog posts</Link>
      <BlogPost post={post}>
        <CommentSection
          key={post.id}
          postId={post.id}
          comments={commentsByPost[post.id]}
          onAddComment={(comment) => onAddComment(post.id, comment)}
        />
      </BlogPost>
    </>
  )
}
