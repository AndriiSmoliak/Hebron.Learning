function reverseNumber(number) {
    let string = ' ' + number;
    let numberreverse;
    if(number < 0){
    let string1 = string.substring(2);
      numberreverse = '-' + string1.split('').reverse().join('');
    }else {
        numberreverse = string.split('').reverse().join('');
    }
    console.log(numberreverse);
}
reverseNumber(-1234);
