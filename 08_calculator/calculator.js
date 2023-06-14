const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
let total = 0; 
  for(let number of numbers){
    parseInt(number)
    total += number;
  }
  return total
};

const multiply = function(numbers) {
  let total = 1; 
  for(let number of numbers){
    parseInt(number)
    total *= number;
  }
  return total
};

const power = function(a,b) {
  let total = a;
	for (let i=1; i < b; i++){
     total *= a
  }
  return total
};

const factorial = function(number) {
  let total = 1;
	for (let i=1; i<=number; i++){
    total *= i;
  } return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
