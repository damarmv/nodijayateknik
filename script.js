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

  const updateVisibleItems = () => {
    visibleItems = [];
    galleryItems.forEach(item => {
      if (item.closest('.card').style.display !== 'none') {
        visibleItems.push(item);
      }
    });
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      galleryCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
      // Update the visible items array for the lightbox
      setTimeout(updateVisibleItems, 10); 
    });
  });

  // Lightbox Logic
  const lightbox = document.getElementById('myLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-lightbox');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const prevBtn = document.querySelector('.lightbox .prev');
  const nextBtn = document.querySelector('.lightbox .next');

  let currentImageIndex;
  let visibleItems = [];

  const openLightbox = (elem) => {
    currentImageIndex = visibleItems.indexOf(elem);
    lightbox.style.display = 'block';
    lightboxImg.src = elem.href;
    captionText.innerHTML = elem.querySelector('img').alt;
  };

  const closeLightbox = () => {
    lightbox.style.display = 'none';
  };

  const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % visibleItems.length;
    const nextItem = visibleItems[currentImageIndex];
    lightboxImg.src = nextItem.href;
    captionText.innerHTML = nextItem.querySelector('img').alt;
  };

  const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + visibleItems.length) % visibleItems.length;
    const prevItem = visibleItems[currentImageIndex];
    lightboxImg.src = prevItem.href;
    captionText.innerHTML = prevItem.querySelector('img').alt;
  };

  galleryItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(item);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  // Initial population of visible items
  updateVisibleItems();
});
