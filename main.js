

document.entrada.addEventListener('submit',leFormulario);
//leFormulario();

const olJoao = document.querySelector("#olJoao");
const olMaria = document.querySelector("#olMaria");

function leFormulario (event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();
}