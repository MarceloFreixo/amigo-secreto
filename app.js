let amigos = [];
    function adicionarAmigos() {
    let nome = getElementById("adicionarAmigos").value.trim();
    if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
    }
    amigos.push(nome);
    input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  if (amigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhum amigo disponível para sorteio.";
    resultado.appendChild(li);
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const li = document.createElement("li");
  li.textContent = "Amigo sorteado: " + amigoSorteado;
  resultado.appendChild(li);
}