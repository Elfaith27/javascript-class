
// - Write a function that checks if a string is empty
function isStringEmpty(str){
    return str.length==0;
}
console.log('isStringEmpty:',isStringEmpty(""))
//- ⁠Implement a function that doubles a number
function doubleNumber(number){
    return number*2
}
console.log(doubleNumber(7))
//- ⁠Create a function that checks if a number is zero
function Iszero(number){
    return number==0;
}
console.log(Iszero(0))
//- ⁠Create a function that calculates the remainder of division
function division(dividend, divisor){
    return dividend%divisor;
}
console.log(division(17,5))
//- ⁠Create a function that converts a string to uppercase
function UpperCase(string){
    return string.toUpperCase(); 
}
console.log (UpperCase("mine"))

// Implement a function that checks if a number is even
function isNumberEven(number){
    return number%2==0;
}
console.log(isNumberEven(5))
// ⁠Write a function that calculates the factorial of a number
function factorialize(number){
    return number;
}
console.log(factorialize(20))   
// ⁠Write a function that returns the last character of a string
function lastCharacter(str){
    return str.charAt(str.length-1);
}
console.log(lastCharacter("today"))
// Write a function that returns the first element of an array
  let array = [5,4,3,2,1]
  function firstElement(array){
    return array.at(0);
  }
  console.log(firstElement([5,4,3,2,1]))
// ⁠Write a function that checks if a number is negative
function isNumberNegative(number){
    return number <0;
}
console.log (isNumberNegative(5))

//push last night’s codes and these ones to a git repo and submit the repo link here