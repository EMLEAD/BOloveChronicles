# 💍 Calissa's Wedding Website

A beautiful, animated wedding website built with React and Vite, featuring your love story with stunning animations and a romantic color scheme.

## ✨ Features

- **Beautiful Hero Section** with floating hearts and sparkles
- **Love Story Sections** with animated text and image placeholders
- **Reconnection Story** with screenshot gallery placeholders
- **Wedding Details** with countdown timer and gift registry
- **Responsive Design** that works on all devices
- **Romantic Color Scheme** (Light Blue, Dark Blue, Gold)
- **Smooth Animations** throughout the site
- **Interactive Elements** with hover effects

## 🎨 Color Palette

- **Primary Blue**: #1E3A8A
- **Light Blue**: #B3D9FF  
- **Pale Blue**: #E6F3FF
- **Gold**: #FFD700
- **White**: #FFFFFF

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd calissa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
calissa/
├── public/
│   ├── images/
│   │   ├── story/          # Images for "How We Met" section
│   │   ├── hero/           # Hero section images
│   │   └── gallery/        # Additional gallery images
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── LoveStory.jsx
│   │   ├── LoveStory.css
│   │   ├── ReconnectionStory.jsx
│   │   ├── ReconnectionStory.css
│   │   ├── WeddingDetails.jsx
│   │   ├── WeddingDetails.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🖼️ Adding Your Images

### Hero Section Images
Place your main wedding photos in `public/images/hero/`

### Love Story Images
Add photos from your first meeting in `public/images/story/`

### Screenshot Gallery
Add your reconnection screenshots in the appropriate placeholders in the ReconnectionStory component.

## ✏️ Customization

### Updating Names and Dates

1. **Hero Section**: Update names in `src/components/HeroSection.jsx`
   ```jsx
   <span className="groom-name">[Your Husband's Name]</span>
   ```

2. **Wedding Date**: Update the date in `src/components/HeroSection.jsx` and `src/components/WeddingDetails.jsx`
   ```jsx
   <span className="date-text">December 11, 2025</span>
   ```

3. **Wedding Details**: Update venue, time, and other details in `src/components/WeddingDetails.jsx`

### Updating Your Love Story

Edit the text content in:
- `src/components/LoveStory.jsx` - "How We Met" section
- `src/components/ReconnectionStory.jsx` - "How We Reconnected" section

### Adding Real Images

Replace the placeholder divs with actual images:
```jsx
// Replace this:
<div className="image-placeholder">
  <div className="placeholder-icon">📸</div>
  <p>Your "How We Met" Photo</p>
</div>

// With this:
<img src="/images/story/how-we-met.jpg" alt="How we met" />
```

## 🎬 Animations Included

- **Floating Hearts**: Animated hearts floating up the hero section
- **Sparkles**: Twinkling stars throughout the background
- **Fade-in Effects**: Smooth entrance animations for all sections
- **Hover Effects**: Interactive elements that respond to mouse hover
- **Scroll Animations**: Elements animate as they come into view
- **Pulse Effects**: Gentle pulsing for important elements
- **Rotation Effects**: Subtle rotating elements for visual interest

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All screen orientations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 🎯 Features to Add Later

- [ ] RSVP Form
- [ ] Guest Book
- [ ] Photo Gallery
- [ ] Live Countdown Timer
- [ ] Music Player
- [ ] Multiple Language Support
- [ ] Wedding Registry Integration

## 💡 Tips for Best Results

1. **Image Optimization**: Use high-quality images but optimize them for web (use tools like TinyPNG)
2. **Content**: Write your story with emotion and detail
3. **Testing**: Test on different devices and browsers
4. **Backup**: Keep backups of your customizations
5. **SEO**: Add meta descriptions and keywords for better search visibility

## 🆘 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images are in the `public/images/` folder
2. **Animations not working**: Ensure you're using a modern browser
3. **Layout issues**: Check browser console for CSS errors

### Getting Help

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Verify file paths are correct

## 📄 License

This project is created specifically for Calissa's wedding. Feel free to use and modify for your own special day!

---

**Made with 💕 for your special day!**

*Happy Wedding Planning!* 🎉