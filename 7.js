//filter
function arrMethod1(arr){

    let newArr=arr.filter(word=> word.length > 3);
    return newArr;
}

console.log(arrMethod1(["hello", "you","I"]));

//forEach

function arrMethod2(arr){
    let newArr=[];
    arr.forEach(element => {
     newArr.push(element*4) ;
    });
    return newArr;
}

console.log(arrMethod2([7, 4,2]));

//map

function arrMethod3(arr){

    let newArr= arr.map(element=> element.length)
    return newArr;
}

console.log(arrMethod3(["ba","fa","fesl"]));