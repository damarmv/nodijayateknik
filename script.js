document.addEventListener("DOMContentLoaded", function() {
  // Back to top button
  var backToTopButton = document.getElementById("back-to-top");

  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Fade-in animation
  const fadeInElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });

  // Hamburger menu
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mainNav = document.getElementById("main-nav");

  hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("active");
    mainNav.classList.toggle("active");
  });
});