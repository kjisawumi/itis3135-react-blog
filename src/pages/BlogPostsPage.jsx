import BlogPost from '../components/BlogPost.jsx'

export default function BlogPostsPage({ posts }) {
  return (
    <section aria-labelledby="blog-posts-title">
      <h2 className="page-title" id="blog-posts-title">Blog Posts</h2>
      {posts.map((post) => <BlogPost key={post.id} post={post} preview />)}
    </section>
  )
}
