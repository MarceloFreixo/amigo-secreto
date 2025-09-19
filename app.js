let amigos = [];
    function adicionarAmigos() {
    let nome = getElementById("adicionarAmigos").value.trim();
    if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
    }
    amigos.push(nome);
    renderizarLista();
    document.getElementById("nomeAmigo").value = "";
    }
    function renderizarLista() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";
      for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
      }
    }
    function sortearAmigo() {
        if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
      }

      let indiceAleatorio = Math.floor(Math.random() * amigos.length);
      let amigoSorteado = amigos[indiceAleatorio];
      document.getElementById("resultado").innerHTML = `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
    }