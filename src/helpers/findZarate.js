const findZarate = (heroList) => {
    console.log(heroList)
    const zarate = heroList.find((element) => element.name === "Junkpile")
    return zarate
}

export default findZarate