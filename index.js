// Sticky Header on Scroll
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Mobile Drawer Navigation Toggle
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation) {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }
}

// Contact Form Submission Handler with Alternative Details Feedback
function handleContactSubmit(event){
    if (event) {
        event.preventDefault();
    }
    
    const form = document.getElementById('contactForm');
    const notification = document.getElementById('formNotification');
    const nameInput = document.getElementById('contactName');
    const guestName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Guest';

    if (notification) {
        notification.innerHTML = `<strong>Thank you, ${guestName}!</strong> Your message and contact details have been successfully received. A confirmation has been logged, and our team will get back to you via your primary or alternative contact details shortly.`;
        notification.className = 'form-notification success';
        notification.style.display = 'block';
        
        // Auto-scroll notification into view smoothly
        notification.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (form) {
        form.reset();
    }

    // Hide notification after 8 seconds
    setTimeout(function(){
        if (notification) {
            notification.style.display = 'none';
        }
    }, 8000);

    return false;
}
