function bonusScore(scores) {
    for(let score of scores){
        if(typeof score !=="number")
            return"Invalid";
    }
    if(scores.length == 0){
        return "Invalid";
    }
    const updatedScores = scores.map(s=> s + 10)
    const total = updatedScores.reduce((sum,s)=>sum + s, 0)
    return total
}

const result = bonusScore([80, 65, 90, 75])
console.log(result)
const result2 = bonusScore([100])
console.log(result2)
const result3 = bonusScore([0, 10])
console.log(result3)
const result4 = bonusScore([])
console.log(result4)
const result5 = bonusScore("scores")
console.log(result5)
const result6 = bonusScore([80, "90", 70])
console.log(result6)
