function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result", +num);
}

printResults(add(5, 7));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// conbineValues = printResults;

console.log(combineValues(8, 9));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
