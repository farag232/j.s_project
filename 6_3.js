function sorting(str1, str2){
    let arr = new Array(123);
    let newSrt="";

    arr.fill(0);
    for (let i=0; i < str1.length; i++){
        let k=str1.charCodeAt(i);  
        arr[k]++;
    }
    for(let j=0; j<str2.length; j++){
        let l=str2.charCodeAt(j);
        arr[l]++;
    }
    for(let k=0; k< arr.length; k++){
        if (arr[k] > 0) newSrt=newSrt+String.fromCharCode(k);
    }
    return newSrt;
}

console.log(sorting("abc", "baba"));