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


function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, index) {
        // Found the complete word
        if (index === word.length) {
            return true;
        }

        // Out of bounds
        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols
        ) {
            return false;
        }

        // Wrong character
        if (board[r][c] !== word[index]) {
            return false;
        }

        // Mark cell as visited
        const temp = board[r][c];
        board[r][c] = "#";

        const found =
            dfs(r + 1, c, index + 1) ||
            dfs(r - 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1);

        // Backtrack
        board[r][c] = temp;

        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];


function ratInMaze(maze) {
    const n = maze.length;
    const result = [];
    const path = [];

    if (maze[0][0] === 0 || maze[n - 1][n - 1] === 0) {
        return result;
    }

    const visited = Array.from(
        { length: n },
        () => Array(n).fill(false)
    );

    const directions = [
        [1, 0, "D"],   // Down
        [0, -1, "L"],  // Left
        [0, 1, "R"],   // Right
        [-1, 0, "U"]   // Up
    ];

    function dfs(r, c) {
        // Destination reached
        if (r === n - 1 && c === n - 1) {
            result.push(path.join(""));
            return;
        }

        // Mark current cell
        visited[r][c] = true;

        for (const [dr, dc, move] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Check valid move
            if (
                nr >= 0 &&
                nr < n &&
                nc >= 0 &&
                nc < n &&
                maze[nr][nc] === 1 &&
                !visited[nr][nc]
            ) {
                // Choose
                path.push(move);

                // Explore
                dfs(nr, nc);

                // Undo
                path.pop();
            }
        }

        // Backtrack
        visited[r][c] = false;
    }

    dfs(0, 0);

    return result;
}

function solveNQueens(n) {
    const result = [];
    const board = Array.from(
        { length: n },
        () => Array(n).fill(".")
    );

    const cols = new Set();
    const diag1 = new Set(); // r - c
    const diag2 = new Set(); // r + c

    function backtrack(row) {
        // All queens placed
        if (row === n) {
            result.push(
                board.map(row => row.join(""))
            );
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check column and diagonals
            if (cols.has(col)) continue;
            if (diag1.has(row - col)) continue;
            if (diag2.has(row + col)) continue;

            // Choose
            board[row][col] = "Q";

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            // Explore
            backtrack(row + 1);

            // Undo
            board[row][col] = ".";

            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);

    return result;
}


function solveSudoku(board) {
    function isValid(row, col, num) {
        // Row
        for (let c = 0; c < 9; c++) {
            if (board[row][c] === num) {
                return false;
            }
        }

        // Column
        for (let r = 0; r < 9; r++) {
            if (board[r][col] === num) {
                return false;
            }
        }

        // 3 x 3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;

        for (let r = boxRow; r < boxRow + 3; r++) {
            for (let c = boxCol; c < boxCol + 3; c++) {
                if (board[r][c] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    function backtrack() {
        // Find an empty cell
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {

                if (board[row][col] !== ".") {
                    continue;
                }

                // Try 1 → 9
                for (let num = 1; num <= 9; num++) {
                    const value = String(num);

                    if (!isValid(row, col, value)) {
                        continue;
                    }

                    // Choose
                    board[row][col] = value;

                    // Explore
                    if (backtrack()) {
                        return true;
                    }

                    // Undo
                    board[row][col] = ".";
                }

                // No number works
                return false;
            }
        }

        // No empty cells → solved
        return true;
    }

    backtrack();
}

function canPartitionKSubsets(nums, k) {
    const total = nums.reduce((sum, num) => sum + num, 0);

    // Total must be divisible by k
    if (total % k !== 0) return false;

    const target = total / k;

    // Largest number cannot exceed target
    if (Math.max(...nums) > target) return false;

    // Large numbers first → better pruning
    nums.sort((a, b) => b - a);

    const buckets = new Array(k).fill(0);

    function backtrack(index) {
        // All numbers placed
        if (index === nums.length) {
            return true;
        }

        const num = nums[index];

        for (let i = 0; i < k; i++) {

            // Don't exceed target
            if (buckets[i] + num > target) {
                continue;
            }

            // Avoid equivalent empty buckets
            if (i > 0 && buckets[i] === buckets[i - 1]) {
                continue;
            }

            // Choose
            buckets[i] += num;

            // Explore
            if (backtrack(index + 1)) {
                return true;
            }

            // Undo
            buckets[i] -= num;
        }

        return false;
    }

    return backtrack(0);
}
console.log(solveNQueens(4));
console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE"));    // true
console.log(exist(board, "ABCB"));   // false
console.log(partition("aab"));
console.log(
    combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
);
console.log(combinationSum([2, 3, 6, 7], 7));
console.log(permute([1, 2, 3]));
console.log(subsets([1, 2, 3]));