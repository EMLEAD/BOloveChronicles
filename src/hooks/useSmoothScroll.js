import { useEffect } from 'react'

export const useSmoothScroll = (targetId, offset = 0) => {
  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById(targetId)
      if (element) {
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToSection, 100)

    return () => clearTimeout(timeoutId)
  }, [targetId, offset])
}
