import axios from 'axios'

const getHeroes = async () => {
    const heroList = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')

    return heroList
}

export default getHeroes