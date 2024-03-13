/*.....................................................................................................................
8. Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y que calcule la hora en el siguiente segundo
("0<= H <=23", "0<= M <=59" "0<= S<=59"). 
......................................................................................................................*/

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let hours = 0;
let minutes = 0;
let seconds = 0;

function askTime(){
    rl.question('Ingrese la hora: ', (hour) => {
        if(hour >= 24){
            console.log(' Haingresado un valor incorrecto!')
            console.log('Intentelo de nuevo');
            askTime();
        } else {
            hours = parseInt(hour);
            }
        rl.question('Ingrese los minutos: ', (minute) => {
            if(minute >= 60){
                console.log(' Haingresado un valor incorrecto!')
                console.log('Intentelo de nuevo');
                askTime();
            } else{
                minutes = parseInt(minute);
                }       
            rl.question('Ingrese los segundos: ', (second) => {
                if(second >= 60){
                    console.log(' Haingresado un valor incorrecto!')
                    console.log('Intentelo de nuevo');
                    askTime();
                }else {
                    seconds = parseInt(second);
                    rl.close();
                    calculateTime()
                }
                
    });
    
    });
    
    }); 
    
}

function calculateTime() {
    seconds += 1;
    if(seconds >= 60){
        minutes += 1;
        seconds = 0;
    }
    if(minutes >= 60){
            hours += 1;
            minutes = 0;
        } 
    if(hours >= 24){
        hours = 0;
    }
    console.log(`La hora, un segundo después es ${hours}:${minutes}:${seconds}`);
}
console.log('Igresar los valores dentro de los límites establecidos: ');
console.log('Hora (0 - 23), minutos (0 - 59) y segundos (0 - 59)');
askTime();


