// it`s 2rd example

function palendrom(n) {
  const num = String(n);
  console.log(nume);
  const array = num.split("");
  console.log(array);
  const rever = array.reverse();
  console.log(rever);
  const join = rever.join("");
  console.log(join);
  const number = Number(join);
  console.log(number);
  if (n === number) {
    return true;
  } else {
    return false;
  }
}

console.log(palendrom(454));

// it`s 3rd example

// function kabisa(k) {
//   if ((k % 4 == 0 && k % 100 != 0) || (k % 100 == 0 && k % 400 == 0)) {
//     console.log("Siz kiritgan yil kabisa yili");
//   } else {
//     console.log("Kabisa yili kiritmadingiz ");
//   }
// }

// console.log(kabisa(1200));
