function getClosestToZero(arrey1) {
    let arrey2 = [];
    for (let element = 0; element < arrey1.length; element ++){
       arrrey2.push(Math.abs(arrey1[element]));
    }

  const min = Math.min(...arrey2);

    let index = 0;

    for(let i = 0; i < arrey2.length; i ++) {
        if (arrey2[i] === min){
         index = i;
        }
    }
    console.log(arrey1[index])
}
getClosestToZero([3,8,9,2,9,7]);
