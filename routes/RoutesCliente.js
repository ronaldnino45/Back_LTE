const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// EStas son las rutas del CRUD
router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarClientes);
router.put('/:id', ClienteController.modificarCliente);
//router.put('/:id', ClienteController.actualizarCliente);
//router.put('/:id', ClienteController.ActualizarClienteS);

module.exports = router;