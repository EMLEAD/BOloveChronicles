// Global error handler for unhandled errors
export const handleGlobalError = (error, errorInfo = null) => {
  console.error('Global error:', error, errorInfo)
  
  // Log error to external service if needed
  // logErrorToService(error, errorInfo)
  
  // Show user-friendly error message
  showErrorNotification('Something went wrong. Please refresh the page.')
}

// Handle network errors
export const handleNetworkError = (error) => {
  console.error('Network error:', error)
  
  if (error.message.includes('Failed to fetch')) {
    showErrorNotification('Network connection failed. Please check your internet connection.')
  } else {
    showErrorNotification('A network error occurred. Please try again.')
  }
}

// Handle Firebase errors
export const handleFirebaseError = (error) => {
  console.error('Firebase error:', error)
  
  switch (error.code) {
    case 'auth/network-request-failed':
      showErrorNotification('Network error. Please check your connection.')
      break
    case 'auth/too-many-requests':
      showErrorNotification('Too many requests. Please try again later.')
      break
    default:
      showErrorNotification('Authentication error. Please try again.')
  }
}

// Show error notification to user
const showErrorNotification = (message) => {
  // Create a simple notification element
  const notification = document.createElement('div')
  notification.className = 'error-notification'
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #ff6b6b;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    font-family: 'Georgia', serif;
    max-width: 300px;
    animation: slideIn 0.3s ease-out;
  `
  
  // Add animation styles
  const style = document.createElement('style')
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `
  document.head.appendChild(style)
  
  document.body.appendChild(notification)
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 5000)
  
  // Click to dismiss
  notification.addEventListener('click', () => {
    notification.style.animation = 'slideOut 0.3s ease-out'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  })
}

// Initialize global error handling
export const initErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason)
    handleGlobalError(event.reason)
  })
  
  // Handle global errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error)
    handleGlobalError(event.error)
  })
}
