function login(data, listaUsuarios) {
    console.log("data: ", data);
    for (let usuario of listaUsuarios) {
        if (usuario.login == data.login &&  usuario.senha == data.senha) {
            return true;
        }
    }
    return false;
}

module.exports = {
    login
}