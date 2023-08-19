import { API_URL_characters } from "./pages/characters/characters.js"


export async function getCharacterDetails() {
    const characterId = window.location.hash.split("#/characters/")[1]
    const GET_ONLY_CHARACTER = `https://rickandmortyapi.com/api/character/${characterId}`
    const character = await API_URL_characters(GET_ONLY_CHARACTER);

    if (character) {
        const data = `
                <div class="detailsCharacters">
                    <h2>${character.name}</h2>
                    <img src="${character.image}"></img>
                    <div class="infoCharacter">
                        <h3>Status: ${character.status}</h3>
                        <h3>Specie: ${character.species}</h3>
                        <h3>Type: ${character.type}</h3>
                        <h3>Gender: ${character.gender}</h3>
                        <h3>Origin: ${character.origin.name}</h3>
                        <h3>Created: ${character.created}</h3>

                    </div>
                </div>
        `;
        return data;
    } else {
        return "Personaje no encontrado";
    }
}