alert("100-masala");
(function () {
  console.log("100-masala");
})();
let inp = '"div*2"';
let all = "div";
function repeat(write, word) {
  let result1 = "<" + write + ">";
  let result2 = "<" + "/" + write + ">";

  if ((word = '"div*2"')) {
    console.log('"' + result1 + result2 + result1 + result2 + '"');
  } else if (word != '"div*2"') {
    console.log(false);
  }
  return '"' + result1 + result2 + result1 + result2 + '"';
}
console.log(repeat(all, inp));

alert("101-masala");
(function () {
  console.log("101-masala");
})();
function masala(n) {
  return (n * (n + 1)) / 2;
}

let son = 3;
let natija = masala(son);
console.log(natija);

//alert("102-masala");
//(function () {
//  console.log("102-masala");
//})();
//let son1 = +prompt("Raqam kiriting");
//let son2 = +prompt("Raqam kiriting");
//let arr = [0, 1, 2, 3, 4, 5];
//function aniqlash(num1, num2, array) {
// let lastIn = array.leng - 1;
// let lastEl = array[lastIndex];
// console.log(lastEl);
//}
//console.log(aniqlash(son1, son2, arr));

alert("103-masala");
(function () {
  console.log("103-masala");
})();

function taqqosla(num) {
  let cer = num;
  let result = num * num;

  let ans = result % 10;

  if (ans == cer) {
    console.log(true);
  } else if (ans != cer) {
    console.log(false);
  }
}
let www = taqqosla(+prompt("Raqam kiriting"));
alert("104-masala");
(function () {
  console.log("104-masala");
})();

function inqoshish(arr) {
  return arr.map((element, index) => element + index);
}

// Masala misoli
let exampleArray = [1, 2, 3, 4, 5];
let resultArray = inqoshish(exampleArray);
console.log(resultArray);

alert("105-masala");
(function () {
  console.log("105-masala");
})();

function shakarsizichmlk(ichmlklar) {
  const shakarli = ["cola", "fanta"];
  return ichmlklar.filter((ichmlk) => !shakarli.includes(ichmlk));
}

let misoluch = ["fanta", "cola", "water"];
let shakarsizichmlklar = shakarsizichmlk(misoluch);
console.log(shakarsizichmlklar);

alert("106-masala");
(function () {
  console.log("106-masala");
})();

function raqamlarsoni(number) {
  return String(number).length;
}

let masalan = 12345645;
let sanash = raqamlarsoni(masalan);
console.log(sanash);

alert("107-masala");
(function () {
  console.log("107-masala");
})();
function kattason(number) {
  let numStr = String(number);
  let numArr = numStr.split("");

  numArr.sort((a, b) => b - a);
  let result = numArr.join("");

  return Number(result);
}

console.log(kattason("001"));
console.log(kattason(999));

alert("108-masala");
(function () {
  console.log("108-masala");
})();

function randomson(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomson(5, 8, 9, 19));

alert("109-masala");
(function () {
  console.log("109-masala");
})();

function NarissistikNumber(number) {
  let numStr = String(number);
  let len = numStr.length;
  let sum = numStr
    .split("")
    .reduce((acc, digit) => acc + Math.pow(Number(digit), len), 0);

  return sum === number;
}

console.log(NarissistikNumber(153));
console.log(NarissistikNumber(370));

alert("110-masala");
(function () {
  console.log("110-masala");
})();
function kattaharflar(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(kattaharflar("sdgchdshcFGHCDCGbhgc"));
console.log(kattaharflar("JMZWCneOTFLWYwBWxyFw"));
