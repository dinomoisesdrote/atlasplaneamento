
function abrirModal(videoNome, videoId, videoSrc, autor, assunto, descricao, concelho) {
  // Cria um elemento div para a modal
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Cria o conteúdo da modal
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="info-card">
        <h2>${videoNome}</h2>
        <p>Autor: ${autor}</p>
        <p>Assunto: ${assunto}</p>
        <p>Descrição: ${descricao}</p>
        <p>Concelho: ${concelho}</p>
      </div>
      <div class="video-player">
        <iframe src="${videoSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  `;

  // Adiciona a modal ao documento
  document.body.appendChild(modal);

  // Obtém o botão de fechar e adiciona um evento de clique para fechar a modal
  const closeButton = modal.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    modal.remove();
  });

  // Adiciona um evento de clique fora da modal para fechá-la
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });
}






