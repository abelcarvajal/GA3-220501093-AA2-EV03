/*................................................................................................................
6. Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos. 
.................................................................................................................*/
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");


const rl = readline.createInterface({ input, output });

let shirts = [];
let j = 0;

totalShirtPrice = () => {
  rl.question(" Precio de la camisa en dolares: ", function (price) {
    shirts.push(Number(price));

    if (isNaN(price)) {
      console.log(
        "No se aceptan letras o caracteres especiales! Ingrese el valor de la camisa!"
      );
    } else {
      j++;
      if (j < 5) {
        totalShirtPrice();
      } else {
        convertCurrency();
        rl.close();
      }
    }
  });
};

/* El valor del dolar en pesos al momento de realizar el escript es de $3911 pesos colombianos según Google */
function convertCurrency() {
  total = shirts.reduce((a, b) => a + b, 0);
  totalInPesos = total * 3911;
  console.log(`El valor total de las camisas en pesos es: COP$${totalInPesos}`);
}
console.log(
  "Para calcular el valor total de ls camisas, ingrese sus precios en dolares."
);
totalShirtPrice();
