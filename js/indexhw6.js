// Quest 1.1
function getLengths(arr) {
  return arr.map(str => str.length);
}
console.log(getLengths(["Hello", "World", "Good"]))




// Quest 1.2
function currentSums(numbers) {
  const result = [];
  numbers.reduce((acc, num) => {
    const sum = acc + num;
    result.push(sum);
    return sum;
  }, 0);
  return result;
}
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers))

// Quest 1.3
function getPairsOfSeven(arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 7) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  
  return result;
}

console.log(getPairsOfSeven([0, 1, 2, 3, 4, 5, 6, 7])); 

// Quest 1.4
function sumMatrix(matrix) {
  return matrix.reduce((total, row) => total + row.reduce((rowSum, num) => rowSum + num, 0),0);
}
console.log(sumMatrix([[1, 2, 3], [4, 5], [6]]))




// Quest 2.1
function getFirstLetters(str) {
  const words = str.trim().split(/\s+/).filter(word => word.length > 0);

  return words.map(word => word[0]);
}
console.log(getFirstLetters("Каждый охотник желает знать"))



// Quest 2.2
function getTriples(str) {
  const result = [];
  for (let i = 1; i < str.length - 1; i++) {
    const triple = str[i - 1] + str[i] + str[i + 1];
    result.push(triple);
  }
  return result;
}
console.log(getTriples("hello")); 

// Quest 2.3
function sortDesc(digits) {
  return [...digits].sort((a, b) => b - a);
}
const original = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(sortDesc(original)); 



// Quest 2.4
function mergeDesc(arr1, arr2, arr3) {
  const merged = [...arr1, ...arr2, ...arr3];
  merged.sort((a, b) => b - a);
  return merged.join(' ');
}
console.log(mergeDesc([3, 1], [4, 1, 5], [9, 2])); 


// Quest 3.1
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3, 4])); 



// Quest 3.2
function countToExceed(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
      return i + 1;
    }
  }
  return -1;
}
console.log(countToExceed([2, 3, 4, 5, 6])); 
console.log(countToExceed([1, 2, 3]))


// Quest 3.3
function arrayFill(value, length) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(value);
  }
  return result;
}
console.log(arrayFill("x", 5)); 
console.log(arrayFill(0, 3)); 

// Quest 4.1
function isEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isEqualArrays([1, 2, 3], [1, 2, 3])); 
console.log(isEqualArrays([1, 2, 3], [3, 2, 1])); 



// Quest 4.2
function sumEven(...numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumEven(1, 2, 3, 4, 5, 6)); 
console.log(sumEven());    

// Quest 4.3
function getIntersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];

    let foundInSecond = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === value) {
        foundInSecond = true;
        break;
      }
    }
    if (foundInSecond) {
      let alreadyAdded = false;
      for (let k = 0; k < result.length; k++) {
        if (result[k] === value) {
          alreadyAdded = true;
          break;
        }
      }
      
      if (!alreadyAdded) {
        result.push(value);
      }
    }
  }

  return result;
}
console.log(getIntersection([1, 2, 2, 3], [2, 3, 4])); // [2, 3]
console.log(getIntersection(['a', 'b', 'c'], ['b', 'c', 'd']))