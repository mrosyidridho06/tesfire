function cospi(){

    var dt = new Date();
    var hari = dt.getFullYear()+'-'+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        values:'Cospi',
        data: {
            labels: [hari],
            datasets: [{
                label:'Cospi',
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
                    text: 'Chart Cospi'
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
            //     scales: {
            //         display:true,
            //         xAxes: [{
            //             type: 'time',
            //             // realtime: {
            //             //     duration: 20000,
            //             //     refresh: 1000,
            //             //     delay: 1000,
            //             //     onRefresh: onRefresh
            //             // }
            //         }]
            // }
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
    // function onRefresh(chart,label, data) {
    //     chart.config.data.datasets.forEach(function(dataset) {
    //         dataset.data.push({
    //             x: Date.now(),
    //             y: []
    //         });
    //     });
    // }
    var valueRef = firebase.database().ref('PowerMetering/Home-Monitoring').child('Power-Factor').limitToLast(1);
	var dt = new Date();
    var date = dt.getFullYear()+'-'+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()
    valueRef.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            updateScale(myChart);
            addData(myChart,hari,childData);
            console.log(myChart)
        })
    });

}
    window.onload = function(){
        cospi();
    }

