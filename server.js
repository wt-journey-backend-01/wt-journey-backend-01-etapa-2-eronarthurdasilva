const express = require('express');
const path = require('path'); // Adicione esta linha
const app = express();
const PORT = process.env.PORT || 3000;

// Importação de routers (verifique os caminhos)
const casosRouter = require('./routes/casosRoutes');
const agentesRouter = require('./routes/agentesRoutes');

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Correção aqui

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/agentes', agentesRouter);
app.use('/casos', casosRouter);

// Middleware para rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});