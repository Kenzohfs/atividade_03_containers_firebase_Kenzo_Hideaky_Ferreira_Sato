const listaUsuarios = [];

function cadastrar(data) {
    console.log("data: ", data);
    retonarListaUsuarios().push(data);
    return { message: "Usuario cadastrado com sucesso!" }
}

function retonarListaUsuarios() {
    return listaUsuarios;
};

module.exports = {
    cadastrar,
    retonarListaUsuarios
}