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

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    
    // Função para iniciar a contagem
    const startCount = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
            count += Math.ceil(target / 100); // Velocidade da contagem
            if (count < target) {
                counter.innerText = `+${count}`;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = `+${target}`;
            }
        };

        updateCount();
    };

    // Observador para verificar quando a div está visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    counter.innerText = "0"; // Zera o valor antes de contar
                    startCount(counter); // Inicia a contagem
                });
            }
        });
    });

    // Observa a div .stats-container
    const statsContainer = document.querySelector(".stats-container");
    observer.observe(statsContainer);
});