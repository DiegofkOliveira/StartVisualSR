const imagens = document.querySelectorAll('.carrossel img');
let indiceAtual = 0;

function mostrarImagem(indice) {
    imagens.forEach((img, index) => {
        img.classList.remove('active'); 
        if (index === indice) {
            img.classList.add('active'); 
        }
    });
}


mostrarImagem(indiceAtual);


setInterval(() => {
    indiceAtual = (indiceAtual + 1) % imagens.length; 
    mostrarImagem(indiceAtual);
}, 5000);


const infoButtons = document.querySelectorAll('.info-button');



infoButtons.forEach(button => {
    button.addEventListener('click', function() {
        const imagemContainer = button.parentElement;
        imagemContainer.classList.toggle('active');

        if (imagemContainer.classList.contains('active')) {
            button.textContent = '-';
        } else {
            button.textContent = '+';
        }
    });
});