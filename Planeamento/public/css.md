/* 


/* Estilos gerais*/

body {
  background-color: white;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
}


/*** Estilos do main ***/
#principal {
  transition: margin-left .5s;
  padding: 16px;
  border:#818181 1px solid;
}



/*** Estilos do menu hamburguer ***/


.menu-dropdown {
  list-style: none;
  display: flex;
}

.menu-dropdown li {
  margin-right: 10px;
}

.menu-dropdown a {
  text-decoration: none;
  color: black;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 5px;
  border: 1px solid black;
}

.search-bar button {
  padding: 5px 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}


/* Estilos gerais */
nav {
  display: grid;
  justify-content: flex-end; /* Alinha o menu hamburger à direita */
  padding: 20px;
  background-color: #f8f8f8;
}



.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}


// function openImageInNewTab(imageUrl) {
//   const newTab = window.open('', '_blank', 'width=800,height=600');

//   newTab.document.write(`
//     <html>
//     <head>
//       <title>Imagem</title>
//       <style>
//         body {
//           margin: 0;
//           padding: 5%;
//           text-align: center;
//         }
//         img {
//           max-width: 100%;
//           height: auto;
//           cursor: zoom-in;
//           transition: transform 0.3s;
//           cursor pointer;
//           zoom: 4;
//           transition: transform (1);
//           transition: scale(3);
//         }
//         img.zoomed {
//           cursor: zoom-out;
//           transform: scale(8.5);
//           transition: transform 4s;
//         }

          

// .img{
//   width: 300px;
//   height:auto;
//   overflow: hidden;
//   cursor: zoom-in;
// }

// .img.zoomed {
//   width: 100%;
//   transition: all .3s ease-in-out;
// }

// .img.zoomed 
// img:hover   {
//   transform: scale(1.2);
// }


//       </style>
//       <script>
//         document.addEventListener('DOMContentLoaded', function() {
//           var img = document.querySelector('img');
//           img.addEventListener('click', function() {
//             if (this.classList.contains('zoomed')) {
//               this.classList.remove('zoomed');
//             } else {
//               this.classList.add('zoomed');
//             }
//           });
//         });
//       </script>
//     </head>
//     <body>
//       <img src="${imagePath}" alt="Imagem">
//     </body>
//     </html>
//   `);
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






<div class="slider-container">
    <div class="slide">
        <img src="https://i.imgur.com/wf4PucI.jpeghttps://i.imgur.com/wf4PucI.jpeghttps://i.imgur.com/wf4PucI.jpeg" alt="">
    </div>
    <div class="slide">
        <img src="" alt="imagem_1">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 4">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 5">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 6">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 7">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 8">
    </div>
    <div class="slide">
        <img src="" alt="Imagem 9">
    </div>
</div>



   <!--
    <div class="slider-container">
       
        <div class="slide">
             alt"<img src="https://i.imgur.com/wf4PucI.jpeg" alt="">
        </div>

        <div class="slide">
            <img src="file:/C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_2.jpeg" alt="imagem_2">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_3.jpeg" alt="imagem_3">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_4.jpeg" alt="imagem_4">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_5.jpeg" alt="imagem_5">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_6.jpeg" alt="imagem_6">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_7.jpeg" alt="imagem_7">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_8.jpeg" alt="imagem_8">
        </div>

        <div class="slide">
            <img src="C:\Users\dino.ms.nunes\Documents\Atlas_do_Planeamento\recursos\imagens\imagem_9.jpeg" alt="imagem_9">
               </div>
               </div>
-->

 <div class="slider-container">
        <div class="slide">
            <img src="https://i.imgur.com/wf4PucI.jpeghttps://i.imgur.com/wf4PucI.jpeghttps://i.imgur.com/wf4PucI.jpeg" alt="imagem">
        </div>
        <div class="slide">
            <img src="https://i.imgur.com/YD1FMl7_d.webp?maxwidth=520&shape=thumb&fidelity=high" alt="imagem">
        </div>
        <div class="slide">
            <img src="https://i.imgur.com/CJ1GOft_d.webp?maxwidth=520&shape=thumb&fidelity=high" alt="Imagem 4">
        </div>
        <div class="slide">
            <img src="https://i.imgur.com/WTD9NZO.jpeg" alt="Imagem 5">
        </div>
        <div class="slide">
            <img src="imagens/imagem_6.jpeg" alt="Imagem 6">
        </div>
        <div class="slide">
            <img src="imagens/imagem_7.jpeg" alt="Imagem 7">
        </div>
        <div class="slide">
            <img src="imagens/imagem_8.jpeg" alt="Imagem 8">
        </div>
        <div class="slide">
            <img src="imagens/imagem_9.jpeg" alt="Imagem 9">
        </div>
    </div>















