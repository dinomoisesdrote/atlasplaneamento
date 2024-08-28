
      const imageViewer = document.getElementById('image-viewer');
const viewerImage = document.getElementById('viewer-image');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
let currentZoom = 1;
const maxZoom = 8;
const zoomStep = 0.2;

viewerImage.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -zoomStep : zoomStep;
    zoom(delta);
});

viewerImage.addEventListener('mousedown', (event) => {
    event.preventDefault(); // Adiciona esta linha para evitar o comportamento padrão do clique
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

function zoom(delta) {
    currentZoom += delta;
    currentZoom = Math.max(1, Math.min(currentZoom, maxZoom));
    viewerImage.style.transform = `scale(${currentZoom})`;
}


  document.addEventListener('DOMContentLoaded', function() {
    mediumZoom('.gallery-image');
  });
