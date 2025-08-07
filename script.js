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

// Updated JavaScript for Square Booking Integration

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeSquareBooking();
});

// Initialize Square Booking Widget
function initializeSquareBooking() {
    // Wait for Square script to load
    const checkSquareLoaded = setInterval(() => {
        if (window.Square && window.Square.appointments) {
            clearInterval(checkSquareLoaded);
            setupSquareWidget();
        }
    }, 500);
    
    // Timeout after 10 seconds if Square doesn't load
    setTimeout(() => {
        clearInterval(checkSquareLoaded);
        handleSquareLoadError();
    }, 10000);
}

// Setup Square booking widget
function setupSquareWidget() {
    try {
        const loadingMessage = document.querySelector('.loading-message');
        if (loadingMessage) {
            // Hide loading message once Square is ready
            setTimeout(() => {
                loadingMessage.style.display = 'none';
            }, 2000);
        }
        
        console.log('Square booking widget loaded successfully');
        
        // Add any additional Square widget customization here if needed
        // Example: Listen for booking completion events
        if (window.Square.appointments.embed) {
            // You can add event listeners here for booking completion
            // window.Square.appointments.embed.on('booking_complete', handleBookingComplete);
        }
        
    } catch (error) {
        console.error('Error setting up Square widget:', error);
        handleSquareLoadError();
    }
}

// Handle Square loading errors
function handleSquareLoadError() {
    const loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
        loadingMessage.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <strong>Booking System Temporarily Unavailable</strong><br>
                Please call us directly at <strong>615-719-7883</strong> or email <strong>denturesandmore1@yahoo.com</strong> to schedule your appointment.
            </div>
        `;
    }
}

// Optional: Handle booking completion (if Square provides this event)
function handleBookingComplete(bookingData) {
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'alert alert-success mt-3 fade show';
    successMessage.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>Appointment Booked Successfully!</strong><br>
        You should receive a confirmation email shortly. We look forward to seeing you!
    `;
    
    const container = document.getElementById('square-booking-container');
    if (container) {
        container.appendChild(successMessage);
        
        // Remove success message after 10 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 10000);
    }
}

// Validate name and redirect to Square booking
function validateAndRedirectToSquare() {
    const nameInput = document.getElementById('name');
    const validationError = document.getElementById('validationError');
    const errorMessage = document.getElementById('errorMessage');
    const squareBtn = document.getElementById('squareBookingBtn');
    
    // Get and clean the name input
    const name = nameInput.value.trim();
    
    // Clear any previous validation states
    nameInput.classList.remove('is-invalid');
    validationError.classList.add('d-none');
    
    // Validate name
    if (!name) {
        showValidationError('Please enter your full name to continue.', nameInput);
        return;
    }
    
    // Check if name has at least first and last name (2 words minimum)
    const nameParts = name.split(/\s+/).filter(part => part.length > 0);
    if (nameParts.length < 2) {
        showValidationError('Please enter your first and last name.', nameInput);
        return;
    }
    
    // Check if name contains only valid characters (letters, spaces, hyphens, apostrophes)
    const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
    if (!nameRegex.test(name)) {
        showValidationError('Please enter a valid name using only letters.', nameInput);
        return;
    }
    
    // Check minimum length for each name part
    const hasValidParts = nameParts.every(part => part.length >= 2);
    if (!hasValidParts) {
        showValidationError('Please enter your complete first and last name.', nameInput);
        return;
    }
    
    // If validation passes, show success and redirect
    showLoadingState(squareBtn);
    
    // Optional: Submit form data to Netlify first (silent submission)
    submitFormDataSilently();
    
    // Redirect to Square booking after a short delay
    setTimeout(() => {
        window.open('https://app.squareup.com/appointments/book/i5lmtpm1w9r58e/L7SWFKECT3D1E/start', '_blank', 'noopener,noreferrer');
        resetButtonState(squareBtn);
    }, 1000);
}

// Show validation error
function showValidationError(message, inputElement) {
    const validationError = document.getElementById('validationError');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = message;
    validationError.classList.remove('d-none');
    inputElement.classList.add('is-invalid');
    inputElement.focus();
    
    // Scroll to error message
    validationError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show loading state on button
function showLoadingState(button) {
    const originalText = button.textContent;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Opening Booking System...';
    button.disabled = true;
    button.setAttribute('data-original-text', originalText);
}

// Reset button state
function resetButtonState(button) {
    const originalText = button.getAttribute('data-original-text') || 'Schedule Appointment';
    button.textContent = originalText;
    button.disabled = false;
    button.removeAttribute('data-original-text');
}

// Optional: Submit form data to Netlify silently
function submitFormDataSilently() {
    const form = document.getElementById('appointmentForm');
    const formData = new FormData(form);
    
    // Only submit if we have the required name
    const name = formData.get('name');
    if (name && name.trim()) {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        }).catch(error => {
            console.log('Form submission note:', error);
            // Don't show error to user since this is optional
        });
    }
}

// Clear validation errors when user starts typing
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const validationError = document.getElementById('validationError');
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
                if (validationError) {
                    validationError.classList.add('d-none');
                }
            }
        });
    }
});

// Add this to your existing window object exports
window.validateAndRedirectToSquare = validateAndRedirectToSquare;

// Update the service modal "Book This Service" button to work with Square
function updateServiceModalBooking() {
    const bookButtons = document.querySelectorAll('[onclick*="scrollToSection(\'appointment\')"]');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Smooth scroll to appointment section
            setTimeout(() => {
                const squareContainer = document.getElementById('square-booking-container');
                if (squareContainer) {
                    squareContainer.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 500);
        });
    });
}

