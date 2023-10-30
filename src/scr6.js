const movieList=document.getElementById("movieList")
const addMovieForm=document.getElementById("addMovieForm")
const titleInput=document.getElementById("title")
const genreInput=document.getElementById("genre")
const directorInput=document.getElementById("director")
const yearInput=document.getElementById("year")
const show=document.querySelector('#show')
const fields=document.querySelectorAll('.inp')
const button=document.querySelector('.button')
const closeModal=document.querySelector(".modal-button")
const modal=document.querySelector("[data-modal]")
let id = 0
closeModal.addEventListener('click',() => {
  modal.classList.toggle('is-hidden')
})
button.addEventListener('click',() => {
  if(fields[0].value !== ''){
    let post = {title:fields[0].value}
    const options={
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {"Content-Type": "application/json; charset=UTF-8"}
    }
    fetch(`http://localhost:3000/movies/${id}`,options)
  }
  if(fields[1].value !== ''){
    let post = {genre:fields[1].value}
    const options={
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {"Content-Type": "application/json; charset=UTF-8"}
    }
    fetch(`http://localhost:3000/movies/${id}`,options)
  }
  if(fields[2].value !== ''){
    let post = {director: fields[2].value}
    const options={
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {"Content-Type": "application/json; charset=UTF-8"}
    }
    fetch(`http://localhost:3000/movies/${id}`,options)
  }
  if(fields[3].value !== '' && !isNaN(fields[3].value)){
    let post = {year: fields[3].value}
    const options={
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {"Content-Type": "application/json; charset=UTF-8"}
    }
    fetch(`http://localhost:3000/movies/${id}`,options)
  }
});
function displayMovies(){
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
      movieList.innerHTML=""
      data.forEach(movie=>{
        const tr=document.createElement("tr")
        tr.innerHTML=`
          <td>${movie.id}</td>
          <td>${movie.title}</td>
          <td>${movie.genre}</td>
          <td>${movie.director}</td>
          <td>${movie.year}</td>
          <td>
            <button onclick="updateMovie(${movie.id})">Оновити</button>
            <button onclick="deleteMovie(${movie.id})">Видалити</button>
            <button onclick="putchId(${movie.id})">Редагувати</button>
          </td>`
        movieList.appendChild(tr)
      })
    })
}
addMovieForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  const newMovie={
    title:titleInput.value,
    genre:genreInput.value,
    director:directorInput.value,
    year:parseInt(yearInput.value)
  }
  fetch('http://localhost:3000/movies',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMovie)
  }).then(()=>{
      titleInput.value=""
      genreInput.value=""
      directorInput.value=""
      yearInput.value=""
    })
})
function putchId(movieId){
  modal.classList.toggle('is-hidden')
  id=movieId
}
function updateMovie(movieId){
  const newMovie={
    title: titleInput.value,
    genre: genreInput.value,
    director: directorInput.value,
    year: parseInt(yearInput.value)
  }
  fetch(`http://localhost:3000/movies/${movieId}`,{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMovie)
  })
}
function deleteMovie(movieId){
  console.log(`http://localhost:3000/movies/${movieId}`)
  fetch(`http://localhost:3000/movies/${movieId}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
}

show.addEventListener('click',() => {
  displayMovies()
})