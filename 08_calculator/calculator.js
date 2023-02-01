const add = function(s1,s2) {
  return s1+s2;
	
};

const subtract = function(a1,a2) {
  if(a1>a2){
    return a1-a2;
  }
	
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
	
};

const multiply = function(array) {
  return array.reduce((accumulator, nextItem) => accumulator * nextItem);
};

const power = function(z1,z2) {
  return Math.pow(z1,z2)
	
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
	
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
