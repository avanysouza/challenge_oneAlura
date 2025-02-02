document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    function adicionarAmigo() {
        const input = document.getElementById("amigo");
        const lista = document.getElementById("listaAmigos");
        const nome = input.value.trim();
        
        if (nome === "") {
            alert("Por favor, digite um nome antes de adicionar.");
            return;
        }
        
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }

    function atualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos.forEach((nome) => {
            const li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
    }

    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
