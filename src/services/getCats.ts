import {CatsFromAPI} from '../types/cats'

export const getCats = () => {
    return fetchCats()
}

const fetchCats = () : Promise<CatsFromAPI> => {
    const indexPage = Math.floor(Math.random() * 34)
    return fetch('https://catfact.ninja/facts?page=1' /*+ indexPage*/).then(res => res.json())
}