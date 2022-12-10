// it`s 2rd example

// function palendrom(n) {
//   const num = String(n);
//   const array = num.split("");
//   const rever = array.reverse();
//   const join = rever.join("");
//   const number = Number(join);
//   if (n === number) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palendrom(454));

// it`s 3rd example

// function kabisa(k) {
//   if ((k % 4 == 0 && k % 100 != 0) || (k % 100 == 0 && k % 400 == 0)) {
//     console.log("Siz kiritgan yil kabisa yili");
//   } else {
//     console.log("Kabisa yili kiritmadingiz ");
//   }
// }

// console.log(kabisa(1200));

// it`s 4rd example
var num = [-1, -2, -3, 5, 6, 1];
var manfiy = [];

num.forEach(function (item) {
  if (item < 0) {
    manfiy.push(item);
  }
});

console.log(manfiy);
