/**
 * Routes para agentes
 * Define as rotas para acessar os agentes através do controlador
 * Importa o controlador de agentes e define a rota para obter todos os agentes
 */

const express = require('express');
const router = express.Router();

const agentesController = require('../controllers/agentesController');
console.log('Função getAllAgentes:', agentesController.getAllAgentes);
router.get('/agentes', agentesController.getAllAgentes);

module.exports = router;
//rota para buscar agente
router.get('/agentes/:id', agentesController.getAgenteById);
//rota para criar um novo agente 
router.post('/agentes', agentesController.createAgente);
//rota para atualizar os dados dos agentes
router.put('/agentes/:id', agentesController.updateAgente);
//rota para atualização parcial dos dados dos agentes
router.patch('/agentes/:id', agentesController.patchAgente);
//rota para deletar os agentes
router.delete('/agentes/:id', agentesController.deleteAgente);
//rotas bonus 
router.get('/agentes', (req, res) => {
    if (req.query.cargo) return agentesController.getAgentesByCargo(req, res);
    if (req.query.sort) return agentesController.getAgentesSorted(req, res);
    return agentesController.getAllAgentes(req, res);
});