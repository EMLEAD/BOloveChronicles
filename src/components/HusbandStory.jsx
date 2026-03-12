import React, { useEffect, useRef, useState } from 'react'
import './HusbandStory.css'
import HusbandStoryModal from './HusbandStoryModal'

const HusbandStory = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <section ref={sectionRef} className={`husband-story-section ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-divider-top"></div>
          <h2 className="section-title">HIS STORY</h2>
          <div className="section-divider-bottom"></div>
        </div>

        <div className="story-content">
          <div className="story-image">
            <div className="image-placeholder">
              <img 
                src="/images/groom.jpg" 
                alt="Caleb's Story" 
                className="story-image-real"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><p>Caleb\'s Story Photo</p><span class="image-caption">Add your beautiful photo here</span>'
                }}
              />
            </div>
          </div>

          <div className="story-text">
            <div className="story-chapter">
              <h3 className="chapter-title">How I Met My Wife-to-Be 💫</h3>
              <div className="story-paragraph">
                <p>
                  It was a hectic day in 2019, and I was deep into my shift as a pharmacist at Jaja Clinic, Ui. The hospital pharmacy was a whirlwind of activity - prescriptions piling up, and patients waiting at the counter...
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  That morning, I was behind the dispensing counter, attending to patients as I routinely do, when I noticed a young lady standing near the pickup window to get her prescriptions (apparently for her friend who was admitted). I dispensed the medications, carefully explaining the dosage regimen and instructions...
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  <strong>How we reconnected 🌺</strong><br />
                  For years, she was just a random contact list on my phone. On that fateful Sunday, I went for a cover shift at a pharmacy. After attending to a set of patients, I decided to scroll through people's status on WhatsApp...
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  It was not even up to 3 days before I knew this was my wife. And I told her right away that she's the ONE and I will MARRY HER. Barely 3 weeks later, we decided to meet for the first time since 2019, and honestly I was nervous 🫣
                </p>
              </div>
            </div>

         

            <div className="read-more-section">
              <button 
                className="read-more-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <span>Read Caleb's Full Story</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <HusbandStoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </section>
  )
}

export default HusbandStory
