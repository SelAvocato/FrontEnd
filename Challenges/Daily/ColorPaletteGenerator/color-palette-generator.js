const colors = document.querySelectorAll('.color')
const colorCard = document.querySelectorAll('.color-card')
const palletes = [
    { colors: ['#E0F2E9', '#CEB5A7', '#A17C6B', '#5B7B7A', '#5B7B7A'] },
    { colors: ['#C97B84', '#A85751', '#7D2E68', '#251351', '#040926'] },
    { colors: ['#274060', '#335C81', '#65AFFF', '#1B2845', '#5899E2'] },
    { colors: ['#251605', '#C57B57', '#F1AB86', '#F7DBA7', '#9CAFB7'] },
    { colors: ['#00120B', '#35605A', '#6B818C', '#D8E4FF', '#31E981'] },
    { colors: ['#2C1320', '#5F4B66', '#A7ADC6', '#8797AF', '#56667A'] },
    { colors: ['#040403', '#5B7553', '#8EB897', '#C3E8BD', '#9DDBAD'] },
    { colors: ['#020887', '#334195', '#647AA3', '#95B2B0', '#C6EBBE'] },
    { colors: ['#D0EFB1', '#B3D89C', '#9DC3C2', '#77A6B6', '#4D7298'] },
    { colors: ['#EAD2AC', '#DF928E', '#C58882', '#D1DEDE', '#1D201F'] },
    { colors: ['#247BA0', '#70C1B3', '#B2DBBF', '#F3FFBD', '#FF1654'] },
    { colors: ['#FF5E5B', '#D8D8D8', '#FFFFEA', '#00CECB', '#FFED66'] },
    { colors: ['#0E1116', '#374A67', '#616283', '#9E7B9B', '#CB9CF2'] },
    { colors: ['#C8BFC7', '#7A9B76', '#8A7E72', '#5A2328', '#090302'] },
    { colors: ['#CCDAD1', '#9CAEA9', '#788585', '#6F6866', '#38302E'] },
    { colors: ['#14080E', '#49475B', '#799496', '#ACC196', '#E9EB9E'] },
    { colors: ['#FAE3E3', '#F7D4BC', '#CFA5B4', '#C98BB9', '#846B8A'] },
    { colors: ['#75DDDD', '#84C7D0', '#9297C4', '#9368B7', '#AA3E98'] },
    { colors: ['#B5B1B2', '#ADA9B7', '#A9AFD1', '#A1CDF4', '#7C809B'] },
    { colors: ['#F4E409', '#EEBA0B', '#C36F09', '#A63C06', '#710000'] },
    { colors: ['#FFDDA1', '#FFD151', '#F8C537', '#EDB230', '#E77728'] },
    { colors: ['#B0F2B4', '#BAF2E9', '#BAD7F2', '#F2BAC9', '#F2E2BA'] },
    { colors: ['#6B717E', '#EFAAC4', '#FFC4D1', '#FFE8E1', '#D4DCCD'] },
    { colors: ['#F3E0EC', '#EAD5E6', '#F2BEFC', '#CA9CE1', '#685F74'] },
    { colors: ['#A4B494', '#BEC5AD', '#3B5249', '#519872', '#34252F'] },
    { colors: ['#FFC09F', '#FFEE93', '#FCF5C7', '#A0CED9', '#EADEDA'] },
    { colors: ['#565264', '#706677', '#A6808C', '#CCB7AE', '#D6CFCB'] },
    { colors: ['#D0DB97', '#69B578', '#3A7D44', '#254D32', '#181D27'] }
]
const generateBtn = document.querySelector('.generate-btn')
let timeoutId;

generateBtn.addEventListener('click', generatePalette)
document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        e.preventDefault()
        generatePalette()
    }
})

document.addEventListener('keydown', e => {
    if (e.key === 'c' || e.key === 'C') {
        const palleteColors = document.querySelectorAll('.detail')
        let pallete = [];
        palleteColors.forEach(palleteColor => {
            pallete = [...pallete, palleteColor.textContent]
        })
        pallete = pallete.toString()
        navigator.clipboard.writeText(pallete)
        displayPopup(pallete)
    }
})

function generatePalette() {
    const random = Math.floor(Math.random() * palletes.length)
    for (let x = 0; x < colors.length; x++) {
        const randomColor = palletes[random].colors[x]
        colors[x].style.backgroundColor = randomColor
        colors[x].closest('.color-card').querySelector('.detail').textContent = randomColor
    }
}

colorCard.forEach(card => {
    card.addEventListener('click', e => {
        const copy = card.querySelector('.detail').textContent
        navigator.clipboard.writeText(copy)
        displayPopup(copy)
    })
})

function displayPopup(text) {
    const popup = document.querySelector('.popup')
    const span = document.querySelector('.copied-color')

    span.textContent = text
    popup.classList.add('show')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        popup.classList.remove('show')
    }, 3000)
}