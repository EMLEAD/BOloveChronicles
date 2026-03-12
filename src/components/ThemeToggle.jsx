import React from 'react'
import { Sun, Moon } from 'lucide-react'
import './ThemeToggle.css'

const ThemeToggle = ({ isDarkMode, onThemeToggle }) => {
  return (
    <div className="theme-toggle-bottom">
      <div className="theme-toggle-container" onClick={onThemeToggle}>
        <div className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
          <div className="theme-icon">
            {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
          </div>
        </div>
        <span className="theme-label">
          {isDarkMode ? 'Dark' : 'Light'}
        </span>
      </div>
    </div>
  )
}

export default ThemeToggle
