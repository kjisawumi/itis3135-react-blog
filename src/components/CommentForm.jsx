import { useState } from 'react'

export default function CommentForm({ postId, onAddComment }) {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const nameId = `comment-name-${postId}`
  const contentId = `comment-content-${postId}`

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!content.trim()) nextErrors.content = 'Please enter a comment.'
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length > 0) return

    onAddComment({ name: name.trim(), content: content.trim() })
    setName('')
    setContent('')
    setStatus('Your comment was added.')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => { setName(event.target.value); setErrors({}); setStatus('') }}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${nameId}-error` : undefined}
        />
        {errors.name && <p className="form-error" id={`${nameId}-error`} role="alert">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor={contentId}>Comment</label>
        <textarea
          id={contentId}
          name="comment"
          placeholder="Add a comment"
          required
          value={content}
          onChange={(event) => { setContent(event.target.value); setErrors({}); setStatus('') }}
          aria-invalid={Boolean(errors.content)}
          aria-describedby={errors.content ? `${contentId}-error` : undefined}
        />
        {errors.content && <p className="form-error" id={`${contentId}-error`} role="alert">{errors.content}</p>}
      </div>
      <button className="submit-button" type="submit">Submit</button>
      <p className="form-status" role="status">{status}</p>
    </form>
  )
}
