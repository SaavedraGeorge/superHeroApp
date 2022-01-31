import { heroes } from "../data/heroes";

export const getHeroesbyName = (name = '') => {
    if(name.length === 0){
       return []
    }
    const busqueda = name.toLowerCase();

    console.log('asdasd');

    return heroes.filter(heroes => heroes.superhero.toLowerCase().includes(busqueda));
}