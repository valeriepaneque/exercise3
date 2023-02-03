//3-1 flattening(list)

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const flat = arrays.reduce((total, amount) => {
    return total.concat(amount);
  }, []);
  console.log(flat)
// → [1, 2, 3, 4, 5, 6]

//3-2 loop
// Your code here.
export function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
      body(i)
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//3-3, 3-4 everyLoop
export function every(array, test) {
    // Your code here.
    for (let element of array) {
      if (test(element) === false) {
        return false;
      }
    }
    return true;
  }
  //everySome
export function every(array, test) {
    return !array.some(element => !test(element));
  }

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


  
