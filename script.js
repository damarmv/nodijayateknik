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

  // WhatsApp link changer
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  whatsappLinks.forEach(link => {
      const phone = link.href.split("phone=")[1];
      if (isMobile) {
          link.href = `whatsapp://send?phone=${phone}`;
      } else {
          link.href = `https://wa.me/${phone}`;
      }
  });

  // Client Logo Carousel
  const carousel = document.querySelector(".client-logo-carousel");
  const logosContainer = document.querySelector(".client-logos");

  if (carousel && logosContainer) {
    // Duplicate the logos inside the container for a seamless loop
    const originalLogosHTML = logosContainer.innerHTML;
    logosContainer.innerHTML += originalLogosHTML;

    carousel.classList.add("scrolling");

    const clientsSection = document.querySelector(".clients");
    clientsSection.addEventListener("mouseenter", () => {
      carousel.classList.remove("scrolling");
    });

    clientsSection.addEventListener("mouseleave", () => {
      carousel.classList.add("scrolling");
    });
  }
});