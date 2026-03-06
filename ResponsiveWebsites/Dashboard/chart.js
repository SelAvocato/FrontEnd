const lineChart = document.getElementById('lineChart');
const labels = ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7',
    'Aug 8', 'Aug 9', 'Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14',
    'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20', 'Aug 21',
    'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28',
    'Aug 29', 'Aug 30', 'Aug 31'];
const data = {
    labels: labels,
    datasets: [{
        label: 'earnings',
        data: [12, 19, 19, 23, 23, 11, 11, 2, 2, 24,
            24, 13, 28, 2, 10, 10, 29, 6, 6, 21,
            32, 32, 15, 15, 20, 20, 4, 4, 24, 13, 28
        ],
        fill: true,
        backgroundColor: 'rgba(150, 243, 0, 0.16)',
        borderColor: '#53AF71',
        tension: 0.1,
    }, {
        label: 'Sales',
        data: [6, 12, 13, 16, 16, 7, 7, 2, 2, 16,
            13, 13, 23, 2, 7, 7, 23, 5, 5, 16,
            26, 26, 7, 7, 16, 16, 4, 4, 18, 7, 13
        ],
        fill: true,
        backgroundColor: 'rgba(0, 24, 243, 0.07)',
        borderColor: '#4C8EF2',
        tension: 0.1
    }]
};

const options = {
    interactions:{
        mode: 'index',
        intersect: false
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            usePointStyle: true, 
            callbacks: {
                labelPointStyle: function(context){
                    return {
                        pointStyle: 'circle',
                        rotation: 0
                    }
                }
            },
            labelColor: function(context){
                return{
                    borderColor: 'blue',
                    backgroundColor: 'blue'
                }
            }
        }
    },
    scales: {
        x: {
            ticks: {
                display: false
            },
            grid: {
                display: false
            }
        }
    },
    maintainAspectRation: false
}

new Chart(lineChart, {
    type: 'line',
    data: data,
    options: options,
});

const ctx = document.getElementById('donutChart');

const donutData = {
    labels: [
        'United States',
        'Romania',
        'Germany',
        'India',
        'United Kingdom',
        'Other'
    ],
    datasets: [{
        label: 'Users',
        data: [6216, 1531, 1158, 985, 543, 12654],
        backgroundColor: [
            '#4A90E2',
            '#9B59B6',
            '#E66BB5',
            '#E74C3C',
            '#F1C40F',
            '#111111'
        ],
        hoverOffset: 10
    }]
};

const config = {
    type: 'doughnut',
    data: donutData,
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.label + ': ' + context.raw.toLocaleString();
                    }
                }
            }
        },
        layout: {
            padding: 3
        }
    }
};

new Chart(ctx, config);
