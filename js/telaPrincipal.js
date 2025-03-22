document.getElementById("form-orcamento").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome-cliente").value;
    const servico = document.getElementById("servico").value;
    const valor = document.getElementById("valor").value;

    const lista = document.getElementById("lista-orcamentos");
    const li = document.createElement("li");
    li.textContent = `${nome} - ${servico} - R$ ${valor}`;
    lista.appendChild(li);

    alert("Orçamento cadastrado com sucesso!");
});
