type Combined = string | number;
type Conversion = "as-number" | "as-string";

function add(input1: Combined, input2: Combined, resultType: Conversion) {
  let result;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNumbers = add(3, 5, "as-number");
const combinedStringNumbers = add("3", "5", "as-number");
const combinedNames = add("Max", "Anna", "as-string");

console.log(combinedNumbers, combinedNames, combinedStringNumbers);
