//Recupera os dados do localStorage

let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

// Atualiza o saldo e exibe as transações na tela
function atualizarDashboard() {
    const saldoElement = document.getElementById("saldo");
    const listaTransacoes = document.getElementById("transacoes");

    // Calcula o saldo
    const saldoTotal = transacoes.reduce((acc, transacao) => acc + transacao.valor, 0);
    saldoElement.textContent = 'R$ ${saldoTotal.toFixed(2)}';

    // Limpa e recria a lista de transações
    listaTransacoes.innerHTML = '';
    transacoes.forEach((transacao, index) => {
        const item = document.createElement('li');
        item.classList.add('transacao');
        item.innerHTML = '${transacao.valor.toFixed(2)} <button class="delete" onClick="apagarTransacao(${index})">x</button>';
        listaTransacoes.appendChild(item);

        // Salva no localStorage
        localStorage.setItem('transacoes', JSON.stringify(transacoes)); 

        // Remover transação pelo index
        function removerTransacao(index) {
            transacoes.splice(index, 1);
            atualizarDashboard();
        }
    });
}

// Inicializa o dashboard ao carregar a página
atualizarDashboard();