function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books", {
    method: 'POST',
    headers: {
      
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data); 
    renderBooks(data); 
    return data; 
  })
  .catch((e) => {
    console.error('Error', e);
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