/*estilos gris/grelha de fotos */

.gallery-container grid  {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: space-between;
  }


  .grid-item {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    max-height: 900px;
    text-align: center;
  }

 .grid-item img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    max-width: 600px;/* set maximum width*/
  }

     */

  

   /* .foto {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
  }
   .coluna {
    margin: 5px;
  }
  .coluna1 { flex: 30%; }
  .coluna2 { flex: 50%; }
  .coluna3 { flex: 20%; }

  .masonry-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
}

.masonry-item {
    display: inline-block;
    width: 100%;
}

.grid {
  column-count: 3;
  column-gap: 1em;
}

.grid-item {
  background: #ddd;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
} */





.hero{
width: 100vw;
height: 100vh;
margin: 1 rem;
cursor: pointer;

}

.card{
  width: 100vw;
  height: 100vh;
  margin: 1 rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-left: 1rem;

}

.card-text{

  width: 2fr;
  height: auto;
  margin-right: 2em;
  cursor: pointer;
  gap: 10px;
  place-self: top;
  justify-content: start;

}


h2 {
  text-align: flex-end;
  margin: 20px 0 0 0;
  font-size: 2em;
  font-weight: normal;
  font-family: 'Inter' sans-serif;
  margin-bottom: 3rem;
}

 p {
  text-align: justify;
  text-justify: inter-word;
  align-self: flex-start;

}

.card-image{
   position:  relative;
   width: 100%;
  height: auto;
  position: flex-start;
}

/*Estilos da Secção features*/

.feature-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.feature-content {
  width: 60%;
  margin: 10px;
}

.feature-image {
  width: 30%;
  margin: 10px;
}

.feature-image img {
  max-width: 100%;
  height: auto;
}

/*Estilos da Secção descricao*/


.descricao {
  padding: 20px;
  margin-top: 5rem;
  border: black 4px solid;
}

.descricao-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 2rem;
}

.descricao-image {
  flex: 1;
  padding-right: 20px;
  margin-top: 1em;
}

.descricao-image img {
  max-width: 100%;
  height: auto;
}

.descricao-text-1 {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}

.descricao-image{
  position:  relative;
  width: 100%;
  height: auto;
  position: flex-start;
  flex: 1;
}

/* Estilos da Secção testemunhos */

h3{
  
  margin: 20px 0 0 0;
  font-size: 2em;
  font-weight: normal;
  font-family: 'Inter' sans-serif;
  margin-bottom: 3rem;
  text-align: center;
}


.testemunhos-cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.testemunho-card {
  width: 600px;
  text-align: justify;
  margin: 2em;
}

.testemunho-imagem {
  width: 280px;
  height: auto;
  display: block;
  margin: 2em;

}


/*Estilos da Secção descriçao-2*/

/*Estilos da Secção descriçao-2*/
.descricao2-container {
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse; /* Inverte a ordem dos elementos */
}

.descricao2-cards {
  flex: 1;
  margin-left: 20px; /* Margem à esquerda para separar do texto */
}

.descricao2-card {
  width: 100%;
  margin: 0;
  display: block;
}

.descricao2-card h1 {
  text-align: center;
  margin: 2rem;
}

.descricao2-card p {
  margin-bottom: 20px;
}

.descricao-imagem {
  max-width: 100%;
  height: auto;
  flex: 0 0 auto;
}

  




//       <script>
//         document.addEventListener('DOMContentLoaded', function() {
//           const images = document.querySelectorAll('.gallery-image');

//           images.forEach(img => {
//             img.addEventListener('click', function() {
//               this.classList.toggle('zoomed');
//             });
//           });

//           // Initialize mediumZoom
//           mediumZoom('.gallery-image');

//           // Add zoom buttons
//           const zoomInButton = document.getElementById('zoom-in');
//           const zoomOutButton = document.getElementById('zoom-out');

//           zoomInButton.addEventListener('click', () => {
//             mediumZoom.zoomIn();
//           });

