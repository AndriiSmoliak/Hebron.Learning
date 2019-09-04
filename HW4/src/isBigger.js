let isBigger = (a, b) => a > b;
let isSmaller = (a, b) => !isBigger(a, b);

// function isBigger(a,b) {
//     return a > b;
// }
console.log(isBigger(9,8));

function one(leng, colback) {
    console.log("111");
    colback();

}
function done() {
    console.log("222");

}
one("ere", done);
