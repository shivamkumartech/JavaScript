// Factorial


function factorial(num) {
    let facto = 1;
    for(let i = 1; i<=num; i++) {
    facto = facto * i;
    }
    console.log(facto);
}

factorial(5);