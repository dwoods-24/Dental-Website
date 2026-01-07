// Custom JavaScript for Dentures & More Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupScrollEffects();
    setupNavigationHandlers();
    setupServiceDetails();
    setupAnimations();
    setMinimumDate();
    setupTimeValidation();
    setupEnhancedValidationClearance();
    highlightRequiredFields();
    updateBookingButton();
    addShakeAnimationCSS();
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
            const href = this.getAttribute('href');
            
            // Handle hash links (same page sections)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
                
                // Close mobile navbar if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
            // Handle links with hash after page (e.g., /index.html#services)
            else if (href && href.includes('#') && href.split('#')[0] === window.location.pathname) {
                e.preventDefault();
                const targetId = href.split('#')[1];
                scrollToSection(targetId);
                
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
            // All other links work normally - no preventDefault!
        });
    });
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
                    <span class="badge bg-primary fs-6">Starting at $475 per arch</span>
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
        `,

        'Basic Partial Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $475 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2> Description </h6> 
                    <p class="mb-3">Our acrylic partial dentures offer the fastest turnaround time, frequently available the same day you visit us.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">This classic design uses discreet metal clasps to stay firmly in place. While they utilize a sturdy metal clasp for security and may feel slightly more substantial than other designs, they are carefully crafted to provide a seamless, natural-looking smile.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Acrylic Partial Dentures</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">6 months against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Budget-conscious patients who need a reliable restoration quickly, often with same-day availability.</p>
                    </div>
                </div>
            </div>
        `,

        'Classic Partial Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $750 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2> Description </h6> 
                    <p class="mb-3">Our most popular long-term solution, these dentures use a high-quality, medical-grade metal frame that is both strong and lightweight.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3"> The cast metal partial is fabricated using a metal framework to which a laboratory will attach high grade, false, denture teeth. They are highly durable and offer excellent support for chewing. Because the metal piece of these dentures is made in a  laboratory, we must disclose that they may take 2-3 weeks before they are finished and ready to be delivered to the patient.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Cast Metal Partial Dentures</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">6 months against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Patients who want a long-term durable solution and are ok with waiting 2-3 weeks to be fabricated</p>
                    </div>
                </div>
            </div>
        `,

        'Premium Partial Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $1250 per arch</span>
                </div>
                
                <div class="service-features">
                    <h6 class="text-primary mb-2> Description </h6> 
                    <p class="mb-3">A combo flexible partial denture is a removable dental prosthesis that combines the strength of a metal framework with the comfort and esthetics of a flexible partial denture material.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3">This hybrid design offers an ideal balance of strength, comfort, and esthetics.  Combo flexible partial dentures are removable, easy to maintain, and designed to provide a secure, comfortable fit while restoring function and a natural smile. </p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Combo Flexible Partial Dentures</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">6 months against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic">Patients who need the long-term reliability of a metal partial denture but prefer the softer feel and improved appearance of flexible materials.</p>
                    </div>
                </div>
                </div>
            </div>
        `,

        'Elite Partial Package': `
            <div class="service-detail-content">
                <div class="price-badge mb-3">
                    <span class="badge bg-primary fs-6">Starting at $1750 per arch</span>
                </div>
                
               <div class="service-features">
                    <h6 class="text-primary mb-2> Description </h6> 
                    <p class="mb-3">For those seeking maximum comfort and aesthetics.  </p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-gear-fill me-2"></i>Fit & Function</h6>
                    <p class="mb-3"> Flexible partials are made from a specialized, pressure-injected material that adapts to the constant movement of your mouth. They contain no metal clasps, making them virtually invisible. These are lightweight and hypoallergenic.</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-tools me-2"></i>Materials</h6>
                    <p class="mb-3">Flexible Partial Dentures</p>
                    
                    <h6 class="text-primary mb-2"><i class="bi bi-shield-check me-2"></i>Warranty</h6>
                    <p class="mb-3">6 months against teeth popping out and breakage</p>
                    
                    <div class="ideal-for-section">
                        <h6 class="text-success mb-2"><i class="bi bi-people-fill me-2"></i>Ideal For</h6>
                        <p class="mb-0 fst-italic"> patients who find traditional metal or acrylic options irritating. </p>
                    </div>
                </div>
            </div>
        `,
        
    };

    // Store service details globally for modal access
    window.serviceDetails = serviceDetails;
}

// Show service details modal function
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

