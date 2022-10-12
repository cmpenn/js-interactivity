let message = document.querySelector('#message')

let form = document.querySelector('form')


function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)
}

form.addEventListener('submit', addMovie)


function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'movie deleted'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'movie watched'
    }else{
        message.textContent = 'movie added back'
    }
}

