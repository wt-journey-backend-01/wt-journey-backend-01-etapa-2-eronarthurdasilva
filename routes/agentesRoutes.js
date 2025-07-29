/**
 * Routes para agentes
 * Define as rotas para acessar os agentes através do controlador
 * Importa o controlador de agentes e define a rota para obter todos os agentes
 */

const express = require('express');
const router = express.Router();

const agentesController = require('../controllers/agentesController');
console.log('Função getAllAgentes:', agentesController.getAllAgentes);
router.get('/', agentesController.getAllAgentes);

module.exports = router;
//rota para buscar agente
router.get('/:id', agentesController.getAgenteById);
//rota para criar um novo agente 
router.post('/', agentesController.createAgente);
//rota para atualizar os dados dos agentes
router.put('/:id', agentesController.updateAgente);
//rota para atualização parcial dos dados dos agentes
router.patch('/:id', agentesController.patchAgente);
//rota para deletar os agentes
router.delete('/:id', agentesController.deleteAgente);
//rotas bonus 
router.get('/', (req, res) => {
    if (req.query.cargo) return agentesController.getAgentesByCargo(req, res);
    if (req.query.sort) return agentesController.getAgentesSorted(req, res);
    return agentesController.getAllAgentes(req, res);
});