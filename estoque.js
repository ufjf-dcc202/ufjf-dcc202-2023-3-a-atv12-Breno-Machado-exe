
let estoque = {

'joao' :  
[
    {'tipo' : 'maca', 'qtd' : 1},
    {'tipo' : 'pera', 'qtd' : 1}
],
'maria' : 
[
    {'tipo' : 'maca' , 'qtd' : 2},
    {'tipo' : 'banana', 'qtd' : 1}
],

};

export function getEstoque(){
    return structuredClone(estoque);
}

export function transacao(origem, destino, quantidade, fruta){
    if(origem === 'pomar'){
        cont pessoa = estoque[destino];
        for(let i =0 ; i<pessoa.length; i++){
            const monte = pessoa[i];
            if(monte.qtd += quantidade;
    }

}
