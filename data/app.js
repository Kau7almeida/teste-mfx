function diferencaDatas() {

    try {

        let inicio = new Date().getDate()
        let final = new Date().getDate() + (1000 * 60 * 60 * 24) * 8

        let dataInicio = inicio
        let dataFinal = final

        dataInicio = new Date(dataInicio)
        dataFinal = new Date(dataFinal)

        let diferencaTempo = Math.abs(dataFinal - dataInicio)
        let tempoDias = 1000 * 60 * 60 * 24
        let diferencaDias = diferencaTempo / tempoDias

        console.log(`A diferença de dias é: ${diferencaDias} \n`)

    } catch (erro) {
        console.error('Erro ao calcular diferença de datas', erro.message)
    }

}

function adicionarDias(dias) {

    try {

        const dataAtual = new Date()

        let adicionado = new Date(dataAtual.setDate(dataAtual.getDate() + dias))

        console.log(`Adicionado ${dias} dias: ${adicionado} \n`)

    } catch (erro) {
        console.error('Erro ao adicionar dias', erro.message)
    }

}

function fusoHorario() {

    try {

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
        console.log(`Data atual em Tóquio: ${dataFormatada(dataAtual, toquio)} \n`);

    } catch (erro) {
        console.error('Erro ao converter fuso horário', erro.message)
    }

}

function formatarData() {

    try {

        const newDate = new Date()

        let dataFormatada = (data) => {
            return new Intl.DateTimeFormat('pt-BR',
                {
                    dateStyle: 'short',
                    timeStyle: 'short'
                }
            ).format(data)
        }

        console.log(`Essa é a data formatada: ${dataFormatada(newDate)}`)

    } catch (erro) {
        console.error('Erro ao formatar data', erro.message)
    }

}

diferencaDatas()
adicionarDias(5)
fusoHorario()
formatarData()