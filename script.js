// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ============================================

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const typingText = document.getElementById('typingText');
const contactForm = document.getElementById('contactForm');

// ============================================
// TYPING EFFECT
// ============================================

/**
 * Creates a typing effect for the hero section
 * Cycles through different job titles
 */
const typingEffect = {
    phrases: [
        'Full Stack Developer',
        'UI/UX Enthusiast',
        'Problem Solver',
        'Code Enthusiast',
        'Tech Innovator'
    ],
    currentPhrase: 0,
    currentChar: 0,
    isDeleting: false,
    
    init() {
        this.type();
    },
    
    type() {
        const phrase = this.phrases[this.currentPhrase];
        const fullText = phrase.substring(0, this.currentChar);
        
        typingText.textContent = fullText;
        
        if (!this.isDeleting && this.currentChar < phrase.length) {
            this.currentChar++;
            setTimeout(() => this.type(), 100);
        } else if (this.isDeleting && this.currentChar > 0) {
            this.currentChar--;
            setTimeout(() => this.type(), 50);
        } else {
            this.isDeleting = !this.isDeleting;
            
            // Pause at the end of word
            const pauseDuration = this.isDeleting ? 200 : 2000;
            
            if (!this.isDeleting) {
                this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
            }
            
            setTimeout(() => this.type(), pauseDuration);
        }
    }
};

// ============================================
// NAVIGATION
// ============================================

/**
 * Toggles mobile menu visibility
 */
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

/**
 * Close mobile menu when a link is clicked
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/**
 * Smooth scrolling for anchor links
 */
document.querySelectorAll('a[data-scroll]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offset = 70; // Account for fixed navbar
            const targetPosition = targetElement.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================

/**
 * Initializes theme from localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        body.classList.toggle('light-mode', savedTheme === 'light');
        updateThemeIcon(savedTheme === 'light');
    } else if (!prefersDark) {
        body.classList.add('light-mode');
        updateThemeIcon(true);
    }
}

/**
 * Updates the theme toggle button icon
 */
function updateThemeIcon(isLightMode) {
    themeToggle.querySelector('.theme-icon').textContent = isLightMode ? '🌞' : '🌙';
}

/**
 * Handles theme toggle
 */
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    updateThemeIcon(isLightMode);
});

// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

/**
 * Validates form inputs
 */
const formValidation = {
    rules: {
        name: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Please enter a valid name (letters only, minimum 2 characters)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        subject: {
            required: true,
            minLength: 5,
            message: 'Subject must be at least 5 characters long'
        },
        message: {
            required: true,
            minLength: 10,
            message: 'Message must be at least 10 characters long'
        }
    },
    
    validate(field) {
        const rule = this.rules[field.name];
        const errorElement = document.getElementById(field.name + 'Error');
        
        if (!rule) return true;
        
        // Check required
        if (rule.required && !field.value.trim()) {
            this.setError(field, errorElement, `${field.name.charAt(0).toUpperCase() + field.name.slice(1)} is required`);
            return false;
        }
        
        // Check minLength
        if (rule.minLength && field.value.length < rule.minLength) {
            this.setError(field, errorElement, rule.message);
            return false;
        }
        
        // Check pattern
        if (rule.pattern && !rule.pattern.test(field.value)) {
            this.setError(field, errorElement, rule.message);
            return false;
        }
        
        this.clearError(field, errorElement);
        return true;
    },
    
    setError(field, errorElement, message) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    
    clearError(field, errorElement) {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
};

/**
 * Real-time form validation
 */
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        formValidation.validate(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            formValidation.validate(input);
        }
    });
});

/**
 * Form submission handler
 */
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    formInputs.forEach(input => {
        if (!formValidation.validate(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showFormMessage('Please fix the errors above', 'error');
        return;
    }
    
    // Prepare form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Simulate sending email (in production, this would be an API call)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log form data (in production, send to server)
        console.log('Form submitted:', formData);
        
        // Show success message
        showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Clear all error messages
        formInputs.forEach(input => {
            formValidation.clearError(input, document.getElementById(input.name + 'Error'));
        });
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            document.getElementById('formMessage').textContent = '';
            document.getElementById('formMessage').className = 'form-message';
        }, 5000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage('An error occurred. Please try again.', 'error');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

/**
 * Display form message
 */
function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

/**
 * Reveals elements as they enter the viewport
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-reveal class to elements that need animation
    const elementsToReveal = [
        '.project-card',
        '.skill-category',
        '.timeline-item',
        '.stat'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('scroll-reveal');
            observer.observe(element);
        });
    });
});

// ============================================
// SKILL PROGRESS ANIMATION
// ============================================

/**
 * Animates skill progress bars when they come into view
 */
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

/**
 * Highlights the active navigation link based on scroll position
 */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// PROJECT CARDS - LAZY IMAGE LOADING
// ============================================

/**
 * Optimizes image loading for project cards
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('.project-image img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SMOOTH SCROLLING ENHANCEMENT
// ============================================

/**
 * Prevents rapid navigation clicks
 */
let lastNavigationTime = 0;
const navigationDelay = 300;

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const now = Date.now();
        if (now - lastNavigationTime < navigationDelay) {
            e.preventDefault();
            return;
        }
        lastNavigationTime = now;
    });
});

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

/**
 * Applies subtle parallax effect to blobs in hero section
 */
window.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    if (blobs.length === 0) return;
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    blobs.forEach((blob, index) => {
        const multiplier = (index + 1) * 20;
        blob.style.transform = `translate(${x * multiplier}px, ${y * multiplier}px)`;
    });
});

// ============================================
// BACK TO TOP BUTTON (Optional)
// ============================================

/**
 * Shows/hides back to top button based on scroll position
 */
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Initialize typing effect
    typingEffect.init();
    
    // Create back to top button
    createBackToTopButton();
    
    // Add CSS for back to top button
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-neon), var(--secondary-neon));
            color: var(--primary-dark);
            border: none;
            cursor: pointer;
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 0;
            transform: translateY(100px);
            transition: all var(--transition-base);
            z-index: 999;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
        }
        
        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.6);
        }
        
        .back-to-top.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-link.active {
            color: var(--primary-neon);
        }
        
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // Log that the site is ready
    console.log('Portfolio website loaded successfully! 🚀');
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

/**
 * Optional: Log performance metrics
 */
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    });
}

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ============================================

/**
 * Enhance keyboard navigation throughout the site
 */
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// PRINT STYLES
// ============================================

/**
 * Add print-friendly styles
 */
if (window.matchMedia) {
    const printStyle = document.createElement('style');
    printStyle.media = 'print';
    printStyle.textContent = `
        .navbar,
        .back-to-top,
        .scroll-indicator {
            display: none !important;
        }
        
        body {
            background: white;
            color: black;
        }
        
        section {
            page-break-inside: avoid;
        }
    `;
    document.head.appendChild(printStyle);
}
