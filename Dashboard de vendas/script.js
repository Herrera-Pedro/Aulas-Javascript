// Carrega os dados do arquivo data.json

async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();

    //Atualiza os números das métricas
    document.getElementById("usersCount").textContent = data.users;
    document.getElementById("salesCount").textContent = data.sales;

    // Cria um grafico com os dados
    createChart(data.monthlySales);
}

// Função para gerar o gráfico
function createChart(salesData) {
    const ctx = document.getElementById('salesChart').getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
                {
                    label: "Vendas",
                    data: salesData,
                    borderColor: "#f00",
                    backgroundColor: "rgba(60, 145, 200, 0.1)",
                    borderWidth: 2
                }
            ]
        }        
    })
}

fetchData();