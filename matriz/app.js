const matriz = [
    [7, 2, 4],
    [3, 0, 6],
    [1, 8, 0]
]

function somaLinhas(matriz) {

    try {

        let resultado = []

        for (let i = 0; i < matriz.length; i++) {

            let soma = 0
            let linha = matriz[i]

            for (let x = 0; x < linha.length; x++) {

                soma += linha[x]

            }

            resultado.push(soma)

        }

        console.log(`O resultado da soma das linhas é: ${resultado}`)

    } catch (erro) {
        console.error('A soma de linhas não será possível', erro.message)
    }

}

function somaColunas(matriz) {

    try {

        let colunas = []

        for (let i = 0; i < matriz[0].length; i++) {

            colunas[i] = 0

        }

        for (let i = 0; i < matriz.length; i++) {

            for (let x = 0; x < matriz[i].length; x++) {

                colunas[x] += matriz[i][x]

            }

        }


        console.log(`O resultado da soma das colunas é: ${colunas}`)

    } catch (erro) {
        console.error('A soma das colunas deu errado', erro.message)
    }

}

function somaDiagonalPrincipal(matriz) {

    try {

        let resultado = 0

        for (let i = 0; i < matriz.length; i++) {

            resultado += matriz[i][i]

        }

        console.log(`O resultado da soma da diagonal principal é: ${resultado}`)

    } catch (erro) {
        console.error('A soma da diagnal principal deu errado', erro.message)
    }

}

function somaDiagonalSecundaria(matriz) {

    try {

        let resultado = 0

        for (let i = 0; i < matriz.length; i++) {

            resultado += matriz[i][matriz.length - 1 - i]

        }

        console.log(`O resultado da soma da diagonal secundária é: ${resultado}`)

    } catch (erro) {
        console.error('A soma da diagonal secundária deu errado', erro.message)
    }

}

function processoMatriz(matriz) {

    try {

        somaLinhas(matriz)
        somaColunas(matriz)
        somaDiagonalPrincipal(matriz)
        somaDiagonalSecundaria(matriz)

    } catch (erro) {
        console.error('O processo de Matriz deu errado', erro.message)
    }

}

processoMatriz(matriz)