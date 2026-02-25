// template from: https://developers.google.com/chart/interactive/docs/gallery/columnchart
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(function () {
    drawChart();
    drawChart2();
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