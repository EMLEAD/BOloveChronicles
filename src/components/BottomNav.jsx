import React from 'react'
import { Home, Heart, BookOpen, Calendar, Camera } from 'lucide-react'
import './BottomNav.css'

const BottomNav = ({ currentSection, onSectionChange, isDarkMode }) => {
  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: Heart, label: 'About' },
    { id: 'story', icon: BookOpen, label: 'Her Story' },
    { id: 'husband-story', icon: BookOpen, label: 'His Story' },
    { id: 'details', icon: Calendar, label: 'Details' },
    { id: 'gallery', icon: Camera, label: 'Gallery' },
  ]

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId)
  }

  return (
    <nav className={`bottom-nav ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="bottom-nav-container">
        {navItems.map((item, index) => {
          const IconComponent = item.icon
          const isActive = currentSection === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              aria-label={item.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="nav-icon-wrapper">
                <IconComponent size={24} strokeWidth={2} />
                {isActive && <div className="active-indicator"></div>}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav

