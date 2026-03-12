import React, { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import BottomNav from './components/BottomNav'
import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection'
import LoveStory from './components/LoveStory'
import ReconnectionStory from './components/ReconnectionStory'
import HusbandStory from './components/HusbandStory'
import WeddingDetails from './components/WeddingDetails'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { initErrorHandling } from './utils/errorHandler'

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [currentSection, setCurrentSection] = useState('hero')

  // Initialize error handling
  useEffect(() => {
    initErrorHandling()
  }, [])

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId)
    
    // Scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navigation
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle scroll to update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'story', 'husband-story', 'details', 'gallery']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`wedding-website ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navigation 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <LoveStory isDarkMode={isDarkMode} />
        </section>
        
        <section id="story">
          <ReconnectionStory isDarkMode={isDarkMode} />
        </section>
        
        {/* <section id="husband-story">
          <HusbandStory isDarkMode={isDarkMode} />
        </section> */}
        
        <section id="details">
          <WeddingDetails isDarkMode={isDarkMode} />
        </section>
        
        <section id="gallery">
          <Gallery isDarkMode={isDarkMode} />
        </section>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
      <BottomNav 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isDarkMode={isDarkMode}
      />
      <ThemeToggle isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
