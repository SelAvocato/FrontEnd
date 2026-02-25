// template from: https://developers.google.com/chart/interactive/docs/gallery/columnchart
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(function () {
    drawChart();
    drawChart2();
    lineChart();
});

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Column", "ProfitMargin", { role: "style" }, { role: "tooltip" }],
        ["1", 6, "green", 6],
        ["2", 9, "green", 9],
        ["3", 12, "green", 12],
        ["4", 9, "green", 9],
        ["5", 4, "green", 4],
        ["6", 6, "green", 6]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, 2, 3]);

    var options = {
        title: "Net Profit Margin",
        width: 450,
        height: 400,
        bar: { groupWidth: "70%" },
        legend: { position: "none" },
        hAxis: { textPosition: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['column', 'debt', 'equity'],
        ['Column: 1', 4, 2.4],
        ['Column: 2', 7, 2.2],
        ['Column: 3', 3.3, 2.6],
        ['Column: 4', 2, 0.9],
        ['Column: 5', 3.1, 2.2],
        ['Column: 6', 5.3, 1.6],
    ]);

    var options = {
        title: "Debt to Equity Ratio",
        width: 450,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '70%' },
        isStacked: true,
        hAxis: { textPosition: "none" },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart2_values"));
    chart.draw(data, options);
}

document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById('curve_chart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
            ],
            datasets: [
                {
                    label: 'Before',
                    data: [
                        2400, 2800, 3050, 2900, 2650, 2550, 2750, 3100, 3350, 3300,
                        3100, 2750, 2450, 2350, 2300, 2350, 2450, 2600, 2800, 3000,
                        3100, 3050, 2900, 2750, 2850, 3050, 3000, 2700, 2400, 2200
                    ],
                    borderColor: '#87CEFA',
                    backgroundColor: 'rgba(135,206,250,0.3)',
                    fill: true,
                    tension: 0.5,
                    pointRadius: 0
                },
                {
                    label: 'After',
                    data: [
                        1200, 1150, 1150, 1250, 1500, 1550, 1700, 2000, 2050, 1850,
                        1650, 1650, 1850, 1950, 1750, 1200, 800, 750, 1000, 1400,
                        1800, 1900, 1600, 1100, 1000, 1400, 1500, 1400, 1400, 1500
                    ],
                    borderColor: '#0B3D91',
                    backgroundColor: 'rgba(11,61,145,0.3)',
                    fill: true,
                    tension: 0.5,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA)'
                }
            },
            scales: {
                x: {
                    display: true
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });

});