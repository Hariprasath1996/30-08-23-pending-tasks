
// Write a program that takes an array of elements and counts the occurrences of each
// element using a Map.
// Sample Input: const arr = [1, 2, 3, 2, 1, 4, 5, 4];
function countOccurrences(arr) {
  const elementCountMap = new Map();
  for (const element of arr) {

    if (!elementCountMap.has(element)) {
      elementCountMap.set(element, 1);
    } else {

      const currentCount = elementCountMap.get(element);
      elementCountMap.set(element, currentCount + 1);
    }
  }

  return elementCountMap;
}
const arr = [1, 2, 3, 2, 1, 4, 5, 4];
const result = countOccurrences(arr);
result.forEach((count, element) => {
  console.log(`Element ${element} occurs ${count} times`);
});

// above code is copied from website after i cleared 





// Write a program that takes an array of integers and a target sum. Check if there exists a
// subarray with the given sum using a Set.
// Sample Input: const arr = [1, 4, 20, 3, 10, 5];
// const targetSum = 33;

function hasSubarrayWithSum(arr, targetSum) {
  // Create a Set to store prefix sums
  const prefixSums = new Set();
  let currentSum = 0;

  for (const element of arr) {
    currentSum += element;

    // If the current sum is equal to the target sum or
    // the difference (currentSum - targetSum) is in the Set,
    // then there is a subarray with the target sum.
    if (currentSum === targetSum || prefixSums.has(currentSum - targetSum)) {
      return true;
    }
    prefixSums.add(currentSum);
  }

  
  return false;
}

const arr1 = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const result1 = hasSubarrayWithSum(arr1, targetSum);

if (result1) {
  console.log("There exists a subarray with the target sum.");
} else {
  console.log("There is no subarray with the target sum.");
}


// Write a program that takes an array of strings and groups anagrams together using a
// Map.
// Sample Input: const arr = [&quot;eat&quot;, &quot;tea&quot;, &quot;tan&quot;, &quot;ate&quot;, &quot;nat&quot;, &quot;bat&quot;];
// const chunkSize = 3;

function groupAnagrams(arr) {
  const anagramMap = new Map();

  for (const word of arr) {
    const sortedWord = word.split('').sort().join('');

    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, [word]);
    } else {
      anagramMap.get(sortedWord).push(word);
    }
  }

  return Array.from(anagramMap.values());
}

const arr2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramGroups = groupAnagrams(arr2);

console.log("Anagram Groups:");
for (const group of anagramGroups) {
  console.log(group);
}


// Write a program that takes an array of strings and reverses each string in the array
// using the array methods.
// Sample Input: const arr = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;];
const arr3 = ["apple", "banana", "orange"];

const reversedArray = arr3.map((str) => {
  // Split the string into an array of characters, reverse it, and join it back into a string
  return str.split('').reverse().join('');
});

console.log(reversedArray);

// Write a program that takes an array of numbers and filters out the perfect square
// numbers using the array methods.
// Sample Input const arr = [1, 2, 4, 7, 9, 16, 25];

const arr4 = [1, 2, 4, 7, 9, 16, 25];

// Function to check if a number is a perfect square
function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
}


const filteredArray = arr4.filter((num) => isPerfectSquare(num));

console.log(filteredArray);


// // Write a program that takes two objects and merges them into a single object
// Sample Input: const obj1 = { name: &quot;John&quot;, age: 30 };
// const obj2 = { city: &quot;New York&quot;, occupation: &quot;Engineer&quot; };
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);


// Write a program that takes an array of objects and converts it into a single object using
// Object.assign() and Object.entries().
// Sample Input: const arr = [
// { key: &quot;name&quot;, value: &quot;John&quot; },

// { key: &quot;age&quot;, value: 30 },
// { key: &quot;city&quot;, value: &quot;New York&quot; }
// ];

const arr5 = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" }
];
const resultObject = {};
arr5.forEach((obj) => {
  const { key, value } = obj;
  resultObject[key] = value;
});

console.log(resultObject);


