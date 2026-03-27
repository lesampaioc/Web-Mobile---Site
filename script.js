document.getElementById("cidade").onchange = function() {
    let cidade = this.value;
    document.getElementById("resultado").innerText = "Você escolheu: " + cidade;
}

document.getElementById("btnCalcular").onclick = function() {

    let moradia = Number(document.getElementById("moradia").value) || 0;
    let alimentacao = Number(document.getElementById("alimentacao").value) || 0;
    let transporte = Number(document.getElementById("transporte").value) || 0;

    let soma = moradia + alimentacao + transporte;

    if (soma === 0) {
        document.getElementById("total").innerText = "Preencha pelo menos um valor!";
        return;
    }

    let mensagem = "";

    if (soma <= 2000) {
        mensagem = "Custo de vida baixo";
    } else if (soma <= 4000) {
        mensagem = "Custo de vida médio";
    } else {
        mensagem = "Custo de vida alto";
    }

    document.getElementById("total").innerText =
        "Total: R$ " + soma + " - " + mensagem;
};
