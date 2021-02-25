function tegangan(){

    var dt = new Date();
    var hari = dt.getFullYear()+'-'+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
    console.log(hari)
    // dt = ($rootScope.charts.mainChart.labels.push(dt.getDate() + "-" + (dt.getMonth() + 1)));
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        values:'Tegangan',
        data: {
            labels: ["Tegangan"],
            datasets: [{
                label:'Tegangan',
                data: [{}],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)'],
                borderColor: [
                'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
            options: {
                responsive:true,
                title: {
                    display: true,
                    text: 'Chart Tegangan'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                annotation: {
                    annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 5,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 4,
                    label: {
                        enabled: false,
                        content: 'Test label'
                    }
                    }]
                },
                scales: {
                    display:true,
                    xAxes: {
                        type: 'datetime',
                        distribution:'linear'
                        }
                    }
                }
        }
    )

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
        console.log(data)
    }
    function updateScale(chart) {
        chart.options.scales.yAxes[0] = {
            type: 'line'
        };
        chart.update();
    }
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Vrms');
    valueRef.on('value', function(snapshot) {
        // removeData(myChart);
        updateScale(myChart);
        addData(myChart,hari,snapshot.val());
        console.log(myChart)
    });

}
    window.onload = function(){
        tegangan();
    }

