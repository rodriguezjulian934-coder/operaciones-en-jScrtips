// alert ('Hola mundo de programacion')//
const operaciones =(prompt('ingresa la operacion que deseas realizar *,/,+,-'));
// operaciones 
const valor1 = parseInt(prompt('ingresa el valor'));
const valor2 = parseInt(prompt('ingresa el valor'));
const operacion = parseInt(prompt('ingrse el valor'));

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);


const valor= parseInt(prompt('Ingresa un valor'));

// que el usuario elija la operación

const suma = valor1 + valor2; 

const resta = valor1 - valor2;

const multiplicacion = valor1 - valor2;

const division = valor1 / valor2;


if (operacion === '+,-,*,/') { 

alert('El resultado de la suma es '+ suma);

} else if ('el resultado de la suma es ' + operacion === '+'){
    alert('el resultado de la suma es ' + valor1 + valor2);

 } else if ('el resultado de la resta es ' - operacion === '-'){
    alert('el resultado de la resta es ' - valor1 - valor2);
 }

 else if ('el resultado de la multiplicacion es ' * operacion === '*'){
    alert('el resultado de la multiplicacion es ' * valor1 * valor2);
 
 }

else if ('el resultado de la division es ' / operacion === '/'){
   alert('el resultado de la division es ' / valor1 / valor2);

}

