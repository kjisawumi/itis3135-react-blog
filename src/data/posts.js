// The first post and its original comment text are retained from Module 9.
export const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post. Welcome to my blog! Hope you enjoy reading it.\n\nStarting a blog gives me a place to share ideas and practice building web pages. For this first post, I wanted to keep things simple: a clear title, a short introduction, and a space for readers to join the conversation.',
    author: 'John Doe',
    date: '2023-10-01',
    comments: [
      { id: 1, name: 'Guest 1', content: 'Comment 1' },
      { id: 2, name: 'Guest 2', content: 'Comment 2' },
      { id: 3, name: 'Guest 3', content: 'Comment 3' },
    ],
  },
  {
    id: 2,
    title: 'Learning React Components',
    content: 'Breaking a page into small components makes it easier to understand how the pieces fit together. A header, a post card, and a comment form each have a clear job.\n\nProps let a parent component pass information to a child. Instead of writing the same markup for every post, one BlogPost component can display different titles, dates, and content. State handles the parts that change, such as a newly submitted comment.\n\nMy next step is to keep practicing with small projects. Reusing a simple component is a good way to see how a change can improve several pages at once.',
    author: 'Kitan Isawumi',
    date: '2026-10-15',
    comments: [],
  },
  {
    id: 3,
    title: 'Building Better Study Habits',
    content: 'A short, focused study session can make a difficult assignment feel more manageable. I like to start by choosing one clear task instead of trying to finish everything at once.\n\nFor a coding project, that might mean getting a single page to render before adding navigation. After each small change, I check the result in the browser. This makes it easier to connect a problem with the change that caused it.\n\nTaking brief breaks and writing down the next step also helps me return to a project with a clear plan. Progress is easier to notice when each task has a specific goal.',
    author: 'Kitan Isawumi',
    date: '2026-10-19',
    comments: [],
  },
]
