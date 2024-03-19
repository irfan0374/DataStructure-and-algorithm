let score = [4, 2, 1, 3]
const insetionSort = () => {
    for (let i = 1; i < score.length; i++) {
        let curr = score[i]
        let j = i - 1
        while (j >= 0 && score[j] > curr) {
            score[j + 1] = score[j]
            j--
        }
        score[j + 1] = curr
    }
    return score
}
console.log(insetionSort(score))



