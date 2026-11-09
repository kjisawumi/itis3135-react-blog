import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

function getSavedTheme() {
  try {
    return localStorage.getItem('my-blog-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    // The toggle still works when the browser blocks local storage.
    return 'light'
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('my-blog-theme', theme)
    } catch {
      // Keep the current session usable even if the preference cannot be saved.
    }
  }, [theme])

  function toggleTheme() {
    setTheme((current) => current === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
