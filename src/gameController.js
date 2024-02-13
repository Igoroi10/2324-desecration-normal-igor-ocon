import roll from "./helpers/roll.js"
import getHeroes from "./gameService.js"

const mainFunction = async () => {
    const heroList = await getHeroes();

    console.log(heroList)

}





export default mainFunction