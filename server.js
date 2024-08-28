

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});






// const express = require('http');
// const path = require('path');
// const app = express();

// // Servindo arquivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));

// // Outras rotas podem ser definidas aqui

// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });

// const express = require('express');
// const path = require('http');
// const app = require('./app');




// // Servindo arquivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));





// // Importando controladores e modelos
// const downloadController = require('./controllers/downloadController');
// const galeriaController = require('./controllers/galeriaController');
// // Importe os outros controladores conforme necessário

// // Configurando rotas
// app.use('/download', downloadController);
// app.use('/galeria', galeriaController);
// // Configure outras rotas conforme necessário

// // Iniciando o servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
