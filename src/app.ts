function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const element = document.getElementById(hookID);
    const p = new constructor();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING PERSON")
@WithTemplate("<h1>My person object</h1>", "app")
class PersonObj {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new PersonObj();

console.log(person);