// Time validation function - only shows error for invalid format (not empty)
function validateTimeFormat(timeString) {
    if (!timeString || timeString.trim() === '') {
        return { isValid: true, message: '' }; // Allow empty since it's not required
    }
    
    // Regular expression for 12-hour time format
    const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM|am|pm)$/;
    
    if (timeRegex.test(timeString.trim())) {
        return { isValid: true, message: '' };
    } else {
        return { 
            isValid: false, 
            message: 'Please enter time in format: 9:00 AM or 2:30 PM' 
        };
    }
}

// Real-time validation for time field - only shows red for invalid input
function setupTimeValidation() {
    const timeField = document.getElementById('time');
    if (timeField) {
        timeField.addEventListener('input', function() {
            const validation = validateTimeFormat(this.value);
            
            if (this.value.trim() === '') {
                // Empty is allowed - show no validation state
                this.classList.remove('is-invalid');
                this.classList.remove('is-valid');
            } else if (validation.isValid) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                // Only show red/error for invalid format
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
                
                // Update error message
                const feedback = this.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = validation.message;
                }
            }
        });

        // Format time as user types (optional enhancement)
        timeField.addEventListener('blur', function() {
            if (this.value.trim()) {
                this.value = formatTimeInput(this.value);
            }
        });
    }
}

// Optional: Auto-format time input to consistent format
function formatTimeInput(timeString) {
    const cleaned = timeString.trim().toLowerCase();
    
    // Handle various input formats
    let formatted = cleaned;
    
    // Add space before AM/PM if missing
    formatted = formatted.replace(/(am|pm)/, ' $1');
    
    // Capitalize AM/PM
    formatted = formatted.replace(/\s(am|pm)/, function(match, period) {
        return ' ' + period.toUpperCase();
    });
    
    // Add leading zero to hour if needed
    formatted = formatted.replace(/^(\d):/, '0$1:');
    
    return formatted;
}




// Enhanced appointment form submission to Netlify
function validateAndSubmitAppointmentToNetlify() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const validationError = document.getElementById('validationError');
    const errorMessage = document.getElementById('errorMessage');
    const bookingBtn = document.getElementById('squareBookingBtn');
    
    // Get and clean the input values
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    // Clear any previous validation states
    nameInput.classList.remove('is-invalid');
    phoneInput.classList.remove('is-invalid');
    validationError.classList.add('d-none');
    
    // Check if name is empty first (highest priority)
    if (!name) {
        showValidationErrorAndFocus('Please enter your full name to continue.', nameInput);
        return;
    }
    
    // Check if phone is empty (second priority)
    if (!phone) {
        showValidationErrorAndFocus('Please enter your phone number for appointment confirmations.', phoneInput);
        return;
    }
    
    // Validate name format ONLY if name has content
    const nameParts = name.split(/\s+/).filter(part => part.length > 0);
    if (nameParts.length < 2) {
        showValidationErrorAndFocus('Please enter your first and last name.', nameInput);
        return;
    }
    
    // Check if name contains only valid characters ONLY if name has content
    const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
    if (!nameRegex.test(name)) {
        showValidationErrorAndFocus('Please enter a valid name using only letters.', nameInput);
        return;
    }
    
    // Validate phone format ONLY if phone has content
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        showValidationErrorAndFocus('Please enter a valid phone number (at least 10 digits).', phoneInput);
        return;
    }
    
    // If all validation passes, submit to Netlify
    showLoadingState(bookingBtn);
    
    // Submit the appointment form to Netlify
    submitAppointmentToNetlify()
        .then((result) => {
            console.log('Appointment submission successful:', result);
            showAppointmentSubmissionSuccess();
        })
        .catch((error) => {
            console.error('Appointment submission failed:', error);
            showAppointmentSubmissionError(error);
        })
        .finally(() => {
            resetButtonState(bookingBtn);
        });
}

// Submit appointment form data to Netlify
async function submitAppointmentToNetlify() {
    try {
        console.log('Submitting appointment to Netlify...');
        
        // Get all form data
        const formData = new FormData();
        formData.append('form-name', 'appointment-requests');
        formData.append('name', document.getElementById('name').value.trim());
        formData.append('phone', document.getElementById('phone').value.trim());
        formData.append('email', document.getElementById('email').value.trim());
        formData.append('service', document.getElementById('service').value);
        formData.append('date', document.getElementById('date').value);
        formData.append('time', document.getElementById('time').value.trim());
        formData.append('message', document.getElementById('message').value.trim());
        formData.append('submission_timestamp', new Date().toISOString());
        
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData)
        });
        
        if (!response.ok) {
            throw new Error(`Netlify submission failed: ${response.status}`);
        }
        
        console.log('Successfully submitted appointment to Netlify');
        return { success: true };
        
    } catch (error) {
        console.error('Netlify appointment submission error:', error);
        throw error;
    }
}

