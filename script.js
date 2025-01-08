// Controle de Reprodução e Aleatório
document.querySelector('.play-icon').addEventListener('click', function() {
    console.log('Reproduzindo música...');
});

const shuffleButton = document.querySelector('.shuffle-icon');

shuffleButton.addEventListener('click', function() {
    shuffleButton.classList.toggle('active');
    console.log('Modo aleatório ' + (shuffleButton.classList.contains('active') ? 'ativado' : 'desativado'));
});

// Seguir o artista
const followButton = document.querySelector('.follow-button');

followButton.addEventListener('click', function () {
    if (followButton.innerText === 'Seguir') {
        followButton.innerText = 'Seguindo';
        followButton.classList.add('active');
    } else {
        followButton.innerText = 'Seguir';
        followButton.classList.remove('active');
    }
});

// Lógica para alternar o ícone de "curtir" e "descurtir"
const likeIcons = document.querySelectorAll('.like-icon i');

likeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        icon.classList.toggle('liked');  
        if (icon.classList.contains('liked')) {
            icon.classList.add('fa-solid');
            icon.classList.remove('fa-regular');
            console.log('Música curtida!');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            console.log('Música descurtida!');
        }
    });
});

// Efeito de hover e reprodução para faixas populares
trackItems.forEach(item => {
    const trackNumber = item.querySelector('.track-number');
    const trackIndex = item.getAttribute('data-index');

    item.addEventListener('mouseenter', function() {
        if (!item.classList.contains('playing')) {
            trackNumber.innerHTML = '<i class="fa-solid fa-play"></i>';  // Mostra o ícone de play
        }
    });

    item.addEventListener('mouseleave', function() {
        if (!item.classList.contains('playing')) {
            trackNumber.innerHTML = trackIndex;  // Restaura o número se não estiver tocando
        }
    });

    item.addEventListener('click', function() {
        // Pausa todas as outras faixas que estão tocando
        trackItems.forEach(i => {
            i.classList.remove('playing');
            const num = i.querySelector('.track-number');
            const idx = i.getAttribute('data-index');
            num.innerHTML = idx;  // Volta ao número original nas outras faixas
        });

        // Alterna entre play e pause na faixa clicada
        item.classList.toggle('playing');
        if (item.classList.contains('playing')) {
            trackNumber.innerHTML = '<i class="fa-solid fa-pause"></i>';  // Ícone de pause
            console.log('Reproduzindo faixa ' + trackIndex);
        } else {
            trackNumber.innerHTML = trackIndex;
            console.log('Faixa ' + trackIndex + ' pausada');
        }
    });
});

// Efeito hover para mudar a cor do contador de plays
trackDetails.forEach(detail => {
    const listens = detail.querySelector('.track-listens');
    
    detail.addEventListener('mouseenter', function() {
        listens.style.color = '#1DB954';
    });

    detail.addEventListener('mouseleave', function() {
        listens.style.color = '';
    });
});

let indexes = {
    popular: 0,
    albums: 0,
    singles: 0
};

function moveSlide(step, section) {
    const track = document.querySelector(`#${section} .carousel-track`);
    const items = document.querySelectorAll(`#${section} .carousel-item`);
    const itemWidth = items[0].offsetWidth + 30; // Aumento no espaçamento entre os itens

    indexes[section] += step;

    if (indexes[section] < 0) {
        indexes[section] = items.length - 1;
    } else if (indexes[section] >= items.length) {
        indexes[section] = 0;
    }

    track.style.transform = `translateX(${-indexes[section] * itemWidth}px)`;
}

function showContent(contentType, button) {
    const sections = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.btn');

    sections.forEach((section) => {
        section.style.display = 'none';
    });

    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    document.getElementById(contentType).style.display = 'block';
    button.classList.add('active');
}
