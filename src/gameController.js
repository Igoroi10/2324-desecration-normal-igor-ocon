import roll from "./helpers/roll.js"
import getHeroes from "./gameService.js"

import findZarate from "./helpers/findZarate.js";
import selectHero from "./helpers/selectHero.js";

const mainFunction = async () => {
    const heroList = await getHeroes();

    let currentTurn = 0;

    const villainZarate = findZarate(heroList)

    const superHero = selectHero(heroList)

    console.log(superHero)

}





export default mainFunction