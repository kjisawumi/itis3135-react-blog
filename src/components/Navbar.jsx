import { useContext } from 'react'
import { NavLink } from 'react-router'
import { ThemeContext } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
        aria-label="Dark mode"
      >
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </button>
    </nav>
  )
}
