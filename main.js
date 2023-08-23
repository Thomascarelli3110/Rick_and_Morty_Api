import { API_URL_characters } from './pages/characters/characters.js';
import { handleRouteChange } from './router/router.js'


window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', () => {
    handleRouteChange()
    if (!localStorage.getItem('nextPage')) {
        localStorage.setItem('nextPage', '2')
    }
    
});
window.addEventListener('DOMContentLoaded', (e) => {
    const loadMoreButton = document.querySelector('#loadCharacters')
    loadMoreButton.addEventListener('click', async () => {
        let nextPage = JSON.parse(localStorage.getItem('nextPage'))
        const URL_nextPage = `https://rickandmortyapi.com/api/character/?page=${nextPage}`
        const { results: resultsNewCharacters } = await API_URL_characters(URL_nextPage)
        const oldCharacters = JSON.parse(localStorage.getItem('characters'))
        const characters = [...oldCharacters, ...resultsNewCharacters]
        localStorage.setItem('characters', JSON.stringify(characters))
        window.location.reload()
        nextPage++
        localStorage.setItem("nextPage", JSON.stringify(nextPage))
    })
})