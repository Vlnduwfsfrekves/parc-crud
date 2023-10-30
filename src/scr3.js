let post={
    director:'Steve Kloves',
    genre:'fantasy',
    title:'Harry Potter and the Philosopher’s Stone',
    year:2001
}
const options={
    method:'PUT',
    body:JSON.stringify(post),
    headers:{
        "Content-Type": "application/json; charset=UTF-8",
    }
}
fetch('http://localhost:3000/movies/1',options)
.then(resp => resp.json())
.then(re => console.log(re))
.catch(error => console.error(error));