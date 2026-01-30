/**
 * Navigation Logic
 * Handles active state for the navigation bar
 */

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(btn => {
        const href = btn.getAttribute('href');
        if (currentPath.includes(href) && href !== 'index.html') {
            btn.classList.add('active');
        } else if (currentPath.endsWith('/') || currentPath.includes('index.html')) {
            if (href === 'index.html') {
                btn.classList.add('active');
            }
        }
    });

    // Handle logout simulation
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('Sesión cerrada con éxito');
            window.location.href = 'index.html';
        });
    }
});