//           zoomOutButton.addEventListener('click', () => {
//             mediumZoom.zoomOut();
//           });
//         });
//       </script>
//     </head>
//     <body>
//       <div class="flex-container">
//         <div class="text-container">
//           <h2>${title}</h2>
//           <p>Ano: ${year}</p>
//           <p>Autor do Plano: ${author}</p>
//           <p>Texto Por: ${text}</p>
//           ${descriptionHTML}
//         </div>
//         <div class="gallery-container">
//           <div class="gallery">
//             <img src="${imagePath}" alt="${title}" class="gallery-image">
//             ${relatedPhotosHTML}
//           </div>
//           <button id="zoom-in">Zoom In</button>
//           <button id="zoom-out">Zoom Out</button>
//         </div>
//       </div>
//     </body>
//     </html>
//   `);
// }





// import mediumZoom from 'medium-zoom';

// // Initialize mediumZoom
// const zoom = mediumZoom('.gallery-image');

// function openPhotoGallery(event) {
//   const galleryItem = event.currentTarget;
//   const imagePath = galleryItem.querySelector('img').src;

//   // Open the image in a new tab
//   const newTab = window.open(imagePath, '_blank', 'width=800,height=600');
// }

// function openPhotoDetails(imagePath, title, relatedPhotos = [], year, author, text, description) {
//   const newWindow = window.open('', '_blank', 'width=1900,height=900');
//   const relatedPhotosHTML = relatedPhotos.map(relatedPhoto => `<img src="${relatedPhoto.imagePath}" alt="${relatedPhoto.alt}" class="gallery-image">`).join('');


//   // Split the description into paragraphs based on sentence endings
//   const paragraphs = description.split(/[!.?]+/).filter(p => p.trim() !== '');

//   const descriptionHTML = paragraphs.map(paragraph => `<p>${paragraph.trim()}.</p>`).join('');

//   newWindow.document.write(`
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
//         .flex-container {
//           display: flex;
//         }
//         .text-container {
//           flex: 1;
//           padding: 20px;
//         }
//         .gallery-container {
//           flex: 1;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: flex-end;
//           align-items: flex-start;
//           margin: 10px;
//         }
//         .gallery {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin: 10px;
//           cursor: pointer;
//           cursor: zoom-in;
//           transition: transform 0.3s ease;
//           overflow-clip-margin: content-box;
//            overflow: clip;
          
//         }
//         .gallery-image {
//           max-width: 100%;
//           height: auto;
//           cursor: pointer;
//           transition: -webkit-tranform 0.1s ease;
//           margin-top: 4rem;
//           margin-bottom: 4rem;
//         }
//         .gallery-image:hover {
//           transform: scale(1.1);
//         }
//         .gallery-image:focus {
//           transform: scale(1.1);
//         }
//         .gallery-image.zoomed {
//           cursor: zoom-out;
//           transform: scale(2);
//         }
//         p {
//           line-height: 1.5; /* Line spacing of 1.5 */
//         }
//         /*Aolicar css aos placeholders */
//         .author {
//   font-style: italic;
//   font-size: 0.9em;
//   color: #666;
// }

// .title {
//   font-weight: bold;
//   font-size: 1.2em;
//   color: #333;
// }

// .year {
//   font-size: 0.8em;
//   color: #666;
// }

// .responsavel {
//   font-style: italic;
//   font-size: 0.9em;
//   color: #666;
// }

// .county {
//   font-size: 0.8em;
//   color: #666;
// }

// .description {
//   font-size: 1em;
//   color: #333;
//   padding: 1em;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }
//     </style>

  




//       <script>
//         document.addEventListener('DOMContentLoaded', function() {
//           const images = document.querySelectorAll('.gallery-image');

//           images.forEach(img => {
//             img.addEventListener('click', function() {
//               this.classList.toggle('zoomed');
//             });
//           });

//           // Initialize mediumZoom
//           mediumZoom('.gallery-image');

//           // Add zoom buttons
//           const zoomInButton = document.getElementById('zoom-in');
//           const zoomOutButton = document.getElementById('zoom-out');

//           zoomInButton.addEventListener('click', () => {
//             mediumZoom.zoomIn();
//           });

//           zoomOutButton.addEventListener('click', () => {
//             mediumZoom.zoomOut();
//           });
//         });
//       </script>
//     </head>
//     <body>
//       <div class="flex-container">
//         <div class="text-container">
//           <h2>${title}</h2>
//           <p>Ano: ${year}</p>
//           <p>Autor do Plano: ${author}</p>
//           <p>Texto Por: ${text}</p>
//           ${descriptionHTML}
//         </div>
//         <div class="gallery-container">
//           <div class="gallery">
//             <img src="${imagePath}" alt="${title}" class="gallery-image">
//             ${relatedPhotosHTML}
//           </div>
//           <button id="zoom-in">Zoom In</button>
//           <button id="zoom-out">Zoom Out</button>
//         </div>
//       </div>
//     </body>
//     </html>
//   `);
// }



