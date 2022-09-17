// If you try to run this function, you'll get an error. Fix the function and assign a global scope to the variable sport. How can we do this?

// function canPlay() {
// let sport = " Football";

// if (true) {
// let personName = "Cosimo";
// }

// console.log(personName + sport);
// }

// canPlay();

let sport = " Football";

function canPlay() {
  let personName;
  if (true) {
    personName = "Cosimo";
  }
  console.log(personName + sport);
}
canPlay();
