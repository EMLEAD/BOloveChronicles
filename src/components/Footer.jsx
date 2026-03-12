import React from 'react'
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react'
import './Footer.css'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-text">
              <div className="footer-heart-icon">
                <Heart size={40} fill="currentColor" />
              </div>
              <h3>Together Forever</h3>
              <p className="couple-names">boLovechronicles2026</p>
              <p className="wedding-date">March 28, 2026</p>
            </div>
            
           
          </div>
          
          <div className="footer-hearts">
            {[...Array(15)].map((_, i) => (
              <Heart 
                key={i} 
                className="floating-heart" 
                size={16 + Math.random() * 12}
                fill="currentColor"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
          
          <div className="footer-message">
            <p>"And we lived happily ever after..."</p>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>
            Made with <Heart size={16} fill="currentColor" className="inline-heart" /> by the Groom, EMC(EMLEAD)
          </p>
          <p className="copyright">&copy; 2026 All Rights Reserved</p>
        </div>
        <div className='empty'></div>
      </div>
    </footer>
  )
}

export default Footer
