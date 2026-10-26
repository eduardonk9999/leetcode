/**
 * Linear
 * Significado: O trabalho cresce na mesma proporcao da entrada. Lista dobrou,
 * passos dobraram. É o for simples: visista cada item uma vez.
 * 
*/
// Somar todos os números da lista
function soma(lista) {
    let total = 0
    for (const num of lista) { // visita cada item UMA vez
        total += num;
    }

    return total;
}
// 10 itens = 10 passos | 1.000 itens = 1.000 passos
