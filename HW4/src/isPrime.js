function isPrime(num) {
    if (num % 2 === 0 || num % 3 === 0){
        return false;
    } else {
        return true;
    }
}
console.log(isPrime(32));
