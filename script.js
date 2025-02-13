document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const target = event.target.getAttribute('href');
            if (target.startsWith('#')) {
                event.preventDefault();
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
