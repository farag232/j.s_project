function toWeirdCase(str){
    let newStr ="";
    for( let i=0; i<str.length; i++){
        if (i%2===0) newStr=newStr+str[i].toUpperCase();
        else newStr= newStr=newStr+str[i].toLowerCase()
    }
    return newStr;
}



console.log(toWeirdCase("farag fadool"));