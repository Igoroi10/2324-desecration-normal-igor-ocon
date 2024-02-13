const roll = (diceNum, min, max) =>{
    let finalResult = 0

    for(let i = 0; i<diceNum; i++){
        finalResult += Math.random() * (max - min) + min;
    }

    return finalResult
}