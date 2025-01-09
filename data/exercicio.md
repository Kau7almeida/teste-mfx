Descrição do Problema:

Você foi contratado como desenvolvedor júnior para implementar uma funcionalidade que manipula
datas e horas em JavaScript. Seu desafio é criar uma função que resolva uma série de tarefas
relacionadas a data e hora.

Funcionalidade Principal:

- A função deve realizar as seguintes operações:
    1. Calcular a Diferença entre Duas Datas
    2. Adicionar Dias a uma Data
    3. Converter para Outro Fuso Horário
    4. Formatar Data


Diferença de datas:
    Primeiro guardei duas datas em variaveis diferentes, uma data de entrada e outra saida para fazer os calculos.
    Em seguida, fiz a conversão para virar um objeto Date.
    A difereça entre as datas é calculada em milisegundos com dataFinal - dataInicio, data final vem na frente pois esperamos que seja um número maior que a data de inicio, e para fazer contas de subtração utilizamos o valor maior na frente sendo subtraido pelo valor menor.
    A função math.abs é usada para o valor ser absolute, abs = absolute.
    O tempo foi convertido para dias ao dividir pelo número de milisegundos em um dia "1000 * 60 * 60 * 24" 60 segundos 60 minutos e 24 horas.

Adicionar dias a uma data:
    Primeiro guardo a data atual utilizando new Date.
    Em seguida faço o calculo adicionando os dias que estão no parametro da função, para fazer o calculo eu puxo o dia com o "getDate()" e adiciono os dias que estão no parametro.

Converter para outro fuso horário:
    Primeiro eu salvo a função new Date igual os outros desafios.
    Logo em seguida guardo o local atual e o local em que eu quero saber o fuso horário em variaveis diferentes.
    Depois disso faço a formatação para facilitar a leitura.
    E por último imprimo no console,log chamando a funcionalidade dataFormatada.

Formatar data:
    Novamente eu salvo a função new Date, igual os demais desafios.
    Em seguida faço a funcionalidade de data formatada, faço a utilização da API onde recebo como parametro "data" no arrow function, para formatar utilizo o intercionalizador "Intl.DateTimeFormat" e configuro para ser formatado para a região que quero, no meu caso "pt-BR" = Português Brasil.
    Depois escolhi os estilos de formatação curtos para a data e hora.
    Logo em seguida usei o ".format()" para aplicar a formatação.
    E por último utiliei o console.log para imprimir o resultado.