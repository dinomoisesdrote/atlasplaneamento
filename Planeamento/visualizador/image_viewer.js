document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const imageUrl = image.src;
            openImageViewer(imageUrl);
        });
    });

    function openImageViewer(imageUrl) {
        const newWindow = window.open('', '_blank');
        const windowContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Image Viewer</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                </style>
            </head>
            <body>
                <img id="viewer-image" src="${imageUrl}" alt="Image">
                <script>
                    const viewerImage = document.getElementById('viewer-image');
                    let currentZoom = 1;
                    const maxZoom = 3;
                    const zoomStep = 0.2;

                    viewerImage.addEventListener('wheel', (event) => {
                        event.preventDefault();
                        const delta = event.deltaY > 0 ? -zoomStep : zoomStep;
                        zoom(delta);
                    });

                    function zoom(delta) {
                        currentZoom += delta;
                        currentZoom = Math.max(1, Math.min(currentZoom, maxZoom));
                        viewerImage.style.transform = \`scale(\${currentZoom})\`;
                    }
                </script>
            </body>
            </html>
        `;
        newWindow.document.write(windowContent);
    }
});



