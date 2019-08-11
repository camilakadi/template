$().ready(function () {
    inicializarPagina();

    $("#formTelefone").validate({
        rules: {
            adata: {
                required: true
            }
        },
        messages: {
            adata: {
                required: "Campo obrigatório"
            },
            aabandonosChamada: {
                required: "Campo obrigatório"
            },
            atempoMedioEspera: {
                required: "Campo obrigatório"
            },
            atempoMedioAtendimento: {
                required: "Campo obrigatório"
            },
            anivelServico: {
                required: "Campo obrigatório"
            }
        }
    });
});

function inicializarPagina() {
    mostrarValoresTelefone();
}

function pegarValoresFormTelefone() {
    let formulariosTelefones = pegarLocalStorage("formulariosTelefonesChave");

    if (formulariosTelefones === null)
        formulariosTelefones = [];

    let formularioTelefone = {
        data: document.getElementById("adata").value,
        abandonosChamada: document.getElementById("aabandonosChamada").value,
        tempoMedioEspera: document.getElementById("atempoMedioEspera").value,
        tempoMedioAtendimento: document.getElementById("atempoMedioAtendimento").value,
        nivelServico: document.getElementById("anivelServico").value
    };

    formulariosTelefones.push(formularioTelefone);

    armazenarLocalStorage("formulariosTelefonesChave", formulariosTelefones);

}

function armazenarLocalStorage(chave, objeto) {
    window.localStorage.setItem(chave, JSON.stringify(objeto));
}

function pegarLocalStorage(chave) {
    return JSON.parse(window.localStorage.getItem(chave));
}

function mostrarValoresTelefone() {
    let formularioTelefoneDados = pegarLocalStorage("formulariosTelefonesChave");
    //console.log(formularioTelefoneDados);

    let selecioneMesAno = document.getElementById("selecioneMesAno");

    formularioTelefoneDados.forEach(function (formularioTelefone, key) {
        //console.log(key);
        let data = new Date(formularioTelefone.data);
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        let dia = data.getDate();

        //preenchendo o option do html
        let option = document.createElement("option");
        option.value = key;
        option.textContent = mes + "/" + ano;

        if (selecioneMesAno)
            selecioneMesAno.appendChild(option);

        botaoEditar = criarBotaoComIcone("btn btn-warning btn-sm mr-1", "fas fa-edit", key, "editar");

        botaoExcluir = criarBotaoComIcone("btn btn-danger btn-sm mr-1", "fas fa-trash-alt", key, "excluir");

        let tabelaTelefone = document.getElementById('tabelaTelefone').getElementsByTagName('tbody')[0];

        let novaLinha = key + 'oie';
        //console.log(novaLinha);
        // Insert a row in the table at row index 0
        novaLinha = tabelaTelefone.insertRow(tabelaTelefone.rows.length);

        console.log(novaLinha);

        // Insert a cell in the row at index 0
        let novaColuna1 = novaLinha.insertCell(0);
        let novaColuna2 = novaLinha.insertCell(1);
        let novaColuna3 = novaLinha.insertCell(2);
        let novaColuna4 = novaLinha.insertCell(3);
        let novaColuna5 = novaLinha.insertCell(4);
        let novaColuna6 = novaLinha.insertCell(5);
        let novaColuna7 = novaLinha.insertCell(6);


        // Append a text node to the cell
        let textoColuna1 = document.createTextNode(key);
        let textoColuna2 = document.createTextNode(dia + "/" + mes + "/" + ano);
        let textoColuna3 = document.createTextNode(formularioTelefone.abandonosChamada + ' %');
        let textoColuna4 = document.createTextNode(formularioTelefone.tempoMedioEspera);
        let textoColuna5 = document.createTextNode(formularioTelefone.tempoMedioAtendimento);
        let textoColuna6 = document.createTextNode(formularioTelefone.nivelServico);

        novaColuna1.appendChild(textoColuna1);
        novaColuna2.appendChild(textoColuna2);
        novaColuna3.appendChild(textoColuna3);
        novaColuna4.appendChild(textoColuna4);
        novaColuna5.appendChild(textoColuna5);
        novaColuna6.appendChild(textoColuna6);
        novaColuna7.appendChild(botaoExcluir);
        novaColuna7.appendChild(botaoEditar);

    });

}

function limparFormularioTelefone() {
    document.getElementById("formTelefone").reset();
}

function criarBotaoComIcone(classeBotao, classeIcone, linha, tipoBotao) {
    //criar o elemento botão
    let botao = document.createElement("button");
    botao.className = classeBotao;
    botao.onclick = function () {
        console.log('oiee cara de boi' + linha, tipoBotao);
    };

    //criar o elemento icone
    let icone = document.createElement("i");
    icone.className = classeIcone;

    //inserir o icone dentro do botão
    botao.appendChild(icone);

    return botao;
}