// Simples console log para testar
console.log("Habbiano carregado!");

// Exemplo de interação com o botão play da rádio
const playBtn = document.querySelector('.radio-player button');
let isPlaying = false;

if(playBtn) {
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        const icon = playBtn.querySelector('i');
        
        if(isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            alert("Rádio ligada! (Simulação)");
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
}