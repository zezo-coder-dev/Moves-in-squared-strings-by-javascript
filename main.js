// functions //
function rot90Clock(arr) {
  return arr.map((str, i) => str.replace(/./g, (_, j) => arr[arr.length + ~j][i]));
}
function diag1Sym(arr) {
  return arr.map((str, i) => str.replace(/./g, (_, j) => arr[j][i]));
}
function selfieAndDiag1(arr) {
  return arr.map((str, i) => `${str}|${str.replace(/./g, (_, j) => arr[j][i])}`);
}
function oper(func, s) {
  return func(s.split('\n')).join('\n');
}
// end functions //

let string = "abcd\nefgh\nijkl\nmnop";
const result = oper(diag1Sym , string);
console.log(`The original string : \n${string}`);
console.log(`The result is : \n${result}`);
