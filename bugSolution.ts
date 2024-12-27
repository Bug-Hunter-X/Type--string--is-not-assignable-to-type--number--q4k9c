function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 5); // Correct: numbers are passed
console.log(result); // Output: 10

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return String(a) + String(b); // Concatenate strings if not numbers
  }
}

let result2 = addSafe("hello", 5); // Handles strings gracefully
console.log(result2); // Output: hello5