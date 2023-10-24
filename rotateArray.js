let rotate = function(nums, k) {
    k = k % nums.length; // Handle cases where k is larger than the array length
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
