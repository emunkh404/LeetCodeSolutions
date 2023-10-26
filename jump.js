let jump = function(nums) {
    let jumps = 0;
    let maxPosition = 0;
    let endPosition = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);

        if (i === endPosition) {
            jumps++;
            endPosition = maxPosition;
        }
    }

    return jumps;
};

// Example usage:
console.log(jump([2, 3, 1, 1, 4])); // Output: 2
console.log(jump([2, 3, 0, 1, 4])); // Output: 2
