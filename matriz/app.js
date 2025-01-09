const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function somaLinhas(matriz) {

    let resultado = []

    for (let i = 0; i < matriz.length; i++) { // percorre as linhas

        let soma = 0
        let linha = matriz[i]

        for (let x = 0; x < linha.length; x++) { // percorre os elementos da linha

            soma += linha[x] // soma os elementos da linha

        }

        resultado.push(soma)

    }

    console.log(`O resultado da soma das linhas é ${resultado}`)
}

function somaColunas(matriz) {

    let colunas = []

    for (let i = 0; i < matriz[0].length; i++) {

        colunas[i] = 0

    }

    for (let i = 0; i < matriz.length; i++) {

        for (let x = 0; x < matriz[i].length; x++) {

            colunas[x] += matriz[i][x]

        }

    }


    console.log(`O resultado da soma das colunas é ${colunas}`)

}

function somaDiagonalPrincipal(matriz) {

    let resultado = 0

    for (let i = 0; i < matriz.length; i++) { // percorre as linhas

        resultado += matriz[i][i] // soma os elementos da diagonal principal

    }

    console.log(`O resultado da soma da diagonal principal é ${resultado}`)

}

function somaDiagonalSecundaria(matriz) {

    let resultado = 0

    for (let i = 0; i < matriz.length; i++) {

        resultado += matriz[i][matriz.length - 1 - i]

    }

    console.log(`O resultado da soma da diagonal secundária é ${resultado}`)

}

function processoMatriz(matriz) {

    somaLinhas(matriz)
    somaColunas(matriz)
    somaDiagonalPrincipal(matriz)
    somaDiagonalSecundaria(matriz)

}

processoMatriz(matriz)