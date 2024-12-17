// Função para alterar o status do jogo (Alugar ou Devolver)
function alterarStatus(id) {
    // Seleciona o item do jogo com base no ID
    let gameItem = document.getElementById(`game-${id}`);
    let botao = gameItem.querySelector('.dashboard__item__button');
    let imagem = gameItem.querySelector('.dashboard__item__img');
    let nomeJogo = gameItem.querySelector('.dashboard__item__name');


    // Verifica se o botão está em modo de "Alugar" ou "Devolver"
    if (botao.textContent === 'Alugar') {
        // Aluga o jogo: muda o botão para "Devolver" e adiciona classe de alugado
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    } else {
        // Devolve o jogo: muda o botão para "Alugar" e remove classe de alugado
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
        }
    }
}

