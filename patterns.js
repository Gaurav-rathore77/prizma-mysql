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

hollowSquare(6);function hollowSquare(n) {
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
diomond(5)
ivertedFulluPirammid(5)
fullPiramid(5)
piraidWithSpacePrint(5)
invertPiramidPrint(5)
piraidPrint(5)
sqPrint(5)