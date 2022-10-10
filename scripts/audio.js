const audio = document.querySelector('.audio');
const player = document.querySelector('.player');
const songName = document.querySelector('.text-song');
const playBtn = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');
const playList = document.querySelector('.play-list');
const listSongs = document.getElementsByTagName('li');
const durationTime = document.querySelector('.duration')
const recent_volume = document.querySelector('#volume')
const volumeIcon = document.querySelector('#volume_icon')

const playListSong = ['Aqua Caelestis', 'River Flows In You', 'Ennio Morricone', 'Summer Wind', ];
let songIndex = 0;
let item = 0;

let removeClass = () => {
    for (let i = 0; i < listSongs.length; i++) {
        listSongs[i].className = 'listSongs';
    }
}

let checkClass = () => {
    if (playBtn.classList.contains('play')) {
        playBtn.classList.add('pause')
    }
}

playListSong.forEach((el, i) => {
    const li = document.createElement('li')
    if (i == 0) {
        li.classList.add('listSongs', 'activeSong');
    }
    li.classList.add('listSongs');
    li.textContent = playListSong[i]
    playList.append(li)
})

let initSong = (song) => {
    songName.innerHTML = song;
    audio.src = `assets/sounds/${song}.mp3`
}

function playAudio() {
    player.classList.add('playSong')
    audio.play();
}

function pauseAudio() {
    player.classList.remove('playSong')
    audio.pause();
}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('playSong')
    if (isPlaying) {
        pauseAudio()
        playBtn.classList.toggle('pause')
    } else {
        playAudio()
        playBtn.classList.toggle('pause')
    }
})

let prevSong = () => {
    progress.style.width = `${0}%`
    songIndex--
    item--

    if (songIndex < 0) {
        songIndex = playListSong.length - 1
    }

    removeClass()

    if (item < 0) {
        item = playListSong.length - 1
    }

    listSongs[item].className = 'listSongs activeSong '
    initSong(playListSong[songIndex])
    checkClass()
    playAudio()
    return item
}

let nextSong = () => {
    progress.style.width = `${0}%`
    songIndex++
    item++

    if (item > playListSong.length - 1) {
        item = 0
    }

    removeClass()

    listSongs[item].className = 'listSongs activeSong'

    if (songIndex > playListSong.length - 1) {
        songIndex = 0
    }

    checkClass()
    initSong(playListSong[songIndex])
    playAudio()
    return item
}

playPrev.addEventListener('click', prevSong)
playNext.addEventListener('click', nextSong)

function updateProgress(e) {
    const {
        duration,
        currentTime
    } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100
    durationTime.textContent = `${(Math.floor(currentTime / 60) + ':' + Math.floor(currentTime % 60))} / ${(Math.floor(duration / 60) + ':' + Math.floor(duration % 60))}  `;
    progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
    const widthProgress = this.clientWidth;
    const clickProgressX = e.offsetX
    const durationAudio = audio.duration

    audio.currentTime = (clickProgressX / widthProgress) * durationAudio
}

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

let audioVolume= 0;
recent_volume.addEventListener('change', () => {
    audio.volume = recent_volume.value / 100
     audioVolume = audio.volume
    return (audioVolume)
})

volumeIcon.addEventListener('click',()=>{
    if(audio.volume > 0){
        audio.volume = 0
    }else{
        audio.volume = audioVolume
    }
})

export {
    playAudio
}