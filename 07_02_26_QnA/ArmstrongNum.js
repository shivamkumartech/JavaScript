// Armstrong number

function isArmstrong(num) {

    let original = num;
    
    let digitCount = String(num).length;
    
    let sum = 0;
    
    while (num > 0) {
        let digit = num % 10;
        sum += digit ** digitCount;
        num = Math.floor(num / 10);
    }
    
    return sum === original;
}

console.log(isArmstrong(153));