function nb_year(p0, percent, aug,p){
    let percent1=percent/100;
    let yearCount=0;
    let value =0;

    while(value < p){

        value = p0+(p0*percent1)+aug;
        p0=value;
        yearCount++;
    }
    return yearCount;
}

console.log(nb_year(1000,2,50,1200));
console.log(nb_year(1500, 5, 100, 5000));