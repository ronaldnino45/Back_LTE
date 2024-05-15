const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require ("express-validator");
const jwt = require ("jsonwebtoken");

exports.crearUsuario = async(req,res) => {
    // se revisan si hay errores

    const errores = validationResult(req);
    if(!errores.isEmpty()){

        return res.status(400).json({errores :errores.array()});
    }

    const { email, password}= req.body;

    try {
            //se revisa si el usuario esta registrado es unico
        let usuario = await Usuario.findOne({ email });
        if(usuario){
            return res.status(400).json({msg:"usuario ya existe"})
        }

        // Crear el nuevo usuario

        usuario = new Usuario(req.body);
        usuario.password = await bcryptjs.hash(password , 8);

        // guardamos el usuario

        await usuario.save();

// si todo OK se firma el token

            const payload = {
                usuario: {id: usuario.id},
            };

            jwt.sign(
            payload,
            process.env.SECRETA,

            {
              expiresIn: 3600,  // una hora 
            },

            (error, token)=>{
                if(error) throw error;
                // mensaje de confirmacion
                res.json({token});
            }
        );
        
        } catch (error) {
            console.log("hubo un error")
            console.log(error);
            res.status(400).send("hubo un error");

        
    }
};

