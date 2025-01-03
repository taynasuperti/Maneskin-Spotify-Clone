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
    console.log(followButton); // Verifica se o botão foi encontrado

});


// Lógica para alternar o ícone de "curtir" e "descurtir"
const likeIcons = document.querySelectorAll('.like-icon i'); // Seleciona todos os ícones de "curtir"

likeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        if (icon.classList.contains('fa-heart')) {
            icon.classList.remove('fa-heart');
            icon.classList.add('fa-solid', 'fa-heart', 'liked');
            console.log('Música curtida!');
        } else {
            icon.classList.remove('fa-solid', 'fa-heart', 'liked');
            icon.classList.add('fa-heart');
            console.log('Música descurtida!');
        }
    });
});

