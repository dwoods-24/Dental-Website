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





// Working JavaScript for PDF Forms with Your Adobe Client ID

// Adobe PDF Configuration
const ADOBE_CLIENT_ID = '66b528fe05104cb7a46aaf28830b3ed6'; // Your actual Adobe client ID
const PATIENT_FORM_PDF_PATH = '/pdf/patient_forms.pdf'; // Path to your PDF
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzbDGN4C517JcRh_DhdMWxfGHKT_aN_5YLFC9k4Jaf6b4KVGNeig36w2Jw_-6iBGsrO/exec';

// Current form tracking
let adobeDCView = null;
let isAdobeReady = false;
let currentPDFBlob = null;

//DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    console.log('Patient Forms page initialized with PDF capture');
});

// Initialize Application (keeping all your existing functions)
function initializeApp() {
    setupScrollEffects();
    setupNavigationHandlers();
    setupFormHandlers();
    setupServiceDetails();
    setupAnimations();
    setMinimumDate();
    initializeSquareBooking();
}

// Wait for Adobe Acrobat Services PDF Embed API to be ready
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    console.log('Adobe PDF Embed API is ready');
    isAdobeReady = true;
});

// Show patient PDF form
function showPatientForm() {
    console.log('showPatientForm() called');
    
    // Show PDF container
    const container = document.getElementById('pdfFormContainer');
    if (container) {
        container.classList.remove('d-none');
        console.log('PDF container shown');
        
        // Scroll to form
        container.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Load PDF after a short delay to ensure container is visible
        setTimeout(() => {
            loadPatientPDF();
        }, 500);
    } else {
        console.error('PDF container not found');
    }
}

//Load PDF with enhanced form capture capabilities
function loadPatientPDF() {
    console.log('loadPatientPDF() called');
    
    if (window.AdobeDC && isAdobeReady) {
        console.log('Attempting to load with Adobe API for PDF capture');
        loadWithAdobeAPI();
    } else if (window.AdobeDC) {
        console.log('Adobe available but not ready yet, waiting...');
        setTimeout(() => {
            if (isAdobeReady) {
                loadWithAdobeAPI();
            } else {
                console.log('Adobe still not ready, using iframe fallback');
                loadWithIframe();
            }
        }, 2000);
    } else {
        console.log('Adobe not available, using iframe fallback');
        loadWithIframe();
    }
}

// Load PDF with Adobe API and set up PDF capture
function loadWithAdobeAPI() {
    try {
        console.log('Loading with Adobe API for PDF capture...');
        
        // Clear previous instance
        document.getElementById('adobe-dc-view').innerHTML = '';
        
        var viewerConfig = {
            embedMode: "SIZED_CONTAINER",
            showAnnotationTools: false,
            showLeftHandPanel: false,
            showDownloadPDF: true,
            showPrintPDF: true,
            showZoomControl: true,
            enableFormFilling: true,
            showBookmarks: false,
            showThumbnails: false
        };
        
        adobeDCView = new AdobeDC.View({
            clientId: ADOBE_CLIENT_ID,
            divId: "adobe-dc-view",
        });
        
        adobeDCView.previewFile({
            content: {
                location: {
                    url: window.location.origin + PATIENT_FORM_PDF_PATH,
                },
            },
            metaData: {
                fileName: "Patient Information Form.pdf"
            }
        }, viewerConfig);
        
        // Set up PDF save callbacks for capturing filled form
        setupPDFCaptureCallbacks();
        
        document.getElementById('pdfIframe').style.display = 'none';
        document.getElementById('adobe-dc-view').style.display = 'block';
        
        console.log('Adobe PDF loaded successfully with capture capabilities');
        
    } catch (error) {
        console.error('Adobe PDF loading failed:', error);
        loadWithIframe();
    }
}


