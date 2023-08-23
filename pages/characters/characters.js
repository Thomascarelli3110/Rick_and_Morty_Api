const URL_characters = "https://rickandmortyapi.com/api/character";

export async function API_URL_characters(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCharacters() {
  const container = document.getElementById("root");
  if (!localStorage.getItem("characters")) {
    const characters = await API_URL_characters(URL_characters);
    console.log(characters)
    localStorage.setItem('characters', JSON.stringify(characters.results))
  }
  const savedResult = JSON.parse(localStorage.getItem("characters"))
  const data =
    `
  <div class="container-characters">
      <div class="characters">
        ${savedResult.map((character) => (
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
    </div>   
  `
  return data;
}








