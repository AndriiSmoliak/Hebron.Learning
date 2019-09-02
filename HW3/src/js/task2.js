let firstSide = parseFloat(prompt(`Укажите сторону 'a':`));
let secondSide = parseFloat(prompt(`Укажите сторону 'b':`));
let angle = parseFloat(prompt(`Укажите угол 'α':`));

function triangleСalculation (firstSide, secondSide, angle) {
    let c = parseFloat(Math.sqrt((Math.pow(firstSide, 2) + Math.pow(secondSide,2)) - (2*(firstSide*secondSide)) * Math.cos(angle * Math.PI / 180)).toFixed(0));
    let P = firstSide + secondSide + c;
    let p = P/2;
    const S = Math.sqrt(p*(p-firstSide)*(p-secondSide)*(p-c));


    console.log('Сторона с равна: ' + c);
    console.log('Площадь триугольника: ' + S.toFixed(0));
    console.log('Периметр триугольника: ' + P.toFixed(2));
}


triangleСalculation(firstSide, secondSide, angle);
