import React from 'react'
import { Search, Home, ArrowLeft } from 'lucide-react'
import './NotFound.css'

const NotFound = ({ onGoHome, onGoBack }) => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">
          <Search size={80} />
        </div>
        
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        
        <p className="not-found-message">
          Sorry, we couldn't find the page you're looking for. 
          It might have been moved, deleted, or doesn't exist.
        </p>
        
        <div className="not-found-actions">
          {onGoBack && (
            <button className="not-found-btn back-btn" onClick={onGoBack}>
              <ArrowLeft size={20} />
              Go Back
            </button>
          )}
          
          {onGoHome && (
            <button className="not-found-btn home-btn" onClick={onGoHome}>
              <Home size={20} />
              Go Home
            </button>
          )}
        </div>
        
        <div className="not-found-suggestions">
          <h3>What you can do:</h3>
          <ul>
            <li>Check the URL for typos</li>
            <li>Use the navigation menu to find what you're looking for</li>
            <li>Return to our homepage</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFound
