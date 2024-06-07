// ? task 1
const resolveBtn = document.querySelector("#resolve");
const rejectBtn = document.querySelector("#reject");

const promise = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => resolve("Promise resolved"));
  rejectBtn.addEventListener("click", () => reject("Promise rejected"));
});

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error));

// ? task 2

async function myPromise() {
  await promise; // pending
  // throw new Error("Promise rejected"); // reject
  // return new Promise((res, rej) => rej("Rejected")); // reject
  return "Promise resolved"; // resolve
}

const res = await myPromise();
console.log(res); // Promise { <state> }
