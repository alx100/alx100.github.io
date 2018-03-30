// Write a func to retrieve a blob of json
// make an ajax request Use the 'fetch' func

// https://rallycoding.herokuapp.com/api/music_albums

// ASYNC fetch request with Promise

function fetchAlbums() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log());
}

// ASYNC fetch request with Async/await
// ES2017 syntax
async function fetchAlbums() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json= await res.json();

  console.log(json);
}

// OR
const fetchAlbums = async () =>  {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json= await res.json();

  console.log(json);
}

fetchAlbums();