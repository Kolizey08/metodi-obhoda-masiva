// function sum(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

//   return total;
// }
function sum(numbers) {
  let num = numbers.reduce(function (number, sum1) {
    return number + sum1;
  });
  return num;
}
/* ставит тире между словами */
// function hyphenate(words) {
//   let hyphenatedWords = '';

//   for (let i = 0; i < words.length; i++) {
//     if (hyphenatedWords === '') {
//       hyphenatedWords = words[i];
//     } else {
//       hyphenatedWords += `-${words[i]}`;
//     }
//   }

//   return hyphenatedWords;
// }

function hyphenate(words) {
  return words.reduce(function (items, sum) {
    if (items === " ") {
      return items + sum;
    } else {
      return items + `-${sum}`;
    }
  });
}
