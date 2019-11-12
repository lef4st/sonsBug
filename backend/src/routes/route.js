const express = require('express');
const routes = express.Router();
const uploads = require('../database/upload');
const SomController = require('../controllers/somController');

routes.get('/listar_sons', SomController.list);
routes.post('/adicionar_som', uploads.single('file'), SomController.store);

module.exports = routes;