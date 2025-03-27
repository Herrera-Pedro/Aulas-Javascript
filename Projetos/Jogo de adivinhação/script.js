// Seleciona os elementos do DOM
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');

// Gera um número aleatório entre 1 e 100
const correctNumber = Math.floor(Math.random() * 100) + 1;

// Adiciona um evento de clique ao botão
submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        return;
    }

    if (userGuess === correctNumber) {
        alert(`Parabéns! Você acertou! O número correto era ${correctNumber}.`);
    } else if (userGuess < correctNumber) {
        alert('Errado! O número correto é maior.');
    } else {
        alert('Errado! O número correto é menor.');
    }
});