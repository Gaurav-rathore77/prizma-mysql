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

function combinationSum(candidates, target) {
    const result = [];
    const path = [];

    function backtrack(start, remaining) {
        // Found a valid combination
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            // Since sorted, no later number can work either
            if (num > remaining) break;

            // Choose
            path.push(num);

            // i, NOT i + 1
            // because we can reuse the same number
            backtrack(i, remaining - num);

            // Undo
            path.pop();
        }
    }

    candidates.sort((a, b) => a - b);
    backtrack(0, target);

    return result;
}

function combinationSum2(candidates, target) {
    const result = [];
    const path = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start, remaining) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Because sorted
            if (candidates[i] > remaining) {
                break;
            }

            // Choose
            path.push(candidates[i]);

            // i + 1 => each element can be used only once
            backtrack(i + 1, remaining - candidates[i]);

            // Undo
            path.pop();
        }
    }

    backtrack(0, target);

    return result;
}


function partition(s) {
    const result = [];
    const path = [];

    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {
        // Entire string partitioned
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            // Only choose a palindrome substring
            if (!isPalindrome(start, end)) continue;

            // Choose
            path.push(s.slice(start, end + 1));

            // Explore
            backtrack(end + 1);

            // Undo
            path.pop();
        }
    }

    backtrack(0);

    return result;
}

console.log(partition("aab"));
console.log(
    combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
);
console.log(combinationSum([2, 3, 6, 7], 7));
console.log(permute([1, 2, 3]));
console.log(subsets([1, 2, 3]));