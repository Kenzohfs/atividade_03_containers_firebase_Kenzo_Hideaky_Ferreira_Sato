const fetch = require('node-fetch');
const listaProdutos = [];

async function cadastrar_produto(data) {
    let loginValido = false;

    //docker network ls
    // docker network create --driver bridge nome
    //docker run -d -p 8080:3000 --name destino --network nome

    const res = await fetch('http://destino:3000/api/login', {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })

    loginValido = await res.json();

    if (loginValido) {
        retonarListaProdutos().push(data);
        return { message: "Sucesso ao inserir o produto!" };
    } else {
        return { error: "Erro ao inserir um produto!" };
    }
}

function retonarListaProdutos() {
    return listaProdutos;
};

module.exports = {
    cadastrar_produto,
    retonarListaProdutos
}