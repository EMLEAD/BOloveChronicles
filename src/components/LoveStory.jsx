import React, { useEffect, useRef, useState } from 'react'
import './LoveStory.css'

const LoveStory = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`about-couple-section ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ABOUT THE COUPLE</h2>
          <div className="section-divider"></div>
        </div>

        <div className="couple-content">
          {/* Left Side - Groom's Section */}
          <div className="couple-section groom-section">
            <div className="couple-image">
              <div className="image-placeholder groom-photo">
                <img 
                  src="/images/groom1.jpg" 
                  alt="Groom" 
                  className="couple-image-real"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg></div><p>Groom\'s Photo</p>'
                  }}
                />
              </div>
            </div>
            <div className="couple-text">
              <h3 className="couple-subtitle">THE GROOM</h3>
              <div className="couple-description">
                <p>
                How do you put into words someone who feels larger than language itself? She is extraordinary—brilliant in ways that inspire, endlessly creative, and alive with a light that draws the world gently toward her. Before her, I moved through life carefully, quietly, protecting my heart. Then she found me, and everything bloomed.
                </p>
                <p>
                 She wears adventure in her smile and carries magic in her presence, turning the smallest moments into memories my soul will keep forever. Loving her awakened a courage I never knew I had, softened every fear, and led me to joy in places my heart had never dared to wander.
                </p>
                <p>
                I cannot imagine a life untouched by her love. She didn’t simply change my world—she became my world. She is my partner, my best friend, my greatest love, my most beautiful adventure, and my forever.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Bride's Section */}
          <div className="couple-section bride-section">
            <div className="couple-text">
              <h3 className="couple-subtitle">THE BRIDE</h3>
              <div className="couple-description">
                <p>
                  There was a quiet moment when my heart understood what my words could not—that he wasn’t just someone special, he was everything. Not in loud declarations or perfect scenes, but in the way his presence felt like home, in the way he saw me completely and loved me gently.
                </p>
                <p>
                  He carries a calm strength that steadies my world and a kindness that lingers long after he leaves a room. Loving him feels like finding the missing piece I didn’t know I was searching for—the one who brightens my days, fills my laughter with meaning, and makes me feel, without question, that I belong.
                </p>
                <p>
                 I cannot imagine a life that doesn’t include him. He is my safe place, my heart’s greatest joy, and the love I want for all my tomorrows.
                </p>
              </div>
            </div>
            <div className="couple-image">
              <div className="image-placeholder bride-photo">
                <img 
                  src="/images/bride1.jpg" 
                  alt="Bride" 
                  className="couple-image-real"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><p>Bride\'s Photo</p>'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveStory
