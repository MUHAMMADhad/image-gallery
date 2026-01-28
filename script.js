console.log("Gallery JS connected.");


const images = document.querySelectorAll('.small-image');

images.forEach((img) => {
    img.addEventListener('click', () => {
        openLightbox(img.src);
    });
});

// Function to open the lightbox
function openLightbox(src) {
    // Create lightbox container
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    // Create image
    const img = document.createElement('img');
    img.src = src;

    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';

    // Close events
    closeBtn.addEventListener('click', () => {
        lightbox.remove();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });

    // Append elements
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
}