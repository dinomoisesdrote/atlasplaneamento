document.addEventListener('DOMContentLoaded', function() {
    const imageViewer = document.getElementById('image-viewer');
    const viewerImage = document.getElementById('viewer-image');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    let currentZoom = 1;
    const maxZoom = 8;
    const zoomStep = 0.2;

    function zoom(delta) {
        currentZoom += delta;
        currentZoom = Math.max(1, Math.min(currentZoom, maxZoom));
        viewerImage.style.transform = `scale(${currentZoom})`;
    }

    viewerImage.addEventListener('wheel', (event) => {
        event.preventDefault();
        const delta = event.deltaY > 0? -zoomStep : zoomStep;
        zoom(delta);
    });

    viewerImage.addEventListener('mousedown', (event) => {
        event.preventDefault();
        const startX = event.clientX - viewerImage.offsetLeft;
        const startY = event.clientY - viewerImage.offsetTop;

        const mouseMoveHandler = (moveEvent) => {
            viewerImage.style.left = moveEvent.clientX - startX + 'px';
            viewerImage.style.top = moveEvent.clientY - startY + 'px';
        };

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    zoomInBtn.addEventListener('click', () => {
        zoom(zoomStep);
    });

    zoomOutBtn.addEventListener('click', () => {
        zoom(-zoomStep);
    });

    function generateThumbnails() {
        const thumbnailsContainer = document.getElementById('image-thumbnails');

        for (let i = 1; i <= 100; i++) {
            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('thumbnail');

            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = `../public/Planos/funchal/plano_1805/rui_carita_${i}.png`;
            thumbnailImg.alt = `rui_carita_${i}.png`;

            thumbnailDiv.appendChild(thumbnailImg);
            thumbnailsContainer.appendChild(thumbnailDiv);

            thumbnailImg.addEventListener('click', () => {
                openImageViewer(thumbnailImg.src);
            });
        }
    }

    function openImageViewer(imageSrc) {
        const viewerImage = document.getElementById('viewer-image');
        viewerImage.src = imageSrc;
        imageViewer.style.display = 'flex';
    }

    generateThumbnails();

    // Functionality for opening photo details in a new window remains unchanged
});



  document.addEventListener('DOMContentLoaded', function() {
    mediumZoom('.gallery-image');
  });

  const maxClicksZoomIn = 6; // Número máximo de cliques no botão de zoom in
const maxClicksZoomOut = 6; // Número máximo de cliques no botão de zoom out



let clickCountZoomIn = 0;
let clickCountZoomOut = 0;

zoomInBtn.addEventListener('click', () => {
    if (clickCountZoomIn < maxClicksZoomIn) {
        zoom(zoomStep);
        clickCountZoomIn++;
    } else {
        zoomInBtn.disabled = true; // Desativa o botão de zoom in após 6 cliques
    }
});

zoomOutBtn.addEventListener('click', () => {
    if (clickCountZoomOut < maxClicksZoomOut) {
        zoom(-zoomStep);
        clickCountZoomOut++;
    } else {
        zoomOutBtn.disabled = true; // Desativa o botão de zoom out após 6 cliques
    }
});


viewerImage.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0? -zoomStep : zoomStep;
    zoom(delta);

    // Verifica se o zoom foi feito com o scroll do mouse e não incrementa os contadores de cliques
    if (!event.shiftKey &&!event.ctrlKey) {
        return;
    }

    if (delta > 0 && clickCountZoomOut < maxClicksZoomOut) {
        clickCountZoomOut++;
    } else if (delta < 0 && clickCountZoomIn < maxClicksZoomIn) {
        clickCountZoomIn++;
    }

    // Reabilita os botões se eles foram desativados por cliques excessivos
    if (clickCountZoomIn >= maxClicksZoomIn) {
        zoomInBtn.disabled = false;
    }
    if (clickCountZoomOut >= maxClicksZoomOut) {
        zoomOutBtn.disabled = false;
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const imageViewer = document.getElementById('image-viewer');
//     const viewerImage = document.getElementById('viewer-image');
//     const zoomInBtn = document.getElementById('zoom-in');
//     const zoomOutBtn = document.getElementById('zoom-out');
//     let currentZoom = 1;
//     const maxZoom = 8;
//     const zoomStep = 0.2;

//     function zoom(delta) {
//         currentZoom += delta;
//         currentZoom = Math.max(1, Math.min(currentZoom, maxZoom));
//         viewerImage.style.transform = `scale(${currentZoom})`;
//     }

//     viewerImage.addEventListener('wheel', (event) => {
//         event.preventDefault();
//         const delta = event.deltaY > 0 ? -zoomStep : zoomStep;
//         zoom(delta);
//     });

//     viewerImage.addEventListener('mousedown', (event) => {
//         event.preventDefault();
//         const startX = event.clientX - viewerImage.offsetLeft;
//         const startY = event.clientY - viewerImage.offsetTop;

//         const mouseMoveHandler = (moveEvent) => {
//             viewerImage.style.left = moveEvent.clientX - startX + 'px';
//             viewerImage.style.top = moveEvent.clientY - startY + 'px';
//         };

//         const mouseUpHandler = () => {
//             document.removeEventListener('mousemove', mouseMoveHandler);
//             document.removeEventListener('mouseup', mouseUpHandler);
//         };

//         document.addEventListener('mousemove', mouseMoveHandler);
//         document.addEventListener('mouseup', mouseUpHandler);
//     });

//     zoomInBtn.addEventListener('click', () => {
//         zoom(zoomStep);
//     });

//     zoomOutBtn.addEventListener('click', () => {
//         zoom(-zoomStep);
//     });
// });

// //estrutura para o tunbail de imagens

// function generateThumbnails() {
//     const thumbnailsContainer = document.getElementById('image-thumbnails');

//     for (let i = 1; i <= 100; i++) {
//         const thumbnailDiv = document.createElement('div');
//         thumbnailDiv.classList.add('thumbnail');

//         const thumbnailImg = document.createElement('img');
//         thumbnailImg.src = `../public/Planos/funchal/plano_1805/rui_carita_${i}.png`;
//         thumbnailImg.alt = `rui_carita_${i}.png`;

//         thumbnailDiv.appendChild(thumbnailImg);
//         thumbnailsContainer.appendChild(thumbnailDiv);

//         thumbnailImg.addEventListener('click', () => {
//             openImageViewer(thumbnailImg.src);
//         });
//     }
// }

// //esttura para o visalizador


// function openImageViewer(imageSrc) {
//     const viewerImage = document.getElementById('viewer-image');
//     viewerImage.src = imageSrc;
//     imageViewer.style.display = 'flex';
// }


// document.addEventListener('DOMContentLoaded', function() {
//     generateThumbnails();
//     // Resto do código...
// });

// function openPhotoDetails(imagePath, title, relatedPhotos = [], year, responsavel, county, author, description) {
//     const newWindow = window.open('', '_blank', 'width=1900,height=900');
    
//     if (newWindow.closed ||!newWindow) return;
  
//     const relatedPhotosHTML = relatedPhotos.map(relatedPhoto => `<img src="${relatedPhoto.imagePath}" alt="${relatedPhoto.alt}" class="gallery-image">`).join('');
//     const paragraphs = description.split(/[!.?]+/).filter(p => p.trim()!== '');
//     const descriptionHTML = paragraphs.map(paragraph => `<p>${paragraph.trim()}.</p>`).join('');
  
//     let htmlContent = `
//       <html>
//       <head>
//         <title>${title}</title>
//         <style>
//           body {
//             margin: 0;
//             padding: 20px;
//             text-align: center;
//             font-family: 'Inter', sans-serif;
//             text-align: justify;
//             margin: 10px;
//           }
//          .flex-container {
//             display: flex;
//           }
//          .text-container {
//             flex: 1;
//             padding: 20px;
//           }
//          .gallery-container {
//             flex: 1;
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: flex-end;
//             align-items: flex-start;
//             margin: 10px;
//           }
//          .gallery {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             margin: 10px;
           
//           }
//          .gallery-image {
//             max-width: 100%;
//             height: auto;
//             cursor: zoom-in;
//             transition: transform 0.3s ease;
//             margin-top: 4rem;
//             margin-bottom: 4rem;
//              zoom: 1;
//              scale: 9;
//             transform-origin: 50% 50%;
//             transition: transform 0.3s ease;
//             cursor: zoom-out;
//              transform-scale: 3;
//           }
//          .gallery-image.zoomed {
//             transform: scale(2);
//             cursor: zoom-out;
//           }
//           p {
//             line-height: 1.5;
//           }
//          .author { font-style: italic; font-size: 0.9em; color: #666; }
//          .title { font-weight: bold; font-size: 2em; color: #333; }
//          .year { font-size: 0.8em; color: #666; }
//          .responsavel { font-style: italic; font-size: 0.9em; color: #666; }
//          .county { font-size: 0.8em; color: #666; }
//          .description { font-size: 1em; color: #333; padding: 1em; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
//         </style>
        
//         <script>
//           document.addEventListener('DOMContentLoaded', function() {
//             const images = document.querySelectorAll('.gallery-image');
//             images.forEach(img => {
//               img.addEventListener('click', function() {
//                 this.classList.toggle('zoomed');
//                 document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('.gallery-image');
  
//     images.forEach(img => {
//       let isZooming = false;
  
//       img.addEventListener('mousedown', function(e) {
//         e.preventDefault(); // Evita o comportamento padrão do mouse
//         isZooming = true;
//         this.classList.add('zoomed');
//       });
  
//       img.addEventListener('mouseup', function() {
//         isZooming = false;
//         this.classList.remove('zoomed');
//       });
  
//       img.addEventListener('mouseleave', function() {
//         isZooming = false;
//         this.classList.remove('zoomed');
  
//               });
//             });
//           });
//         </scrip>
//       </head>
//       <body>
//         <div class="flex-container">
//           <div class="text-container">
//             <h2 class="title">${title}</h2>
//             <p>Ano: <span class="year">${year}</span></p>
//             <p>Responsável do Projeto: <span class="responsavel">${responsavel}</span></p>
//             <p>Concelho: <span class="county">${county}</span></p>
//             <p>Autor: <span class="author">${author}</span></p>
//             <p class="description">${descriptionHTML}</p>
//           </div>
//           <div class="gallery-container">
//             <div class="gallery">
//               <img src="${imagePath}" alt="${title}" class="gallery-image">
//               ${relatedPhotosHTML}
//             </div>
//           </div>
//         </div>
//       </body>
//     `;
  
//     if (!newWindow.document.body.innerHTML.includes(htmlContent)) {
//       newWindow.document.write(htmlContent);
//     } else {
//       console.log("Conteúdo já existente no novo separador.");
//     }
//   }
  




// // Adiciona um evento de clique a cada imagem da galeria
// document.querySelectorAll('.gallery img').forEach(img => {
//   img.addEventListener('click', () => {
//     openImageViewer(img.src);
//   });
// });

// // Função para abrir o visualizador de imagens
// function openImageViewer(imageSrc) {
//   // Cria o contêiner do visualizador
//   const viewer = document.createElement('div');
//   viewer.style.position = 'fixed';
//   viewer.style.top = '0';
//   viewer.style.left = '0';
//   viewer.style.width = '100%';
//   viewer.style.height = '100%';
//   viewer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//   viewer.style.display = 'flex';
//   viewer.style.justifyContent = 'center';
//   viewer.style.alignItems = 'center';
//   viewer.style.zIndex = '9999';

//   // Cria a imagem dentro do contêiner
//   const img = document.createElement('img');
//   img.src = imageSrc;
//   img.style.maxWidth = '90%';
//   img.style.maxHeight = '90%';

//   // Adiciona a imagem ao contêiner
//   viewer.appendChild(img);

//   // Adiciona o contêiner ao corpo do documento
//   document.body.appendChild(viewer);

//   // Inicializa o plugin mediumZoom
//   const zoom = mediumZoom(img);

//   // Adiciona um evento de clique para fechar o visualizador
//   viewer.addEventListener('click', () => {
//     document.body.removeChild(viewer);
//     zoom.detach();
//   });
// }

// // Seleciona todos os elementos com a classe 'gallery-item'
// const galleryItems = document.querySelectorAll('.gallery-item');

// // Itera sobre cada elemento
// galleryItems.forEach(item => {
//   // Adiciona o evento de clique
//   item.addEventListener('click', () => {
//     // Obtém o atributo 'onclick' do elemento
//     const onclickValue = item.getAttribute('onclick');

//     // Verifica se o atributo 'onclick' existe
//     if (onclickValue) {
//       // Executa a função especificada no atributo 'onclick'
//       eval(onclickValue);
//     }
//   });
// });


// /*--------------------------------------------*/





// function openPhotoGallery(event) {
//   const galleryItem = event.currentTarget;
//   const imagePath = galleryItem.querySelector('img').src;

//   // Abre um novo separador com a imagem
//   const newTab = window.open(imagePath, '_blank', 'width=800,height=600');
// }

// function openPhotoDetails(imagePath, title, relatedPhotos = [], year, responsavel, county, author, description) {
//   const newWindow = window.open('', '_blank', 'width=1900,height=900');
  
//   if (newWindow.closed ||!newWindow) return;

//   const relatedPhotosHTML = relatedPhotos.map(relatedPhoto => `<img src="${relatedPhoto.imagePath}" alt="${relatedPhoto.alt}" class="gallery-image">`).join('');
//   const paragraphs = description.split(/[!.?]+/).filter(p => p.trim()!== '');
//   const descriptionHTML = paragraphs.map(paragraph => `<p>${paragraph.trim()}.</p>`).join('');

//   let htmlContent = `
//     <html>
//     <head>
//       <title>${title}</title>
//       <style>
//         body {
//           margin: 0;
//           padding: 20px;
//           text-align: center;
//           font-family: 'Inter', sans-serif;
//           text-align: justify;
//           margin: 10px;
//         }
//        .flex-container {
//           display: flex;
//         }
//        .text-container {
//           flex: 1;
//           padding: 20px;
//         }
//        .gallery-container {
//           flex: 1;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: flex-end;
//           align-items: flex-start;
//           margin: 10px;
//         }
//        .gallery {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin: 10px;
//         }
//        .gallery-image {
//           max-width: 100%;
//           height: auto;
//           cursor: zoom-in;
//           transition: transform 0.3s ease;
//           margin-top: 4rem;
//           margin-bottom: 4rem;
//         }
//        .gallery-image.zoomed {
//           transform: scale(2);
//         }
//         p {
//           line-height: 1.5;
//         }
//        .author { font-style: italic; font-size: 0.9em; color: #666; }
//        .title { font-weight: bold; font-size: 2em; color: #333; }
//        .year { font-size: 0.8em; color: #666; }
//        .responsavel { font-style: italic; font-size: 0.9em; color: #666; }
//        .county { font-size: 0.8em; color: #666; }
//        .description { font-size: 1em; color: #333; padding: 1em; border: 1px solid #ddd; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
//       </style>
//       <script>
//         document.addEventListener('DOMContentLoaded', function() {
//           const images = document.querySelectorAll('.gallery-image');
//           images.forEach(img => {
//             img.addEventListener('click', function() {
//               this.classList.toggle('zoomed');
//               document.addEventListener('DOMContentLoaded', function() {
//   const images = document.querySelectorAll('.gallery-image');

//   images.forEach(img => {
//     let isZooming = false;

//     img.addEventListener('mousedown', function(e) {
//       e.preventDefault(); // Evita o comportamento padrão do mouse
//       isZooming = true;
//       this.classList.add('zoomed');
//     });

//     img.addEventListener('mouseup', function() {
//       isZooming = false;
//       this.classList.remove('zoomed');
//     });

//     img.addEventListener('mouseleave', function() {
//       isZooming = false;
//       this.classList.remove('zoomed');

//             });
//           });
//         });
//       </script>
//     </head>
//     <body>
//       <div class="flex-container">
//         <div class="text-container">
//           <h2 class="title">${title}</h2>
//           <p>Ano: <span class="year">${year}</span></p>
//           <p>Responsável do Projeto: <span class="responsavel">${responsavel}</span></p>
//           <p>Concelho: <span class="county">${county}</span></p>
//           <p>Autor: <span class="author">${author}</span></p>
//           <p class="description">${descriptionHTML}</p>
//         </div>
//         <div class="gallery-container">
//           <div class="gallery">
//             <img src="${imagePath}" alt="${title}" class="gallery-image">
//             ${relatedPhotosHTML}
//           </div>
//         </div>
//       </div>
//     </body>
//   `;

//   if (!newWindow.document.body.innerHTML.includes(htmlContent)) {
//     newWindow.document.write(htmlContent);
//   } else {
//     console.log("Conteúdo já existente no novo separador.");
//   }
// }





// // Restante do código...






//   // Adiciona a função openPhotoViewer
//   newWindow.openPhotoViewer = openPhotoViewer;


// function openPhotoViewer(imagePath) {
//   const viewer = document.createElement('div');
//   viewer.style.position = 'fixed';
//   // ... (restante do código para criar o visualizador)

//   const img = document.createElement('img');
//   img.src = imagePath;
//   img.style.maxWidth = '90%';
//   img.style.maxHeight = '90%';

//   viewer.appendChild(img);
//   document.body.appendChild(viewer);

//   const zoom = mediumZoom(img);

//   viewer.addEventListener('click', () => {
//     document.body.removeChild(viewer);
//     zoom.detach();
//   });
// }











// document.querySelectorAll('.gallery__item img').forEach((imgElement) => {
//   imgElement.addEventListener('click', () => {
//     const imageUrl = imgElement.src;
//     openImageInNewTab(imagePath);
//   });
// });





// document.addEventListener('DOMContentLoaded', function() {
//   // Seu código aqui
// });
