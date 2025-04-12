export function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("yoyo master");

export function reverseStringRecursive(str) {
  // base case
  if (str === "") {
    return "";
  }
  // recursion
  return reverseStringRecursive(str.slice(1)) + str[0];
}
