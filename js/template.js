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
    var formulariosTelefones = pegarLocalStorage("formulariosTelefonesChave");

    if (formulariosTelefones === null)
        formulariosTelefones = [];

    var formularioTelefone = {
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
    var formularioTelefoneDados = pegarLocalStorage("formulariosTelefonesChave");
    console.log(formularioTelefoneDados);

    var selecioneMesAno = document.getElementById("selecioneMesAno");

    formularioTelefoneDados.forEach(function (formularioTelefone, key) {
        var data = new Date(formularioTelefone.data);

        //preenchendo o option do html
        var option = document.createElement("option");
        option.value = key;
        option.textContent = data.getMonth() + "/" + data.getFullYear();

        selecioneMesAno.appendChild(option);

    });


    //console.log(formularioTelefoneDado.data);

    //var dataTelefoneTexto = document.getElementById("dataTelefoneTexto");

    //if (dataTelefoneTexto) {
    //    dataTelefoneTexto.innerHTML = formularioTelefoneDado.data;
    //}
}

function limparFormularioTelefone() {
    document.getElementById("formTelefone").reset();
}