// Show appointment submission success
function showAppointmentSubmissionSuccess() {
    // Hide validation errors
    const validationError = document.getElementById('validationError');
    if (validationError) {
        validationError.classList.add('d-none');
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-3 fade show';
    successDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-check-circle-fill me-3" style="font-size: 1.5rem;"></i>
            <div>
                <h5 class="alert-heading mb-1">Appointment Request Submitted!</h5>
                <p class="mb-2">Thank you! We've received your appointment request and will contact you shortly to confirm your preferred time slot.</p>
                <hr class="my-2">
                <p class="mb-0">
                    <small>
                        <i class="bi bi-telephone me-1"></i>
                        <strong>Urgent?</strong> Call us directly at <a href="tel:615-719-7883" class="text-decoration-none fw-bold">615-719-7883</a>
                    </small>
                </p>
            </div>
        </div>
    `;
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        // Clear the form
        appointmentForm.reset();
        
        // Add success message
        appointmentForm.appendChild(successDiv);
        
        // Remove success message after 15 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 15000);
        
        // Scroll to success message
        successDiv.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}

// Show appointment submission error
function showAppointmentSubmissionError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-warning mt-3 fade show';
    errorDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-exclamation-triangle-fill me-3" style="font-size: 1.5rem;"></i>
            <div>
                <h5 class="alert-heading mb-1">Submission Issue</h5>
                <p class="mb-2">There was an issue submitting your appointment request online. Please try one of these alternatives:</p>
                <div class="row g-2">
                    <div class="col-md-6">
                        <a href="tel:615-719-7883" class="btn btn-warning btn-sm w-100">
                            <i class="bi bi-telephone me-1"></i>Call: 615-719-7883
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="mailto:denturesandmore1@yahoo.com" class="btn btn-outline-warning btn-sm w-100">
                            <i class="bi bi-envelope me-1"></i>Email Us
                        </a>
                    </div>
                </div>
                <hr class="my-2">
                <p class="mb-0">
                    <small>
                        <strong>Technical details:</strong> ${error.message || 'Unknown error occurred'}
                    </small>
                </p>
            </div>
        </div>
    `;
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.appendChild(errorDiv);
        
        // Remove error message after 30 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 30000);
        
        // Scroll to error message
        errorDiv.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}

// Alternative function that submits to Netlify AND opens Google Appointments
function validateAndSubmitThenRedirect() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const validationError = document.getElementById('validationError');
    const errorMessage = document.getElementById('errorMessage');
    const bookingBtn = document.getElementById('squareBookingBtn');
    
    // Get and clean the input values
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    // Clear any previous validation states
    nameInput.classList.remove('is-invalid');
    phoneInput.classList.remove('is-invalid');
    validationError.classList.add('d-none');
    
    // Check if name is empty first (highest priority)
    if (!name) {
        showValidationErrorAndFocus('Please enter your full name to continue.', nameInput);
        return;
    }
    
    // Check if phone is empty (second priority)
    if (!phone) {
        showValidationErrorAndFocus('Please enter your phone number for appointment confirmations.', phoneInput);
        return;
    }
    
    // Validate name format ONLY if name has content
    const nameParts = name.split(/\s+/).filter(part => part.length > 0);
    if (nameParts.length < 2) {
        showValidationErrorAndFocus('Please enter your first and last name.', nameInput);
        return;
    }
    
    // Check if name contains only valid characters ONLY if name has content
    const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
    if (!nameRegex.test(name)) {
        showValidationErrorAndFocus('Please enter a valid name using only letters.', nameInput);
        return;
    }
    
    // Validate phone format ONLY if phone has content
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        showValidationErrorAndFocus('Please enter a valid phone number (at least 10 digits).', phoneInput);
        return;
    }
    
    // If all validation passes, submit to Netlify first, then redirect
    showLoadingState(bookingBtn);
    
    // Submit the appointment form to Netlify
    submitAppointmentToNetlify()
        .then((result) => {
            console.log('Appointment submission successful, opening Google Appointments...');
            
            // Open Google Appointments after successful submission
            setTimeout(() => {
                window.open(GOOGLE_APPOINTMENTS_CONFIG.BOOKING_URL, '_blank', 'noopener,noreferrer');
            }, 1000);
            
            showAppointmentSubmissionWithRedirectSuccess();
        })
        .catch((error) => {
            console.error('Appointment submission failed:', error);
            showAppointmentSubmissionError(error);
        })
        .finally(() => {
            resetButtonState(bookingBtn);
        });
}

