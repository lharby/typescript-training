type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// const userInput = <HTMLInputElement>document.getElementById("user-input");
const userInput = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "Hello there";

interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

const error: ErrorContainer = {
  id: "01",
  email: "Not a valid email",
};

console.log(error);

const fetchUserData = {
  id: "uid1",
  name: "Luke",
  job: { title: "Developer", description: "Internal title" },
};

console.log(fetchUserData?.job?.title);

const userID = "";

const storedData = userID ?? "DEFAULT";

console.log(storedData);
