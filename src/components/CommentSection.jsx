import CommentForm from './CommentForm.jsx'
import CommentList from './CommentList.jsx'

export default function CommentSection({ postId, comments, onAddComment }) {
  return (
    <section className="comment-section" aria-labelledby={`comments-title-${postId}`}>
      <h3 id={`comments-title-${postId}`}>Comments</h3>
      <CommentForm postId={postId} onAddComment={onAddComment} />
      <h4>Existing Comments:</h4>
      <CommentList comments={comments} />
    </section>
  )
}
