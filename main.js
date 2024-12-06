const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const paragraphs = document.querySelectorAll('.text-content');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute("data-visible") 
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

// Function to fetch and display text file content
paragraphs.forEach(paragraph => {
    const file = paragraph.getAttribute('data-file');
    fetch(file)
        .then(response => response.text())
        .then(data => {
            // Insert the text into the p tag
            paragraph.innerText = data;
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
});

