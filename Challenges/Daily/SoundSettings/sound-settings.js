const ringBarContainer = document.querySelector('.ring.bar-container')
const ringProgress = document.getElementById('ringProgress')
const alarmBarContainer = document.querySelector('.alarm.bar-container')
const alarmProgress = document.getElementById('alarmProgress')

ringBarContainer.addEventListener('mousedown', e => {
    const rectX = ringBarContainer.getBoundingClientRect()
    const clickX = e.clientX - rectX.left
    const width = rectX.width
    const percent = clickX / width

    ringProgress.style.width = `${percent * 100}%`
})

alarmBarContainer.addEventListener('click', e => {
    const rectX = alarmBarContainer.getBoundingClientRect()
    const clickX = e.clientX - rectX.left
    const width = rectX.width
    const percentage = (clickX / width) * 100

    alarmProgress.style.width = `${percentage}%`
})

