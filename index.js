let luckyNumbers =prompt(`Enter 3 lucky numbers seperated by commas.`,`1,7,11`)

let luckyNumbersArray = luckyNumbers.split(',');

console.log(luckyNumbersArray);

function getLength(arr) {
  return arr.length;
}
function getSum(arr){
  let sum= 0;
  for (let i=0; i<arr.length; i++){
    sum+=Number(arr[i]);
  }
  return sum;
}
function getMean(arr){
  return ((getSum(arr)/getLength(arr)).toFixed(2));
}
function getMin(arr){
  let min= Number(arr[0]);
  for (let i=1; i<arr.length; i++)
    if (Number(arr[i])<min){
      min=Number(arr[i]);
    }
  return min;
}
function getMax(arr){
  let max= Number(arr[0]);
  for (let i=1; i<arr.length; i++)
    if (Number(arr[i])>max){
      max=Number(arr[i]);
    }
  return max;
}
function getRange(arr){
  return (getMax(luckyNumbersArray)-getMin(luckyNumbersArray));
}
function getEvens(arr){
  let evens=[];
  for (let i=0; i<arr.length; i++)
    if(Number(arr[i]%2 ===0)){
      evens.push(Number(arr[i]));
    }
  if (evens.length>0){
    return evens;
  } else{
    return `I can't even.`;
  }
}
function getOdds(arr){
  let odds=[];
  for (let i=0; i<arr.length; i++)
    if(Number(arr[i]%2 !==0)){
      odds.push (Number(arr[i]));
    }
  if (odds.length>0){
    return odds;
  } else{
    return `That's odd.`;
  }
}


alert(getLength(luckyNumbersArray));
alert(getSum(luckyNumbersArray));
alert(getMean(luckyNumbersArray));
alert(getMin(luckyNumbersArray));
alert(getMax(luckyNumbersArray));
alert(getRange(luckyNumbersArray));
alert(getEvens(luckyNumbersArray));
alert(getOdds(luckyNumbersArray));