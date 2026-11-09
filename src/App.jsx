import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BlogPostsPage from './pages/BlogPostsPage.jsx'
import IndividualPostPage from './pages/IndividualPostPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { posts } from './data/posts.js'

export default function App() {
  // Keeping comment state above the routes preserves it when changing pages.
  const [commentsByPost, setCommentsByPost] = useState(() =>
    Object.fromEntries(posts.map((post) => [post.id, post.comments])),
  )

  function addComment(postId, comment) {
    setCommentsByPost((current) => ({
      ...current,
      [postId]: [
        ...current[postId],
        { id: current[postId].length + 1, ...comment },
      ],
    }))
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content" id="main-content">
        <Routes>
          <Route path="/" element={<BlogPostsPage posts={posts} />} />
          <Route
            path="/posts/:postId"
            element={<IndividualPostPage posts={posts} commentsByPost={commentsByPost} onAddComment={addComment} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
