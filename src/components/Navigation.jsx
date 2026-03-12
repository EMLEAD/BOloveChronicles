import React, { useState, useEffect } from 'react'
import { Menu, X, Home, Heart, BookOpen, Calendar, Camera } from 'lucide-react'
import './Navigation.css'

const Navigation = ({ currentSection, onSectionChange, isDarkMode, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Heart },
    { id: 'story', label: 'Her Story', icon: BookOpen },
    { id: 'husband-story', label: 'His Story', icon: BookOpen },
    { id: 'details', label: 'Wedding Details', icon: Calendar },
    { id: 'gallery', label: 'Gallery', icon: Camera }
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId)
    setIsMenuOpen(false)
  }

  const handleThemeToggle = (e) => {
    e.stopPropagation()
    onThemeToggle()
  }

  return (
    <div className={`navigation ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header Bar */}
      <div className="nav-header">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="menu-text">MENU</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-overlay" onClick={handleMenuToggle}></div>
        <div className="nav-content">
          <div className="nav-header-content">
            <h3 className="nav-title">Olaoluwa & Boluwatife</h3>
            <div className="nav-subtitle">March 28, 2026</div>
          </div>
          
          <nav className="nav-links">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <div
                  key={section.id}
                  className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
                  onClick={() => handleSectionClick(section.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="nav-icon">
                    <IconComponent size={20} />
                  </span>
                  <span className="nav-label">{section.label}</span>
                  {currentSection === section.id && <div className="nav-indicator"></div>}
                </div>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navigation
