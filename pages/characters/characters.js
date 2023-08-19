const URL_characters = "https://rickandmortyapi.com/api/character";


export async function API_URL_characters(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


export async function getCharacters() {
  const container = document.getElementById("root");
  const characters = await API_URL_characters(URL_characters);
  const { results, info } = characters
  const data =
    `
  <div class="container-characters">
      <div class="characters">
        ${results.map((character) => (
      `
                <div class="list_character">
                  <h2>${character.name}</h2>
                    <a href="#/characters/${character.id}">
                      <img src="${character.image}" width="200">
                    </a>
                </div>
              `
    )).join('')} 
      </div>
      <div class="button_characters">
        <button id="loadCharacters">Load More</button>
      </div>
    </div>
      
  `
  return data;
}








