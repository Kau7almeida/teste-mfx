import { XMLHttpRequest } from "xmlhttprequest";

function conversaoNumeroParaString(numero) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso"; // Substituir com a URL correta
        const body = `
            <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
               <soapenv:Header/>
               <soapenv:Body>
                  <web:NumberToWords>
                     <web:ubiNum>${numero}</web:ubiNum>
                  </web:NumberToWords>
               </soapenv:Body>
            </soapenv:Envelope>
        `; // Substituir com o corpo SOAP correto

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const match = xhr.responseText.match(/<NumberToWordsResult>(.*?)<\/NumberToWordsResult>/);
                    if (match && match[1]) {
                        resolve(match[1]); // Retorna o resultado
                    } else {
                        reject("Erro na conversão");
                    }
                } else {
                    reject("Erro na requisição");
                }
            }
        };

        xhr.onerror = () => reject("Erro na requisição");
        xhr.send(body);
    });
}

// Função para testar a conversão
async function teste(numero) {
    try {
        const resultado = await conversaoNumeroParaString(numero); // Aguarda o resultado
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Erro:", error);
    }
}

// Testando a função
teste(123); // Substituir pelo número desejado



// import { XMLHttpRequest } from "xmlhttprequest";

// // Função para converter número para string
// function conversaoNumeroParaString(numero) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         const url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso"; // Substituir com a URL correta
//         const body = `
//             <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
//                <soapenv:Header/>
//                <soapenv:Body>
//                   <web:NumberToWords>
//                      <web:ubiNum>${numero}</web:ubiNum>
//                   </web:NumberToWords>
//                </soapenv:Body>
//             </soapenv:Envelope>
//         `; // Substituir com o corpo SOAP correto

//         xhr.open("POST", url, true);
//         xhr.setRequestHeader("Content-Type", "text/xml; charset=utf-8");

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     const match = xhr.responseText.match(/<NumberToWordsResult>(.*?)<\/NumberToWordsResult>/);
//                     if (match && match[1]) {
//                         resolve(match[1]); // Retorna o resultado
//                     } else {
//                         reject("Erro na conversão");
//                     }
//                 } else {
//                     reject("Erro na requisição");
//                 }
//             }
//         };

//         xhr.onerror = () => reject("Erro na requisição");
//         xhr.send(body);
//     });
// }

// // Função para testar a conversão
// async function teste(numero) {
//     try {
//         const resultado = await conversaoNumeroParaString(numero); // Aguarda o resultado
//         console.log("Resultado:", resultado);
//     } catch (error) {
//         console.error("Erro:", error);
//     }
// }

// // Testando a função
// teste(123); // Substituir pelo número desejado