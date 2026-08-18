function subsets(nums) {
    const result = [];
    const subset = [];

    function backtrack(index) {
        // Every node represents a valid subset
        result.push([...subset]);

        for (let i = index; i < nums.length; i++) {
            // Choose
            subset.push(nums[i]);

            // Explore
            backtrack(i + 1);

            // Undo choice
            subset.pop();
        }
    }

    backtrack(0);
    return result;
}

console.log(subsets([1, 2, 3]));