// Success message for submit + redirect approach
function showAppointmentSubmissionWithRedirectSuccess() {
    // Hide validation errors
    const validationError = document.getElementById('validationError');
    if (validationError) {
        validationError.classList.add('d-none');
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-3 fade show';
    successDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-check-circle-fill me-3" style="font-size: 1.5rem;"></i>
            <div>
                <h5 class="alert-heading mb-1">Request Submitted & Booking Opened!</h5>
                <p class="mb-2">
                    <strong>Step 1:</strong> ✅ Your appointment request has been submitted to our system.<br>
                    <strong>Step 2:</strong> 📅 Our booking calendar should have opened in a new window.
                </p>
                <hr class="my-2">
                <div class="row g-2">
                    <div class="col-md-6">
                        <button class="btn btn-primary btn-sm w-100" onclick="window.open('${GOOGLE_APPOINTMENTS_CONFIG.BOOKING_URL}', '_blank')">
                            <i class="bi bi-calendar-plus me-1"></i>Open Booking Again
                        </button>
                    </div>
                    <div class="col-md-6">
                        <a href="tel:615-719-7883" class="btn btn-outline-primary btn-sm w-100">
                            <i class="bi bi-telephone me-1"></i>Call Instead
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        // Clear the form
        appointmentForm.reset();
        
        // Add success message
        appointmentForm.appendChild(successDiv);
        
        // Remove success message after 20 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 20000);
        
        // Scroll to success message
        successDiv.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}




// Enhanced validation error function that forces focus and scrolls
function showValidationErrorAndFocus(message, inputElement) {
    const validationError = document.getElementById('validationError');
    const errorMessage = document.getElementById('errorMessage');
    
    // Show error message
    errorMessage.textContent = message;
    validationError.classList.remove('d-none');
    
    // Mark field as invalid
    inputElement.classList.add('is-invalid');
    
    // Force focus on the problematic field
    inputElement.focus();
    
    // Smooth scroll to the input field with extra offset for visibility
    const elementTop = inputElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - 150; // Extra space above the field
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // Add a subtle shake animation to draw attention
    addShakeAnimation(inputElement);
    
    // Optional: Add a border flash effect
    addBorderFlash(inputElement);
}

// Add shake animation to draw attention to the field
function addShakeAnimation(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    
    // Remove animation after it completes
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Add border flash effect
function addBorderFlash(element) {
    element.style.transition = 'border-color 0.3s ease, box-shadow 0.3s ease';
    element.style.borderColor = '#dc3545';
    element.style.boxShadow = '0 0 10px rgba(220, 53, 69, 0.3)';
    
    // Reset after a moment
    setTimeout(() => {
        element.style.transition = '';
        element.style.borderColor = '';
        element.style.boxShadow = '';
    }, 2000);
}

// Clear validation when user starts typing in any field
function setupEnhancedValidationClearance() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const validationError = document.getElementById('validationError');
    
    [nameInput, phoneInput].forEach(input => {
        if (input) {
            // Clear validation on input
            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    this.classList.remove('is-invalid');
                    
                    // If this was the last invalid field, hide error message
                    const invalidFields = document.querySelectorAll('.is-invalid');
                    if (invalidFields.length === 0 && validationError) {
                        validationError.classList.add('d-none');
                    }
                }
                
                // Clear any special styling
                this.style.borderColor = '';
                this.style.boxShadow = '';
                this.style.animation = '';
            });
            
            // Also clear on focus (when user clicks/tabs to field)
            input.addEventListener('focus', function() {
                if (this.classList.contains('is-invalid')) {
                    this.classList.remove('is-invalid');
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                }
            });
        }
    });
}

// Enhanced button state management
function showLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Submitting...';
    button.disabled = true;
    button.setAttribute('data-original-html', originalText);
}

function resetButtonState(button) {
    const originalHTML = button.getAttribute('data-original-html') || '<i class="bi bi-calendar-plus me-2"></i>Schedule Appointment';
    button.innerHTML = originalHTML;
    button.disabled = false;
    button.removeAttribute('data-original-html');
}

