// Theme toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Certificate popup
// Modal image logic
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.card[data-img]').forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalImg.src = card.dataset.img;
    
    // Add error handling for images
    modalImg.onerror = function() {
      modalTitle.textContent = "Image Not Found";
      modalImg.alt = "Certificate image could not be loaded. Please check the file path.";
    };
    
    modal.classList.add('open');
  });
});

closeModal.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});


// Add this temporary debug script
document.querySelectorAll('.card[data-img]').forEach(card => {
  const img = new Image();
  img.src = card.dataset.img;
  img.onload = function() {
    console.log('✅ Image loaded:', card.dataset.img);
  };
  img.onerror = function() {
    console.log('❌ Image failed:', card.dataset.img);
  };
});

