let amigos = [];
    function adicionarAmigos() {
    let nome = getElementById("adicionarAmigos").value.trim();
    if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
    }
    amigos.push(nome);
    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
    document.getElementById("adicionarAmigos").value = "";
    }


