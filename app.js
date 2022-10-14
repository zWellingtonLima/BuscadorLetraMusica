const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const songsContainer = document.querySelector('#songs-container');
const prevAndNextContainer = document.querySelector('#prev-and-next-container');

const apiUrl = `https://api.lyrics.ovh`;

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = searchInput.value.trim();
})
