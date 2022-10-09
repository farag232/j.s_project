function findUniq(array){
    let gap1,gap2,theNum;
    let j=0;
    for(let i=2; i< array.length; i++){
      gap1=  array[j]- array[j+1];
      gap2= array[j+1]- array[i];
      if(gap1!==0 && gap2!==0) theNum = array[j+1];
      else if (gap1===0 && gap2!==0) theNum=array[i];
      else if (gap1!==0 && gap2===0) theNum=array[j];

      j++;
    }
    return theNum;
}

console.log(findUniq([, 1, 1, 1, 1, 1 ,2]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 0, 0, 0,-10, 0 ]));