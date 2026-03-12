import React, { useEffect, useRef, useState } from 'react'
import { Camera, X } from 'lucide-react'
import './Gallery.css'

const Gallery = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const sectionRef = useRef(null)

  // Array of gallery images
  const galleryImages = [
    
    { id: 1, type: 'video', src: '/images/video_1.mp4', alt: 'Gallery Video 1' },
    { id: 2, type: 'video', src: '/images/video_2.mp4', alt: 'Gallery Video 2' },
    { id: 3, type: 'video', src: '/images/video_3.mp4', alt: 'Gallery Video 3' },
    { id: 4, src: "/images/IMG1.jpg", alt: 'Gallery Photo 1' },
    { id: 5, src: '/images/IMG11.jpg', alt: 'Gallery Photo 3' },
    { id: 6, src: '/images/IMG5.jpg', alt: 'Gallery Photo 4' },
    { id: 7, src: '/images/IMG17.jpg', alt: 'Gallery Photo 5' },
    { id: 6, src: '/images/IMG4.jpg', alt: 'Gallery Photo 6' },
    { id: 7, src: '/images/IMG6.jpg', alt: 'Gallery Photo 7' },
    { id: 8, src: '/images/IMG8.jpg', alt: 'Gallery Photo 8' },
    { id: 9, src: '/images/IMG19.jpg', alt: 'Gallery Photo 9' },
    { id: 10, src: '/images/nativedressing.jpg', alt: 'Gallery Photo 10' },
    { id: 11, src: '/images/corper1.jpg', alt: 'Gallery Photo 11' },
    { id: 12, src: '/images/corper.jpg', alt: 'Gallery Photo 12' },
    { id: 13, src: '/images/corper3.jpg', alt: 'Gallery Photo 13' },

  ]

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

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section ref={sectionRef} className={`gallery-section ${isVisible ? 'visible' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Photo Gallery</h2>
          <div className="section-divider"></div>
          <p className="section-description">Beautiful moments from our journey together</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                {image.type === 'video' ? (
                  <>
                    <video 
                      src={image.src}
                      className="gallery-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = '<div class="gallery-placeholder-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></div>'
                      }}
                    />
                    <div className="gallery-overlay">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </>
                ) : (
                  <>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="gallery-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = '<div class="gallery-placeholder-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></div>'
                      }}
                    />
                    <div className="gallery-overlay">
                      <Camera size={32} className="gallery-icon" />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          {selectedImage.type === 'video' ? (
            <video 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="lightbox-image"
              controls
              autoPlay
            />
          ) : (
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
          )}
        </div>
      )}
    </section>
  )
}

export default Gallery

