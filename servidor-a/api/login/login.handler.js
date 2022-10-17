function login(data, listaUsuarios) {
    console.log("data: ", data);
    for (let usuario of listaUsuarios) {
        if (usuario.Name == data.Name && usuario.Password == data.Password) {
            return true;
        }
    }
    return false;
}

module.exports = {
    login
}