function bus(array){
    let on=0, off=0;
    for (let i=0; i<array.length; i++){
        on = on + array[i][0];
        off= off + array[i][1];
    }

    return on-off;
}



let arr = [[2,0],[3,5]];
console.log(bus(arr));