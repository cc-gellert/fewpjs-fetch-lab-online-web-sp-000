function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response){
    response.json();
    console.log(response); 
  }).then(response => {
    console.log(response); 
    renderBooks(response); 
    return response; 
  }); 
} 

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
