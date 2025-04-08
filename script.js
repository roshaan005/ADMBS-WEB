document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is already enabled in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save the dark mode state in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});