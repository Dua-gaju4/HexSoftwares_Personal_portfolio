# 🚀 Personal Portfolio Website

A modern, fully responsive, and highly aesthetic personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a dark theme with neon glowing colors, smooth animations, and a futuristic glassmorphism design.

## ✨ Features

### 🎨 Design & Styling
- **Dark Theme** with neon blue, purple, and cyan colors
- **Glassmorphism** UI components with soft shadows
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark/Light Mode Toggle** - Persistent theme preference
- **Modern Animations** - Smooth transitions and keyframe animations
- **Gradient Effects** - Neon gradient text and buttons

### 📱 Responsive Sections
1. **Navigation Bar** - Fixed navbar with smooth scrolling, hamburger menu on mobile
2. **Hero Section** - Animated typing effect, call-to-action buttons, floating blobs
3. **About Me** - Profile image with glow effect, statistics cards
4. **Skills** - Animated progress bars, categorized skills
5. **Projects** - Card-based layout with hover effects and project tags
6. **Experience** - Timeline view of work experience and internships
7. **Contact** - Contact form with validation and social links
8. **Footer** - Animated footer with social links

### ⚡ JavaScript Features
- **Typing Effect** - Animated text cycling through job titles
- **Smooth Scrolling** - Anchor-based navigation with offset
- **Form Validation** - Real-time validation with error messages
- **Scroll Reveal** - Elements animate in as they enter the viewport
- **Theme Toggle** - Dark/Light mode with localStorage persistence
- **Mobile Menu** - Hamburger menu for mobile devices
- **Active Link Highlighting** - Navbar links highlight based on scroll position
- **Parallax Effect** - Mouse movement parallax on hero blobs
- **Back to Top Button** - Smooth scroll to top functionality

## 📁 Project Structure

```
Personal Portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete CSS styling and animations
├── script.js           # JavaScript for interactivity
├── Images/             # Folder for portfolio images
│   ├── profile.jpg     # Profile picture
│   ├── project1.jpg    # Project 1 image
│   ├── project2.jpg    # Project 2 image
│   ├── project3.jpg    # Project 3 image
│   ├── project4.jpg    # Project 4 image
│   ├── project5.jpg    # Project 5 image
│   └── project6.jpg    # Project 6 image
└── README.md           # This file
```

## 🎯 How to Use

### 1. Clone or Download
Download the files to your local machine.

### 2. Add Profile Images
The portfolio requires images in the `Images` folder:
- **profile.jpg** (300x300px recommended) - Your profile picture
- **project1.jpg through project6.jpg** (400x200px recommended) - Project screenshots

### 3. Customize Content

#### Update Personal Information (index.html)
```html
<!-- Hero Section -->
<h1 class="hero-title">
    <span class="gradient-text">Hi, I'm Your Name</span>
</h1>

<!-- About Section -->
<p class="about-paragraph">
    Replace this with your bio...
</p>

<!-- Statistics -->
<div class="stat">
    <h3>50+</h3>
    <p>Your Stat Here</p>
</div>
```

#### Customize Skills (index.html)
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

#### Update Projects (index.html)
```html
<div class="project-card">
    <div class="project-image">
        <img src="Images/projectX.jpg" alt="Project Title">
        <div class="project-overlay">
            <a href="YOUR_PROJECT_URL" class="project-link">View Project</a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

#### Add Experience (index.html)
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-title">Your Job Title</h3>
            <span class="timeline-date">2023 - Present</span>
        </div>
        <p class="timeline-company">Company Name</p>
        <p class="timeline-description">Your description...</p>
        <div class="timeline-highlights">
            <span class="highlight">Skill 1</span>
            <span class="highlight">Skill 2</span>
        </div>
    </div>
</div>
```

#### Update Contact Info (index.html)
```html
<div class="contact-item">
    <span class="contact-label">Email</span>
    <a href="mailto:your.email@example.com">your.email@example.com</a>
</div>

<!-- Social Links -->
<a href="https://github.com/yourusername" class="social-link">...</a>
```

### 4. Customize Colors (style.css)
Modify the color variables in the `:root` selector:
```css
:root {
    --primary-neon: #00d4ff;      /* Cyan */
    --secondary-neon: #7c3aed;    /* Purple */
    --accent-neon: #ec4899;       /* Pink */
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
}
```

