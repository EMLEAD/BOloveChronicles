import React from 'react'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'
import './ErrorPage.css'

const ErrorPage = ({ error, onRetry, onGoHome }) => {
  const errorMessages = {
    'network': 'Network connection failed. Please check your internet connection.',
    'not-found': 'The page you are looking for does not exist.',
    'server': 'Server error occurred. Please try again later.',
    'firebase': 'Authentication service is temporarily unavailable.',
    'default': 'Something went wrong. Please try again.'
  }

  const getErrorMessage = (errorType) => {
    if (error && error.message) {
      if (error.message.includes('network')) return errorMessages.network
      if (error.message.includes('Firebase')) return errorMessages.firebase
      if (error.message.includes('auth')) return errorMessages.firebase
    }
    return errorMessages[errorType] || errorMessages.default
  }

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">
          <AlertTriangle size={80} />
        </div>
        
        <h1 className="error-title">Oops! Something went wrong</h1>
        
        <p className="error-message">
          {getErrorMessage(error?.type)}
        </p>
        
        {error && error.message && (
          <details className="error-details">
            <summary>Technical Details</summary>
            <pre className="error-stack">{error.message}</pre>
          </details>
        )}
        
        <div className="error-actions">
          {onRetry && (
            <button className="error-btn retry-btn" onClick={onRetry}>
              <RefreshCw size={20} />
              Try Again
            </button>
          )}
          
          {onGoHome && (
            <button className="error-btn home-btn" onClick={onGoHome}>
              <Home size={20} />
              Go Home
            </button>
          )}
        </div>
        
        <div className="error-help">
          <p>If the problem persists, please contact support.</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
