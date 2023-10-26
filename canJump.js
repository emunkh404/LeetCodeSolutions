let canJump = function(nums) {
    let furthest = 0; // Initialize the furthest position reachable.

    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the furthest position, return false.
        if (i > furthest) {
            return false;
        }

        // Update the furthest position if needed.
        furthest = Math.max(furthest, i + nums[i]);

        // If the furthest position is greater than or equal to the last index, return true.
        if (furthest >= nums.length - 1) {
            return true;
        }
    }

    return false; // If you've iterated through the entire array and haven't reached the last index, return false.
};

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false
