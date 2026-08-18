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

function permute(nums) {
    const result = [];
    const path = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        // Complete permutation
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // Choose
            used[i] = true;
            path.push(nums[i]);

            // Explore
            backtrack();

            // Undo
            path.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}

console.log(permute([1, 2, 3]));
console.log(subsets([1, 2, 3]));