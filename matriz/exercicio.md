Descrição do Problema:

Você foi contratado como desenvolvedor júnior para implementar uma funcionalidade que manipula
matrizes bidimensionais em JavaScript. Seu desafio é criar uma função que execute operações
específicas em uma matriz de números inteiros.

Funcionalidade Principal:

- A função deve receber uma matriz bidimensional de números inteiros como entrada.
- A função deve executar as seguintes operações:
    1. Soma de Linhas
    2. Soma de Colunas
    3. Diagonal Principal
    4. Diagonal Secundária

Exercício realizado em JavaScript. Realizada a manipulação de matrizes conforme o pedido, soma de linhas, soma de colunas, soma de diagonal principal e soma de diagonal secundária.

Soma de linhas:
    Primeiro tive que utilizar o laço de repetição for para poder percorrer o meu array linha por linha.
    O segundo laço percorri dado por dado, sendo eles 1, 2 e 3.
    Depois tive que adicionar a atribuição dos elementos com o operador de atribuição "+=".
    Por último dei um ".push(soma)" na minha váriavel resultado para adicionar a soma dos valores a ela.

Soma de colunas:
    Primeiro fiz um loop para percorrer as colunas utilizando "matriz[0].length",ou seja, o tamanho da primeira linha.
    Para os indices adicionei um valor de 0 a colunas para zerar o meu array "colunas = [0, 0, 0]".
    O proximo loop percorre cada linha da matriz.
    O loop interno percorre os dados da linha atual.
    De novo utilizando o sinal de atribuição para fazer a atribuição das linhas[i] e colunas[x].
    Por último utilizei um console.log para aparecer o resultado no console.

Soma da diagonal principal:
    O loop percorre cada linha da matriz.
    A variavel "i" é usada como indice tanto para a linha quanto para a coluna, pois na diagonal principal os indices de linha e coluna são iguais "matriz[i][i]".

    exemplo:
        primeiro laço: i = 0, matriz[0][0] = 1, resultado = 0 + 1 = 1
        segundo laço: i = 1, matriz[1][1] = 5, resultado = 1 + 5 = 6
        terçeiro laço: i = 2, matriz[2][2] = 9, resultado = 6 + 9 = 15

Soma da diagonal secundária:
    O loop percorre cada linha da matriz.
    A variavel "i" é usada para acessar os dados da diagonal secundária.
    "Matriz.length - 1" pega o indice da última coluna, e subtrair o "i" faz se mover da direita para a esquerda.
