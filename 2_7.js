function basicOp(operation, value1, value2){
    switch(operation){
        case "+":
            return value1+value2;
        case "-":
            return value1-value2;
        case "/":
            return value1/value2;
        case "*":
            return value1*value2;
        
    }
}


console.log(basicOp("+",1,1));
console.log(basicOp("*",1,1));
console.log(basicOp("/",1,1));
console.log(basicOp("-",1,1));