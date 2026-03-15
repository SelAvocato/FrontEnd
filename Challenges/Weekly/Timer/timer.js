const timeText = document.getElementById('time')
const progress = document.querySelector('.progress')
const pauseBtn = document.querySelector('.pause')
const pauseIcon = document.querySelector('.pause svg path')
const resetBtn = document.querySelector('.reset')
const dateNow = Date.now()

let isPlaying = true
let minute = 30
let second = 0
let timeoutId
let pauseStart
let pauseDuration
let startTime = dateNow + (((minute * 60) * 1000) + (second * 1000))

pauseBtn.addEventListener('click', () => {
    progress.classList.toggle('pause')
    if (isPlaying) {
        pauseIcon.setAttribute(
            "d",
            "M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
        )
        isPlaying = false
        clearTimeout(timeoutId)
        pauseStart = Date.now()
    } else {
        pauseIcon.setAttribute(
            "d",
            "M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"
        )
        isPlaying = true
        resumeClock()
    }
})

function countDown() {
    const time = startTime - Date.now()
    const newSecond = Math.floor((time / 1000) % 60)
    const newMinute = Math.floor((time / 1000) / 60)

    if (time <= 0) {
        timeText.textContent = `00:00`
        progress.classList.add('pause')
        pauseIcon.setAttribute(
            "d",
            "M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"
        )
        isPlaying = false
    } else {
        timeText.textContent = `${newMinute.toString().padStart(2, '0')}:${newSecond.toString().padStart(2, '0')}`
        const drift = Date.now() % 1000
        timeoutId = setTimeout(countDown, 1000 - drift)
    }
}

function resumeClock(){
    const pausedTime = Date.now() - pauseStart

    startTime += pausedTime
    
    countDown()
}

countDown()