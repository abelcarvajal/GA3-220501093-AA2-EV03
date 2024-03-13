/*..................................................................................................................................
7. Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo decada cliente excede 50000 
se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total de todos los pagos. 
..................................................................................................................................*/

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

let consumptionCustomer = [];
let grandTotal = 0;

function calculatePayment(consumption) {
  let discount = 0;
  let totalDue = 0;

  if (consumption > 50000) {
    discount = consumption * 0.2;
    totalDue = consumption - discount;
  } else {
    totalDue = consumption;
  }

  console.log(`El cliente debe pagar: ${totalDue.toFixed(2)} y ha ahorrado: ${discount.toFixed(2)}`);
  return totalDue;
}

function askForConsumption() {
  rl.question('Ingrese el valor del consumo del cliente o "fin" para terminar: ', (input) => {
    if (input.toLowerCase() === 'fin') {
      console.log(`El total de todos los pagos es: ${grandTotal.toFixed(2)}`);
      rl.close();
    } else {
      let numericValue = parseFloat(input);
      if (isNaN(numericValue)) {
        console.log("No se aceptan letras o caracteres especiales! Ingrese el valor del consumo!");
        askForConsumption();
      } else {
        consumptionCustomer.push(numericValue);
        grandTotal += calculatePayment(numericValue);
        askForConsumption();
      }
    }
  });
}

console.log('Si el consumo del cliente supera el valor de 50.000, se aplicará un descuento del 20%.');
askForConsumption();
