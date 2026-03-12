# 📸 Image Directory

This folder contains all the images for your wedding website. Here's how to organize them:

## 📁 Folder Structure

### `/story/` - How We Met Images
Add photos from your first meeting, first date, or early relationship here:
- `how-we-met-1.jpg` - First meeting photo
- `first-date.jpg` - First date photo
- `early-relationship.jpg` - Early relationship moments

### `/hero/` - Hero Section Images
Add your main wedding photos here:
- `hero-background.jpg` - Main background image
- `couple-portrait.jpg` - Beautiful couple portrait
- `engagement-photo.jpg` - Engagement photo

### `/gallery/` - Additional Gallery Images
Add more photos for galleries:
- `relationship-timeline/` - Photos from different stages
- `screenshots/` - Screenshots from your reconnection story
- `wedding-prep/` - Wedding preparation photos

## 📝 Image Guidelines

### Recommended Sizes:
- **Hero images**: 1920x1080px or larger
- **Story images**: 800x600px or larger
- **Gallery images**: 600x400px or larger

### File Formats:
- Use `.jpg` for photos
- Use `.png` for images with transparency
- Use `.webp` for better compression (optional)

### Optimization Tips:
1. Compress images using tools like TinyPNG or ImageOptim
2. Keep file sizes under 500KB for better loading
3. Use descriptive filenames
4. Maintain aspect ratios

## 🔄 How to Update Images

1. **Replace Placeholders**: In the component files, replace placeholder divs with actual images:
   ```jsx
   // Before:
   <div className="image-placeholder">...</div>
   
   // After:
   <img src="/images/story/how-we-met-1.jpg" alt="How we met" className="story-image" />
   ```

2. **Update Screenshots**: In `ReconnectionStory.jsx`, replace screenshot placeholders:
   ```jsx
   // Before:
   <div className="screenshot-placeholder">...</div>
   
   // After:
   <img src="/images/gallery/screenshots/first-message.jpg" alt="First message" className="screenshot" />
   ```

## 📱 Responsive Images

The website automatically handles responsive images, but you can add different sizes for better performance:

```jsx
<picture>
  <source media="(max-width: 768px)" srcSet="/images/story/how-we-met-mobile.jpg" />
  <source media="(max-width: 1200px)" srcSet="/images/story/how-we-met-tablet.jpg" />
  <img src="/images/story/how-we-met-desktop.jpg" alt="How we met" />
</picture>
```

## 🎨 Image Styling

All images are styled with CSS classes. You can customize the styling in the respective CSS files:

- `HeroSection.css` - Hero image styles
- `LoveStory.css` - Story image styles  
- `ReconnectionStory.css` - Screenshot styles

## 💡 Pro Tips

1. **Consistent Style**: Use photos with similar lighting and style
2. **High Quality**: Use the best quality photos you have
3. **Variety**: Mix candid and posed photos
4. **Emotion**: Choose photos that capture your emotions
5. **Story Flow**: Arrange images to tell your story chronologically

---

**Happy organizing your wedding memories!** 📸💕
