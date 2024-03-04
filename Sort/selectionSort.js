let score=[7,4,2,1,10,3,6]

const selectionSort=()=>{
    for(let i=0;i<score.length;i++){
                let minIndex=i
    for(let j=i+1;j<score.length;j++){
        if(score[j]<score[minIndex]){
            minIndex=j
        }
    }
    if(minIndex!=i){
        [score[i],score[minIndex]]=[score[minIndex],score[i]]
    }

    }
    return score
}
console.log(selectionSort(score))

function selectionSot(arr){
    for(let i=0;i<arr.length;i++){
        let index=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index=j
            }
        }
        if(index!=i){
            [[arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]]
            
        }

    }
}