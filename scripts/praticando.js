

// function numPares(num) {
//     let pares = [];
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             pares.push(i);
//         }
//     }
    
//     return pares;
// }

// console.log(numPares(10));

//Exercicio 2

// const numeros = [1, 2, 3, 4, 5];

// function somaArray(num) {
//     let soma = num.reduce((acc, numero) => acc + numero, 0);
//     return soma;
// }

// console.log(somaArray(numeros));

//Exercicio 3

// function fatorial(num) {
//     let fatorial = 1;
//     for (let i = num; i > 0; i--){
//         fatorial *= i;
//     }

//     return fatorial;
// }

// console.log(fatorial(5));

//Exercicio 4

// const array = [10, 20, 30, 40, 5, 35];

// function maiorNumero(array) {
//     let maior = array.reduce((acc, numero) => Math.max(acc, numero));
//     return maior;
// }

// console.log(maiorNumero(array));

//Exercício 5

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//      }
// }

// fizzBuzz(15);

//Exercício 6

// let numeros = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

// function sumMix(num) {
//     let soma = 0;
//     for (let i of num){
//         console.log(i)
//         soma += parseInt(i);
//     }
//     return soma;
// }

// console.log(sumMix(numeros));

//Exercício 7

// function getMiddle(s) {
//     const length = s.length;
//     const middle = Math.floor(length / 2);

//     if (length % 2 !== 0) {
//         return s[middle];
//     } else {
//         return s[middle - 1] + s[middle];
//     }
// }

// console.log(getMiddle("Hello"));

// function relogio() {
//   const numeros = {
//     0: [' _ ', '| |', '|_|'],
//     1: ['  ', ' | ', ' | '],
//     2: ['  _', ' _|', '|_ '],
//     }
//     let horas = "";
//     let space = '\n'
//     for (let v = 0; v < 3; v++) {
//         let row = '';
//         for (let h = 0; h < 3; h++) {
//             if (h == 1 && v == 2)
//             row += numeros[h][v] + '';
//             horas += row
//         }
//         horas += space;
//     }
//   return horas
// };

// console.log(relogio());

// module.exports = sevenSegmentify;


// function criaLeds(h) {
//   //console.log(a);
//   //const h = "00:00"; // Sequência de números que você quer exibir, incluindo os dois pontos ":"
//   const numeros = {
//     0: [" _ ", "| |", "|_|"],
//     1: ["   ", "  |", "  |"],
//     2: [" _ ", " _|", "|_ "],
//     3: [" _ ", " _|", " _|"],
//     4: ["   ", "|_|", "  |"],
//     5: [" _ ", "|_ ", " _|"],
//     6: [" _ ", "|_ ", "|_|"],
//     7: [" _ ", "  |", "  |"],
//     8: [" _ ", "|_|", "|_|"],
//     9: [" _ ", "|_|", " _|"],
//     ":": ["   ", " . ", " . "], // Representação dos dois pontos
//   };

//   // Inicializa cada linha do painel como uma string vazia
//   let linha1 = "";
//   let linha2 = "";
//   let linha3 = "";

//   // Monta as três linhas do display LED, número por número
//   for (let i = 0; i < h.length; i++) {
//       const digito = h[i];
//     if (digito === '0' && i == 0) {
//         linha1 += numeros[":"][0];
//         linha2 += numeros[":"][0];
//         linha3 += numeros[":"][1];
//     }
//     linha1 += numeros[digito][0] + " "; // Primeira linha do dígito
//     linha2 += numeros[digito][1] + " "; // Segunda linha do dígito
//     linha3 += numeros[digito][2] + " "; // Terceira linha do dígito
//   }

//   // Monta o painel completo
//   const painel = `${linha1}\n${linha2}\n${linha3}\n`;

//     //   console.log(painel);
//     return painel
// }

// console.log(criaLeds('07:00'))


// let palavra = "cobra"

// for (let i in palavra) {
//     console.log(i)
// }

// console.log(palavra.length)

//

// function escolheTaxi(tf1,vqr1,tf2,vqr2) {
//     let escolha = '';
//     let valorEmpresa1 = tf1 + vqr1;
//     let valorEmpresa2 = tf2 + vqr2;
//     let valorDistancia1 = vqr1 * 10;
//     let valorDistancia2 = vqr2 * 10;
//     console.log("Empresa 1: ", valorEmpresa1)
//     console.log("Dist Empresa 1: ", valorDistancia1);
//     console.log("Empresa 2: ", valorEmpresa2)
//     console.log("Dist Empresa 2: ", valorDistancia2)
    
//     if (valorEmpresa1 < valorEmpresa2) {
//         if (valorDistancia1 > valorDistancia2) {
//             escolha = "Empresa 2 > 10"
//         } else {
//             escolha = "Empresa 1"
//         }
//     } else if (valorEmpresa2 < valorEmpresa1) {
//         if (valorDistancia2 > valorDistancia1) {
//             escolha = "Empresa 1 < 10"
//         } else {
//             escolha = "Empresa 2"
//         }
//     } else if (valorEmpresa1 === valorEmpresa2) {
//         escolha = "Tanto Faz"
//     }
        
//   return escolha;
// }

// console.log(escolheTaxi(2.5, 1.0, 5.00, 0.75)) // Empresa 2

function findSnakeCoordinates(array) {
  const directions = {
    '>': [0, 1],  // direita (mesma linha, próxima coluna)
    '<': [0, -1], // esquerda (mesma linha, coluna anterior)
    '^': [-1, 0], // cima (linha anterior, mesma coluna)
    'v': [1, 0]   // baixo (próxima linha, mesma coluna)
  };

  function isLeft(x, y) {
    for (var i in array) {
      console.log(i);
      for (var j of array[i]) {
        console.log(j);
      }
    }
    if (x - 1 !== 0 && array[2][y] === " ") {
      console.log("deu certo")
    }
    return true;
  }

  const rowsY = array.length;
  const colsX = array[0].length;

  // Localizar a cabeça "h"
  let head = null;
  for (let y = 0; y < rowsY; y++) {
    const x = array[y].indexOf('h');
    if (x !== -1) {
      head = [x, y];
      break;
    }
  }

  if (!head) throw new Error("Cabeça da cobra ('h') não encontrada!");

  // Rastrear o corpo
  const snakeCoordinates = [head];
  let [x, y] = head;

  
  console.log(isLeft(head[0], head[1]))

  
  //Não esquece isso aqui não
  return snakeCoordinates;
}

// Exemplo de uso
const snakeArray = [
  " >>h   ",
  " ^   v ",
  " ^<<<< "
];

console.log(findSnakeCoordinates(snakeArray));








