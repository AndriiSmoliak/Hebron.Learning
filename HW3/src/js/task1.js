const a = prompt('Введите сумму');
const b = prompt('Введите процент скидки');
let sumDiscont;

let sum = parseInt(a);
let discount = parseInt(b);

if (isNaN(sum) === false && isNaN(discount) === false){
    sumDiscont = (sum/100)*discount;
    console.log((sum - sumDiscont).toFixed(2));
}else {
    console.log('the value must be a number');
}
