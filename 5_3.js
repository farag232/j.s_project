function camel(str){
    let flag=false;
    let newStr="";
    for(let i=0; i<str.length; i++){
        if (str[i]==="-" || str[i]==="_")  flag =true;
        if (flag==true){
        newStr = newStr+(str[i]);
        newStr = newStr+ str[i+1].toUpperCase();
        i++;
        }
        else newStr = newStr+(str[i]);
        flag=false;

    }
    return newStr;
}

console.log(camel("happy_birthday-the-stealth-warrior"));