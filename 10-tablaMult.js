/*.......................................................................................................................................
10. Realizar un algoritmo que muestre por pantalla la tabla de multiplicar decreciente de cualquier número, ingresado entre el 1 y el 10. 
.......................................................................................................................................*/

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

product = () => {
  rl.question(
    "Ingrese el número cuya tabla de multiplicar desea otener: ",
    (n) => {
      console.log(`Tabla de multiplicar de: ${n}`);
      for (i = 10; i >= 1; i--) {
        console.log(`${n} X ${i} = ${n * i}`);
      } 
      rl.close();
    }
  );
};
console.log("TABLA DE MULTIPLICAR DECRECIENTE");
product();
