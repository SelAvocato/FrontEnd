const eye = document.getElementById('eye');
const pass = document.getElementById('password');
const btnContinue = document.getElementById('btnContinue');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');

let isShowingPass = false;
let canContinue = false;

eye.addEventListener('click', (e) => {
    if (isShowingPass) {
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        pass.type = 'password'
        isShowingPass = false;
        return;
    };

    eye.classList.replace('fa-eye-slash', 'fa-eye');
    pass.type = 'text';
    isShowingPass = true;
});

function hasPass() {
    if (pass.value !== "") {
        btnContinue.classList.replace('disabled-continue', 'continue-button')
        canContinue = true;
    } else {
        btnContinue.classList.replace('continue-button', 'disabled-continue')
        canContinue = false;
    }
}

hasPass()
pass.addEventListener('input', hasPass);

btnContinue.addEventListener('click', () => {
    if (canContinue == false) return

    overlay.style.display = 'flex';
});

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none'
});