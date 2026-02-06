// Palindrome number

function reverseNum(num) {
    let reversed = 0;

    while(num>0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return reversed;
}

function isPalindrome(num) {
    if(num<0) return false;

    return num === reverseNum(num);
}

console.log(isPalindrome(121));