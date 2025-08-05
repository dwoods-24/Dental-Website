// Custom JavaScript for Dentures & More Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupScrollEffects();
    setupNavigationHandlers();
    setupFormHandlers();
    setupServiceDetails();
    setupAnimations();
    setMinimumDate();
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Navbar scroll effects
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Animate service cards on scroll
        animateOnScroll();
    });
}

// Navigation link handlers
function setupNavigationHandlers() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
                
                // Close mobile navbar if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// Form submission handlers
function setupFormHandlers() {
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

// Handle form submission
function handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        successMessage.classList.remove('d-none');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Reset form
        form.reset();
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 10000);
        
    }, 2000);
}

// Service details modal setup with complete package information
function setupServiceDetails() {
    const serviceDetails = {
        'Other Services': `
            <div class="service-detail-content">
                <div class="text-center mb-4">
                    <p class="lead text-muted">We offer a comprehensive range of dental services to meet all your oral health needs</p>
                </div>
                
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-scissors me-2"></i>Extractions</h6>
                            <p class="mb-0 small">Safe and comfortable tooth removal procedures</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-puzzle me-2"></i>Partials</h6>
                            <p class="mb-0 small">Custom partial dentures to replace missing teeth</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-arrow-clockwise me-2"></i>Relines</h6>
                            <p class="mb-0 small">Denture adjustments for improved fit and comfort</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Repairs</h6>
                            <p class="mb-0 small">Quick and reliable denture repair services</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-gem me-2"></i>Crowns</h6>
                            <p class="mb-0 small">Protective caps to restore damaged teeth</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item p-3 bg-light rounded">
                            <h6 class="text-primary mb-2"><i class="bi bi-plus-circle me-2"></i>Implants</h6>
                            <p class="mb-0 small">Permanent tooth replacement solutions</p>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-4">
                    <p class="text-muted mb-0"><em>Financing Available<br><br>Contact us for more information about any of these services</em></p>
                </div>
            </div>
        `,
        
        'Essential Smile Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $350 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2"><i class="bi bi-palette-fill me-2"></i>Custom Shading</h6>
                    <p class="mb-3">Pick the shade of existing teeth or desired shade and gum shades</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">Basic fit and function with wax try-in</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Standard acrylic materials</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">6 months against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Budget-conscious patients needing basic functionality</p>
                    </div>
                </div>
            </div>
        `,
        
        'Comfort Fit Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $750 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2"><i class="bi bi-palette-fill me-2"></i>Custom Shading</h6>
                    <p class="mb-3">Pick the shade of existing teeth or desired shade and gum shades</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">Improved fit with some customization with wax try-in</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Higher quality acrylic for better comfort</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">1 year against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Patients looking for a balance between cost and comfort</p>
                    </div>
                </div>
            </div>
        `,
        
        'Premium Smile Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">$1,250 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2"><i class="bi bi-palette-fill me-2"></i>Custom Shading</h6>
                    <p class="mb-3">Pick the shade of existing teeth or desired shade and gum shades</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">Excellent fit and function with advanced customization with wax try-in</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Durable, high-quality materials resistant to cracks and stains</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">3 years against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Patients wanting a long-lasting and aesthetically pleasing solution</p>
                    </div>
                </div>
            </div>
        `,
        
        'Elite Comfort Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $1,750 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2"><i class="bi bi-palette-fill me-2"></i>Custom Shading</h6>
                    <p class="mb-3">Pick the shade of existing teeth or desired shade and gum shades</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">Superior fit with extensive customization options with wax try-in</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Premium materials for maximum durability and comfort</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">5 years against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Patients seeking the best in comfort, aesthetics, and longevity</p>
                    </div>
                </div>
            </div>
        `
    };

    // Store service details globally for modal access
    window.serviceDetails = serviceDetails;
}

// Updated show service details modal function
function showServiceDetails(service) {
    const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    const titleElement = document.getElementById('serviceTitle');
    const descriptionElement = document.getElementById('serviceDescription');
    
    if (titleElement && descriptionElement && window.serviceDetails[service]) {
        titleElement.textContent = service;
        descriptionElement.innerHTML = window.serviceDetails[service];
        modal.show();
    }
}

// Animation setup
function setupAnimations() {
    // Initialize service cards for animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    });
    
    // Trigger initial animation check
    setTimeout(animateOnScroll, 100);
}

// Animate elements on scroll
function animateOnScroll() {
    const serviceCards = document.querySelectorAll('.service-card');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8;
    
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < triggerPoint && !card.classList.contains('animate')) {
            card.classList.add('animate');
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Set minimum date for appointment form
function setMinimumDate() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        dateInput.min = formattedDate;
    }
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll event with debouncing
const debouncedScrollHandler = debounce(() => {
    animateOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Intersection Observer for better performance (alternative to scroll events)
function setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
                    entry.target.classList.add('animate');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Enhanced form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    // Email validation
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        }
    }
    
    // Phone validation
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(phoneField.value) || phoneField.value.length < 10) {
            phoneField.classList.add('is-invalid');
            isValid = false;
        }
    }
    
    return isValid;
}

// Enhanced form submission with validation
function handleFormSubmission(form) {
    if (!validateForm(form)) {
        // Show validation error
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger mt-3';
        errorAlert.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i>Please fill in all required fields correctly.';
        
        const existingError = form.querySelector('.alert-danger');
        if (existingError) {
            existingError.remove();
        }
        
        form.appendChild(errorAlert);
        
        setTimeout(() => {
            errorAlert.remove();
        }, 5000);
        
        return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('successMessage');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        successMessage.classList.remove('d-none');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Reset form
        form.reset();
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 10000);
        
    }, 2000);
}

// Clear validation on input
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('is-invalid')) {
        e.target.classList.remove('is-invalid');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('serviceModal'));
        if (modal) {
            modal.hide();
        }
    }
});

// Accessibility improvements
function enhanceAccessibility() {
    // Add ARIA labels where needed
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const title = card.querySelector('h3').textContent;
        card.setAttribute('aria-label', `Learn more about ${title}`);
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.showServiceDetails = showServiceDetails;