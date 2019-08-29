function isPrime(num){
    if(num === 1) return true;
    let a = num / 2;
    let i = 2;
    while(i <= a) {
        if(num % i === 0) {
            return false
        } else {
            i++;
        }
    }
    return true;
}
console.log(isPrime(32));

