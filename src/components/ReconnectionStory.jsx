import React, { useEffect, useRef, useState } from 'react'
import './ReconnectionStory.css'
import StoryModal from './StoryModal'

const ReconnectionStory = ({ isDarkMode }) => {
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
    <section ref={sectionRef} className={`our-story-section ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-divider-top"></div>
          <h1 className="section-title">OUR STORY</h1>
          <div className="section-divider-bottom"></div>
        </div>

        <div className="story-content">
          <div className="story-image">
            <div className="image-placeholder">
              <img 
                src="/images/proposal.jpg" 
                alt="Our Story" 
                className="story-image-real"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><p>Our Story Photo</p><span class="image-caption">Add your beautiful couple photo here</span>'
                }}
              />
            </div>
          </div>

          <div className="story-text">
            <div className="story-chapter">
              <h3 className="chapter-title">Our Love Story 💕</h3>
              <div className="story-paragraph">
                <p>
                  Thank God for NYSC. Our paths crossed on camp during our service year in 2022, in the most unexpected way. It all began as a joke when we were randomly selected to join the Man O’ War team. Among everyone there that day, she stood out effortlessly, the most beautiful lady to me, my yellow pawpaw. Her radiant skin caught my attention, but it was her magical smile that truly settled my heart. 
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  We introduced ourselves, and in a moment filled with playful boldness, I jokingly knelt down to propose to a complete stranger, someone I was seeing for the very first time in my life. What I didn’t know then was that this “joke” would become the beginning of my forever. 
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 The feeling was mutual. We exchanged numbers and began talking afterward, though camp life kept us from growing too close. At the time, my heart was still heavy. I had lost my dad just two weeks before camp began, and I wasn’t ready for anything serious. All I wanted was to distract myself, to find moments of joy in the midst of grief.
                </p>
              </div>
                <div className="story-paragraph">
                  <p>
                    Reality truly set in when we received our posting letters. She was posted to a town far from my Place of Primary Assignment. We parted ways but stayed connected through WhatsApp, and our conversations only grew deeper. One day, a thought crossed my mind,  I wanted her closer. Without hesitation, I began the relocation process, and by God’s grace, it was successful. She was posted back to Ibadan.
                  </p>
                  
                </div>


              <div className="story-paragraph">
                <p>
                  <strong>On August 8, 2022,</strong> our journey officially began when she said yes to being in a relationship with me. And on May 24, 2025, I asked her again,this time, to spend forever with me and she said yes once more. That “yes” gave birth to this wedding, and now we eagerly look forward to beginning this new chapter of our lives together.
                </p>
              </div>
              
              <div className="story-paragraph">
                <p>
                  From our very first week of talking, I knew she was the one I would marry. She came into my life with a peace and joy I had never known before,something my heart had long been searching for. In her, I found love, healing, and home.
                </p>
              </div>
            </div>

            <div className="story-preview-gallery">
              <div className="gallery-row">
              

<img src="/images/whatsappMessage1.jpg" alt="When Love Began" className="chat-screenshot"
                  onError={(e) => e.target.style.display = 'none'} />
                  
<img src="/images/whatsappMessage2.jpg" alt="Our Conversation" className="chat-screenshot"
                  onError={(e) => e.target.style.display = 'none'} />

<img src="/images/whatsappMessage3.jpg" alt="Our First Messages" className="chat-screenshot" 
                  onError={(e) => e.target.style.display = 'none'} />

            
              </div>
            </div>

            <div className="read-more-section">
              <button 
                className="read-more-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                <span>Read Our Full Story</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <StoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </section>
  )
}

export default ReconnectionStory
