function dot(str){
    let newStr="";
    newStr=str[0].toUpperCase() + ".";
    for(let i=0; i<str.length; i++){
        if (str[i]===" ") newStr=newStr+str[i+1].toUpperCase();
    }
    return newStr;
}

//!test

console.log(dot("farag fadool"));