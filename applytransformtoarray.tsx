// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
 

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns a number

//! may ans
var map = function(arr, fn) {
    let a = [];
    for(let i = 0; i<arr.length;i++){
        let b = fn(arr[i],i)
        a.push(b)
    }
    return a;
};

//!best solution

// Intuition
// The problem requires transforming each element of an input array using a mapping function and returning a new array with the transformed elements. The solution involves iterating through the input array, applying the mapping function to each element, and adding the transformed element to a new array.

// Approach
// Initialize an empty array to store the transformed elements.
// Iterate through each element of the input array using a loop.
// Apply the mapping function to each element, passing in the current element and its index.
// Add the transformed element to the empty array.
// Return the transformed array.
// Complexity
// Time complexity:
// The time complexity of the above solution is O(n), where n is the length of the input array arr.

// Space complexity:
// The space complexity of the solution is O(n) as well. This is because we are creating a new array mappedArray with the same length as the input array to store the transformed elements.

// Learning
// In this solution, we learned how to use a loop to iterate through an array and apply a function to each element. We also learned how to create a new array and add transformed elements to it. Additionally, we learned that the push() method can be used to add elements to an array, and the return statement is used to return a value from a function. Finally, we learned how to define a function in JavaScript and pass arguments to it.

// Code in JS
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map1 = function(arr, fn) {
  var mappedArray = [];
  for (var i = 0; i < arr.length; i++) {
    mappedArray.push(fn(arr[i], i));
  }
  return mappedArray;
};
// Code in TypeScript
function map2<T, U>(arr: T[], fn: (value: T, index: number) => U): U[] {
  const mappedArray: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(fn(arr[i], i));
  }
  return mappedArray;
}