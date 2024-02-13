import roll from "./helpers/roll.js"
import getHeroes from "./gameService.js"

import findZarate from "./helpers/findZarate.js";

const mainFunction = async () => {
    const heroList = await getHeroes();

    let currentTurn = 0;

    const villainZarate = findZarate(heroList)

    console.log(villainZarate)

}





export default mainFunction