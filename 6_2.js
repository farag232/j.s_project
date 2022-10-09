function duplicates(str){
    var arr = new Array(123);
    arr.fill(0);
    for (let i=0; i < str.length; i++){
        let k=str.charCodeAt(i);
        arr[k]++;
    }
    for (let j=0; j< arr.length; j++){
        if (arr[j]>0) console.log(`${String.fromCharCode(j)} occurs ${arr[j]} times`);
    }
}

duplicates("ffaaaa33rrjj");