const removeDuplicates = function(nums) {
    if (nums.length === 0) {
         return 0; // If the array is empty, there are no duplicates to remove.
     }
 
     let k = 0;
 
     for (let i = 1; i < nums.length; i++) {
         if (nums[i] !== nums[k]) {
             k++;
             nums[k] = nums[i];
         }
     }
 
     return k + 1;
 };

 const nums = [1,1,2];
 console.log(removeDuplicates(nums)); //2

 const nums1 = [];
 console.log(removeDuplicates(nums1));//0

 const nums2 = [0,0,1,1,1,2,2,3,3,4];
 console.log(removeDuplicates(nums2));//5