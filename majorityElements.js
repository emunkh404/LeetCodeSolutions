let majorityElement = function(nums) {
    let candidate = nums[0];
   let count = 1;

   for (let i = 1; i < nums.length; i++) {
       if (count === 0) {
           candidate = nums[i];
           count = 1;
       } else if (nums[i] === candidate) {
           count++;
       } else {
           count--;
       }
   }

   return candidate;
};

const nums1 = [3, 2, 3];
const result1 = majorityElement(nums1);
console.log(result1); // Output: 3
const nums2 = [2, 2, 1, 1, 1, 2, 2];
const result2 = majorityElement(nums2);
console.log(result2); // Output: 2
