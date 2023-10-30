let post={
    director:'Steve Kloves',
}
const options={
    method:'PATCH',
    body:JSON.stringify(post),
    headers:{
        "Content-Type": "application/json; charset=UTF-8",
    }
}
fetch('http://localhost:3000/movies/2',options)
.then(resp => resp.json())
.then(re => console.log(re))
.catch(error => console.error(error));