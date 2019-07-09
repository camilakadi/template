inicializarPagina();

$().ready(function () {
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
    let formularioTelefone = {
        data: document.getElementById("adata").value,
        abandonosChamada: document.getElementById("aabandonosChamada").value,
        tempoMedioEspera: document.getElementById("atempoMedioEspera").value,
        tempoMedioAtendimento: document.getElementById("atempoMedioAtendimento").value,
        nivelServico: document.getElementById("anivelServico").value
    };

    armazenarLocalStorage("formularioTelefone", formularioTelefone);
}

function armazenarLocalStorage(chave, objeto) {
    window.localStorage.setItem(chave, JSON.stringify(objeto));
}

function pegarLocalStorage(chave) {
    return JSON.parse(window.localStorage.getItem(chave));
}

function mostrarValoresTelefone() {
    let formularioTelefone = pegarLocalStorage("formularioTelefone");
    console.log(formularioTelefone);
    console.log(formularioTelefone.data);


    document.getElementById("dataTelefoneTexto").innerHTML = formularioTelefone.data;

}

function limparFormularioTelefone() {
    document.getElementById("formTelefone").reset();
}