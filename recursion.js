function solveNQueens(n) {
    const result = [];

    const board = Array.from({ length: n }, () => Array(n).fill("."));

    const cols = new Set();
    const diag1 = new Set(); // row - col
    const diag2 = new Set(); // row + col

    function backtrack(row) {
        // All queens placed
        if (row === n) {
            result.push(board.map(row => row.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check column and diagonals
            if (
                cols.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) {
                continue;
            }

            // Place queen
            board[row][col] = "Q";
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            // Move to next row
            backtrack(row + 1);

            // Backtrack
            board[row][col] = ".";
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);

    return result;
}

function solveNQueens(n) {
    let ans = [];

    let board = Array.from(
        { length: n },
        () => Array(n).fill(".")
    );

    function isSafe(row, col) {

        // 1. Same column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") {
                return false;
            }
        }

        // 2. Upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") {
                return false;
            }
        }

        // 3. Upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") {
                return false;
            }
        }

        return true;
    }

    function backtrack(row) {

        // All queens placed
        if (row === n) {
            ans.push(board.map(row => row.join("")));
            return;
        }

        // Try every column
        for (let col = 0; col < n; col++) {

            if (isSafe(row, col)) {

                // Place queen
                board[row][col] = "Q";

                // Go to next row
                backtrack(row + 1);

                // Remove queen
                board[row][col] = ".";
            }
        }
    }

    backtrack(0);

    return ans;
}

function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c, i) {
        if (i === word.length) return true;

        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            board[r][c] !== word[i]
        ) {
            return false;
        }

        const temp = board[r][c];
        board[r][c] = "#";

        const found =
            dfs(r + 1, c, i + 1) ||
            dfs(r - 1, c, i + 1) ||
            dfs(r, c + 1, i + 1) ||
            dfs(r, c - 1, i + 1);

        board[r][c] = temp; // backtrack

        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }

    return false;
}

function generateParenthesis(n) {
    const ans = [];

    function backtrack(str, open, close) {

        // Complete string
        if (str.length === 2 * n) {
            ans.push(str);
            return;
        }

        // Add '('
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // Add ')'
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return ans;
}

console.log(solveNQueens(4));
