// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Animation
const button = document.querySelector('#hero button');
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#6a11cb';
    button.style.color = '#fff';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#fff';
    button.style.color = '#333';
});
