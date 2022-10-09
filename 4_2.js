function tribonacci(signature, n){
    let arr =[];
    arr[0]=signature[0];
    arr[1]=signature[1];
    arr[2]=signature[2];

    for(let i=3; i<=n; i++){
        arr[i]=arr[i-1]+arr[i-2]+arr[i-3];
    }
    return arr;
}


let arr= [1,1,1];
console.log(tribonacci(arr,8));