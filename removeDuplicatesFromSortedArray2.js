var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let writePtr = 2; // Start writing from the 3rd element (0-based index).
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[writePtr - 2]) {
            nums[writePtr] = nums[i];
            writePtr++;
        }
    }

    return writePtr;
};
const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = removeDuplicates(nums1);
console.log(k1); // Output: 5
console.log(nums1); // Output: [1, 1, 2, 2, 3, ...]
const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const k2 = removeDuplicates(nums2);
console.log(k2); // Output: 7
console.log(nums2); // Output: [0, 0, 1, 1, 2, 3, 3, ...]
