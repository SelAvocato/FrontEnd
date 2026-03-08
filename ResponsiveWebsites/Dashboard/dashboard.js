const dropdown = document.querySelector('.dashboard-dropdown');
const dropdownSign = document.getElementById('dropdown-icon')
const dropdownList = document.getElementById('dropdown-list')
const dropdownItems = document.querySelectorAll('#dropdown-list li')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const aside = document.querySelector('aside')
const x = document.querySelector('.x')
const searchbox = document.querySelector('.searchbox')
const searchIcon = document.getElementById('searchIcon')
const searchInput = document.getElementById('search-input')
const notifBell = document.querySelector('.notif-bell')

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('close');
    dropdownSign.classList.toggle('rotate')
})

hamburgerMenu.addEventListener('click', () => {
    aside.classList.add('show')
})

x.addEventListener('click', () => {
    aside.classList.remove('show')
})

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('showSearchboxInput')
})

searchInput.addEventListener('keydown', e => {
    if(e.key === 'Enter') alert(`Sorry.. There are no results for: ${searchInput.value}`)
})

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('click', e => {
        document.querySelector('.active').classList.remove('active')
        dropdownItem.classList.add('active')
        aside.classList.remove('show')
    })
})

notifBell.addEventListener('click', () => document.querySelector('.notification-container').classList.toggle('show'))