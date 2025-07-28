const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

//rotas do método get para casos
router.get('/casos', casosController.getAllCasos);

//rota para criar casos
router.post('/casos', casosController.createCaso);

//rota para achar casos por id
router.get('/casos/:id', casosController.getCasoById);

//rota para update dos casos
router.put('/casos/:id', casosController.updateCaso);

//rota do patch
router.patch('/casos/:id', casosController.patchCaso);

//rota para deletar
router.delete('/casos/:id', casosController.deleteCaso);

// router bonus 
router.get('/casos', (req, res) => {
    if (req.query.agente_id) return casosController.getCasosByAgente(req, res);
    if (req.query.status) return casosController.getCasosByStatus(req, res);
    if (req.query.q) return casosController.searchCasos(req, res);
    return casosController.getAllCasos(req, res);
});

module.exports = router;