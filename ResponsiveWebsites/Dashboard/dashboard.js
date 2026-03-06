const dropdown = document.querySelector('.dashboard-dropdown');
const dropdownSign = document.getElementById('dropdown-icon')
const dropdownItems = document.getElementById('dropdown-items')

dropdown.addEventListener('click', () => {

    dropdownItems.classList.toggle('close');
    dropdownSign.classList.toggle('rotate')
})
