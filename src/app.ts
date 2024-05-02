const names: Array<string> = ["Max", "Luke", "Susan"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

console.log(promise);
