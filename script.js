document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode on switch change
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled'); // Save preference
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled'); // Save preference
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing dark mode code stays here

    // Add the sticky-top class to all navbars
    const navbars = document.querySelectorAll('.navbar');
    navbars.forEach(navbar => {
        if (!navbar.classList.contains('sticky-top')) {
            navbar.classList.add('sticky-top');
        }
    });
});