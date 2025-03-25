// Initialize AOS with custom settings
AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    delay: 0,
    anchorPlacement: 'top-bottom'
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Navigation handling
const header = document.querySelector("header");
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section[id]');

// Update active section on scroll
const observerOptions = {
    root: null,
    rootMargin: '-10% 0px',
    threshold: 0.3
};

function updateActiveSection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentSectionId = entry.target.id;
            
            navLinks.forEach(link => {
                const targetId = link.getAttribute('href').substring(1);
                
                if (targetId === currentSectionId) {
                    link.classList.add('active');
                    link.style.color = 'var(--primary)';
                } else {
                    link.classList.remove('active');
                    link.style.color = '';
                }
            });
        }
    });
}

const observer = new IntersectionObserver(updateActiveSection, observerOptions);

sections.forEach(section => {
    if (section) {
        observer.observe(section);
    }
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu handling
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.querySelector('#mobileMenu .mobile-menu-container');
const mobileLinks = document.querySelectorAll('#mobileMenu .mobile-link');

// Toggle menu state
function toggleMenu() {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
}

// Menu button click handler
menuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
        // Wait for menu close animation before scrolling
        setTimeout(() => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMenu();
    }
});

// Close menu on screen resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menuBtn.classList.contains('active')) {
        toggleMenu();
    }
});

// Contact form handling
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('#name').value;
    const email = this.querySelector('#email').value;
    const subject = this.querySelector('#subject').value;
    const message = this.querySelector('#message').value;
    
    // Disable submit button
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Send email using EmailJS
    emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
            to_name: 'Donovan',
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            reply_to: email,
        }
    ).then(
        function() {
            submitBtn.innerHTML = 'Message sent!';
            contactForm.reset();
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);
        },
        function(error) {
            console.error('Failed to send message:', error);
            submitBtn.innerHTML = 'Error sending message';
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);
        }
    );
});