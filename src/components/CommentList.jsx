export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="empty-comments">No comments yet. Be the first to comment!</p>
  }

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.id}><strong>{comment.name}:</strong> {comment.content}</li>
      ))}
    </ul>
  )
}
