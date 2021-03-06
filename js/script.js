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
const numbers = document.getElementById('list-items');
// 2.Stampo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    if (i % 15 === 0) { // Numeri multipli di 3 e di 5
        result += '<li class="col-12 text-primary fs-3"> FizzBuzz </li>';
    } else if (i % 3 === 0) { // Numeri multipli solo di 3
        result += '<li class="col-12 text-warning fs-3"> Fizz </li>';
    } else if (i % 5 === 0) { // Numeeri multipli solo di 5
        result += '<li class="col-12 text-success fs-3"> Buzz </li>';
    } else {
        result += `<li class="col-12 text-light fs-3"> ${i} </li>`;
    }
    // Stampo il risultato in pagina\
}
numbers.innerHTML = result;
console.log(result);