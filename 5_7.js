function shortest(str){

    let length=0;
    let min=str.length;

    if (!str.includes(" ")) return str.length;

    for (let i=0; i<str.length; i++){
        if (str[i]!==" "){
            length++;
        } 
        else {
            if (length<min) min=length;
            length=0;
        }
    }
    return min;
}



console.log (shortest("hello there how are you?"));
console.log (shortest("hello"));
console.log (shortest("hello thereeee how are you?"));