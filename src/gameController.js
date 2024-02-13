
import getHeroes from "./gameService.js"

import findZarate from "./helpers/findZarate.js";
import selectHero from "./helpers/selectHero.js";
import roll from "./helpers/roll.js"
import attack from "./helpers/attack.js";
import lifecheck from "./helpers/lifecheck.js";

const mainFunction = async () => {
    const heroList = await getHeroes();

    const villainZarate = findZarate(heroList)

    const superHero = selectHero(heroList)

    villainZarate.hp = villainZarate.powerstats.strength*10>666?666:villainZarate.powerstats.strength*10
    superHero.hp = superHero.powerstats.strength*10>666?666:superHero.powerstats.strength*10

    gameLoop(villainZarate, superHero)

}

const gameLoop = (villain, hero) => {
    console.log("------------------------------------")
    console.log("------------ TURN START ------------")
    if(villain.powerstats.combat+villain.powerstats.intelligence > hero.powerstats.combat+hero.powerstats.intelligence){
        attack(villain, hero)
        console.log("------------------------------------")
        attack(hero, villain)
    }
    else{
        attack(hero, villain)
        console.log("------------------------------------")
        attack(villain, hero)
    }


    const finish = lifecheck(villain, hero)

    if(!finish)
        gameLoop(villain,hero)
}





export default mainFunction