// Enhanced redirect confirmation with better messaging
function showRedirectConfirmation() {
    const confirmationDiv = document.createElement('div');
    confirmationDiv.className = 'alert alert-success mt-3 fade show';
    confirmationDiv.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>Submitted Successfully!</strong><br>
        <small>
            Our staff will reach out to you shortly!
        </small>
    `;
    
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.appendChild(confirmationDiv);
        
        // Remove confirmation after 15 seconds
        setTimeout(() => {
            if (confirmationDiv.parentNode) {
                confirmationDiv.remove();
            }
        }, 15000);
    }
}

// Add visual feedback for required fields
function highlightRequiredFields() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    
    [nameInput, phoneInput].forEach(input => {
        if (input) {
            const label = document.querySelector(`label[for="${input.id}"]`);
            if (label && !label.textContent.includes('*')) {
                label.innerHTML = label.innerHTML.replace(/\*?$/, ' <span class="text-danger">*</span>');
            }
        }
    });
}

// Add shake animation CSS dynamically
function addShakeAnimationCSS() {
    if (!document.getElementById('shake-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'shake-animation-styles';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
            
            .form-control:focus.is-invalid,
            .form-control.is-invalid:focus {
                border-color: #dc3545;
                box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
            }
            
            .required-field-highlight {
                background-color: rgba(220, 53, 69, 0.05);
                border-left: 3px solid #dc3545;
                padding-left: 10px;
                margin-left: -10px;
                transition: all 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }
}

// Update booking button to Neltify Form Submission
function updateBookingButton() {
    const bookingBtn = document.getElementById('squareBookingBtn');
    if (bookingBtn) {
        // Update the onclick function
        bookingBtn.onclick = validateAndSubmitAppointmentToNetlify;
        
        // Update button text
        bookingBtn.innerHTML = '<i class="bi bi-calendar-plus me-2"></i>Schedule Appointment';
        
        // Update button styling if needed
        bookingBtn.classList.remove('btn-danger');
        bookingBtn.classList.add('btn-primary');
    }
}



// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('serviceModal'));
        if (modal) {
            modal.hide();
        }
    }
    
    // Escape key to close PDF form
    const pdfContainer = document.getElementById('pdfFormContainer');
    if (e.key === 'Escape' && pdfContainer && !pdfContainer.classList.contains('d-none')) {
        closeForm();
    }
    
    // Ctrl+S or Cmd+S to download PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        if (pdfContainer && !pdfContainer.classList.contains('d-none')) {
            e.preventDefault();
            downloadForm();
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

// ========== ADOBE PDF AND PATIENT FORMS CODE ==========

// Adobe PDF Configuration
const ADOBE_CLIENT_ID = '66b528fe05104cb7a46aaf28830b3ed6';
const PATIENT_FORM_PDF_PATH = '/pdf/patient_forms.pdf';
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmdBp0D_o1iBeLa60rKhxDSHHru6xUdSZTQcKeKvLcJrEKqiWoZS_cM9PhldsVMKi4/exec';

// Current form tracking
let adobeDCView = null;
let isAdobeReady = false;
let currentPDFBlob = null;

// Wait for Adobe Acrobat Services PDF Embed API to be ready
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    console.log('Adobe PDF Embed API is ready');
    isAdobeReady = true;
});

// Show patient PDF form
function showPatientForm() {
    console.log('showPatientForm() called');
    
    const container = document.getElementById('pdfFormContainer');
    if (container) {
        container.classList.remove('d-none');
        console.log('PDF container shown');
        
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

// Enhanced submit form function that emails PDF and submits to Netlify
function submitForm() {
    console.log('submitForm() called - preparing email and Netlify submission');
    
    // Show loading state
    const submitBtn = document.querySelector('button[onclick="submitForm()"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Preparing Submission...';
        submitBtn.disabled = true;
    }
    
    // Collect patient information and submit
    collectPatientInfoAndSubmit()
        .then((result) => {
            console.log('Form submission completed successfully');
            showSubmissionSuccess(result);
        })
        .catch(error => {
            console.error('Form submission failed:', error);
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

// Collect patient information and handle submissions
async function collectPatientInfoAndSubmit() {
    try {
        console.log('Starting form submission process...');
        
        // Get patient information
        const patientInfo = await promptForPatientInfo();
        console.log('Patient info collected:', patientInfo.patient_name);
        
        // Submit to Netlify form
        console.log('Submitting patient information to Netlify...');
        const netlifyResult = await submitToNetlifyForm(patientInfo);
        
        // Open email client for PDF submission
        console.log('Opening email client for PDF form submission...');
        openEmailForPDFSubmission(patientInfo);
        
        return {
            success: true,
            netlifySubmitted: netlifyResult.success,
            emailOpened: true,
            patientInfo: patientInfo
        };
        
    } catch (error) {
        console.error('Error in form submission process:', error);
        throw error;
    }
}

// Submit patient information to Netlify Forms
async function submitToNetlifyForm(patientInfo) {
    try {
        console.log('Submitting to Netlify Forms...');
        
        // Prepare form data for Netlify
        const formData = new FormData();
        formData.append('form-name', 'patient-form-submission');
        formData.append('patient_name', patientInfo.patient_name);
        formData.append('first_name', patientInfo.first_name);
        formData.append('last_name', patientInfo.last_name);
        formData.append('email', patientInfo.email || '');
        formData.append('phone', patientInfo.phone || '');
        formData.append('dob', patientInfo.dob || '');
        formData.append('form_type', 'Patient Information Form');
        formData.append('submission_timestamp', new Date().toISOString());
        formData.append('submission_method', 'Website PDF Form');
        
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData)
        });
        
        if (!response.ok) {
            throw new Error(`Netlify submission failed: ${response.status}`);
        }
        
        console.log('Successfully submitted to Netlify Forms');
        return { success: true };
        
    } catch (error) {
        console.error('Netlify submission error:', error);
        // Don't throw error here - we still want to open email even if Netlify fails
        return { success: false, error: error.message };
    }
}

// Open email client with PDF form submission details
function openEmailForPDFSubmission(patientInfo) {
    const email = 'denturesandmore1@yahoo.com';
    const subject = `Completed Patient Information Form - ${patientInfo.patient_name}`;
    const body = `Hello Dentures & More Team,

Please find my completed Patient Information Form attached to this email.

Patient Information:
- Name: ${patientInfo.patient_name}
- Email: ${patientInfo.email || 'Not provided'}
- Phone: ${patientInfo.phone || 'Not provided'}
- Date of Birth: ${patientInfo.dob || 'Not provided'}
- Form Type: Patient Information Form
- Completed Date: ${new Date().toLocaleDateString()}
- Submission Time: ${new Date().toLocaleTimeString()}

Please save this completed form to my patient file. I look forward to my appointment.

Best regards,
${patientInfo.patient_name}`;
    
    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    console.log('Email client opened for PDF submission');
}

// Updated success message function
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
                        <i class="bi bi-check-circle-fill me-2"></i>Form Submission Initiated!
                    </h5>
                    <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove(); window.location.reload();"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-4">
                        <i class="bi bi-envelope-check text-success" style="font-size: 4rem;"></i>
                        <h6 class="text-success mt-3">Your email client should have opened!</h6>
                        <p class="text-muted">Patient: <strong>${result.patientInfo?.patient_name || 'Unknown'}</strong></p>
                    </div>
                    
                    <div class="row g-3 mb-4">
                        <div class="col-md-6">
                            <div class="alert ${result.netlifySubmitted ? 'alert-success' : 'alert-warning'} border-0">
                                <i class="bi bi-${result.netlifySubmitted ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
                                <strong>Patient Information:</strong> ${result.netlifySubmitted ? 'Submitted successfully' : 'Submission had issues'}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="alert ${result.emailOpened ? 'alert-info' : 'alert-warning'} border-0">
                                <i class="bi bi-envelope me-2"></i>
                                <strong>Email Client:</strong> ${result.emailOpened ? 'Opened successfully' : 'Failed to open'}
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-primary border-0 mb-4">
                        <i class="bi bi-info-circle me-2"></i>
                        <strong>Next Steps:</strong>
                        <ol class="mb-0 mt-2">
                            <li>Attach your completed PDF form to the email that opened</li>
                            <li>Send the email to complete your submission</li>
                            <li>We'll contact you to confirm receipt and schedule your appointment</li>
                        </ol>
                    </div>
                    
                    <div class="row g-3">
                        <div class="col-md-4">
                            <div class="card h-100 border-info">
                                <div class="card-body text-center">
                                    <i class="bi bi-envelope text-info mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-info">Didn't Open?</h6>
                                    <p class="card-text small">Manually send the email</p>
                                    <button class="btn btn-info btn-sm" onclick="openEmailForPDFSubmission(${JSON.stringify(result.patientInfo).replace(/"/g, '&quot;')}); this.closest('.modal').remove();">
                                        <i class="bi bi-envelope me-1"></i>Open Email
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="card h-100 border-primary">
                                <div class="card-body text-center">
                                    <i class="bi bi-download text-primary mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-primary">Download Form</h6>
                                    <p class="card-text small">Get the PDF to attach</p>
                                    <button class="btn btn-primary btn-sm" onclick="downloadForm(); this.closest('.modal').remove();">
                                        <i class="bi bi-download me-1"></i>Download
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="card h-100 border-success">
                                <div class="card-body text-center">
                                    <i class="bi bi-calendar-plus text-success mb-2" style="font-size: 2rem;"></i>
                                    <h6 class="card-title text-success">Book Appointment</h6>
                                    <p class="card-text small">Schedule your visit</p>
                                    <button class="btn btn-success btn-sm" onclick="this.closest('.modal').remove(); scrollToSection('appointment');">
                                        <i class="bi bi-calendar me-1"></i>Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4 pt-3 border-top">
                        <p class="text-muted small mb-2">
                            <i class="bi bi-telephone me-1"></i>
                            <strong>Need Help?</strong> Call us at <a href="tel:615-719-7883" class="text-decoration-none">615-719-7883</a>
                        </p>
                        <p class="text-muted small mb-0">
                            <i class="bi bi-shield-check me-1"></i>
                            Your patient information has been securely submitted to our system.
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

// Updated error handling for the new submission method
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
                        <i class="bi bi-exclamation-triangle me-2"></i>Submission Issue
                    </h5>
                    <button type="button" class="btn-close" onclick="this.closest('.modal').remove()"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="text-center mb-3">
                        <i class="bi bi-envelope-slash text-warning" style="font-size: 3rem;"></i>
                    </div>
                    <p>There was an issue with the automatic submission process. Don't worry - you can still submit your form manually:</p>
                    
                    <div class="alert alert-info mb-3">
                        <small><strong>Technical details:</strong> ${error.message || 'Unknown error occurred during submission'}</small>
                    </div>
                    
                    <h6 class="text-primary mb-3">Manual Submission Options:</h6>
                    
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="card border-success">
                                <div class="card-body">
                                    <h6 class="text-success"><i class="bi bi-envelope me-2"></i>Email Your Completed Form</h6>
                                    <p class="card-text small mb-2">Manually compose an email with your completed PDF</p>
                                    <div class="row g-2">
                                        <div class="col-6">
                                            <button class="btn btn-success btn-sm w-100" onclick="manualEmailSubmission(); this.closest('.modal').remove();">
                                                <i class="bi bi-envelope me-1"></i>Open Email
                                            </button>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-outline-success btn-sm w-100" onclick="copyEmailInfo();">
                                                <i class="bi bi-clipboard me-1"></i>Copy Info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <button class="btn btn-primary w-100" onclick="downloadForm(); this.closest('.modal').remove();">
                                <i class="bi bi-download me-1"></i>Download Form
                            </button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info w-100" onclick="printForm(); this.closest('.modal').remove();">
                                <i class="bi bi-printer me-1"></i>Print Form
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
                        <i class="bi bi-arrow-left me-1"></i>Try Again
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(errorModal);
}

// Manual email submission helper
function manualEmailSubmission() {
    const email = 'denturesandmore1@yahoo.com';
    const subject = 'Completed Patient Information Form';
    const body = `Hello Dentures & More Team,

    Please find my completed Patient Information Form attached to this email.

    Form Details:
    - Form Type: Patient Information Form
    - Completed Date: ${new Date().toLocaleDateString()}
    - Submission Time: ${new Date().toLocaleTimeString()}

    Please save this completed form to my patient file. I look forward to my appointment.

    Best regards`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
}

// Copy email information to clipboard
function copyEmailInfo() {
    const emailInfo = `Email: denturesandmore1@yahoo.com
    Subject: Completed Patient Information Form

    Instructions: Attach your completed PDF form and send the email.`;
    
    navigator.clipboard.writeText(emailInfo).then(() => {
        alert('Email information copied to clipboard!');
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = emailInfo;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Email information copied to clipboard!');
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

/*Email PDF form using SMTP.js
function emailForm() {
    console.log('emailForm() called');
    
    // Prompt for user information
    const userEmail = prompt('Please enter your email address:');
    if (!userEmail || !userEmail.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const userName = prompt('Please enter your full name:');
    if (!userName) {
        alert('Please enter your name.');
        return;
    }
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'alert alert-info text-center';
    loadingDiv.style.position = 'fixed';
    loadingDiv.style.top = '50%';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translate(-50%, -50%)';
    loadingDiv.style.zIndex = '10000';
    loadingDiv.innerHTML = '<div class="spinner-border me-2"></div>Sending email...';
    document.body.appendChild(loadingDiv);
    
    // Send email using SMTP.js
    Email.send({
        SecureToken: "YOUR_SECURE_TOKEN_HERE", // Replace with your actual secure token
        To: 'denturesandmore1@yahoo.com',
        From: userEmail,
        Subject: 'Patient Form Notification - ' + userName,
        Body: `
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #2196F3; border-bottom: 2px solid #2196F3; padding-bottom: 10px;">
                        Patient Information Form Notification
                    </h2>
                    
                    <p>Hello Dentures & More Team,</p>
                    
                    <p>A patient has indicated they have completed the Patient Information Form.</p>
                    
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #2196F3; margin-top: 0;">Patient Details:</h3>
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 5px; font-weight: bold;">Name:</td>
                                <td style="padding: 5px;">${userName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px; font-weight: bold;">Email:</td>
                                <td style="padding: 5px;">${userEmail}</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px; font-weight: bold;">Form Type:</td>
                                <td style="padding: 5px;">Patient Information Form</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px; font-weight: bold;">Submission Date:</td>
                                <td style="padding: 5px;">${new Date().toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td style="padding: 5px; font-weight: bold;">Submission Time:</td>
                                <td style="padding: 5px;">${new Date().toLocaleTimeString()}</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107; margin: 20px 0;">
                        <p style="margin: 0;"><strong>⚠️ Note:</strong> The patient should download and email the completed PDF form separately, or print and bring it to their appointment.</p>
                    </div>
                    
                    <p>Please contact the patient to confirm receipt and schedule their appointment.</p>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    
                    <p style="color: #666; font-size: 12px;">
                        This is an automated message from the Dentures & More website forms system.
                    </p>
                </div>
            </body>
            </html>
        `
    }).then(
        message => {
            document.body.removeChild(loadingDiv);
            
            // Show success message
            const successDiv = document.createElement('div');
            successDiv.className = 'alert alert-success';
            successDiv.style.position = 'fixed';
            successDiv.style.top = '50%';
            successDiv.style.left = '50%';
            successDiv.style.transform = 'translate(-50%, -50%)';
            successDiv.style.zIndex = '10000';
            successDiv.style.maxWidth = '500px';
            successDiv.innerHTML = `
                <h5><i class="bi bi-check-circle-fill me-2"></i>Notification Sent!</h5>
                <p>Our office has been notified that you've completed the form.</p>
                <p><strong>Next Steps:</strong></p>
                <ul class="mb-3">
                    <li>Download your completed form using the "Download" button</li>
                    <li>Email it to denturesandmore1@yahoo.com or</li>
                    <li>Print and bring it to your appointment</li>
                </ul>
                <button class="btn btn-success" onclick="this.parentElement.remove();">Close</button>
            `;
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                if (successDiv.parentElement) {
                    successDiv.remove();
                }
            }, 10000);
            
            console.log('Email sent successfully:', message);
        }
    ).catch(
        error => {
            document.body.removeChild(loadingDiv);
            
            // Show error with fallback options
            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-warning';
            errorDiv.style.position = 'fixed';
            errorDiv.style.top = '50%';
            errorDiv.style.left = '50%';
            errorDiv.style.transform = 'translate(-50%, -50%)';
            errorDiv.style.zIndex = '10000';
            errorDiv.style.maxWidth = '500px';
            errorDiv.innerHTML = `
                <h5><i class="bi bi-exclamation-triangle-fill me-2"></i>Email Service Unavailable</h5>
                <p>We couldn't send the notification automatically. Please use one of these alternatives:</p>
                <div class="d-grid gap-2">
                    <a href="mailto:denturesandmore1@yahoo.com?subject=Completed%20Patient%20Form%20-%20${encodeURIComponent(userName)}&body=Name:%20${encodeURIComponent(userName)}%0AEmail:%20${encodeURIComponent(userEmail)}%0A%0AI%20have%20completed%20the%20patient%20information%20form.%20Please%20find%20it%20attached." 
                       class="btn btn-primary">
                        <i class="bi bi-envelope me-2"></i>Open Email Client
                    </a>
                    <a href="tel:615-719-7883" class="btn btn-outline-primary">
                        <i class="bi bi-telephone me-2"></i>Call: 615-719-7883
                    </a>
                    <button class="btn btn-secondary" onclick="this.parentElement.parentElement.remove();">Close</button>
                </div>
            `;
            document.body.appendChild(errorDiv);
            
            console.error('Email sending failed:', error);
        }
    );
}*/

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

// Export functions for global access
window.scrollToSection = scrollToSection;
window.showServiceDetails = showServiceDetails;
window.validateAndSubmitAppointmentToNetlify = validateAndSubmitAppointmentToNetlify;
window.validateTimeFormat = validateTimeFormat;
window.showPatientForm = showPatientForm;
window.closeForm = closeForm;
window.downloadForm = downloadForm;
window.printForm = printForm;
window.emailForm = emailForm;
window.submitForm = submitForm;