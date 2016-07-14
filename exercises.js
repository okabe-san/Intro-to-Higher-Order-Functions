var newArr = [8, 9, 10, 11];

function greaterThan10 (num) {
  return num > 10;
}

function any (arr, check) {
  for (var i=0; i<arr.length; i++) {
    if (check(arr[i])) {
     return true;
    }
  }
}

console.log(any(newArr, greaterThan10));


/////


function surprise (word) {
  return function (wordSecond) {
    return word + wordSecond;
  }
}

console.log(surprise('surprise')('!'));


/////

var numArr = [1, 2, 3, 4];

function onlyOdd (num) {
  return num%2 !== 0;
}

function filter (arr, check) {
  var newNum = [];
  for (var i=0; i<arr.length; i++) {
    if (check(arr[i])) {
      newNum.push(arr[i]);
    }
  }
  return newNum;
}

console.log(filter(numArr, onlyOdd));


/////


function sumTowNumbers (num) {
  return function (secondNum) {
    return num + secondNum;
  }
}

console.log(sumTowNumbers(3)(9));
