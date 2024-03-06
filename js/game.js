const btnStart = document.querySelector('#startBtn');
const btnBox=document.querySelector('.box-btn')
btnStart.addEventListener('click', startGame);

function startGame() {
    btnStart.style.display = 'none';
    const loader = `<div class="spinner"></div>`;
    btnBox.innerHTML = loader;
    const timeCreateMarcup = setTimeout(() => {
        btnBox.style.display = "none";

    },1500)
    
}