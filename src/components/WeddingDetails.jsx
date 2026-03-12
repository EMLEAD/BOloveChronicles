import React, { useEffect, useRef, useState } from 'react'
import { Calendar, Clock, MapPin, Shirt, Utensils, Gift, Heart } from 'lucide-react'
import './WeddingDetails.css'

const WeddingDetails = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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

  useEffect(() => {
    const weddingDate = new Date('2026-03-28T12:00:00')
    
    const updateCountdown = () => {
      const now = new Date()
      const difference = weddingDate - now
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className={`wedding-details-section ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Background Video */}
      <video 
        className="details-video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/images/gallery/backgroundvideo.mp4" type="video/mp4" />
      </video>
      <div className="details-video-overlay" />
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Wedding Details</h2>
          <div className="section-divider"></div>
        </div>

        <div className="details-grid">
          <div className="detail-card">
            <div className="card-icon">
              <Calendar size={48} strokeWidth={1.5} />
            </div>
            <h3>Date</h3>
            <p>March 28, 2026</p>
            <span className="card-subtitle">Save the Date</span>
          </div>

          <div className="detail-card">
            <div className="card-icon">
              <Clock size={48} strokeWidth={1.5} />
            </div>
            <h3>Time</h3>
            <p>10:00 AM</p>
            <span className="card-subtitle">Ceremony Begins</span>
          </div>

       

          <div className="detail-card">
            <div className="card-icon">
              <Shirt size={48} strokeWidth={1.5} />
            </div>
            <h3>Dress Code</h3>
            <p>Elegant</p>
            <span className="card-subtitle">Pink, Peach, White and Sea Blue</span>
          </div>

        

         
        </div>

        <div className="countdown-section">
          <h3>Countdown to Our Special Day</h3>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">{String(countdown.days).padStart(2, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(countdown.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default WeddingDetails
