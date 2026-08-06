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
invertPiramidPrint(5)
piraidPrint(5)
sqPrint(5)