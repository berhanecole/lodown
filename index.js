'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes a <value> and returns the <value> unchanged
 * 
 * @param: {*}: the value to be returned
 * 
 * @returns {*}: returns the value unchanged
 */
 
 function identity(value){
    /**input is a value 
     * output: a value unchanged
     * constraints:
     * edge cases:
     */
    return value;

    
}

module.exports.identity = identity;

/**
 * typeOf: takes a value of any type and returns what data type the value is
 * 
 * @param {*}: value to have type discerned
 * @returns {string}: the data type of value in form of string
 * 
 */
 
 function typeOf(value){
    /**
     * input is any kind of value.
     * output returns the type of <value> as a string
     * constraints:
     * edge cases: array, null, and functions return as object
     */
     if(typeof value === "string"){
         return "string";
     } else if(typeof value === "number"){
         return "number";
     } else if(typeof value === "boolean"){
         return "boolean";
     } else if(Array.isArray(value) === true){
         return "array";
     } else if(value === null){
         return "null";
     } else if(typeof value === "function"){
         return "function";
     } else if(typeof value === "undefined"){
         return "undefined";
     } else if(typeof value === "object"){
         return "object";
     }
}

module.exports.typeOf = typeOf();

/**
 * first: Designed to give a sequence of indices from the start of a given
 * array correlating to a given parameter (number)
 * @param {array}: an array to iterate through
 * @param {number}: a number that indicates how many indices' values to return
 * @return{array}: designated elements of array
 */
 
  function first(array, num){
  
  /** 
 * inputs: (2) an array and a number
 * outputs: 
 * (1) if param array is not an array, return []
 * (2) if number is not given OR NaN, return the first element in the array param
 * (3) Else return <param> numbers of items of array
 * 
 * edge cases: 
 * (1)what if number is negative? return empty array []
 * (2) what if number is greater than what is present in the array? return full Array
 */
     let arrayBox = [];
     
     if(Array.isArray(array) === false){
         return [];
     } else if (typeof num !== "number" || isNaN(num) === true){
         return array[0];
     } else if (num <= 0){
         return [];
     } else if (num === 1){
         return array[0];
     } else if(num > 1){
         for(let i = 0; i < num; i++){
             if(i < array.length){
                 arrayBox.push(array[i]);
                
             }
         }
         return arrayBox;
     }
     }
module.exports.first = first;

/**
 * last: Designed to give a sequence of indices from the end of a given
 * array correlating to a given parameter (number)
 * @param {array}: an array to iterate through
 * @param {number}: a number that indicates how many indices' values to return
 * @return{array}: designated elements of array
 */
 
  function last(array, num){
  /**
 * input: (2) an array and a number
 * output: 
 * (1) if param array is not an array, return empty array [];
 * (2) if number is not given or not number return last element in array
 * (3) other wise return last number items of the array
 * 
 * edge cases: (2) 
 * if number is negative return empty array
 * if number is greater than array length return entire array
 */

     let arrayBox = [];
     
     if(Array.isArray(array) === false){
         return [];
     } else if (typeof num !== "number" || isNaN(num) === true){
         return array[array.length - 1];
     } else if (num <= 0){
         return [];
     } else if (num === 1){
         return array[array.length - 1];
     } else if(num > 1){
         for(let i = num; i > 0; i--){
             if(i < array.length){
                 arrayBox.unshift(array[i]);
            } else if(i > array.length){
             return array;
            }
         }
         return arrayBox;
     }
     }
     
module.exports.last = last;

/**
 * indexof: Designed to return the index in which a value first appears or if it appears at all
 * @param {array}: an array which to iterate through and find value
 * @param {*} : a value that may appear in given array
 * @return {number}: index in which value first occurs, if value not present -1
 */
 
  
 function indexOf(array, value){
  /**
 * input: (2) an array and a value
 * output: 
 * (1) index of array where there is the first appearance of param value
 * (2) return -1 if value is not in array
 * (3) all accomplished without index of
 * edge Cases:
 * (1) if array has multiple occurences, catalogue first occurence
 * (2) if val is not in array return -1
 */
 if(array.includes(value) === true){
    for(let i = 0; i < array.length; i++){
     if(array[i] === value){
      return i;
     } 
    }
 } else if(!array.includes(value)){
  return -1;
 }
 }
 
 module.exports.indexOf = indexOf;

 /** contains: designated to return whether or not a value appears within
  * an array
  * @param {array}: an arrau to loop through to find value
  * @param {*}: a value to find within array
  * @return {boolean}: whether or not array contains value
  */

  
 function contains(array, value){
  /**
 * input: (2) an array and a value
 * Output: (2) boolean 
 * (1) return true if param array contains value
 * (2) return false if otherwise
 * Constraints: MUST USE TERNARY OPERATOR
 * Edge Cases: what if no <value is given>
 * 
 */
 let funkyBool = array.includes(value)? true: false;
 return funkyBool;
 }
 
module.exports.contains = contains;
