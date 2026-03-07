const dropdown = document.querySelector('.dashboard-dropdown');
const dropdownSign = document.getElementById('dropdown-icon')
const dropdownItems = document.getElementById('dropdown-items')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const aside = document.querySelector('aside')
const x = document.querySelector('.x')

dropdown.addEventListener('click', () => {

    dropdownItems.classList.toggle('close');
    dropdownSign.classList.toggle('rotate')
})

hamburgerMenu.addEventListener('click', () => {
    aside.classList.add('show')
})

x.addEventListener('click', () => {
    aside.classList.remove('show')
})