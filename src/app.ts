console.log("I beg your pardon");
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

const button = document.querySelector("button");

button?.addEventListener("click", (event) => {
  console.log(event);
});

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