### 5. Customize Typography (style.css)
Adjust font sizes, weights, and spacing:
```css
:root {
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --radius-md: 1rem;
    --radius-lg: 2rem;
}
```

### 6. Update Typing Effect (script.js)
Customize the job titles in the typing effect:
```javascript
const typingEffect = {
    phrases: [
        'Full Stack Developer',
        'UI/UX Designer',
        'Your Role Here',
        'Another Role'
    ],
    // ...
};
```

## 🎨 Color Scheme

The portfolio uses a dark theme with neon accents:

| Purpose | Color | Hex Code |
|---------|-------|----------|
| Primary Dark | Dark Blue-Black | #0a0e27 |
| Secondary Dark | Darker Blue | #1a1f3a |
| Primary Neon | Cyan | #00d4ff |
| Secondary Neon | Purple | #7c3aed |
| Accent Neon | Pink | #ec4899 |
| Text Primary | Light Gray | #e0e0e0 |
| Text Secondary | Medium Gray | #a0a0a0 |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px max container width
- **Tablet**: 768px - Adjusted grid layouts
- **Mobile**: 480px - Single column layouts, hamburger menu

## ⌨️ Keyboard Navigation

- **Escape**: Close mobile navigation menu
- **Tab**: Navigate through interactive elements
- **Enter**: Activate buttons and links
- **Click on navbar links**: Smooth scroll to sections

## 🚀 Performance Optimization

- Lazy loading for project images
- Hardware-accelerated animations (transforms, opacity)
- Debounced scroll events
- Optimized media queries
- Minimal JavaScript dependencies

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for important elements
- Keyboard navigation support
- Focus-visible styles for keyboard users
- High contrast color combinations
- Reduced motion preference support
- Alt text for images

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your portfolio files
3. Enable GitHub Pages in repository settings
4. Your portfolio will be live at `yourusername.github.io/portfolio`

### Other Hosting Options
- Netlify (free, with drag-and-drop deployment)
- Vercel (optimized for static sites)
- Your own web server

## 📝 Form Integration

To enable email functionality, integrate with a backend service:

### Option 1: Email.js (Frontend)
```javascript
// Add to script.js
emailjs.init("YOUR_PUBLIC_KEY");

// In form submission
emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData)
    .then(() => showFormMessage('Email sent!', 'success'))
    .catch(() => showFormMessage('Error sending email', 'error'));
```

### Option 2: Backend API
Create a backend endpoint to handle form submissions:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

### Option 3: Third-party Services
- Formspree
- Basin
- Getform
- Netlify Forms

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Animations, gradients, grid, flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Variables** - Easy customization
- **IntersectionObserver API** - Scroll animations
- **LocalStorage API** - Theme persistence

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [CSS-Tricks](https://css-tricks.com/) - Advanced CSS techniques
- [JavaScript.info](https://javascript.info/) - JavaScript fundamentals
- [Can I Use](https://caniuse.com/) - Browser compatibility

## 💡 Tips for Customization

1. **Color Harmony** - Use a color palette generator (coolors.co, colorhunt.co)
2. **Typography** - Google Fonts offers great font pairs
3. **Images** - Use high-quality images (Unsplash, Pexels, Pixabay)
4. **Icons** - Add icons from Font Awesome or SVG icons
5. **Animations** - Adjust animation timing in CSS variables
6. **Content** - Keep descriptions concise and impactful

## 🐛 Troubleshooting

### Images Not Showing
- Ensure image paths are correct
- Check image file names match exactly
- Use absolute paths from the root directory

### Mobile Menu Not Working
- Clear browser cache
- Check that hamburger and menu elements have correct IDs
- Verify JavaScript file is loaded

### Animations Not Smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity if on older devices
- Use DevTools Performance panel to debug

### Form Not Validating
- Check all input names match the validation rules
- Ensure error element IDs follow the pattern: `{fieldname}Error`
- Check browser console for JavaScript errors

## 📄 License

This project is free to use and modify for personal use. Attribution is appreciated!

## 📞 Support

For questions or issues:
1. Check the code comments
2. Review the troubleshooting section
3. Inspect with browser DevTools (F12)
4. Check browser console for error messages

## 🔄 Version History

- **v1.0** (April 2024) - Initial release with all core features

## ⭐ Credits

Created with ❤️ as a modern, fully responsive portfolio template.

---

**Happy coding! 🚀** Feel free to customize this portfolio to match your personal brand and showcase your amazing projects!
