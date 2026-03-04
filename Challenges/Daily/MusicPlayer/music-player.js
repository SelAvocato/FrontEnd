const bookmark = document.getElementById('bookmark');
const songTitle = document.getElementById('songTitle');
const duration = document.getElementById('duration');
const progress = document.getElementById('progress');
const playPauseBtn = document.getElementById("playPauseBtn");
const currentSongProgress = document.getElementById('currentSongProgress')
const currentSongDuration = document.getElementById('currentSongDuration');
const playlist = document.getElementById('playlist');
const songs = [{ title: `Sapper's Tree`, duration: `3:37` },
{ title: `Someone Lived This`, duration: `5:35` },
{ title: `Summer Wind`, duration: `2:54` },
{ title: `Orphanage`, duration: `1:13` }];

let isPlaying = false;
let isBookmarked = false;
let currentSong = songs[1]

let intervalId;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        playPauseBtn.classList.replace('fa-pause-circle-o', 'fa-play-circle-o');
        isPlaying = false;
        elapsedBeforePause = Date.now() - startTime
        clearInterval(intervalId)
    } else {
        playPauseBtn.classList.replace('fa-play-circle-o', 'fa-pause-circle-o');
        isPlaying = true;
        resumePause()
    }
})

bookmark.addEventListener('click', () => {
    if (isBookmarked) {
        bookmark.classList.replace('fa-bookmark', 'fa-bookmark-o');
        isBookmarked = false;
    } else {
        bookmark.classList.replace('fa-bookmark-o', 'fa-bookmark');
        isBookmarked = true
    }
})

duration.addEventListener('click', (e) => {
    const rect = duration.getBoundingClientRect();
    const clickedX = e.clientX - rect.left;
    const durationWidth = rect.width;

    const currentX = (clickedX / durationWidth) * 100;
    progress.style.width = `${currentX}%`

    updateProgress(currentX)
})

let seconds = 0;
let minutes = 0;

let startTime
let elapsedBeforePause = 0;

function resumePause() {
    intervalId = setInterval(playSong, 1000)
    startTime = Date.now() - elapsedBeforePause
}

function playSong() {
    if (!isPlaying) return
    if (seconds >= currentSong.duration) {
        isPlaying = !isPlaying
    } else {
        let elapsed = Date.now() - startTime
        seconds = Math.floor(elapsed / 1000)
    }

    let currentSeconds = seconds % 60
    let currentMinutes = seconds / 60

    currentSongProgress.textContent = `${Math.floor(currentMinutes)}:${currentSeconds.toString().padStart(2, '0')}`
    seconds
}

function updateProgress(progress) {
    const progressTime = currentSong.duration.split(':')
    const durationMinuteToSecond = parseInt(progressTime[0] * 60)
    const durationSecond = parseInt(progressTime[1])
    const durationToSecond = durationMinuteToSecond + durationSecond

    const progressToBeMultiplied = progress / 100;
    const newProgress = progressToBeMultiplied * durationToSecond
    console.log(Math.floor(newProgress))
    seconds = Math.floor(newProgress);
    playSong()
}

function initializeSong() {
    seconds = 0
    songTitle.textContent = currentSong.title;
    currentSongDuration.textContent = currentSong.duration;
}

playlist.addEventListener('click', e => {
    const playing = document.querySelector('.playing');
    const clickedSong = e.target.closest('.song')

    if (!clickedSong) return;
    const index = Array.from(playlist.children).indexOf(clickedSong)

    playing.classList.replace('playing', 'default')
    clickedSong.classList.replace('default', 'playing')

    currentSong = songs[index]
    initializeSong()
})
