function repeatStr(num, str){
    let newStr="";
    for(let i=0; i<num; i++)
    newStr=newStr + str;

    return newStr;
}

console.log(repeatStr(3,"farag"));