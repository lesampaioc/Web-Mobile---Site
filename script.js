const estado = document.getElementById("cidade");
const resultadoEstado = document.getElementById("resultado");
const cidade1 = document.getElementById("cidade1");

estado.addEventListener("change", function () {
    const estadoSelecionado = estado.value;
    resultadoEstado.textContent = "Estado selecionado: " + estadoSelecionado;

    for (let i = 0; i < cidade1.options.length; i++) {
        if (cidade1.options[i].text === estadoSelecionado) {
            cidade1.selectedIndex = i;
            break;
        }
    }
});


function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll(".secao");

    secoes.forEach(secao => {
        secao.classList.add("escondido");
    });

    document.getElementById(secaoId).classList.remove("escondido");
}


function calcularGastos() {
    const moradia = Number(document.getElementById("moradia").value);
    const alimentacao = Number(document.getElementById("alimentacao").value);
    const transporte = Number(document.getElementById("transporte").value);
    const resultado = document.getElementById("resultadoGastos");

    const total = moradia + alimentacao + transporte;

    if (total === 0) {
        resultado.textContent = "Digite os valores.";
        return;
    }

    let classificacao = "";

    if (total <= 2000) {
        classificacao = "Custo de vida baixo";
    } else if (total <= 4000) {
        classificacao = "Custo de vida médio";
    } else {
        classificacao = "Custo de vida alto";
    }

    resultado.textContent = "Total: R$ " + total + " | " + classificacao;
}

function compararCidades() {
    const cidade1Select = document.getElementById("cidade1");
    const cidade2Select = document.getElementById("cidade2");
    const resultado = document.getElementById("resultadoComparacao");

    const nomeCidade1 = cidade1Select.options[cidade1Select.selectedIndex].text;
    const nomeCidade2 = cidade2Select.options[cidade2Select.selectedIndex].text;
    const valor1 = Number(cidade1Select.value);
    const valor2 = Number(cidade2Select.value);

    if (cidade1Select.value === "" || cidade2Select.value === "") {
        resultado.textContent = "Selecione duas cidades.";
        return;
    }

    if (valor1 > valor2) {
        resultado.textContent = nomeCidade1 + " é mais cara que " + nomeCidade2;
    } else if (valor2 > valor1) {
        resultado.textContent = nomeCidade2 + " é mais cara que " + nomeCidade1;
    } else {
        resultado.textContent = "As cidades possuem custo parecido.";
    }
}

function mostrarDica(tipo) {
    let mensagem = "";

    if (tipo === "impulso") {
        mensagem = "Compras por impulso podem prejudicar seu orçamento mensal.";
    }
    else if (tipo === "transporte") {
        mensagem = "Transporte público costuma ser mais barato que carro próprio.";
    }
    else if (tipo === "precos") {
        mensagem = "Comparar preços pode economizar até 30% nas compras.";
    }
    else if (tipo === "reserva") {
        mensagem = "O ideal é guardar pelo menos 3 a 6 meses de despesas.";
    }

    document.getElementById("mensagemDica").innerText = mensagem;
}
