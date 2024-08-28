// Exemplo de downloadRoutes.js
const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');

router.get('/', downloadController.downloadPage);

module.exports = router;





const express = require('express');
const path = require('path');
const app = express();

// Importando rotas
const downloadRoutes = require('./routes/downloadRoutes');

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurando rotas
app.use('/download', downloadRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
