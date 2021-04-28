function tegangan(){

    var dt = new Date();
    var hari = dt.getFullYear()+'-'+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
    console.log(dt)
    // dt = ($rootScope.charts.mainChart.labels.push(dt.getDate() + "-" + (dt.getMonth() + 1)));
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        values:'Tegangan',
        data: {
            labels: [hari],
            datasets: [{
                label: "Tegangan",
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
                }
            }
    })

    function addData(chart, label, data) {
        var today = new Date();
        var time = today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        myChart.data.labels.push(time);
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
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Vrms').limitToLast(1);
    var today = new Date();
    var time = today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    valueRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            updateScale(myChart);
            addData(myChart,time,childData);
            console.log(myChart)
        })
    });

}
    window.onload = function(){
        tegangan();
    }

