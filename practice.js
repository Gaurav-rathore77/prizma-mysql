
function maxSubAr2(arr) {
    let currentS = 0;
    let maxS = arr[0];

    for (let num of arr) {
        currentS+=num
        maxS = Math.max(maxS, currentS);
    }
    if(currentS<0){
        currentS = 0
    }

    return maxS;
}

function merge(intervals) {

    intervals.sort((a,b)=>a[0]-b[0]);

    let result=[];

    result.push(intervals[0]);

    for(let i=1;i<intervals.length;i++){

        let last=result[result.length-1];

        if(intervals[i][0]<=last[1]){
                
            last[1]=Math.max(last[1],intervals[i][1]);

        }else{

            result.push(intervals[i]);

        }

    }

    return result;

}