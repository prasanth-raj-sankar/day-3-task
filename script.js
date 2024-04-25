//Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array


//anonymous function

var res = function(arr){
    temp = [];

    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            temp.push(arr[i])
        }  
    }
    return temp;
} 

console.log(res([20,21,22,23,24,25,26]))

//IIFE
var arr=[1,2,3,4,5,6,7,8,9];
(function(arr){
      for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0)
        console.log(arr[i])
      }   
})(arr)


// 2.Convert all the strings to title caps in a string array

//anonymous function

var spr = function(str){
    str = str.toLowerCase().split(" ")
    for(var i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
return str.join(" ");

}

console.log(spr("prasanth raj"))

//IIFE
var str="prasanth raj";
(function(str){
    str = str.toLowerCase().split(" ")
    for(var i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(" "));

})(str)


// 3.Sum of all numbers in an array


//anonymous function
var number = function(array){
    var sum = 0;
    for(var i=0;i<array.length;i++){
        sum = sum+array[i]
    }
    return sum;

}

console.log(number([1,2,3,4,5,6]))

//IIFE

var a=[1,2,3,4,5,6,7,8];
var sum=0;
(function (array)
{
   for(let i=0; i<array.length; i++)
   {
     sum=sum+array[i];
   }
   console.log(sum);
})(a);


// 4.Return all the prime numbers in an array

//anonymous function

var prime = function(arraynum) {
    return arraynum.filter((num) => {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1; // Exclude 1 from prime numbers
    });
}

console.log(prime([2, 3, 4, 5, 6, 7, 8, 9, 10])); // Example array of numbers


//IIFE

(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])


//5.Return all the palindromes in an array  


//anonymous function

var palindromes = function(array) {
    return array.filter(str => {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the string is equal to its reverse
        return cleanStr === cleanStr.split('').reverse().join('');
    });
}

// Example usage
const words = ["level", "hello", "racecar", "Madam", "12321", "openai"];
console.log(palindromes(words));

//IIFE

// (  function (arr, n)
// {
//     // Traversing each element of the array
//     // and check if it is palindrome or not
//     for (let i = 0; i < n; i++)
//     {
//         let ans = isPalindrome(arr[i]);
//         if (ans == false)
//             return false;
//     }
//     return true;
// })([1,2,3] , 3)


//6.Return median of two sorted arrays of the same size.


//anonymous function
const findMedianSortedArrays = function(nums1, nums2) {
    let s1 = nums1.length;
    let s2 = nums2.length;
    let index = s1 + s2;
    
    if (s1 === 0) {
        if (s2 % 2 === 1) {
            return nums2[Math.floor(index / 2)];
        } else {
            return (nums2[Math.floor(index / 2) - 1] + nums2[Math.floor(index / 2)]) / 2;
        }
    }
    
    for (let i = 0; i < index / 2 + 1; i++) {
        nums1.push(nums2[i]);
    }
    
    nums1.sort((a, b) => a - b);
    
    if (index % 2 === 1) {
        return nums1[Math.floor(index / 2)];
    } else {
        return (nums1[Math.floor(index / 2) - 1] + nums1[Math.floor(index / 2)]) / 2;
    }
};

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3.5

 
 //IIFE:
 const result = (function(nums1, nums2) {
    let s1 = nums1.length;
    let s2 = nums2.length;
    let index = s1 + s2;
    if (s1 === 0) {
        if (s2 % 2 === 1) {
            return nums2[Math.floor(index / 2)];
        } else {
            return (nums2[Math.floor(index / 2) - 1] + nums2[Math.floor(index / 2)]) / 2;
        }
    }
    for (let i = 0; i < index / 2 + 1; i++) {
        nums1.push(nums2[i]);
    }
    nums1.sort((a, b) => a - b);
    console.log(nums1);
    if (index % 2 === 1) {
        return nums1[Math.floor(index / 2)];
    } else {
        return (nums1[Math.floor(index / 2) - 1] + nums1[Math.floor(index / 2)]) / 2;
    }
})([1, 3, 5], [2, 4, 6]);

console.log(result); // Output: 3.5



// 7.Remove duplicates from an array


//anonymous function
var array=[1,1,2,3,4,5];
function num(array){
   let dup = [...new Set(array)];
   return(dup);
 }
 console.log(num(array));

 
 //IIFE:
 (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])
   

// 8.Rotate an array by k times

// Reverse function definition
function reverse(array, li, ri) {
    while (li < ri) {
        let temp = array[li];
        array[li] = array[ri];
        array[ri] = temp;

        li++;
        ri--;
    }
}

// Anonymous function
const rotateArray = function(array, k) {
    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);

    return array;
};

// Example usage
const result1 = rotateArray([1, 2, 3, 4], 2);
console.log(result1);

 //IIFE:
(function(array, k) {
    // Reverse function definition
    function reverse(arr, li, ri) {
        while (li < ri) {
            let temp = arr[li];
            arr[li] = arr[ri];
            arr[ri] = temp;
            li++;
            ri--;
        }
    }

    k = k % array.length;
    if (k < 0) {
        k += array.length;
    }

    reverse(array, 0, array.length - k - 1);
    reverse(array, array.length - k, array.length - 1);
    reverse(array, 0, array.length - 1);

    console.log(array); // Output the rotated array
})([1, 2, 3, 4], 2);




// 2.Do the below programs in arrow functions.
//   1.Print odd numbers in an array
//   2.Convert all the strings to title caps in a string array
//   3.Sum of all numbers in an array
//   4.Return all the prime numbers in an array
//   5.Return all the palindromes in an array





// A.Print odd numbers in an array
// Arrow Function :
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

// B.Convert all the strings to title caps in a string array
// USING ARROW FUNCTION:
var str="my name is ayesha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));

// c.Sum of all numbers in an array

var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(ghi(a));

// D.Return all the prime numbers in an array

let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

// E.Return all the palindromes in an array

Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }


