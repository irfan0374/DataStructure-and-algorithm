let score=[2,3,1,5,6,4]

const bubbleSort=()=>{
    for(let i=0;i<score.length;i++){
        for(let j=0;j<score.length;j++){
            if(score[j]>score[j+1]){
                [score[j],score[j+1]]=[score[j+1],score[j]]
            }
        }
    }
    return score
}
console.log(bubbleSort(score));




