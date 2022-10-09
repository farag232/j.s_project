function accum (str){
    let newStr="";
    for (let i=0; i< str.length; i++){
        if (i>0) newStr=newStr + "-";
        for(let j=0; j<=i; j++){
            if(j===0) {
                newStr=newStr+str[i].toUpperCase();
            }
            else newStr=newStr+str[i];
        }
    }
    return newStr;
}

console.log(accum("abcd"));