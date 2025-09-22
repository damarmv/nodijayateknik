document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Logic
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
  });

  // Gallery Filter Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-grid .card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active class on button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get filter value
      const filter = button.dataset.filter;

      // Show/hide cards based on filter
      galleryCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});