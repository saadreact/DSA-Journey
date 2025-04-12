// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

export function findFactorialRecursive(number) {
  //code here
  if (number === 1) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

export function findFactorialIterative(number) {
  //code here
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
}
