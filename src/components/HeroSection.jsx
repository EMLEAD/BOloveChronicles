import React, { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [typewriterText, setTypewriterText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const fullText = 'boLovechronicles2026'

  // Add your hero images here
  const heroImages = [
   
    '/images/IMG5.jpg',
    // '/images/hero1.jpg',
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-slide images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Typewriter effect with loop
  useEffect(() => {
    const typingSpeed = 150
    const deletingSpeed = 100
    const pauseAfterTyping = 2000
    const pauseAfterDeleting = 500

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        // Typing forward
        setTypewriterText(fullText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!isDeleting && charIndex === fullText.length) {
        // Pause at the end, then start deleting
        setTimeout(() => setIsDeleting(true), pauseAfterTyping)
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setTypewriterText(fullText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, pause then start typing again
        setTimeout(() => {
          setIsDeleting(false)
        }, pauseAfterDeleting)
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, fullText])

  return (
    <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      {/* Full Width Background Video */}
      <video 
        className="hero-video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/images/gallery/backgroundvideo.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />

      {/* Left Sidebar */}
      <div className="sidebar left-sidebar"></div>
      
      {/* Center Image Area */}
      <div className="center-image-area">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text-glass">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="name-line typewriter">{typewriterText}<span className="cursor">|</span></span>
                <span className="name-line bride">BOLUWATIFE</span>
                <span className="and-text">and</span>
                <span className="name-line groom">OLAOLUWA</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sidebar right-sidebar"></div>
    </section>
  )
}

export default HeroSection


