import { API_URL_characters } from "../pages/characters/characters.js";
import { getIntroduction } from "../introduction.js";
import { getCharacters } from "../pages/characters/characters.js";
import { getCharacterDetails } from "../characterDetails.js";
import { getAbout } from "../about.js";


async function loadContent(route) {
    const contentDiv = document.getElementById('root');
    const buttonLoadMore = document.getElementById('loadCharacters')
    const characterId = window.location.hash.split("#/characters/")[1]
    root.innerHTML = "";
    switch (route) {
        case '#/':
            buttonLoadMore.style.display="none"
            contentDiv.innerHTML = getIntroduction()
            break
        case '#/characters':
            contentDiv.innerHTML = await getCharacters()
            buttonLoadMore.style.display = "block"
            break;
        case `#/characters/${characterId}`:
            buttonLoadMore.style.display = "none"
            contentDiv.innerHTML = await getCharacterDetails()
            break
        case '#/about':
            buttonLoadMore.style.display = "none"
            contentDiv.innerHTML = getAbout()
            break
        default:
            buttonLoadMore.style.display = "none"
            contentDiv.innerHTML = `<h1>Pagina no encontrada</h1>`
    }
}

export function handleRouteChange() {
    const route = window.location.hash;
    loadContent(route);
}