// import mediumZoom from 'medium-zoom';

// // Initialize mediumZoom
// const zoom = mediumZoom('.gallery-image');

// function openPhotoGallery(event) {
//   const galleryItem = event.currentTarget;
//   const imagePath = galleryItem.querySelector('img').src;

//   // Open the image in a new tab
//   const newTab = window.open(imagePath, '_blank', 'width=800,height=600');
// }

// function openPhotoDetails(imagePath, title, relatedPhotos = [], year, author, text, description) {
//   const newWindow = window.open('', '_blank', 'width=1900,height=900');
//   const relatedPhotosHTML = relatedPhotos.map(relatedPhoto => `<img src="${relatedPhoto.imagePath}" alt="${relatedPhoto.alt}" class="gallery-image">`).join('');


//   // Split the description into paragraphs based on sentence endings
//   const paragraphs = description.split(/[!.?]+/).filter(p => p.trim() !== '');

//   const descriptionHTML = paragraphs.map(paragraph => `<p>${paragraph.trim()}.</p>`).join('');

//   newWindow.document.write(`
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
//         .flex-container {
//           display: flex;
//         }
//         .text-container {
//           flex: 1;
//           padding: 20px;
//         }
//         .gallery-container {
//           flex: 1;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: flex-end;
//           align-items: flex-start;
//           margin: 10px;
//         }
//         .gallery {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin: 10px;
//           cursor: pointer;
//           cursor: zoom-in;
//           transition: transform 0.3s ease;
//           overflow-clip-margin: content-box;
//            overflow: clip;
          
//         }
//         .gallery-image {
//           max-width: 100%;
//           height: auto;
//           cursor: pointer;
//           transition: -webkit-tranform 0.1s ease;
//           margin-top: 4rem;
//           margin-bottom: 4rem;
//         }
//         .gallery-image:hover {
//           transform: scale(1.1);
//         }
//         .gallery-image:focus {
//           transform: scale(1.1);
//         }
//         .gallery-image.zoomed {
//           cursor: zoom-out;
//           transform: scale(2);
//         }
//         p {
//           line-height: 1.5; /* Line spacing of 1.5 */
//         }
//         /*Aolicar css aos placeholders */
//         .author {
//   font-style: italic;
//   font-size: 0.9em;
//   color: #666;
// }

// .title {
//   font-weight: bold;
//   font-size: 1.2em;
//   color: #333;
// }

// .year {
//   font-size: 0.8em;
//   color: #666;
// }

// .responsavel {
//   font-style: italic;
//   font-size: 0.9em;
//   color: #666;
// }

// .county {
//   font-size: 0.8em;
//   color: #666;
// }

// .description {
//   font-size: 1em;
//   color: #333;
//   padding: 1em;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }
//     </style>

  




//       <script>
//         document.addEventListener('DOMContentLoaded', function() {
//           const images = document.querySelectorAll('.gallery-image');

//           images.forEach(img => {
//             img.addEventListener('click', function() {
//               this.classList.toggle('zoomed');
//             });
//           });

//           // Initialize mediumZoom
//           mediumZoom('.gallery-image');

//           // Add zoom buttons
//           const zoomInButton = document.getElementById('zoom-in');
//           const zoomOutButton = document.getElementById('zoom-out');

//           zoomInButton.addEventListener('click', () => {
//             mediumZoom.zoomIn();
//           });

//           zoomOutButton.addEventListener('click', () => {
//             mediumZoom.zoomOut();
//           });
//         });
//       </script>
//     </head>
//     <body>
//       <div class="flex-container">
//         <div class="text-container">
//           <h2>${title}</h2>
//           <p>Ano: ${year}</p>
//           <p>Autor do Plano: ${author}</p>
//           <p>Texto Por: ${text}</p>
//           ${descriptionHTML}
//         </div>
//         <div class="gallery-container">
//           <div class="gallery">
//             <img src="${imagePath}" alt="${title}" class="gallery-image">
//             ${relatedPhotosHTML}
//           </div>
//           <button id="zoom-in">Zoom In</button>
//           <button id="zoom-out">Zoom Out</button>
//         </div>
//       </div>
//     </body>
//     </html>
//   `);
// }