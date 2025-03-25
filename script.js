// Initialisation de AOS avec des paramètres personnalisés
AOS.init({
    duration: 600,           // durée réduite des animations (était 1000ms)
    easing: 'ease-out',     // type d'easing
    once: false,            // les animations se répètent à chaque scroll
    mirror: true,           // les éléments s'animent aussi en scrollant vers le haut
    offset: 50,             // décalage (en px) par rapport au point de déclenchement
    anchorPlacement: 'top-bottom', // déclenche l'animation quand le haut de l'élément atteint le bas du viewport
});

// Configuration globale AOS
AOS.init({
    duration: 600, // Durée par défaut réduite à 600ms
    easing: 'ease-out-cubic', // Easing plus dynamique
    once: true, // Les animations ne se jouent qu'une fois
    offset: 50, // Déclenche l'animation plus tôt
    delay: 0, // Pas de délai par défaut
    anchorPlacement: 'top-bottom'
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Gestion du header et de la navigation
const header = document.querySelector("header");
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section[id]');

// Gestion du background du header au scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        header.classList.add("navBackground");
    } else {
        header.classList.remove("navBackground");
    }
});

// Configuration de l'Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '-10% 0px',  // Réduit la marge pour une meilleure détection
    threshold: 0.3  // Déclenche plus tôt pour une meilleure réactivité
};

// Fonction pour mettre à jour les liens actifs
function updateActiveSection(entries) {
    entries.forEach(entry => {
        // Si la section est visible
        if (entry.isIntersecting) {
            // Récupérer l'ID de la section visible
            const currentSectionId = entry.target.id;
            
            // Mettre à jour les classes des liens de navigation
            navLinks.forEach(link => {
                // Récupérer l'ID ciblé par le lien (enlever le #)
                const targetId = link.getAttribute('href').substring(1);
                
                if (targetId === currentSectionId) {
                    // Ajouter la classe active au lien correspondant
                    link.classList.add('active');
                    link.style.color = 'var(--primary)';
                } else {
                    // Retirer la classe active des autres liens
                    link.classList.remove('active');
                    link.style.color = '';
                }
            });
        }
    });
}

// Créer l'observer
const observer = new IntersectionObserver(updateActiveSection, observerOptions);

// Observer toutes les sections
sections.forEach(section => {
    if (section) {
        observer.observe(section);
    }
});

// Gestion du scroll smooth
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Mise à jour manuelle des classes active
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                navLink.style.color = '';
            });
            link.classList.add('active');
            link.style.color = 'var(--primary)';
        }
    });
});

const home = document.getElementById('home');
const homeNav = document.querySelector('homeNav')



window.addEventListener('scroll', function () {
    const about = document.getElementById('home');
    const aboutNav = document.querySelector('.homeNav')
    const aboutNavHeight = about.clientHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutNavRect = about.getBoundingClientRect();

    if (aboutNavRect.top + (aboutNavHeight * 0.75) <= windowHeight && aboutNavRect.bottom >= 0.25 * windowHeight) {
        aboutNav.classList.add('isOnScreen');
    } else {
        aboutNav.classList.remove('isOnScreen');
    }
});

window.addEventListener('scroll', function () {
    const about = document.getElementById('aboutSec');
    const aboutNav = document.querySelector('.aboutNav');
    const aboutNavHeight = about.clientHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutNavRect = about.getBoundingClientRect();

    if (aboutNavRect.top + (aboutNavHeight * 0.75) <= windowHeight && aboutNavRect.bottom >= 0.25 * windowHeight) {
        aboutNav.classList.add('isOnScreen');
    } else {
        aboutNav.classList.remove('isOnScreen');
    }
});

window.addEventListener('scroll', function () {
    const about = document.querySelector('.skills');
    const aboutNav = document.querySelector('.skillsNav');
    const aboutNavHeight = about.clientHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutNavRect = about.getBoundingClientRect();

    if (aboutNavRect.top + (aboutNavHeight * 0.75) <= windowHeight && aboutNavRect.bottom >= 0.25 * windowHeight) {
        aboutNav.classList.add('isOnScreen');
    } else {
        aboutNav.classList.remove('isOnScreen');
    }
});

window.addEventListener('scroll', function () {
    const about = document.getElementById('projects');
    const aboutNav = document.querySelector('.projectsNav');
    const aboutNavHeight = about.clientHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutNavRect = about.getBoundingClientRect();

    if (aboutNavRect.top + (aboutNavHeight * 0.75) <= windowHeight && aboutNavRect.bottom >= 0.25 * windowHeight) {
        aboutNav.classList.add('isOnScreen');
    } else {
        aboutNav.classList.remove('isOnScreen');
    }
});

window.addEventListener('scroll', function () {
    const about = document.getElementById('contact');
    const aboutNav = document.querySelector('.contNav');
    const projectsNav = document.querySelector('.projectsNav');
    const aboutNavHeight = about.clientHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const aboutNavRect = about.getBoundingClientRect();

    if (aboutNavRect.top + (aboutNavHeight * 0.75) <= windowHeight && aboutNavRect.bottom >= 0.25 * windowHeight) {
        aboutNav.classList.add('isOnScreen');
        projectsNav.classList.remove('isOnScreen');
    } else {
        aboutNav.classList.remove('isOnScreen');
    }
});

// Validation des champs du formulaire
const validateForm = (formData) => {
    const errors = {};
    
    // Validation du nom (minimum 2 caractères)
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = "Le nom doit contenir au moins 2 caractères";
    }
    
    // Validation de l'email avec regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = "Veuillez entrer une adresse email valide";
    }
    
    // Validation du sujet (minimum 3 caractères)
    if (!formData.subject || formData.subject.trim().length < 3) {
        errors.subject = "Le sujet doit contenir au moins 3 caractères";
    }
    
    // Validation du message (minimum 10 caractères)
    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// Affichage des messages d'erreur
const displayError = (input, message) => {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        const div = document.createElement('div');
        div.className = 'error-message text-red-500 text-sm mt-1';
        div.textContent = message;
        input.parentElement.appendChild(div);
    } else {
        errorDiv.textContent = message;
    }
    input.classList.add('border-red-500');
};

// Suppression des messages d'erreur
const clearError = (input) => {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.classList.remove('border-red-500');
};

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