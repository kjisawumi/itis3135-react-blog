# ITIS 3135 — React Blog

This project extends the original Module 9 Vite/React blog. It keeps the original
gradient header, rounded cards, global CSS, yellow submit buttons, and footer.
It adds routed pages, per-post comments, a demo contact form, and a saved theme.

## Open in VS Code

1. Extract `Isawumi_Kitan_ReactBlog_Part2.zip`.
2. In VS Code, choose **File → Open Folder** and select the extracted `blog-lab` folder.
3. Choose **Terminal → New Terminal**. The terminal must be inside `blog-lab`.
4. Run:

```sh
npm install
npm run dev
```

Open the Local address printed in the terminal. Keep the terminal running while
viewing the app. Press Control+C to stop it. Use Vite, rather than Live Server or
opening index.html directly. Node.js 22.12 or newer is required; Node.js 24 LTS
works. React Router is already in package.json and installs with npm install.

## Build

```sh
npm run build
npm run preview
```

## Deploy to Netlify

Use `npm ci` to install the locked dependencies, then run `npm run build`.
Netlify can build the repository using the included `netlify.toml`, or the
contents of `dist` can be uploaded as a manual deployment. The publish directory
is `dist`. The included `_redirects` file sends direct page requests to the React
app, so refreshing `/posts/2` or another route works after deployment.

## Pages and behavior

- `/`: three blog post previews, each with title, author, date, and Read more link.
- `/posts/1`, `/posts/2`, `/posts/3`: unique full posts and their comment sections.
- `/contact`: name, email, and message validation, with local success feedback.
- `/about`: retains the original About view.
- An invalid post ID or unknown URL shows a friendly message and a Home link.

Comments require a nonblank name and comment. They appear immediately, the form
clears, and the page does not reload. Comments remain with their own post when
navigating and reset on refresh because they are managed with React useState.
The first post retains Comment 1, Comment 2, and Comment 3. The original comments
had no names, so they are labeled Guest 1, Guest 2, and Guest 3. The other posts
start with the required no-comments message.

The contact form is a demonstration: it does not send email, make a network
request, or save messages. Valid submission clears the form and shows feedback.

Use the navbar button to switch between dark and light modes. ThemeContext and
useContext share the theme, and useState updates it. The preference is saved as
`my-blog-theme` in localStorage and restored on refresh. If localStorage is blocked,
the toggle still works for the current session, but its preference cannot persist.

## Source organization

```text
blog-lab/
├── public/favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── BlogPost.jsx
│   │   ├── CommentSection.jsx
│   │   ├── CommentForm.jsx
│   │   ├── CommentList.jsx
│   │   └── Footer.jsx
│   ├── context/ThemeContext.jsx
│   ├── data/posts.js
│   ├── pages/
│   │   ├── BlogPostsPage.jsx
│   │   ├── IndividualPostPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

App keeps the per-post comment state above the route components. BrowserRouter,
Routes, Route, Link, NavLink, and useParams come from react-router. The first post
keeps its original title, author, publication date, opening text, and comments.

## Quick checks

- Open each Read more link and use Back to blog posts.
- Submit a named comment on post 2; visit post 3 to confirm it stays separate.
- Return to post 2 to see the comment is retained during navigation.
- Try blank comments and an invalid contact email, then submit valid values.
- Toggle the theme, navigate between pages, and refresh to verify persistence.
- Open `/posts/999` to verify the missing-post message.

The submission excludes node_modules and dist. Recreate dependencies using
npm install; no extra package installation or source edits are needed.
