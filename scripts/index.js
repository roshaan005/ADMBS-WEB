   // Show or hide the button when scrolling
   window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function handleSubmit(e) {
    e.preventDefault();
  
    // Show Bootstrap Modal
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    modal.show();
  
    // Fire Confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }