function toNumber(value, def) {
  let result;
  if (typeof value === 'number' || value instanceof Number) {
    if (Number.isNaN(value)) {
      result = def;
    } else {
      result = Number(value);
    }
  } else if (typeof value === 'string') {
    result = Number(value);
    if (Number.isNaN(result)) {
      result = def;
    }
  } else {
    result = def;
  }
  return result;
}

// function generateOdds(len) {
//  const result = [];
//  for (let i = 1; i <= len; i += 1) {
//    result.push(1 + 2 * i);
//  }
//  console.log(result)
//  return result;
// }

// generateOdds(5);
// toNumber(null, 0)
// toNumber('test', 0)
// toNumber('1', 0)
// toNumber(42, 0)
// toNumber(new Number(42), 0)
// toNumber(undefined, -1)

// function doubleArray(arr) {
//  let result = arr;
//  result.map((el) => result.push(el));
//  console.log(result)
// }
// doubleArray(['Ace', 10, true])

// function getArrayOfPositives(arr) {
//  let result = [];
//  arr.map((el) => {
//    if (el > 0) {
//      console.log(el)
//      result.push(el);
//    } else {
//    }
//  });
//  console.log(result)
//  return result;
// }


// function getArrayOfPositives(arr) {
//  let result = [];
//  for (let i = 0; i < arr.length; i += 1) {
//    if (arr[i] > 0) {
//      result.push(arr[i]);
//    }
//  }
//  console.log(result)
// }
// getArrayOfPositives([-1, 2, -5, -4, 0])

//console.log(Boolean(false));
//console.log(Boolean(null));
//console.log(Boolean(0));
//console.log(Boolean(undefined));
//console.log(Boolean(NaN));
//console.log(Boolean('false'));
function get3TopItems(arr) {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    result.push(arr.reduce((a, b) => Math.max(a, b), -Infinity));
    const index = arr.indexOf(result);
    arr.splice(index, 1);
  }
  return result;
}
get3TopItems([1,2,3,4,5,6,7,8,9,10])


//function get3TopItems(arr) {
//  const result = [];
//  for (let i = 0; i < 3; i += 1) {
//    result.push(arr.reduce((a, b) => Math.max(a, b), -Infinity));
//    const index = arr.indexOf(result);
//    arr.splice(index, 1);
//  }
//  return result;
//}

function getPositivesCount(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0 && typeof arr[i] === 'number') {
      result += 1;
    }
  }
  console.log(result)
  return result;
}
getPositivesCount([])
getPositivesCount([ -1, 0, 1 ])
getPositivesCount([ 1, 2, 3])
getPositivesCount([ null, 1, 'elephant' ])
getPositivesCount([ 1, '2' ])
