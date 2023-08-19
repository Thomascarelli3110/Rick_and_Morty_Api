import { API_URL_characters } from "../pages/characters/characters.js";
import { getIntroduction } from "../introduction.js";
import { getCharacters } from "../pages/characters/characters.js";
import { getCharacterDetails } from "../characterDetails.js";
import { getAbout } from "../about.js";


async function loadContent(route) {
    const contentDiv = document.getElementById('root');
    const characterId = window.location.hash.split("#/characters/")[1]
    root.innerHTML = "";
    switch (route) {
        case '#/':
            contentDiv.innerHTML = getIntroduction()
            break
        case '#/characters':
            contentDiv.innerHTML = await getCharacters()
            break;
        case `#/characters/${characterId}`: 
        contentDiv.innerHTML = await getCharacterDetails()
            break
        case '#/about':
            contentDiv.innerHTML = getAbout()
            break
        default:
            contentDiv.innerHTML = `<h1>Pagina no encontrada</h1>`
    }
}

export function handleRouteChange() {
    const route = window.location.hash;
    loadContent(route);
    const characterId = window.location.hash.split('/')
}







