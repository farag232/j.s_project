function isogram(str){
    str = str.toLowerCase();
    let arr = new Array(123);
    arr.fill(0);
    for (let i=0; i < str.length; i++){
        let k=str.charCodeAt(i);  
        arr[k]++;
    }

    for(let k=0; k< arr.length; k++){
        if (arr[k]>1) return false;
    }
    return true;
}

console.log(isogram("abcdd"));