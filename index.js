//Prompt the user to enter 3 numbers, but provides defaults
let luckyNumbers =prompt(`Enter 3 lucky numbers seperated by commas.`,`1,7,11`)

//Creates an array from the string (User prompt)
let luckyNumbersArray = luckyNumbers.split(',');

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
  for (let i=1; i<arr.length; i++) //This is f*cking cool, variable i keeps count of where in the array we are
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
  return (getMax(arr)-getMin(arr));
}
function getEvens(arr){
  let evens=[];
  for (let i=0; i<arr.length; i++)
    if(Number(arr[i])%2 ===0){
      evens.push(Number(arr[i]));
    }
  if (evens.length>0){
    return evens;
  } else{
    return `I can't even`;
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
    return `That's odd`;
  }
}


// Alerts 
alert(`This array is ${getLength(luckyNumbersArray)} numbers long`);
alert(`The sum of this array is ${getSum(luckyNumbersArray)}.`);
alert(`The mean of this array is ${getMean(luckyNumbersArray)}.`);
alert(`The smallest number in this array is ${getMin(luckyNumbersArray)}.`);
alert(`The biggest number in this array is ${getMax(luckyNumbersArray)}.`);
alert(`The range of this array is ${getRange(luckyNumbersArray)}.`);
alert(`The even number(s) in this array are... ${getEvens(luckyNumbersArray)}.`);
alert(`The odd number(s) in this array are... ${getOdds(luckyNumbersArray)}.`);