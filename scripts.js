// Sliders
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

showSlide(currentSlide);

// Tabs
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Modals
const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Form Validation
function validateForm() {
    const name = document.forms['contactForm']['name'].value;
    const email = document.forms['contactForm']['email'].value;
    const phone = document.forms['contactForm']['phone'].value;
    const message = document.forms['contactForm']['message'].value;
    
    if (name === '' || email === '' || phone === '' || message === '') {
        alert('All fields must be filled out');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    const phonePattern = /^\d{10}$/; // Example pattern for a 10-digit phone number
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }
}

// Interactive Dropdown Menus
document.querySelectorAll('nav ul li').forEach(function(menuItem) {
    menuItem.addEventListener('mouseover', function() {
        if (menuItem.querySelector('ul')) {
            menuItem.querySelector('ul').style.display = 'block';
        }
    });

    menuItem.addEventListener('mouseout', function() {
        if (menuItem.querySelector('ul')) {
            menuItem.querySelector('ul').style.display = 'none';
        }
    });
});

// Search Box
document.getElementById('search-btn').addEventListener('click', function() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    if (searchText) {
        highlightText(searchText);
    }
});

function highlightText(text) {
    const elements = document.querySelectorAll('main, main *:not(script):not(style):not(noscript)');
    elements.forEach(element => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const innerHTML = element.innerHTML.toLowerCase();
            const index = innerHTML.indexOf(text);
            if (index !== -1) {
                const originalText = element.innerHTML;
                element.innerHTML = originalText.substring(0, index) +
                                    '<span class="highlight">' +
                                    originalText.substring(index, index + text.length) +
                                    '</span>' +
                                    originalText.substring(index + text.length);
            }
        }
    });
}

