const express = require("express");
const router = express.Router();
const { check } = require ("express-validator");
const usuariosController = require("../controllers/usuariosController")
//const auth = require ("../middleware/auth");

// creamos un usuario -- api/usuarios

router.post(
    "/",[
    check("nombre", "El nombre debe ser obligatorio").not().isEmpty(),
    check("email", "agregue un email valido").isEmail(),
    check("password", "El password debe tener minimo 8 caracteres ").isLength({
        min:8,
    }),
    ],
    usuariosController.crearUsuario


);

module.exports = router;