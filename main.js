import { getEstoque, transacao } from "./estoque.js";


document.entrada.addEventListener('submit',leFormulario);
//leFormulario();

const olJoao = document.querySelector("#olJoao");
const olMaria = document.querySelector("#olMaria");

atualizaTela();

function leFormulario (event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`);
    //document.entrada.submit();

    transacao(origem, destino, quantidade, fruta);
    atualizaTela();
}

function atualizaTela() {
    const estoque = getEstoque();
    const joao = estoque['joao'];
    olJoao.innerHTML = " ";
    for( let i=0 ; i<joao.length; i++){
        const monte = joao[i];
        const eli = document.createElement('li');
        eli.innerText = `${monte.tipo}: ${monte.qtd}`;
        olJoao.append(eli);
    }
    const maria = estoque['maria'];
    olMaria.innerHTML = " ";
    for( let i=0 ; i<maria.length; i++){
        const monte = maria[i];
        const eli = document.createElement('li');
        eli.innerText = `${monte.tipo}: ${monte.qtd}`;
        olMaria.append(eli);
    }
}