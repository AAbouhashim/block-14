let isValid= false;
let luckyNumbersArray = [];

// This chunk has a couple functions
// First it prompts the user to enter their lucky numbers
// Once it confirms that userInput doesn't equal null or empty space, it continues
// An array of numbers is created to store userInput 
// temporarily while the string is processed into numbers
// Lastly, the userInput is checked for symbols or letters
// an alert pops up at any point where an invalid input is detected and the user
// cannot continue until the while loop has deemed the entry valid

while (!isValid){
  userInput = prompt(`Enter your lucky numbers seperated by commas.`,`1,7,11`);

  if (userInput === null||userInput.trim() === ""){
    alert(`Please enter your lucky numbers seperated by commas. (Numbers and Commas Only)`)
    continue;
   }

   let numbers = userInput.split(`,`).map(num => num.trim());

   if (numbers.every(num => !isNaN(num) && num !== "")) {
    isValid = true;
    luckyNumbersArray = numbers;
   } else {
    alert(`Please enter valid numbers seperated by commas. No letters or symbols allowed.`);
   }

}

luckyNumbersArray = luckyNumbersArray.map(Number);

// Mathematical functions 
// To be called later 

function getLength(arr) {
  return arr.length;
}
function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
function getMean(arr) {
  return ((getSum(arr)/getLength(arr)).toFixed(2));
}

//math.Min may also be used
function getMin(arr) {
  let min= Number(arr[0]);
  for (let i=1; i<arr.length; i++)
    if (Number(arr[i])<min){
      min=Number(arr[i]);
    }
  return min;
}

// math.Max may also be used
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
    if(Number(arr[i]) %2 ===0){
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
    if(Number(arr[i]) %2 !==0){
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