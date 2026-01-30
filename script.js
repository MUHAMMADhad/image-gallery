console.log("Gallery JS connected.");

const images = document.querySelectorAll(".small-image");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

// Search functionality
function filterImages() {
  const searchTerm = searchInput.value.toLowerCase();
  images.forEach((img) => {
    const altText = img.alt.toLowerCase();
    if(altText.includes(searchTerm)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

searchInput.addEventListener("keyup", filterImages);
searchBtn.addEventListener("click", filterImages);

// Lightbox functionality
function openLightbox(index) {
  currentIndex = index;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";

  const img = document.createElement("img");
  img.src = images[currentIndex].src;

  // Prev button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "❮";
  prevBtn.className = "lightbox-prev";

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "❯";
  nextBtn.className = "lightbox-next";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "lightbox-close";

  // Events
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1;
    }
    img.src = images[currentIndex].src;
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    img.src = images[currentIndex].src;
  });

  closeBtn.addEventListener("click", () => {
    lightbox.remove();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.remove();
    }
  });

  lightbox.append(prevBtn, img, nextBtn, closeBtn);
  document.body.appendChild(lightbox);
}