// Setup PDF capture callbacks
function setupPDFCaptureCallbacks() {
    if (!adobeDCView) return;
    
    try {
        console.log('Setting up PDF capture callbacks...');
        
        // Register callback for PDF save/download to capture filled form
        adobeDCView.registerCallback(
            AdobeDC.View.Enum.CallbackType.SAVE_API,
            function(metaData, content, options) {
                console.log('PDF save callback triggered');
                
                // Store the PDF content for later upload
                currentPDFBlob = content;
                
                console.log('PDF content captured for upload');
                return new Promise((resolve) => {
                    resolve({
                        code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                        data: {}
                    });
                });
            },
            {}
        );
        
        console.log('PDF capture callbacks set up successfully');
        
    } catch (error) {
        console.error('Error setting up PDF capture callbacks:', error);
    }
}



// Load PDF using iframe fallback
function loadWithIframe() {
    console.log('Loading with iframe (limited PDF capture)...');
    
    const iframe = document.getElementById('pdfIframe');
    const adobeContainer = document.getElementById('adobe-dc-view');
    
    if (iframe) {
        iframe.src = PATIENT_FORM_PDF_PATH;
        iframe.style.display = 'block';
        console.log('Iframe src set to:', PATIENT_FORM_PDF_PATH);
        
        if (adobeContainer) {
            adobeContainer.style.display = 'none';
        }
        
        iframe.onload = function() {
            console.log('PDF loaded successfully in iframe (note: limited capture capabilities)');
        };
        
        iframe.onerror = function() {
            console.error('Failed to load PDF in iframe');
            showPDFError();
        };
    } else {
        console.error('Iframe element not found');
    }
}

// Enhanced submit form function that captures and uploads the filled PDF
function submitForm() {
    console.log('submitForm() called - attempting to capture and upload filled PDF');
    
    // Show loading state
    const submitBtn = document.querySelector('button[onclick="submitForm()"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Preparing Submission...';
        submitBtn.disabled = true;
    }
    
    // Try to capture the filled PDF and submit
    captureAndSubmitPDF()
        .then((result) => {
            console.log('PDF capture and submission completed successfully');
            showSubmissionSuccess(result);
        })
        .catch(error => {
            console.error('PDF capture/submission failed:', error);
            showSubmissionError(error);
        })
        .finally(() => {
            // Reset submit button
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Submit Completed Form';
                submitBtn.disabled = false;
            }
        });
}

// Capture filled PDF and submit to Google Drive
async function captureAndSubmitPDF() {
    try {
        console.log('Starting PDF capture process...');
        
        // Get patient information first
        const patientInfo = await promptForPatientInfo();
        console.log('Patient info collected:', patientInfo.patient_name);
        
        // Try to capture the filled PDF
        let pdfData = null;
        let pdfFileName = `Patient_Form_${patientInfo.patient_name.replace(/\s+/g, '_')}.pdf`;
        
        if (adobeDCView && currentPDFBlob) {
            console.log('Using captured PDF from Adobe viewer');
            pdfData = await convertBlobToBase64(currentPDFBlob);
        } else if (adobeDCView) {
            console.log('Attempting to trigger PDF save for capture...');
            try {
                // Try to programmatically save the PDF to capture it
                const apis = await adobeDCView.getAPIs();
                if (apis && apis.save) {
                    const saveResult = await apis.save();
                    if (saveResult && saveResult.content) {
                        pdfData = await convertBlobToBase64(saveResult.content);
                        console.log('PDF captured via save API');
                    }
                }
            } catch (saveError) {
                console.log('Could not capture PDF via save API:', saveError);
            }
        }
        
        // Prepare submission data
        const submissionData = {
            ...patientInfo,
            form_type: 'Patient Information Form',
            submission_timestamp: new Date().toISOString(),
            submission_method: 'Website PDF Form',
            pdfData: pdfData,
            pdfFileName: pdfFileName,
            pdfCaptured: !!pdfData
        };
        
        console.log('Submitting to Google Drive...');
        const result = await submitToGoogleDrive(submissionData);
        
        return {
            ...result,
            patientInfo: patientInfo,
            pdfCaptured: !!pdfData
        };
        
    } catch (error) {
        console.error('Error in PDF capture and submission:', error);
        throw error;
    }
}

