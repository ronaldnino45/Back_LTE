const jwt = require("jsonwebtoken");

module.exports = function(req, res ,next ){

    // se va a leer el token del header
const token = req.header ("x-auth-token");

// revisamos si tenemos un token

if(!token){
    return res.status(400).json({msg:"Permiso no valido no tiene un  token"});
}

// Validar tolen 

try {

    const cifrado = jwt.verify(token.process.env.SECRETA)
    req.usuario = cifrado.usuario;
    next();
    
} catch (error) {
    res.status(400).json({msg:"token no valido"})
}

}