exports.downloadPage = (req, res) => {
    // Lógica para renderizar a página de download
    res.sendFile(path.join(__dirname, '../views/download/download.html'));
  };