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
    if (i % 3 === 0) {
        result += 'fizz';
    } else if (i % 5 === 0) {
        result += 'buzz';
    } else {
        result += i;
    }
}
console.log(result);