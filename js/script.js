console.log('JS OK!');

/*
1. Creo una variabile di appoggio
2. Stampo i numeri da 1 a 100
    2a. Per i multipli di 3 stampo 'fizz'
    2b. Per i multipli di 5 stammpo 'buzz'
    2c. Per i multipli di entrambi stampo 'fizzbuzz'

*/

// 1. Creo una variabile di appoggio
let result = '';
// 2.Stampo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) { // Numeri multipli di 3 e di 5
        result += 'FizzBuzz';
    } else if (i % 3 === 0) { // Numeri multipli solo di 3
        result += 'Fizz';
    } else if (i % 5 === 0) { // Numeeri multipli solo di 5
        result += 'Buzz';
    } else {
        result += i;
    }
}
console.log(result);
// Stampo il risultato in pagina
const numbers = document.getElementById('list-items');
numbers.innerHTML = `<li> ${result} </li> `;