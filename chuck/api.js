let fact = document.getElementById("fact")

const URL = "https://api.chucknorris.io/jokes/random"

fetch(URL)
.then(res => res.json())
.then(data => {
    console.log(data)
    fact.innerText = data.value
}
    )