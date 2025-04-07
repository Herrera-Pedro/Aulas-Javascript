function iniciarProva() {
    nomeAlunoInput = document.getElementById('nomeAluno');
    nomeAluno = nomeAlunoInput ? nomeAlunoInput.value : '';
    
    const saidaDiv = document.getElementById('saidaNome');

    if (saidaDiv) {
        saidaDiv.innerHTML = `Bem-vindo, ${nomeAluno}!`;
    }

    numero = parseInt(prompt('Digite um número:'));

    verificarParImpar(numero);
    contarAte(numero);

    notasExemplo = document.getElementById('saidaNotas');
    notas = [10, 8, 7, 9, 6]; // Exemplo de notas
    notasExemplo.textContent = `Notas: ${notas.join(', ')}`; // Exibe as notas no elemento HTML

    mediaNotas(notas);
    
    verificarAprovacao(notas);
    
}

function verificarParImpar(numero) {
    
    const saidaDiv = document.getElementById('saida');
    
    if (saidaDiv) {
        if (numero % 2 === 0) {
            saidaDiv.textContent = `${numero} é par.`;
        } else {
            saidaDiv.textContent = `${numero} é ímpar.`;
        }
    }
}

function contarAte(numero) {
    const saidaDiv = document.getElementById('saida2');
    
    if (saidaDiv) {
        saidaDiv.innerHTML = ''; // Limpa o conteúdo anterior
        for (let i = 1; i <= numero; i++) {
            const p = document.createElement('p'); // Cria um elemento <p> para cada número
            p.textContent = i;
            saidaDiv.appendChild(p); // Adiciona o <p> à div
        }
    }
}

function mediaNotas(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;
    
    const saidaDiv = document.getElementById('saida3');
    
    if (saidaDiv) {
        saidaDiv.textContent = `A média das notas é: ${media.toFixed(2)}`;
    }
}

function verificarAprovacao(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas.length;

    const saidaDiv = document.getElementById('saida4');

    if (saidaDiv) {
        if (media >= 6) {
            saidaDiv.textContent = `Aluno aprovado com média ${media.toFixed(2)}.`;
        } else {
            saidaDiv.textContent = `Aluno reprovado com média ${media.toFixed(2)}.`;
        }
    }
}