const express = require("express");
const router = express.Router();

const login_handler = require("./login.handler");
const cadastrar_usuario_handler = require("../cadastrar_usuario/cadastrar_usuario.handler");

router.post("/", (req, res) => {
    res.json(login_handler.login(req.body, cadastrar_usuario_handler.retonarListaUsuarios()));
});

router.get("/", (req, res) => {
    res.json(cadastrar_usuario_handler.retonarListaUsuarios());
});

module.exports = router;