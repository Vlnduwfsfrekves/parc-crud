const options = {
    method:'DELETE',
    headers:{
      "Content-Type": "application/json; charset=UTF-8",
    }
}
fetch('http://localhost:3000/movies/1',options)
.then(resp => resp.json())
.then(re => console.log(re))
.catch(error => console.error(error));