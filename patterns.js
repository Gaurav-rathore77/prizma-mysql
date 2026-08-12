function sqPrint(n){
    for(let i = 0 ; i< n ; i ++){
        let row = ""
        for(let j  = 0 ; j < n; j++){
            row+="*"
        }
        console.log(row)
    }
}

function piraidPrint(n){
    for(let i = 0 ; i< n ; i ++){
        let row = ""
        for(let j  = 0 ; j < i; j++){
            row+="*"
        }
        console.log(row)
    }
}

function invertPiramidPrint(n){
    for(let i =n ; i>= 0; i --){
        let row = ""
        for(let j  = 0 ; j < i; j++){
            row+="*"
        }
        console.log(row)
    }
}
function piraidWithSpacePrint(n){
    for(let i = 0 ; i<=n ; i ++){
        let row = ""
    
         for (let j = 0; j <= n - i; j++) {
            row += " ";
        }
        for(let j  = 0 ; j <=i; j++){
            
            row+="*"
        }
        console.log(row)
    }
}
function fullPiramid(n){
    for(let i = 0 ; i< n ; i ++){
        let row = ""
        
     for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }

    for(let j = 0  ; j<2*i+1 ; j++){
       row+="*"
    }
    console.log(row)
}}
function ivertedFulluPirammid(n){
    for(let i = n ; i>=0 ; i --){
        row = ""
        
        for(let j = 0 ; j <=n-i-1 ; j++){
            row+=" "
        }
        
        for(let j = 0 ;j<2*i+1 ; j++ ){
            row+="*"
        }
        
        console.log(row)
    }
}

function diomond(n){
     for(let i = 0 ; i<n ; i ++){
        row = ""
        
        for(let j = 0 ; j <=n-i-1 ; j++){
            row+=" "
        }
        
        for(let j = 0 ;j<2*i+1 ; j++ ){
            row+="*"
        }
        
        console.log(row)
    }
    for(let i = n ; i>=0 ; i --){
        row = ""
        
        for(let j = 0 ; j <=n-i-1 ; j++){
            row+=" "
        }
        
        for(let j = 0 ;j<2*i+1 ; j++ ){
            row+="*"
        }
        
        console.log(row)
    }
}
function hollowSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}

hollowSquare(6);
function hollowSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row);
    }
}
function numberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j;
        }

        console.log(row);
    }
}
function numberTriangle(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const row = [];

        for (let j = 1; j <= i; j++) {
            row.push(j);
        }

        result.push(row.join(""));
    }

    console.log(result.join("\n"));
}
function floydTriangle(n) {
    let num = 1;

    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += num + " ";
            num++;
        }

        console.log(row);
    }
}
function pascalTriangle(n) {
    for (let row = 0; row < n; row++) {
        let result = "";

        for (let col = 0; col <= row; col++) {
            result += combination(row, col) + " ";
        }

        console.log(result);
    }
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}
function pascalTriangleoptimal(n) {
    for (let row = 0; row < n; row++) {
        let value = 1;
        let result = "";

        for (let col = 0; col <= row; col++) {
            result += value + " ";

            value = value * (row - col) / (col + 1);
        }

        console.log(result);
    }
}
function zeroOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            if ((i + j) % 2 === 0) {
                row += "1";
            } else {
                row += "0";
            }
        }

        console.log(row);
    }
}
function zeroOneTriangleoptimal(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += (i + j) % 2 === 0 ? "1" : "0";
        }

        console.log(row);
    }
}
function butterfly(n) {
    // Upper half  
    for (let i = 1; i <= n; i++) {
        let row = "";

        // Left stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        // Spaces
        for (let j = 1; j <= 2 * (n - i); j++) {
            row += " ";
        }

        // Right stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }

    // Lower half
    for (let i = n; i >= 1; i--) {
        let row = "";

        // Left stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        // Spaces
        for (let j = 1; j <= 2 * (n - i); j++) {
            row += " ";
        }

        // Right stars
        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
}

butterfly(4);
zeroOneTriangleoptimal(5);
zeroOneTriangle(5);
pascalTriangleoptimal(5);
pascalTriangle(5);
floydTriangle(5);
numberTriangle(5);
numberTriangle(5);

hollowSquare(6);
diomond(5)
ivertedFulluPirammid(5)
fullPiramid(5)
piraidWithSpacePrint(5)
invertPiramidPrint(5)
piraidPrint(5)
sqPrint(5)