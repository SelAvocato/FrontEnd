const text = document.querySelector('.text')
const searchbar = document.getElementById('searchbar')

text.addEventListener('click', () => {
    text.classList.add('animate')
})

text.addEventListener('animationend', () => {
    text.classList.remove('animate')
    if (!searchbar.value) {
        alert('searchbar is empty.')
    } else {
        alert(`No results found for: ${searchbar.value}`)
        searchbar.value = ''
    }
})