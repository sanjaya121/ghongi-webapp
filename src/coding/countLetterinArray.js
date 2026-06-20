const array = ["A", "A", "B", "C"];

let result = [];
let count = 1;

for (var i = 1; i <= array.length; i++) {
  if (array[i] === array[i - 1]) {
    count++;
  } else {
    result.push(count + array[i - 1]);
    count = 1;
  }
}

console.log(result.join(","));
