import { useState } from 'react'

export default function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!fields.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!fields.message.trim()) nextErrors.message = 'Please enter a message.'
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length > 0) return

    setStatus(`Thanks, ${fields.name.trim()}! Your form was submitted successfully for this demo. No email was sent.`)
    setFields({ name: '', email: '', message: '' })
  }

  return (
    <section className="post-card" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p>Have a question or feedback about the blog? Fill out the form below.</p>
      <p className="form-note" id="contact-note">This is a demo form. Messages are not sent or saved.</p>
      <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-note" noValidate>
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" autoComplete="name" required value={fields.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
          {errors.name && <p className="form-error" id="contact-name-error" role="alert">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required value={fields.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
          {errors.email && <p className="form-error" id="contact-email-error" role="alert">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" required value={fields.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
          {errors.message && <p className="form-error" id="contact-message-error" role="alert">{errors.message}</p>}
        </div>
        <button className="submit-button" type="submit">Submit</button>
        <p className="form-status" role="status">{status}</p>
      </form>
    </section>
  )
}
