fetch('http://localhost:3000/movies')
.then(resp => resp.json())
.then(re => console.log(re))