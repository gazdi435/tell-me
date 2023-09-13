let dropdown = document.getElementById("pokemons")
let pokePic = document.getElementById("pokePic")
let pokeTypes = document.getElementById("pokeTypes")
let pokeName = document.getElementById("pokeName")
const URL = "https://pokeapi.co/api/v2/pokemon?limit=50"

fetch(URL)
.then(res => res.json())
.then(data => {
    console.log(data.results)

    data.results.forEach(element => {
        console.log(element.name)
        dropdown.innerHTML += `<option value="${element.url}">${element.name}</option>`
        //let op = document.createElement("option")
        //op.innerText = element.name
        //dropdown.appendChild(op)
    });
})


function changePokemon(option){
    let pokemonURL = option.value

    fetch(pokemonURL)
    .then(res => res.json())
    .then(data => {
        pokePic.src = data.sprites.front_default
        console.log(data)

        pokeTypes.innerText = "|"
        data.types.forEach(element =>  {
            pokeTypes.innerText += element.type.name + "|"
        })

        
    })

}