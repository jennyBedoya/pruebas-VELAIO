const aplicacion= document.querySelector('.container')

const url= 'https://newsapi.org/v2/top-headlines/sources?apiKey=39758aafe088438da118531765942947'

fetch(url)
.then(res => res.json())
.then(data => console.log(data))
