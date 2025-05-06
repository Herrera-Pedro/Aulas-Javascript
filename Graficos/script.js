const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
const vendas = [1800, 2400, 3100, 2900, 3700, 4300];
const sabores = ["Frango com Catupiry", "Calabresa", "Margherita", "Quatro Queijos", "Portuguesa"];
const porcentagens = [25, 25, 20, 20, 10]

const barContext = document.getElementById('barChart').getContext('2d');

//Grafico de Barras - Vendas Mensais
new Chart(barContext, {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [{
            label: 'Vendas(R$)',
            data: vendas,
            backgroundColor: '#e67e22'
        }]
    }
});

//Grafico de Linhas - Evolução de Vendas
const lineContext = document.getElementById('lineChart').getContext('2d');

new Chart(lineContext, {
    type: 'line',
    data: {
        labels: meses,
        datasets: [{
            label: 'Crescimento de Vendas(R$)',
            data: vendas,
            backgroundColor: '#3498db',
            borderColor: '#2980b9',
            fill: false,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Grafico de Pizza - Sabores mais vendidos
const pieContext = document.getElementById('pizzaChart').getContext('2d');

new Chart(pieContext, {
    type: 'pie',
    data: {
        labels: sabores,
        datasets: [{
            label: 'Sabores mais vendidos',
            data: porcentagens,
            backgroundColor: ['#e67e22', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
