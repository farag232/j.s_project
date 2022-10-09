//$ Ex2.1 - Sum of lowest numbers

function sumLowest(array){
    array.sort();
    return array[0]+array[1];
}

//! test

let arr = [8,2,5,6];
console.log(sumLowest(arr));