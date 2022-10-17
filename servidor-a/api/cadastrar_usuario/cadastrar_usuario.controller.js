const express = require("express");
const router = express.Router();

const cadastrar_usuario_handler = require("./cadastrar_usuario.handler");

router.get("/", (req, res) => {
    res.json(cadastrar_usuario_handler.retonarListaUsuarios());
});

router.post("/", (req, res) => {
    res.json(cadastrar_usuario_handler.cadastrar(req.body));
});


module.exports = router;