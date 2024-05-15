const express = require("express")
const ConectarBD = require("./config/db");
const cors = require ("cors");

//creamos servidor

const app = express();

//configración del puerto

const PORT = process.env.PORT || 5000;

// conectar base de datos

ConectarBD();
// habilitar cors
app.use(cors());
// habilitamos express json
app.use(express.json({ extended : true }));


app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/clientes", require("./routes/RoutesCliente"));

//configuacion del servidor

app.listen(PORT, () =>{
    console.log("El servidor esta conectado puerto 5000")
});