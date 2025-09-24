document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Back to top button
  var backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

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

  if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener("click", function() {
      hamburgerMenu.classList.toggle("active");
      mainNav.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (hamburgerMenu.classList.contains("active")) {
          hamburgerMenu.classList.remove("active");
          mainNav.classList.remove("active");
        }
      });
    });
  }
});