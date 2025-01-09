function diferencaDatas() {

    let inicio = '2025-01-09'
    let final = '2025-01-15'

    let dataInicio = inicio
    let dataFinal = final

    dataInicio = new Date(dataInicio)
    dataFinal = new Date(dataFinal)

    let diferencaTempo = Math.abs(dataFinal - dataInicio)
    let tempoDias = 1000 * 60 * 60 * 24
    let diferencaDias = diferencaTempo / tempoDias

    console.log(`A diferença de dias é: ${diferencaDias}`)

}

function adicionarDias(dias) {

    const dataAtual = new Date()

    let adicionado = new Date(dataAtual.setDate(dataAtual.getDate() + dias))

    console.log(`Adicionado ${dias} dias: ${adicionado}`)

}

function fusoHorario() {

    const dataAtual = new Date()
    
    const saoPaulo = 'America/Sao_Paulo'
    const toquio = 'Asia/Tokyo'

    let dataFormatada = (data, timeZone) => {
        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: timeZone
        }).format(data);
    };

    console.log(`Data atual em São Paulo: ${dataFormatada(dataAtual, saoPaulo)}`);
    console.log(`Data atual em Tóquio: ${dataFormatada(dataAtual, toquio)}`);

}

function formatarData() {

    const newDate = new Date()

    let dataFormatada = (data) => {
        return new Intl.DateTimeFormat('pt-BR',
            {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        ).format(data)
    }

    console.log(dataFormatada(newDate))

}

diferencaDatas()
adicionarDias(5)
fusoHorario()
formatarData()