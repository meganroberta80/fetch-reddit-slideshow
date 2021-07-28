// DOM References
const formEl = document.getElementById("slideshow-form")
const searchEl = document.getElementById("search-term")
const slideshowEl = document.getElementById("slideshow")
const url = "https://www.reddit.com/search.json?q="
let pictures = []

// Functions
function handleSubmit(event) {
    event.preventDefault()
    fetch(url + searchEl.value + "+nsfw:no")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Create the DOM elements we need
            intervalPictures = setInterval(loopPictures, 3000)
            // Handy variables
            pictures = data.data.children
        })
}

// letintervalPictures = null
let index = 0

function loopPictures() {
    index++
    console.log(pictures[index])
    let title = pictures[index].data.title
    let thumbnail = pictures[index].data.thumbnail

    let divEl = document.createElement('div')
    let titleEl = document.createElement('h2')
    let imgEl = document.createElement('img')

    // Fill the DOM elements with our data
    titleEl.textContent = title
    imgEl.setAttribute('src', thumbnail)

    // Add to the DOM
    slideshowEl.textContent = ''

    divEl.append(titleEl, imgEl)
    slideshowEl.append(divEl)

    console.log(title, thumbnail)
}

//Event listener
formEl.addEventListener('submit', handleSubmit)
