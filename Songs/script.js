const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");

const songs = [
    {title: "Rick Astley - Never Gonna Give You Up", src: "Musica1.mp3"}
];

let currentSongIndex = 0;

// Carregar a música
function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.textContent = songs[index].title;
};

// Reproduzir ou pausar a música
function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};

// Próxima música
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
};

// Música anterior
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
};

// Inicializar
loadSong(currentSongIndex);