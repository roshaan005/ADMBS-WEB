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
    // Scroll to form
    function scrollToForm() {
      document.getElementById('join-form').scrollIntoView({ behavior: 'smooth' });
    }

    // Scroll to top button
    window.onscroll = function () {
      document.getElementById("scrollTopBtn").style.display =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
          ? "block"
          : "none";
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Form validation & confetti trigger
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("joinForm");
      const modal = new bootstrap.Modal(document.getElementById("successModal"));

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.interests.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name && emailPattern.test(email) && message) {
          modal.show();
          form.reset();

          // 🎉 Trigger confetti
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });

        } else {
          alert("Please fill all fields correctly.");
        }
      });
    });