// Initialize the updated booking behavior
document.addEventListener('DOMContentLoaded', function() {
    updateServiceModalBooking();
});

// Remove the old form submission handlers since we're using Square now
// Keep all other existing functions but remove handleFormSubmission and setupFormHandlers

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

// Patient Forms JavaScript with Google Drive Integration

// Show specific form
function showForm(formType) {
    // Hide all forms
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.add('d-none');
    });
    
    // Show selected form
    if (formType === 'newPatient') {
        document.getElementById('newPatientForm').classList.remove('d-none');
    } else if (formType === 'medicalHistory') {
        document.getElementById('medicalHistoryForm').classList.remove('d-none');
    }
    
    // Scroll to form
    setTimeout(() => {
        document.querySelector('.form-section:not(.d-none)').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);
}

// Reset forms view
function resetForms() {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.add('d-none');
    });
    document.getElementById('successMessage').classList.add('d-none');
    document.getElementById('backToForms').classList.add('d-none');
    
    // Reset form data
    document.querySelectorAll('form').forEach(form => {
        form.reset();
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Google Drive Integration Setup
// You'll need to set up Google Apps Script for this to work
/*Google Apps Script Information








*/
const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'; //Gogle Apps Script

// Handle form submissions
function handleFormSubmission(form, formType) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const timestamp = new Date().toISOString();
    
    // Add metadata
    formData.append('submission_timestamp', timestamp);
    formData.append('form_type', formType);
    
    // Convert FormData to object for easier handling
    const formObject = {};
    for (let [key, value] of formData.entries()) {
        if (formObject[key]) {
            // Handle multiple values (like checkboxes)
            if (Array.isArray(formObject[key])) {
                formObject[key].push(value);
            } else {
                formObject[key] = [formObject[key], value];
            }
        } else {
            formObject[key] = value;
        }
    }
    
    // Send to Google Apps Script
    sendToGoogleDrive(formObject)
        .then(response => {
            // Success
            console.log('Form submitted successfully:', response);
            showSuccessMessage();
            form.reset();
        })
        .catch(error => {
            // Error
            console.error('Form submission error:', error);
            showErrorMessage('There was an error submitting your form. Please try again or contact us directly.');
        })
        .finally(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

// Send data to Google Drive via Google Apps Script
async function sendToGoogleDrive(formData) {
    try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Google Drive submission error:', error);
        throw error;
    }
}

// Alternative: Netlify Forms submission (as backup)
async function sendToNetlify(form) {
    try {
        const formData = new FormData(form);
        
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return { success: true };
    } catch (error) {
        console.error('Netlify submission error:', error);
        throw error;
    }
}

// Show success message
function showSuccessMessage() {
    // Hide forms
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.add('d-none');
    });
    
    // Show success message
    document.getElementById('successMessage').classList.remove('d-none');
    document.getElementById('backToForms').classList.remove('d-none');
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

// Show error message
function showErrorMessage(message) {
    // Create or update error alert
    let errorAlert = document.getElementById('errorMessage');
    
    if (!errorAlert) {
        errorAlert = document.createElement('div');
        errorAlert.id = 'errorMessage';
        errorAlert.className = 'alert alert-danger mt-4';
        document.querySelector('.container').appendChild(errorAlert);
    }
    
    errorAlert.innerHTML = `
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Submission Error:</strong> ${message}
    `;
    errorAlert.classList.remove('d-none');
    
    // Scroll to error
    errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide error after 10 seconds
    setTimeout(() => {
        errorAlert.classList.add('d-none');
    }, 10000);
}

// Form validation
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
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
        if (field.value && field.hasAttribute('required')) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.classList.add('is-invalid');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Initialize form event listeners
document.addEventListener('DOMContentLoaded', function() {
    // New Patient Form
    const newPatientForm = document.getElementById('newPatientFormData');
    if (newPatientForm) {
        newPatientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                handleFormSubmission(this, 'New Patient Form');
            } else {
                showErrorMessage('Please fill in all required fields correctly.');
            }
        });
    }
    
    // Medical History Form
    const medicalHistoryForm = document.getElementById('medicalHistoryFormData');
    if (medicalHistoryForm) {
        medicalHistoryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                handleFormSubmission(this, 'Medical History Form');
            } else {
                showErrorMessage('Please fill in all required fields correctly.');
            }
        });
    }
    
    // Clear validation errors on input
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('is-invalid')) {
            e.target.classList.remove('is-invalid');
        }
    });
    
    // Handle "None" checkbox for medical conditions
    const noneCheckbox = document.getElementById('noneConditions');
    const conditionCheckboxes = document.querySelectorAll('input[name="medical_conditions"]:not(#noneConditions)');
    
    if (noneCheckbox) {
        noneCheckbox.addEventListener('change', function() {
            if (this.checked) {
                conditionCheckboxes.forEach(cb => cb.checked = false);
            }
        });
        
        conditionCheckboxes.forEach(cb => {
            cb.addEventListener('change', function() {
                if (this.checked) {
                    noneCheckbox.checked = false;
                }
            });
        });
    }
});

// Export functions for global access
window.showForm = showForm;
window.resetForms = resetForms;

// Remove styling from all links
document.querySelectorAll('a').forEach(link => {
    link.style.color = 'inherit';
    link.style.textDecoration = 'none';
});