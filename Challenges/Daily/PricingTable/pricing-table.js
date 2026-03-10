const buttons = document.querySelectorAll('.switch button')
const due = document.querySelectorAll('#due')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const currentSelected = document.querySelector('.selected')
        currentSelected.classList.remove('selected')
        e.target.classList.add('selected')
        due.forEach(d => {
            d.textContent = e.target.innerHTML
        }) 
    })
})