
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.gallery-image');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, options);

  images.forEach(img => {
    observer.observe(img);
  });
});

function applyFisheyeEffect(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY);
  
  ctx.drawImage(img, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance <= radius) {
        const theta = Math.atan2(dy, dx);
        const newR = distance * distance / radius;
        const newX = centerX + newR * Math.cos(theta);
        const newY = centerY + newR * Math.sin(theta);
        
        const srcIndex = (Math.floor(newY) * canvas.width + Math.floor(newX)) * 4;
        const destIndex = (y * canvas.width + x) * 4;
        
        data[destIndex] = data[srcIndex];
        data[destIndex + 1] = data[srcIndex + 1];
        data[destIndex + 2] = data[srcIndex + 2];
        data[destIndex + 3] = data[srcIndex + 3];
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}









document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const images = document.querySelectorAll('.gallery-image');
  const speed = 0.5; // Adjust this speed as needed

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const parallaxPosition = -(scrollPosition * speed);
    
    galleryContainer.style.transform = `translateY(${parallaxPosition}px)`;
  });

  images.forEach(img => {
    img.addEventListener('click', function() {
      this.classList.toggle('zoomed');
    });
  });
});




function openPhotoDetails(imagePath, title, relatedPhotos = [], year, author, text, description) {
  const newWindow = window.open('', '_blank', 'width=1900,height=900');
  const relatedPhotosHTML = relatedPhotos.map(relatedPhoto => `<img src="${relatedPhoto.imagePath}" alt="${relatedPhoto.alt}" class="gallery-image">`).join('');

  // Split the description into paragraphs based on sentence endings
  const paragraphs = description.split(/[!.?]+/).filter(p => p.trim() !== '');

  const descriptionHTML = paragraphs.map(paragraph => `<p>${paragraph.trim()}.</p>`).join('');

  newWindow.document.write(`
    <html>
    <head>
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', 'sans-serif';
          overflow-x: hidden;
        }

        .flex-container {
          display: flex;
          height: 100vh;
        }

        .text-container {
          flex: 1;
          padding: 20px;
          position: fixed;
          width: 50%;
          height: 100vh;
          overflow-y: auto;
          text-align: justify;
        }

        .gallery-container {
          flex: 1;
          margin-left: 50%;
          padding: 20px;
          min-height: 200vh;
        }

        .gallery-image {
          max-width: 98%;
          height: auto;
          cursor: zoom-in;
          transition: transform 0.3s ease;
          margin-bottom: 2rem;
          margin-left: 1rem;
        }

        .gallery-image:hover {
          transform: scale(2);
          cursor: zoom-out;
          transform-origin: top right;
        }

        p {
          line-height: 1.5;
        }

        .author, .year, .text {
          font-weight: bold;
        }

      

        .description {
          font-size: 1em;
          color: #333;
          padding: 1em;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="flex-container">
        <div class="text-container">
          <h2>${title}</h2>
          <p class="year">${year}</p>
          <p class="author">${author}</p>
          <p class="text">Texto por: ${text}</p>
          ${descriptionHTML}
        </div>
        <div class="gallery-container">
          <div class="gallery">
            <img src="${imagePath}" alt="${title}" class="gallery-image">
            ${relatedPhotosHTML}
          </div>
        </div>
      </div>
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          const images = document.querySelectorAll('.gallery-image');

          images.forEach(img => {
            img.addEventListener('click', function() {
              this.classList.toggle('zoomed');
            });
          });
        });
      </script>
    </body>
    </html>
  `);
}