// Convert blob to base64
function convertBlobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            // Remove the data URL prefix to get just the base64 data
            const base64Data = reader.result.split(',')[1];
            resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// Prompt user for patient information with enhanced form
async function promptForPatientInfo() {
    return new Promise((resolve, reject) => {
        const modalHtml = `
            <div class="modal fade show" style="display: block; background: rgba(0,0,0,0.5); z-index: 9999;">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">
                                <i class="bi bi-person-fill me-2"></i>Patient Information Required
                            </h5>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-info mb-4">
                                <i class="bi bi-info-circle me-2"></i>
                                <strong>Almost done!</strong> Please provide your information so we can organize your completed form properly.
                            </div>
                            
                            <form id="patientInfoForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label fw-bold">First Name *</label>
                                        <input type="text" class="form-control" id="firstName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label fw-bold">Last Name *</label>
                                        <input type="text" class="form-control" id="lastName" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label fw-bold">Email Address</label>
                                        <input type="email" class="form-control" id="patientEmail" placeholder="your.email@example.com">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label fw-bold">Phone Number</label>
                                        <input type="tel" class="form-control" id="patientPhone" placeholder="(615) 555-0123">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label fw-bold">Date of Birth</label>
                                    <input type="date" class="form-control" id="patientDob">
                                </div>
                                
                                <div class="alert alert-success border-0 mt-4">
                                    <i class="bi bi-shield-check me-2"></i>
                                    <small><strong>Your filled PDF form will be saved with this information to our secure Google Drive system.</strong></small>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" id="cancelSubmission">
                                <i class="bi bi-x me-1"></i>Cancel
                            </button>
                            <button type="button" class="btn btn-primary btn-lg" id="submitPatientInfo">
                                <i class="bi bi-cloud-upload me-1"></i>Upload My Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        const modalElement = document.createElement('div');
        modalElement.innerHTML = modalHtml;
        document.body.appendChild(modalElement);
        
        // Handle form submission
        document.getElementById('submitPatientInfo').addEventListener('click', () => {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            
            if (!firstName || !lastName) {
                alert('Please enter both first and last name.');
                return;
            }
            
            const formData = {
                first_name: firstName,
                last_name: lastName,
                patient_name: `${firstName} ${lastName}`,
                email: document.getElementById('patientEmail').value.trim(),
                phone: document.getElementById('patientPhone').value.trim(),
                dob: document.getElementById('patientDob').value
            };
            
            document.body.removeChild(modalElement);
            resolve(formData);
        });
        
        // Handle cancellation
        document.getElementById('cancelSubmission').addEventListener('click', () => {
            document.body.removeChild(modalElement);
            reject(new Error('Submission cancelled by user'));
        });
        
        // Focus on first name field
        setTimeout(() => {
            document.getElementById('firstName').focus();
        }, 100);
    });
}


// Submit to Google Apps Script
async function submitToGoogleDrive(formData) {
    try {
        console.log('Submitting to Google Drive with PDF data...');
        
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
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || 'Unknown error occurred');
        }
        
        console.log('Successfully submitted to Google Drive:', result);
        return result;
        
    } catch (error) {
        console.error('Google Drive submission error:', error);
        throw error;
    }
}

// Show submission success with enhanced messaging
function showSubmissionSuccess(result) {
    const pdfContainer = document.getElementById('pdfFormContainer');
    if (pdfContainer) {
        pdfContainer.classList.add('d-none');
    }
    
    const successModal = document.createElement('div');
    successModal.className = 'modal fade show';
    successModal.style.display = 'block';
    successModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    successModal.style.zIndex = '9999';
    successModal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">
                        <i class="bi bi-check-circle-fill me-2"></i>Form Uploaded Successfully!
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove(); window.location.reload();"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-4">
                        <i class="bi bi-file-earmark-check text-success" style="font-size: 4rem;"></i>
                        <h6 class="text-success mt-3">Your completed PDF form has been securely uploaded!</h6>
                        <p class="text-muted">Patient: <strong>${result.patientName || 'Unknown'}</strong></p>
                        ${result.pdfCaptured ? 
                            '<p class="text-success small"><i class="bi bi-check-circle me-1"></i>Filled PDF captured and uploaded</p>' : 
                            '<p class="text-warning small"><i class="bi bi-exclamation-triangle me-1"></i>Form data saved (PDF capture unavailable)</p>'
                        }
                    </div>
                    
                    <div class="alert alert-success border-0 mb-4">
                        <i class="bi bi-info-circle me-2"></i>
                        <strong>What happens next:</strong> Your form has been organized in our system under your name. Our team will review it and contact you to confirm your appointment details.
                    </div>
                    
                    <div class="row g-3">
                        <div class="col-md-4">
                            <div class="card h-100 border-success">
                                <div class="card-body text-center">
                                    <i class="bi bi-envelope text-success mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-success">Email Copy</h6>
                                    <p class="card-text small">Send yourself a blank copy</p>
                                    <button class="btn btn-success btn-sm" onclick="emailForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-envelope me-1"></i>Email Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="card h-100 border-primary">
                                <div class="card-body text-center">
                                    <i class="bi bi-download text-primary mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-primary">Download Blank</h6>
                                    <p class="card-text small">Get a blank copy for records</p>
                                    <button class="btn btn-primary btn-sm" onclick="downloadForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-download me-1"></i>Download
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="card h-100 border-info">
                                <div class="card-body text-center">
                                    <i class="bi bi-calendar-plus text-info mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-info">Schedule Visit</h6>
                                    <p class="card-text small">Book your appointment</p>
                                    <button class="btn btn-info btn-sm" onclick="this.closest('.modal').remove(); scrollToSection('appointment');">
                                        <i class="bi bi-calendar me-1"></i>Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4 pt-3 border-top">
                        <p class="text-muted small mb-0">
                            <i class="bi bi-shield-check me-1"></i>
                            Your form is now securely stored in our Google Drive system organized by your name.
                        </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" onclick="this.closest('.modal').remove(); window.location.reload();">
                        <i class="bi bi-house me-1"></i>Return to Forms
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(successModal);
    
    // Auto-remove modal after 5 minutes
    setTimeout(() => {
        if (successModal.parentNode) {
            successModal.remove();
        }
    }, 300000);
}

// Show submission error with helpful alternatives
function showSubmissionError(error) {
    const errorModal = document.createElement('div');
    errorModal.className = 'modal fade show';
    errorModal.style.display = 'block';
    errorModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    errorModal.style.zIndex = '9999';
    errorModal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-warning text-dark">
                    <h5 class="modal-title">
                        <i class="bi bi-exclamation-triangle me-2"></i>Upload Issue
                    </h5>
                    <button type="button" class="btn-close" onclick="this.closest('.modal').remove()"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-3">
                        <i class="bi bi-cloud-slash text-warning" style="font-size: 3rem;"></i>
                    </div>
                    <p>There was an issue uploading your completed form to our system. Don't worry - you have several options to ensure we receive your information:</p>
                    
                    <div class="alert alert-info mb-3">
                        <small><strong>Technical details:</strong> ${error.message || 'Unknown error occurred during upload'}</small>
                    </div>
                    
                    <h6 class="text-primary mb-3">Alternative Submission Methods:</h6>
                    
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="card border-success">
                                <div class="card-body">
                                    <h6 class="text-success"><i class="bi bi-envelope me-2"></i>Email Your Completed Form</h6>
                                    <p class="card-text small mb-2">Save your completed PDF and email it to us directly</p>
                                    <button class="btn btn-success btn-sm" onclick="emailForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-envelope me-1"></i>Email Form to Office
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <button class="btn btn-primary w-100" onclick="downloadForm(); this.closest('.modal').remove();">
                                <i class="bi bi-download me-1"></i>Download Blank Form
                            </button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info w-100" onclick="printForm(); this.closest('.modal').remove();">
                                <i class="bi bi-printer me-1"></i>Print Current Form
                            </button>
                        </div>
                    </div>
                    
                    <div class="alert alert-primary mt-3">
                        <i class="bi bi-telephone me-2"></i>
                        <strong>Or call us directly:</strong> <a href="tel:615-719-7883" class="text-decoration-none">615-719-7883</a>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" onclick="this.closest('.modal').remove();">
                        <i class="bi bi-arrow-left me-1"></i>Try Upload Again
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(errorModal);
}









// Show error if PDF fails to load
function showPDFError() {
    const container = document.getElementById('adobe-dc-view');
    if (container) {
        container.innerHTML = `
            <div class="alert alert-warning text-center" style="margin: 50px;">
                <i class="bi bi-exclamation-triangle" style="font-size: 3rem;"></i>
                <h4>PDF Not Found</h4>
                <p>The patient form PDF could not be loaded.</p>
                <p><strong>Please check:</strong></p>
                <ul class="text-start" style="display: inline-block;">
                    <li>PDF file exists at: <code>/pdf/patient-information-form.pdf</code></li>
                    <li>File permissions are correct</li>
                    <li>File is not corrupted</li>
                </ul>
                <div class="mt-3">
                    <button class="btn btn-primary" onclick="loadPatientPDF()">
                        <i class="bi bi-arrow-clockwise me-1"></i>Try Again
                    </button>
                    <button class="btn btn-outline-secondary ms-2" onclick="closeForm()">
                        <i class="bi bi-x-lg me-1"></i>Close
                    </button>
                </div>
            </div>
        `;
        container.style.display = 'block';
    }
}

// Close PDF form
function closeForm() {
    console.log('closeForm() called');
    
    const container = document.getElementById('pdfFormContainer');
    if (container) {
        container.classList.add('d-none');
    }
    
    // Clear Adobe view
    if (adobeDCView) {
        document.getElementById('adobe-dc-view').innerHTML = '';
        adobeDCView = null;
    }
    
    // Clear iframe
    const iframe = document.getElementById('pdfIframe');
    if (iframe) {
        iframe.src = '';
    }
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Download PDF form
function downloadForm() {
    console.log('downloadForm() called');
    
    if (PATIENT_FORM_PDF_PATH) {
        const link = document.createElement('a');
        link.href = PATIENT_FORM_PDF_PATH;
        link.download = 'Dentures_More_Patient_Information_Form.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Downloaded Patient Information PDF form');
    }
}

// Print PDF form
function printForm() {
    console.log('printForm() called');
    
    if (adobeDCView) {
        alert('Use the print button in the PDF viewer toolbar to print the form.');
    } else {
        // For iframe, try to print
        const iframe = document.getElementById('pdfIframe');
        if (iframe && iframe.contentWindow) {
            try {
                iframe.contentWindow.print();
            } catch (error) {
                console.error('Print failed:', error);
                alert('Please use your browser\'s print function (Ctrl+P) to print the form.');
            }
        } else {
            alert('Please use your browser\'s print function (Ctrl+P) to print the form.');
        }
    }
}

// Email PDF form
function emailForm() {
    console.log('emailForm() called');
    
    const email = 'denturesandmore1@yahoo.com';
    const subject = 'Completed Patient Information Form';
    const body = `Hello,

Please find my completed Patient Information Form attached.

Patient Information:
- Form Type: Patient Information Form
- Completed Date: ${new Date().toLocaleDateString()}

I look forward to my appointment.

Best regards`;
    
    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Show instructions
    alert('Your email client will open. Please attach the completed PDF form before sending.');
}

// Submit PDF form
function submitForm() {
    console.log('submitForm() called');
    
    const confirmed = confirm('Have you completed all required fields in the form?\n\nClick OK to proceed with submission instructions.');
    
    if (confirmed) {
        submitToGoogleDrive(formData)
        showSubmissionInstructions();

    }
}

// Show submission instructions
function showSubmissionInstructions() {
    // Create modal for instructions
    const instructionModal = document.createElement('div');
    instructionModal.className = 'modal fade show';
    instructionModal.style.display = 'block';
    instructionModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    instructionModal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">
                        <i class="bi bi-check-circle me-2"></i>Form Completion Instructions
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove()"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-4">
                        <i class="bi bi-file-earmark-check text-success" style="font-size: 3rem;"></i>
                        <h6 class="text-success mt-2">Ready to submit your form?</h6>
                    </div>
                    
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card h-100 border-success">
                                <div class="card-body text-center">
                                    <i class="bi bi-envelope text-success mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-success">Email Submission</h6>
                                    <p class="card-text small">Email your completed form directly to our office</p>
                                    <button class="btn btn-success btn-sm" onclick="emailForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-envelope me-1"></i>Email Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="card h-100 border-primary">
                                <div class="card-body text-center">
                                    <i class="bi bi-download text-primary mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-primary">Download & Bring</h6>
                                    <p class="card-text small">Download and bring the completed form to your appointment</p>
                                    <button class="btn btn-primary btn-sm" onclick="downloadForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-download me-1"></i>Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-info mt-4">
                        <i class="bi bi-info-circle me-2"></i>
                        <strong>Important:</strong> Make sure to save or submit your completed form. 
                        We'll review it before your appointment to provide the best possible care.
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" onclick="this.closest('.modal').remove();">
                        <i class="bi bi-arrow-left me-1"></i>Continue Editing
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(instructionModal);
    
    // Auto-remove modal after 60 seconds
    setTimeout(() => {
        if (instructionModal.parentNode) {
            instructionModal.remove();
        }
    }, 60000);
}

// Test PDF availability
function testPDFLoad() {
    console.log('Testing PDF availability...');
    
    fetch(PATIENT_FORM_PDF_PATH)
        .then(response => {
            if (response.ok) {
                console.log('✅ PDF file is accessible');
            } else {
                console.error('❌ PDF file not found or not accessible');
                console.error('Response status:', response.status);
            }
        })
        .catch(error => {
            console.error('❌ Error accessing PDF:', error);
        });
}

// Run PDF test on page load
document.addEventListener('DOMContentLoaded', function() {
    // Test PDF after a short delay
    setTimeout(testPDFLoad, 1000);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close form
    if (e.key === 'Escape') {
        const pdfContainer = document.getElementById('pdfFormContainer');
        if (pdfContainer && !pdfContainer.classList.contains('d-none')) {
            closeForm();
        }
    }
    
    // Ctrl+S or Cmd+S to download PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        const pdfContainer = document.getElementById('pdfFormContainer');
        if (pdfContainer && !pdfContainer.classList.contains('d-none')) {
            e.preventDefault();
            downloadForm();
        }
    }
});

// Export functions for global access
window.showPatientForm = showPatientForm;
window.closeForm = closeForm;
window.downloadForm = downloadForm;
window.printForm = printForm;
window.emailForm = emailForm;
window.submitForm = submitForm;

// Debug function - call this in browser console to check setup
window.debugForms = function() {
    console.log('=== FORMS DEBUG INFO ===');
    console.log('PDF Path:', PATIENT_FORM_PDF_PATH);
    console.log('Adobe Client ID:', ADOBE_CLIENT_ID);
    console.log('Adobe DC Available:', !!window.AdobeDC);
    console.log('Adobe Ready:', isAdobeReady);
    console.log('PDF Container:', !!document.getElementById('pdfFormContainer'));
    console.log('Adobe Container:', !!document.getElementById('adobe-dc-view'));
    console.log('Iframe:', !!document.getElementById('pdfIframe'));
    testPDFLoad();
};



