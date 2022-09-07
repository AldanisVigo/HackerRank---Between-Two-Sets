function getTotalX(a, b) {    
    let factorsOfB = [] 
    let factorsOfA = [] 
    for (let j = 1; j <= Math.max(...b); j++) {
        const testFactorOfA = (a) => (j % a) == 0
        a.every(testFactorOfA)
        if (a.every(testFactorOfA) == true) {
            factorsOfB.push(j)
        }
    }
    for (let j = 0; j < factorsOfB.length; j++) {
        const testFactorOfB = (b) => ((b % factorsOfB[j]) == 0)   
        b.every(testFactorOfB)
        if (b.every(testFactorOfB) == true) {
            factorsOfA.push(factorsOfB[j])
        }
    }
    return factorsOfA.length
}

const a = [2,6]
const b = [24,36]

console.log(getTotalX(a,b))