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
    const counters = document.querySelectorAll(".stats-number");

    const startCount = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
            count += Math.ceil(target / 100);
            if (count < target) {
                counter.innerText = `+${count}`;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = `+${target}`;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Defina o atraso desejado em milissegundos (ex: 1 segundo = 1000ms)
                setTimeout(() => {
                    counters.forEach(counter => {
                        counter.innerText = "0";  // Reseta o contador para 0
                        startCount(counter);      // Inicia a contagem
                    });
                }, 1000); // 1000ms = 1 segundo de atraso
            }
        });
    });

    const statsContainer = document.querySelector(".stats-container");
    observer.observe(statsContainer);
});


const elements = [
    { selector: '.imagem-container', delay: 0.6 },
    { selector: '.video-wrapper video', delay: 0.7 },
    { selector: '.logo-item', delay: 0.9 },
    { selector: '.stats-item', delay: 0.9 },
    { selector: '.contact-wrapper', delay: 0.9 },
    { selector: '.contact-link', delay: 0.7 },
    { selector: '.footer-item', delay: 0.3 },
    { selector: '.footer-location', delay: 1 }
];


const applyObserver = (elements) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    elements.forEach(({ selector, delay }) => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * delay}s`;
            observer.observe(item);
        });
    });
};


applyObserver(elements);