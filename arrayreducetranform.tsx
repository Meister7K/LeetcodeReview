// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.

 

// Example 1:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.
// Example 2:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0]^2 = 101
// (101) + nums[1]^2 = 105
// (105) + nums[2]^2 = 114
// (114) + nums[3]^2 = 130
// The final answer is 130.
// Example 3:

// Input: 
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.
 

// Constraints:

// 0 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// 0 <= init <= 1000

//!my code
var reduce = function(nums, fn, init) {
    if( nums.length === 0) return init;

    let a = init;
    
    for(let i = 0; i<nums.length; i++){
        a = fn(a, nums[i]);
    }
    return a;
};

//! best code 
// Intuition
// Thereduce functionis a higher-order function that takes an array, a reducer function, and an initial value, and returns a single accumulated value by applying the reducer function to each element of the array.

// Approach
// To implement the reduce function, we can iterate over each element of the array, apply the reducer function to the current value and the current element, and update the accumulated value. We can use a for loop, forEach method, or a for...of loop to perform the iteration.

// Complexity
// Time complexity:
// The time complexity of the reduce function implementation is O(n), where n is the length of the array, because the function iterates over each element of the array exactly once.

// Space complexity:
// O(1), as it only uses a single variable to store the accumulated value.

// What We Learn
// By implementing the reduce function, we learn how to use higher-order functions to transform and reduce data in an array. We also learn how to use different approaches, such as for loops, forEach method, or for...of loops, to iterate over arrays.

// Additional information:
// The fn parameter is a function that takes two arguments: the accumulated value and the current element of the array. The purpose of the fn function is to perform a specific operation on these two values and return the result.

// Code In JavaScript
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce1 = function(nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
// Code In TypeScript
type Reducer<T, U> = (acc: T, curr: U) => T;

function reduce2<T, U>(nums: U[], fn: Reducer<T, U>, init: T): T {
  let val: T = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}
// Using forEach loop
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let val = init;
  nums.forEach(num => {
    val = fn(val, num);
  });
  return val;
};
// Using reduceRight
function reduceArray3(nums, fn, init) {
  return nums.reverse().reduceRight((val, num) => fn(val, num), init);
}
// Using recursion
function reduceArray4(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  } else {
    const head = nums[0];
    const tail = nums.slice(1);
    const val = fn(init, head);
    return reduceArray4(tail, fn, val);
  }
}
// Using for...of loop
function reduceArray(nums, fn, init) {
  let val = init;
  for (const num of nums) {
    val = fn(val, num);
  }
  return val;
}