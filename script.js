
const header = document.querySelector("header")

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {
        header.classList.add("navBackground")

    }
    else {
        header.classList.remove("navBackground")

    }

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