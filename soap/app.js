import { XMLHttpRequest } from "xmlhttprequest";

// function conversaoNumeroParaString(numero) {



//     const xhr = XMLHttpRequest();
//     xhr.open("POST", url, true);

//     xhr.setRequestHeader("Content-Type", "application/soap+xml");

//     xhr.onreadystatechange = function() {

//         if (xhr.readyState === XMLHttpRequest.DONE) {

//             if (xhr.status === 200) {
//                 console.log(xhr.responseText);
//             } else {
//                 console.log("Erro na requisição");
//             }

//             const calculo = xhr.responseText.match(/<NumberToWordsResult>(.*?)<\/NumberToWordsResult>/)[1];

//             if (calculo && calculo[1]) {
//                 resolve(calculo[1])
//             } else {
//                 reject("Erro na conversão");
//             }

//         } else {
//             reject("Erro na requisição");
//         }

//     }

//     xhr.send(body);
    
// }

// async function teste(numero) {
    
//     try {
//         const resultado = conversaoNumeroParaString(numero);
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }

// }

// teste(10);

