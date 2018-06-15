/*
 * Use the reduce method in combination with the concat method to “flatten” 
 * an array of arrays into a single array that has all the elements of the input arrays.
 */

var arrOfArr = [["T", "O", "M"], ["I", "S"], [], [666]];
console.log(arrOfArr);

const concatedArr = arrOfArr.reduce((accumulator, value) => accumulator.concat(value));

console.log(concatedArr);