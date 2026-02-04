// Prime number check (root n)

function isPrime(num) {

    if(num <=1) {
        console.log(`${num} is not prime number`);
        return;
    } 

    for (let i = 2; i*i <=num; i++) {
        if(num%i ===0) {
            console.log(`${num} is not prime number`);
            return;
        }
    }
    console.log(`${num} is prime number`)
}

isPrime(12);