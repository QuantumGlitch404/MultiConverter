document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeBtn = document.getElementById('closeAuthDialog');
    const authDialog = document.getElementById('authDialog');
    const welcomeText = document.getElementById('welcomeText');


    // Open login dialog
    loginBtn.addEventListener('click', () => {
        authDialog.classList.add('active');
    });

    // Open signup dialog
    signupBtn.addEventListener('click', () => {
        authDialog.classList.add('active');
    });

    // Close dialog
    closeBtn.addEventListener('click', () => {
        authDialog.classList.remove('active');
    });

    // Close dialog when clicking outside
    authDialog.addEventListener('click', (e) => {
        if (e.target === authDialog) {
            authDialog.classList.remove('active');
        }
    });

    // Typing animation
    function typeWriter(element, text, speed = 100) {
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Trigger typing animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(welcomeText, welcomeText.textContent);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(welcomeText);

    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    mobileMenuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    navContainer.insertBefore(mobileMenuToggle, navMenu);

    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
});