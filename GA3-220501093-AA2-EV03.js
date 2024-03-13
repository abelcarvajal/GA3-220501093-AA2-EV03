/*......................................................................................................................
1. Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. 
Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro.
.......................................................................................................................*/

const { readlink } = require("fs");

function calculateTime(distance, hours, minutes) {
  totalMinutes = hours * 60 + minutes;
  averageTimeXKm = totalMinutes / distance;
  return averageTimeXKm;
}

distanceMarathon = 42.195;
averageTime = calculateTime(distanceMarathon, 2, 25);

/* Uso la función toFixed para limitar la extensión de decimales a sólo dos digitos*/
console.log(
  `1.   El tiempo medio por kilómetro es: ${averageTime.toFixed(2)} minutos`
);

/*.........................................................................................................................
2. Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula: F = (9/5) C + 32)
..........................................................................................................................*/

function convertTemperature(centigrade) {
  farenheit = (9 / 5) * centigrade + 32;
  return farenheit;
}
temperature = 32;
temperatureF = convertTemperature(temperature);
console.log(
  `2.   La temperatura ingresada es ${temperature} °C que equivale a ${temperatureF} °F`
);

/*...............................................................................................................................
3. Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un estudiante cualquiera.
Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30% de la nota y el resto (70%) corresponde a la nota 
del examen parcial.
................................................................................................................................*/

function calculateNote1rst(workshopMathA, workshopMathB, quiz, finalTest) {
  finalNote =
    ((workshopMathA + workshopMathB + quiz) / 3) * 0.3 + finalTest * 0.7;
  return finalNote;
}
noteWorkshopMathA = 4;
noteWorkshopMathB = 4.6;
noteQuiz = 3.8;
noteFinalTest = 4.3;

definitiveNote = calculateNote1rst(
  noteWorkshopMathA,
  noteWorkshopMathB,
  noteQuiz,
  noteFinalTest
);
console.log(`3.   La nota final es ${definitiveNote.toFixed(1)}`);

/*..............................................................................................
4. Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará?
..............................................................................................*/
function calculateDebt(initialCapital, interestRate) {
  rate = interestRate / 100;
  /* La fórmula t = 72 / R, donde R representa la tasa de interés da una aproximación. 
  La formula t = log(2) / log(1 + R) es más precisa en el resultado */
  //time = 72 / interestRate
  time = Math.log(2) / Math.log(1 + rate);
  return time;
}
initialCap = 15000;
interestR = 5;
yearsToDouble = calculateDebt(initialCap, interestR);
console.log(`4.   El capital inicial se doblará a los ${time.toFixed(2)} años`);

/*..........................................................................................................
5. Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 25.
..........................................................................................................*/

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

let numbers = [];
let i = 0;

askNumber = () => {
  rl.question("Digite un número: ", (number) => {
    /*Había usado numbers.push(parseInt(number) Pero toma los números incluso si ingreso valores como "87gh"*/
    numbers.push(Number(number));
    /* Verificamos si el valor ingresado es un número*/
    if (isNaN(number)) {
      console.log('Caracter no válido. Ingrese un número');
      askNumber();
      
    } else{
      i++;
      if (i < 20) {
        askNumber();
      } else {
        showNumbersLessOrEqual();
        rl.close();
      }
    }
  });
};

showNumbersLessOrEqual = () => {
  console.log("Los números ingresados menores o iguales a 25 son: ");
  for (let num of numbers) {
    if (num <= 25) {
      console.log(num);
    }
  }
};
console.log('5. Calcular los números menores o iguales a 25')
askNumber();


/*Los ejercicios 6 hasta 10 se encuentran por separado */

