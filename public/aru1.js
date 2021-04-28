function arus(){
    var dt = new Date();
    var hari = dt.getFullYear()+'-'+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [hari],
            datasets: [{
                label:'Arus',
                data:[{}],
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
                    text: 'Chart Arus'
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
    }
    )

    function addData(chart, label, data) {
        var today = new Date();
        var time = today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        chart.data.labels.push(time);
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
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Irms').limitToLast(10);
    valueRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var arusdata = childSnapshot.val();
        updateScale(myChart);
        addData(myChart,hari,arusdata);
        console.log(myChart)
        })
    });

}
    window.onload = function(){
        arus();
    }

