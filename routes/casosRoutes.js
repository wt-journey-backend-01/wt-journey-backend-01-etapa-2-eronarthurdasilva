const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

//rotas do método get para casos
router.get('/', casosController.getAllCasos);

//rota para criar casos
router.post('/', casosController.createCaso);

//rota para achar casos por id
router.get('/:id', casosController.getCasoById);

//rota para update dos casos
router.put('/:id', casosController.updateCaso);

//rota do patch
router.patch('/:id', casosController.patchCaso);

//rota para deletar
router.delete('/:id', casosController.deleteCaso);

// router bonus 
router.get('/', (req, res) => {
    if (req.query.agente_id) return casosController.getCasosByAgente(req, res);
    if (req.query.status) return casosController.getCasosByStatus(req, res);
    if (req.query.q) return casosController.searchCasos(req, res);
    return casosController.getAllCasos(req, res);
});

module.exports = router;