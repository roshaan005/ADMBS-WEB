// FAQ Collapse Arrow Toggle
const faqCollapse = document.getElementById('collapseFAQ'); // Declare once
const faqArrowIcon = document.getElementById('faqArrowIcon');

faqCollapse.addEventListener('show.bs.collapse', () => {
    console.log('FAQ expanded');
    faqArrowIcon.classList.remove('bi-chevron-down');
    faqArrowIcon.classList.add('bi-chevron-up');
});

faqCollapse.addEventListener('hide.bs.collapse', () => {
    console.log('FAQ collapsed');
    faqArrowIcon.classList.remove('bi-chevron-up');
    faqArrowIcon.classList.add('bi-chevron-down');
});
// Scroll to Top Functionality
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    console.log("Scroll position:", document.documentElement.scrollTop); // Debugging
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        console.log("Showing Scroll to Top button");
        btn.style.display = "block"; // Show the button
    } else {
        console.log("Hiding Scroll to Top button");
        btn.style.display = "none"; // Hide the button
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
