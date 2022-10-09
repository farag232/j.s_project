function findNextSquare(square){
    if (!(Number.isInteger(Math.sqrt(square))))
    return -1;
    else {
    let num= Math.floor((Math.sqrt(square)))+1;
    return num**2;
    }
}



console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));