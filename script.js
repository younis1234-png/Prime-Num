

showPrime(20);

//  Prime ( whos factores are only 1 and itself)
// exemple 12 = 1, 2,3,4,6,12 ==> we dont get any reminder  byitslef

// Composite (11 = 1,11   or 13 = 1, 13)


function showPrime(limit){
    // first prime numer is 2
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number)
}

function isPrime(number){
    // for each number we need to check is each number is prime or not
    for( let factor = 2; factor < number; factor++)
        if( number % factor === 0)
           return false;
    // is prime is true console.log it 
    return true;
}