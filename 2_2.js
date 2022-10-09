//$ Ex2.2 - One and Zero - Binary

function binary(array){

    let index=0;
    let sum=0;
    for (let i=array.length-1; i>=0; i--){
        if (array[i]===1) sum=sum+(2**index);
    index++;
    }
 return sum;
}



let arr= [1, 1, 1, 1];
console.log(binary(arr));
 arr= [1, 1, 0, 1];
console.log(binary(arr));